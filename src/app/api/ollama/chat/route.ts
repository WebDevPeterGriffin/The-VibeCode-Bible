import { NextRequest } from "next/server";

const OLLAMA_BASE = "http://localhost:11434";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const res = await fetch(`${OLLAMA_BASE}/api/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        if (!res.ok || !res.body) {
            return new Response("Ollama request failed", { status: 502 });
        }

        // Stream the response back to the client
        return new Response(res.body, {
            headers: {
                "Content-Type": "application/x-ndjson",
                "Transfer-Encoding": "chunked",
            },
        });
    } catch {
        return new Response("Cannot reach Ollama", { status: 502 });
    }
}
