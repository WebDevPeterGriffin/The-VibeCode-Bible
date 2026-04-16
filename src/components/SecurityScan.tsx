"use client";

import { useState, useRef, useEffect } from "react";
import { Shield, Loader2, AlertTriangle, CheckCircle, Search, ExternalLink } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ScanStatus = "idle" | "fetching" | "analyzing" | "done" | "error";

export default function SecurityScan() {
    const [repoUrl, setRepoUrl] = useState("");
    const [status, setStatus] = useState<ScanStatus>("idle");
    const [report, setReport] = useState("");
    const [error, setError] = useState("");
    const resultsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (report && resultsRef.current) {
            resultsRef.current.scrollTop = resultsRef.current.scrollHeight;
        }
    }, [report]);

    async function handleScan() {
        const trimmed = repoUrl.trim();
        if (!trimmed) return;

        setReport("");
        setError("");
        setStatus("fetching");

        // Quick visual feedback before fetch
        await new Promise((r) => setTimeout(r, 400));
        setStatus("analyzing");

        try {
            const res = await fetch("/api/security-scan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ repoUrl: trimmed }),
            });

            const data = await res.json();

            if (!res.ok) {
                setError(data.error || "Scan failed");
                setStatus("error");
                return;
            }

            setReport(data.report);
            setStatus("done");
        } catch {
            setError("Network error — could not reach the server.");
            setStatus("error");
        }
    }

    const isScanning = status === "fetching" || status === "analyzing";

    return (
        <div className="flex flex-col w-full h-full min-h-0 bg-[var(--color-background)]">
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-3 border-b border-white/[0.04]">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield size={16} className="text-primary" />
                </div>
                <div>
                    <h2 className="text-sm font-semibold tracking-tight">Quick Security Audit</h2>
                    <p className="text-[10px] text-foreground/30">Scan public repos for hardcoded secrets</p>
                </div>
            </div>

            {/* Input Area */}
            <div className="px-5 py-4 border-b border-white/[0.04]">
                <label className="text-[10px] font-semibold text-foreground/40 uppercase tracking-[0.15em] mb-2 block">
                    GitHub Repository URL
                </label>
                <div className="flex items-center gap-2">
                    <div className="flex-1 flex items-center gap-2 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 focus-within:border-primary/30 focus-within:shadow-[0_0_20px_-6px_rgba(124,58,237,0.15)] transition-all duration-300">
                        <ExternalLink size={14} className="text-foreground/25 shrink-0" />
                        <input
                            type="text"
                            value={repoUrl}
                            onChange={(e) => setRepoUrl(e.target.value)}
                            onKeyDown={(e) => { if (e.key === "Enter" && !isScanning) handleScan(); }}
                            placeholder="https://github.com/owner/repo"
                            disabled={isScanning}
                            className="flex-1 bg-transparent text-sm text-foreground/90 placeholder:text-foreground/25 outline-none disabled:opacity-40 font-mono"
                        />
                    </div>
                    <button
                        onClick={handleScan}
                        disabled={!repoUrl.trim() || isScanning}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer disabled:cursor-not-allowed disabled:opacity-30 bg-primary/15 border-primary/25 text-primary hover:bg-primary/25 hover:border-primary/40 hover:shadow-[0_0_20px_-4px_rgba(124,58,237,0.25)] active:scale-[0.97]"
                    >
                        {isScanning ? (
                            <Loader2 size={14} className="animate-spin" />
                        ) : (
                            <Search size={14} />
                        )}
                        {isScanning ? "Scanning…" : "Scan"}
                    </button>
                </div>

                {/* Scan targets info */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {[".env.example", "next.config.js", "supabase.ts", "stripe.ts", "db.ts", "config.ts"].map((f) => (
                        <span
                            key={f}
                            className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-white/[0.03] border border-white/[0.06] text-foreground/30"
                        >
                            {f}
                        </span>
                    ))}
                </div>
            </div>

            {/* Results Area — Terminal Style */}
            <div ref={resultsRef} className="flex-1 overflow-y-auto custom-scrollbar px-5 py-5 min-h-0">
                {status === "idle" && (
                    <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(124,58,237,0.2)]">
                            <Shield size={28} className="text-primary" />
                        </div>
                        <div>
                            <p className="text-foreground/70 font-medium mb-1">Paste a public GitHub repo URL</p>
                            <p className="text-xs text-foreground/30 max-w-sm">
                                Scans for hardcoded API keys, secrets, database credentials, and tokens in common config files.
                            </p>
                        </div>
                    </div>
                )}

                {/* Loading State */}
                {isScanning && (
                    <div className="font-mono text-xs space-y-2 animate-[fadeIn_200ms_ease-out]">
                        <div className="flex items-center gap-2 text-primary/80">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            <span>Initializing security scan…</span>
                        </div>
                        {status === "fetching" && (
                            <div className="flex items-center gap-2 text-foreground/40">
                                <Loader2 size={12} className="animate-spin" />
                                <span>Fetching files from repository…</span>
                            </div>
                        )}
                        {status === "analyzing" && (
                            <>
                                <div className="flex items-center gap-2 text-green-400/70">
                                    <CheckCircle size={12} />
                                    <span>Files fetched successfully</span>
                                </div>
                                <div className="flex items-center gap-2 text-foreground/40">
                                    <Loader2 size={12} className="animate-spin" />
                                    <span>Analyzing code for secrets…</span>
                                </div>
                                <div className="mt-4 h-1 rounded-full bg-white/[0.04] overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-primary/60 to-primary/30 rounded-full animate-[scan_2s_ease-in-out_infinite]" style={{ width: "60%" }} />
                                </div>
                            </>
                        )}
                    </div>
                )}

                {/* Error State */}
                {status === "error" && (
                    <div className="bg-red-500/5 border border-red-500/15 rounded-xl p-4 flex items-start gap-3 animate-[fadeIn_200ms_ease-out]">
                        <AlertTriangle size={16} className="text-red-400 shrink-0 mt-0.5" />
                        <div>
                            <p className="text-sm font-medium text-red-400">Scan Failed</p>
                            <p className="text-xs text-red-400/60 mt-1">{error}</p>
                        </div>
                    </div>
                )}

                {/* Report Output */}
                {status === "done" && report && (
                    <div className="animate-[fadeIn_300ms_ease-out]">
                        {/* Terminal chrome header */}
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/[0.02] border border-white/[0.06] rounded-t-xl border-b-0">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                            </div>
                            <span className="text-[10px] font-mono text-foreground/25 ml-2">security-audit-report</span>
                        </div>

                        {/* Terminal body */}
                        <div className="bg-black/30 border border-white/[0.06] rounded-b-xl p-5 font-mono text-xs leading-relaxed overflow-x-auto">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h2: ({ children, ...props }) => (
                                        <h2 {...props} className="text-base font-bold text-primary mt-6 mb-3 first:mt-0 tracking-tight font-sans">{children}</h2>
                                    ),
                                    h3: ({ children, ...props }) => (
                                        <h3 {...props} className="text-sm font-semibold text-foreground/80 mt-5 mb-2 font-sans">{children}</h3>
                                    ),
                                    p: ({ children, ...props }) => (
                                        <p {...props} className="mb-3 last:mb-0 text-foreground/60 leading-relaxed">{children}</p>
                                    ),
                                    strong: ({ children, ...props }) => {
                                        const text = String(children).toUpperCase();
                                        let colorClass = "text-foreground/90";
                                        if (text.includes("CRITICAL")) colorClass = "text-red-400";
                                        else if (text.includes("HIGH")) colorClass = "text-orange-400";
                                        else if (text.includes("MEDIUM")) colorClass = "text-yellow-400";
                                        return <strong {...props} className={`font-bold ${colorClass}`}>{children}</strong>;
                                    },
                                    code: ({ children, ...props }) => (
                                        <code {...props} className="bg-white/[0.06] text-primary/80 rounded px-1.5 py-0.5 text-[0.9em]">{children}</code>
                                    ),
                                    ul: ({ children, ...props }) => (
                                        <ul {...props} className="list-disc list-outside ml-4 mb-3 space-y-1 text-foreground/60">{children}</ul>
                                    ),
                                    ol: ({ children, ...props }) => (
                                        <ol {...props} className="list-decimal list-outside ml-4 mb-3 space-y-1 text-foreground/60">{children}</ol>
                                    ),
                                    li: ({ children, ...props }) => (
                                        <li {...props} className="leading-relaxed">{children}</li>
                                    ),
                                    hr: (props) => (
                                        <hr {...props} className="border-white/[0.06] my-4" />
                                    ),
                                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                    table: ({ node: _node, ...props }) => (
                                        <div className="overflow-x-auto my-3">
                                            <table {...props} className="w-full text-left border-collapse" />
                                        </div>
                                    ),
                                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                    th: ({ node: _node, ...props }) => (
                                        <th {...props} className="border border-white/[0.08] px-3 py-1.5 bg-white/[0.03] text-foreground/60 font-semibold" />
                                    ),
                                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                                    td: ({ node: _node, ...props }) => (
                                        <td {...props} className="border border-white/[0.08] px-3 py-1.5 text-foreground/50" />
                                    ),
                                }}
                            >
                                {report}
                            </ReactMarkdown>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
