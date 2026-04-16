import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const TARGET_FILES = [
    ".env.example",
    "next.config.js",
    "src/lib/supabase.ts",
    "src/lib/stripe.ts",
    "utils/db.ts",
    "config.ts",
];

const SYSTEM_PROMPT = `You are a security auditor. Analyze the following code files for hardcoded secrets: API keys, passwords, JWT secrets, database credentials, private tokens. For each finding return: file name, secret type, severity (CRITICAL/HIGH/MEDIUM), risk description, and fix. Format as a clean report. If nothing found, say so.`;

function parseGitHubUrl(url: string): { owner: string; repo: string; branch: string } | null {
    try {
        const cleaned = url.trim().replace(/\/+$/, "").replace(/\.git$/, "");
        const urlObj = new URL(cleaned);
        if (urlObj.hostname !== "github.com") return null;
        const parts = urlObj.pathname.split("/").filter(Boolean);
        if (parts.length < 2) return null;
        return { owner: parts[0], repo: parts[1], branch: "main" };
    } catch {
        return null;
    }
}

async function fetchFileContent(owner: string, repo: string, branch: string, filePath: string): Promise<string | null> {
    const urls = [
        `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${filePath}`,
        `https://raw.githubusercontent.com/${owner}/${repo}/master/${filePath}`,
    ];

    for (const url of urls) {
        try {
            const res = await fetch(url, { cache: "no-store" });
            if (res.ok) {
                return await res.text();
            }
        } catch {
            // skip
        }
    }
    return null;
}

export async function POST(req: NextRequest) {
    try {
        const { repoUrl } = await req.json();

        if (!repoUrl || typeof repoUrl !== "string") {
            return NextResponse.json({ error: "Missing or invalid repo URL" }, { status: 400 });
        }

        const parsed = parseGitHubUrl(repoUrl);
        if (!parsed) {
            return NextResponse.json({ error: "Invalid GitHub URL. Use format: https://github.com/owner/repo" }, { status: 400 });
        }

        const { owner, repo, branch } = parsed;

        // Fetch all target files in parallel
        const results = await Promise.all(
            TARGET_FILES.map(async (filePath) => {
                const content = await fetchFileContent(owner, repo, branch, filePath);
                return { filePath, content };
            })
        );

        const foundFiles = results.filter((r) => r.content !== null);

        if (foundFiles.length === 0) {
            return NextResponse.json({
                report: `## Scan Complete — ${owner}/${repo}\n\nNo target files found in this repository. Checked:\n${TARGET_FILES.map((f) => `- \`${f}\``).join("\n")}\n\nThis may mean the repo uses a different file structure, or the repository is private.`,
            });
        }

        // Build the code context for Claude
        const codeContext = foundFiles
            .map((f) => `--- FILE: ${f.filePath} ---\n${f.content}\n--- END FILE ---`)
            .join("\n\n");

        const apiKey = process.env.ANTHROPIC_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "ANTHROPIC_API_KEY not configured on server" }, { status: 500 });
        }

        const client = new Anthropic({ apiKey });

        const message = await client.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens: 2048,
            messages: [
                {
                    role: "user",
                    content: `Repository: ${owner}/${repo}\nFiles found: ${foundFiles.map((f) => f.filePath).join(", ")}\nFiles not found (skipped): ${results.filter((r) => r.content === null).map((r) => r.filePath).join(", ") || "none"}\n\n${codeContext}`,
                },
            ],
            system: SYSTEM_PROMPT,
        });

        const reportText = message.content
            .filter((block) => block.type === "text")
            .map((block) => {
                if (block.type === "text") return block.text;
                return "";
            })
            .join("\n");

        return NextResponse.json({
            report: `## Security Audit — ${owner}/${repo}\n**Files scanned:** ${foundFiles.map((f) => f.filePath).join(", ")}\n**Files skipped (404):** ${results.filter((r) => r.content === null).map((r) => r.filePath).join(", ") || "none"}\n\n---\n\n${reportText}`,
        });
    } catch (err) {
        console.error("Security scan error:", err);
        return NextResponse.json({ error: "Internal server error during scan" }, { status: 500 });
    }
}
