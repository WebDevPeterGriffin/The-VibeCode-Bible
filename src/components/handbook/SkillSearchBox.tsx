"use client";

import { useState } from "react";
import { Search, Copy, Check, File } from "lucide-react";
import { getSkillContent } from "@/app/actions/skills";
import { SkillEntry } from "@/app/ai-agents-and-skills/page";

export default function SkillSearchBox({ skills, label }: { skills: SkillEntry[], label: string }) {
    const [query, setQuery] = useState("");
    const [isCopied, setIsCopied] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<string | null>(null);

    const filtered = query.trim() === ""
        ? []
        : skills.filter(s =>
            s.filename.toLowerCase().includes(query.toLowerCase()) ||
            s.path.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 15);

    const handleCopy = async (path: string) => {
        setIsLoading(path);
        const content = await getSkillContent(path);
        if (content) {
            await navigator.clipboard.writeText(content);
            setIsCopied(path);
            setTimeout(() => setIsCopied(null), 2000);
        }
        setIsLoading(null);
    };

    return (
        <div className="mt-8 border border-white/[0.08] rounded-xl bg-white/[0.02] backdrop-blur-sm p-4">
            <h3 className="text-lg font-medium mb-4 flex items-center justify-between">
                <span>Find & Copy {label}</span>
                <span className="text-xs font-mono text-foreground/40 bg-muted/40 px-2 py-1 rounded">{skills.length} available</span>
            </h3>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                <input
                    type="text"
                    placeholder="Search by filename..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    className="w-full bg-background/80 border border-white/[0.08] rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-200 placeholder:text-foreground/30"
                />
            </div>

            {query.trim() !== "" && (
                <div className="space-y-2 mt-4">
                    {filtered.length === 0 && <div className="text-sm text-foreground/50 text-center py-4">No skills found matching &quot;{query}&quot;</div>}
                    {filtered.map(s => (
                        <div key={s.path} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-white/[0.02] border border-white/[0.06] rounded-lg hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200">
                            <div className="flex items-start gap-3 overflow-hidden">
                                <File className="w-4 h-4 text-foreground/40 mt-0.5 flex-shrink-0" />
                                <div className="min-w-0">
                                    <div className="font-mono text-sm font-medium truncate" title={s.filename}>{s.filename}</div>
                                    <div className="text-xs text-foreground/50 truncate" title={s.path}>{s.path}</div>
                                </div>
                            </div>
                            <button
                                onClick={() => handleCopy(s.path)}
                                disabled={isLoading === s.path}
                                className={`flex items-center justify-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex-shrink-0 ${isCopied === s.path ? 'bg-green-500/20 text-green-500' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
                            >
                                {isLoading === s.path ? (
                                    <span className="animate-pulse">Loading...</span>
                                ) : isCopied === s.path ? (
                                    <><Check className="w-3.5 h-3.5" /> Copied</>
                                ) : (
                                    <><Copy className="w-3.5 h-3.5" /> Copy Content</>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
