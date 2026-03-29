import { Copy, Terminal, Code, AlertCircle } from 'lucide-react';
import { useState } from 'react';

interface Props {
    title: string;
    description: string;
    content: string;
    isStreaming: boolean;
    hasStarted: boolean;
    error?: string;
    icon?: 'terminal' | 'code';
}

export default function StreamingOutput({ title, description, content, isStreaming, hasStarted, error, icon = 'terminal' }: Props) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (!content) return;
        navigator.clipboard.writeText(content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex flex-col h-full border border-white/10 rounded-xl overflow-hidden bg-black/20 relative">
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2.5">
                    {icon === 'terminal' ? (
                        <Terminal className="w-4 h-4 text-foreground/50" />
                    ) : (
                        <Code className="w-4 h-4 text-primary/80" />
                    )}
                    <div>
                        <h3 className="text-sm font-semibold">{title}</h3>
                        <p className="text-[10px] text-foreground/40 uppercase tracking-wider">{description}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {isStreaming && (
                        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] text-primary animate-pulse font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            Streaming
                        </div>
                    )}
                    <button
                        onClick={handleCopy}
                        disabled={!content}
                        className="p-1.5 text-foreground/40 hover:text-foreground hover:bg-white/5 rounded-md transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Copy to clipboard"
                    >
                        <Copy className={`w-3.5 h-3.5 ${copied ? 'text-green-400' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 scrollbar-thin">
                {!hasStarted && !error && (
                    <div className="h-full flex flex-col items-center justify-center text-foreground/30 gap-3">
                        {icon === 'code' ? <Code className="w-8 h-8 opacity-20" /> : <Terminal className="w-8 h-8 opacity-20" />}
                        <p className="text-sm font-medium">Output will appear here</p>
                    </div>
                )}

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-md p-3 flex gap-3 text-red-400 text-sm">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <p className="leading-relaxed">{error}</p>
                    </div>
                )}

                {hasStarted && !error && (
                    <div className="prose prose-invert prose-sm max-w-none font-sans text-foreground/90 whitespace-pre-wrap leading-loose">
                        {content}
                        {isStreaming && (
                            <span className="inline-block w-2 h-4 bg-primary/80 ml-1 animate-pulse align-middle" />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
