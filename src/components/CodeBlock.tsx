"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ code, language }: { code: string, language?: string }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group my-6 overflow-hidden rounded-lg border border-white/[0.06] bg-zinc-900/80 shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-white/[0.04] text-[10px] text-foreground/30 uppercase tracking-[0.15em]">
                <span>{language || 'text'}</span>
                <button
                    onClick={copyToClipboard}
                    className="hover:text-foreground/60 transition-colors duration-200 flex items-center justify-center p-1 rounded-md cursor-pointer"
                    aria-label="Copy code"
                >
                    {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
                </button>
            </div>
            <div className="text-sm">
                <SyntaxHighlighter
                    language={language || 'text'}
                    style={vscDarkPlus}
                    customStyle={{ margin: 0, padding: '1rem', background: 'transparent', fontSize: '13px' }}
                    showLineNumbers={false}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
}
