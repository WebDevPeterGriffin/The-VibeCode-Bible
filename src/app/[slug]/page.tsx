import { content, Block } from '@/data/content';
import { notFound } from 'next/navigation';
import CallOut from '@/components/CallOut';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';
import ProgressUpdater from './ProgressUpdater';
import ReadAloud from '@/components/ReadAloud';

export function generateStaticParams() {
    return content.map((section) => ({
        slug: section.slug,
    }));
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
                className="text-primary hover:underline font-medium"
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

function renderBlock(block: Block, index: number) {
    switch (block.type) {
        case 'p':
            return <p key={index} className="mb-4 leading-relaxed text-foreground/90">{renderText(block.text)}</p>;
        case 'h2':
            return <h2 key={index} className="text-2xl font-bold tracking-tight mt-10 mb-4 border-b border-border/50 pb-2">{block.text}</h2>;
        case 'h3':
            return <h3 key={index} className="text-xl font-semibold tracking-tight mt-8 mb-3">{block.text}</h3>;
        case 'ul':
            return (
                <ul key={index} className="list-disc list-inside mb-4 space-y-2 text-foreground/90 marker:text-primary/50">
                    {block.items?.map((item, i) => <li key={i}>{renderText(item)}</li>)}
                </ul>
            );
        case 'ol':
            return (
                <ol key={index} className="list-decimal list-inside mb-4 space-y-2 text-foreground/90 marker:text-primary/50">
                    {block.items?.map((item, i) => <li key={i}>{renderText(item)}</li>)}
                </ol>
            );
        case 'callout':
            return <CallOut key={index} variant={block.variant!} text={block.text!} />;
        case 'code':
            return <CodeBlock key={index} language={block.language!} code={block.code!} />;
        default:
            return null;
    }
}

export default function SectionPage({ params }: { params: { slug: string } }) {
    const sectionIndex = content.findIndex((s) => s.slug === params.slug);
    const section = content[sectionIndex];

    if (!section) {
        notFound();
    }

    const prevSection = sectionIndex > 0 ? content[sectionIndex - 1] : null;
    const nextSection = sectionIndex < content.length - 1 ? content[sectionIndex + 1] : null;

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
            <ProgressUpdater slug={section.slug} />

            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                    <div className="text-primary text-sm font-medium tracking-wider uppercase mb-2">Section {sectionIndex + 1}</div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{section.title.replace(/^\d+\.\s*/, '')}</h1>
                </div>
                <ReadAloud section={section} />
            </div>

            <div className="max-w-none">
                {section.blocks.map((block, i) => renderBlock(block, i))}
            </div>

            <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row gap-4 justify-between">
                {prevSection ? (
                    <Link href={`/${prevSection.slug}`} className="group flex flex-col items-start p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors sm:w-1/2">
                        <span className="text-xs text-foreground/50 uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">Previous</span>
                        <span className="font-medium text-foreground/90">{prevSection.title}</span>
                    </Link>
                ) : <div className="hidden sm:block sm:w-1/2" />}

                {nextSection ? (
                    <Link href={`/${nextSection.slug}`} className="group flex flex-col items-end p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors sm:w-1/2 text-right">
                        <span className="text-xs text-foreground/50 uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">Next</span>
                        <span className="font-medium text-foreground/90">{nextSection.title}</span>
                    </Link>
                ) : (
                    <Link href="/" className="group flex flex-col items-end p-4 rounded-lg border border-border hover:bg-muted/30 transition-colors sm:w-1/2 text-right">
                        <span className="text-xs text-foreground/50 uppercase tracking-wider mb-1 group-hover:text-primary transition-colors">Finish</span>
                        <span className="font-medium text-foreground/90">Back to Home</span>
                    </Link>
                )}
            </div>
        </div>
    );
}
