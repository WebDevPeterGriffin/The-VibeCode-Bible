import { content } from '@/data/content';
import Link from 'next/link';

export default function Home() {
  const firstSection = content[0]?.sections[0];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-4xl font-bold tracking-tight mb-6">This is everything I know.</h1>

      <div className="max-w-none text-foreground/80 leading-relaxed mb-12 space-y-4">
        <p className="text-xl">
          Use it, steal it, ignore it. It&apos;s just my setup and workflow for shipping fast with AI.
        </p>
        <p>
          I got tired of explaining the same &quot;vibe coding&quot; concepts—how to structure prompts, when to use Claude Code vs Antigravity, and what actual files power the workflows. So I wrote it down.
        </p>
      </div>

      <h2 className="text-2xl font-semibold tracking-tight mb-4 border-b border-border/50 pb-2">Contents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {content.flatMap(c => c.sections).map((section) => (
          <Link
            key={section.slug}
            href={`/${section.slug}`}
            className="group block p-5 rounded-xl border border-border bg-muted/20 hover:bg-muted/50 transition-colors"
          >
            <div className="font-medium text-primary group-hover:text-primary/80 transition-colors">{section.title}</div>
            <div className="text-sm text-foreground/60 mt-2 line-clamp-2">
              {section.blocks[0]?.text || "Explore this section."}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex justify-center pb-20">
        <Link
          href={`/${firstSection.slug}`}
          className="px-6 py-3 bg-primary text-background font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/20"
        >
          Start Reading &rarr;
        </Link>
      </div>
    </div>
  );
}
