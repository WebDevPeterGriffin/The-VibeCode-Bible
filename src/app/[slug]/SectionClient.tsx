"use client";

import { Block, Section } from '@/data/types';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CallOut from '@/components/CallOut';
import CodeBlock from '@/components/CodeBlock';
import ReadAloud from '@/components/ReadAloud';
import ProgressUpdater from './ProgressUpdater';

interface SectionClientProps {
    section: Section;
    sectionIndex: number;
    prevSection: { slug: string; title: string } | null;
    nextSection: { slug: string; title: string } | null;
}

function renderText(text: string | undefined) {
    if (!text) return null;

    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;

    let match;
    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        parts.push(
            <a
                key={match.index}
                href={match[2]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary/80 hover:text-primary hover:underline underline-offset-2 font-medium transition-colors duration-200"
            >
                {match[1]}
            </a>
        );
        lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : text;
}

function AnimatedBlock({ children, index }: { children: React.ReactNode; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.15), ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}

function renderBlock(block: Block, index: number, isFirstParagraph: boolean) {
    switch (block.type) {
        case 'p':
            return (
                <AnimatedBlock key={index} index={index}>
                    <p className={`mb-5 leading-[1.8] ${isFirstParagraph ? 'text-lg font-light text-foreground/70' : 'text-foreground/60 text-[15px]'}`}>
                        {renderText(block.text)}
                    </p>
                </AnimatedBlock>
            );
        case 'h2':
            return (
                <AnimatedBlock key={index} index={index}>
                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-4 text-foreground/90">{block.text}</h2>
                </AnimatedBlock>
            );
        case 'h3':
            return (
                <AnimatedBlock key={index} index={index}>
                    <h3 className="text-lg font-semibold tracking-tight mt-8 mb-3 text-foreground/85">{block.text}</h3>
                </AnimatedBlock>
            );
        case 'ul':
            return (
                <AnimatedBlock key={index} index={index}>
                    <ul className="mb-5 space-y-2.5 text-foreground/60 text-[15px]">
                        {block.items?.map((item: string, i: number) => (
                            <li key={i} className="flex gap-2.5 leading-relaxed">
                                <span className="text-primary/40 mt-1.5 text-xs">●</span>
                                <span>{renderText(item)}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedBlock>
            );
        case 'ol':
            return (
                <AnimatedBlock key={index} index={index}>
                    <ol className="mb-5 space-y-2.5 text-foreground/60 text-[15px] counter-reset-none">
                        {block.items?.map((item: string, i: number) => (
                            <li key={i} className="flex gap-2.5 leading-relaxed">
                                <span className="text-primary/40 font-mono text-xs mt-0.5 min-w-[18px]">{i + 1}.</span>
                                <span>{renderText(item)}</span>
                            </li>
                        ))}
                    </ol>
                </AnimatedBlock>
            );
        case 'callout':
            return <CallOut key={index} variant={block.variant!} text={block.text!} index={index} />;
        case 'code':
            return (
                <AnimatedBlock key={index} index={index}>
                    <CodeBlock language={block.language!} code={block.code!} />
                </AnimatedBlock>
            );
        default:
            return null;
    }
}

export default function SectionClient({ section, sectionIndex, prevSection, nextSection }: SectionClientProps) {
    let firstParagraphSeen = false;

    return (
        <div className="pb-20">
            <ProgressUpdater slug={section.slug} />

            {/* Header */}
            <motion.div
                className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-primary/70 font-medium mb-3">
                        Section {String(sectionIndex + 1).padStart(2, '0')}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground/95 leading-[1.1]">
                        {section.title.replace(/^\d+\.\s*/, '')}
                    </h1>
                </div>
                <ReadAloud section={section} />
            </motion.div>

            {/* Content */}
            <div className="max-w-none">
                {section.blocks.map((block, i) => {
                    const isFirstParagraph = block.type === 'p' && !firstParagraphSeen;
                    if (block.type === 'p') firstParagraphSeen = true;
                    return renderBlock(block, i, isFirstParagraph);
                })}
            </div>

            {/* Navigation */}
            <motion.div
                className="mt-20 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row gap-4 justify-between"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                {prevSection ? (
                    <Link href={`/${prevSection.slug}`} className="group flex flex-col items-start p-5 rounded-xl border border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.02] hover:-translate-y-0.5 transition-all duration-300 sm:w-1/2 cursor-pointer">
                        <span className="text-[10px] text-foreground/30 uppercase tracking-[0.15em] mb-1 group-hover:text-primary/60 transition-colors">Previous</span>
                        <span className="font-medium text-foreground/70 text-sm">{prevSection.title}</span>
                    </Link>
                ) : <div className="hidden sm:block sm:w-1/2" />}

                {nextSection ? (
                    <Link href={`/${nextSection.slug}`} className="group flex flex-col items-end p-5 rounded-xl border border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.02] hover:-translate-y-0.5 transition-all duration-300 sm:w-1/2 text-right cursor-pointer">
                        <span className="text-[10px] text-foreground/30 uppercase tracking-[0.15em] mb-1 group-hover:text-primary/60 transition-colors">Next</span>
                        <span className="font-medium text-foreground/70 text-sm">{nextSection.title}</span>
                    </Link>
                ) : (
                    <Link href="/" className="group flex flex-col items-end p-5 rounded-xl border border-white/[0.06] hover:border-white/[0.1] hover:bg-white/[0.02] hover:-translate-y-0.5 transition-all duration-300 sm:w-1/2 text-right cursor-pointer">
                        <span className="text-[10px] text-foreground/30 uppercase tracking-[0.15em] mb-1 group-hover:text-primary/60 transition-colors">Finish</span>
                        <span className="font-medium text-foreground/70 text-sm">Back to Home</span>
                    </Link>
                )}
            </motion.div>
        </div>
    );
}
