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

    const allSections = content.flatMap(c => c.sections);
    const totalSections = allSections.length;
    const completedCount = progress.filter(slug => slug !== 'ai-agents-and-skills' && slug !== 'playground').length;

    return (
        <nav className="w-full md:w-56 shrink-0 flex flex-col md:h-screen md:sticky md:top-0 border-b md:border-b-0 md:border-r border-white/[0.06] bg-background/70">
            <div className="p-5 pb-4">
                <Link href="/" className="font-bold text-lg tracking-tight block text-foreground/90 hover:text-foreground transition-colors duration-200">
                    Vibe Coding
                </Link>
                <p className="text-xs text-foreground/30 mt-0.5">Everything I know.</p>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar px-3 pb-6 hidden md:block">
                <div className="space-y-1">
                    {content.map((category) => (
                        <div key={category.id} className="mb-5">
                            <h3 className="text-[10px] font-semibold text-foreground/25 uppercase tracking-[0.15em] mb-1.5 px-3">
                                {category.title}
                            </h3>
                            <div className="space-y-px">
                                {category.sections.map((section) => {
                                    const isActive = pathname === `/${section.slug}`;
                                    const isRead = progress.includes(section.slug);

                                    return (
                                        <Link
                                            key={section.slug}
                                            href={`/${section.slug}`}
                                            className={`relative flex items-center gap-2.5 px-3 py-1.5 rounded-md transition-all duration-200 text-[13px] cursor-pointer ${isActive
                                                    ? 'bg-primary/[0.08] text-primary font-medium border-l-2 border-primary'
                                                    : 'text-foreground/40 hover:text-foreground/70 hover:bg-white/[0.03] border-l-2 border-transparent'
                                                }`}
                                        >
                                            {/* Progress indicator — thin line */}
                                            <div className={`w-1 h-1 rounded-full transition-colors duration-200 ${isRead ? 'bg-primary/60' : 'bg-foreground/10'
                                                }`} />
                                            <span className="line-clamp-1">{section.title.replace(/^\d+\.\s*/, '')}</span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-3 border-t border-white/[0.04] hidden md:flex flex-col gap-2 mt-auto">
                <Link
                    href="/ai-agents-and-skills"
                    className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-xs font-medium border cursor-pointer ${pathname === '/ai-agents-and-skills'
                            ? 'border-primary/30 bg-primary/10 text-primary shadow-[0_0_16px_rgba(124,58,237,0.1)]'
                            : 'border-white/[0.06] bg-white/[0.02] text-foreground/50 hover:text-primary hover:border-primary/20 hover:bg-primary/[0.05]'
                        }`}
                >
                    AI Agents & Skills
                </Link>
                <Link
                    href="/playground"
                    className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 text-xs font-medium border cursor-pointer ${pathname === '/playground'
                            ? 'border-primary/30 bg-primary/10 text-primary shadow-[0_0_16px_rgba(124,58,237,0.1)]'
                            : 'border-white/[0.06] bg-white/[0.02] text-foreground/50 hover:text-primary hover:border-primary/20 hover:bg-primary/[0.05]'
                        }`}
                >
                    AI Playground
                </Link>
                <div className="text-[10px] text-foreground/20 text-center mt-1">
                    {completedCount} / {totalSections} completed
                </div>
            </div>
        </nav>
    );
}
