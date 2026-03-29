"use client";

import { useState, useEffect, useRef } from 'react';
import { SearchIcon, X } from 'lucide-react';
import { content } from '@/data/content';
import Link from 'next/link';

export default function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen((prev) => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 50);
        } else {
            setQuery('');
        }
    }, [isOpen]);

    const results = query ? content.map(section => {
        const lowerQuery = query.toLowerCase();
        const titleMatch = section.title.toLowerCase().includes(lowerQuery);

        const matchedBlock = section.blocks.find(b =>
            (b.text && b.text.toLowerCase().includes(lowerQuery)) ||
            (b.code && b.code.toLowerCase().includes(lowerQuery)) ||
            (b.items && b.items.some(item => item.toLowerCase().includes(lowerQuery)))
        );

        if (titleMatch || matchedBlock) {
            let previewText = section.blocks.find(b => b.type === 'p')?.text || section.blocks[0]?.text || '';

            if (!titleMatch && matchedBlock) {
                if (matchedBlock.text) previewText = matchedBlock.text;
                else if (matchedBlock.code) previewText = `💻 Code snippet match...`;
                else if (matchedBlock.items) previewText = matchedBlock.items.find(i => i.toLowerCase().includes(lowerQuery)) || '';
            }

            // Highlight the query if it exists in the previewText (simple case-insensitive bolding is too complex for here, 
            // but returning the highly specific matching text block is a massive UX win).
            return { section, previewText };
        }
        return null;
    }).filter((item): item is { section: typeof content[number], previewText: string } => item !== null) : [];

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center justify-between px-3 py-1.5 text-sm text-foreground/60 bg-muted/50 hover:bg-muted border border-border/50 rounded-md transition-colors w-full md:w-64"
            >
                <span className="flex items-center gap-2">
                    <SearchIcon size={14} />
                    Search...
                </span>
                <span className="text-xs opacity-50 border border-border/50 rounded px-1 hidden sm:inline-block">⌘K</span>
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh] px-4 backdrop-blur-sm bg-background/80" onClick={() => setIsOpen(false)}>
                    <div
                        className="w-full max-w-xl bg-background border border-border rounded-xl shadow-2xl overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex items-center px-4 py-3 border-b border-border">
                            <SearchIcon size={18} className="text-foreground/50 mr-3" />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search everything I know..."
                                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-foreground/40"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <button onClick={() => setIsOpen(false)} className="text-foreground/50 hover:text-foreground p-1">
                                <X size={18} />
                            </button>
                        </div>

                        {query && (
                            <div className="max-h-[60vh] overflow-y-auto p-2">
                                {results.length > 0 ? (
                                    results.map((res) => (
                                        <Link
                                            key={res.section.slug}
                                            href={`/${res.section.slug}`}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-3 hover:bg-muted rounded-lg transition-colors text-left"
                                        >
                                            <div className="font-medium text-primary">{res.section.title}</div>
                                            <div className="text-sm text-foreground/60 line-clamp-1 mt-1">
                                                {res.previewText}
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <div className="px-4 py-8 text-center text-foreground/50 text-sm">
                                        No results found for &quot;{query}&quot;
                                    </div>
                                )}
                            </div>
                        )}

                        {!query && <div className="px-4 py-6 text-center text-foreground/40 text-sm">Start typing to search...</div>}
                    </div>
                </div>
            )}
        </>
    );
}
