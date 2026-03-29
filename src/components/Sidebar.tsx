"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { content } from '@/data/content';
import { useEffect, useState } from 'react';

export default function Sidebar() {
    const pathname = usePathname();
    const [progress, setProgress] = useState<string[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('vibe-progress');
        if (saved) {
            setProgress(JSON.parse(saved));
        }
    }, [pathname]);

    return (
        <nav className="w-full md:w-64 shrink-0 flex flex-col md:h-screen md:sticky md:top-0 border-b md:border-b-0 md:border-r border-border bg-background/50 backdrop-blur-sm">
            <div className="p-6 sticky top-0 bg-background/80 md:bg-transparent backdrop-blur-sm z-10 md:z-auto">
                <Link href="/" className="font-bold text-xl tracking-tight block hover:text-primary transition-colors">
                    Vibe Coding
                </Link>
                <p className="text-sm text-foreground/60 md:mt-1">Everything I know.</p>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-6 hidden md:block">
                <div className="space-y-1">
                    {content.filter(s => s.slug !== 'ai-agents-and-skills').map((section) => {
                        const isActive = pathname === `/${section.slug}`;
                        const isRead = progress.includes(section.slug);

                        return (
                            <Link
                                key={section.slug}
                                href={`/${section.slug}`}
                                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all text-sm ${isActive ? 'bg-muted text-primary font-medium' : 'text-foreground/70 hover:bg-muted/50 hover:text-foreground'}`}
                            >
                                <div className={`w-2 h-2 rounded-full border border-current ${isRead ? 'bg-current' : 'opacity-30'}`} />
                                <span className="line-clamp-1">{section.title}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>

            <div className="p-4 border-t border-border/50 hidden md:flex flex-col gap-4 mt-auto">
                <Link
                    href="/ai-agents-and-skills"
                    className={`flex items-center justify-center gap-2 px-3 py-2 rounded-md transition-all text-sm font-medium border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 ${pathname === '/ai-agents-and-skills' ? 'ring-2 ring-primary/50' : ''}`}
                >
                    <span className="line-clamp-1">AI Agents & Skills</span>
                </Link>
                <div className="text-xs text-foreground/40 text-center">
                    {progress.filter(slug => slug !== 'ai-agents-and-skills').length} / {content.filter(s => s.slug !== 'ai-agents-and-skills').length} sections completed
                </div>
            </div>
        </nav>
    );
}
