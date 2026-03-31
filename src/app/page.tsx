"use client";

import { content } from '@/data/content';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useRef } from 'react';

function SectionCard({ section, index }: { section: { slug: string; title: string; blocks: Array<{ text?: string }> }; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
    >
      <Link
        ref={ref}
        href={`/${section.slug}`}
        className="group block p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] transition-all duration-300 cursor-pointer"
      >
        <div className="font-medium text-primary/90 group-hover:text-primary transition-colors duration-200 text-[15px]">
          {section.title}
        </div>
        <div className="text-sm text-foreground/40 mt-2 line-clamp-2 leading-relaxed">
          {section.blocks[0]?.text || "Explore this section."}
        </div>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  const firstSection = content[0]?.sections[0];
  const allSections = content.flatMap(c => c.sections);

  return (
    <div>
      {/* Full Viewport Hero */}
      <div className="relative min-h-[70vh] flex flex-col justify-center -mt-6 md:-mt-10 -mx-6 md:-mx-10 px-6 md:px-10">
        {/* CSS Dot Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(124, 58, 237, 0.3) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden="true"
        />

        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground/95 leading-[1.05]">
            Everything I Know.
          </h1>
          <p className="text-lg md:text-xl font-light text-foreground/50 mt-4 max-w-xl leading-relaxed">
            Use it, steal it, ignore it. My setup and workflow for shipping fast with AI.
          </p>
          <p className="text-sm text-foreground/30 mt-3 max-w-lg leading-relaxed">
            How to structure prompts, when to use Claude Code vs Antigravity, and what actual files power the workflows. Written down so I stop repeating myself.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/20">Scroll</span>
          <ChevronDown className="w-4 h-4 text-foreground/20 animate-bounce-gentle" />
        </motion.div>
      </div>

      {/* Section Cards */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground/25 mb-6">Contents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {allSections.map((section, i) => (
            <SectionCard key={section.slug} section={section} index={i} />
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-16 flex justify-center pb-20"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href={`/${firstSection.slug}`}
          className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 cursor-pointer text-sm"
        >
          Start Reading &rarr;
        </Link>
      </motion.div>
    </div>
  );
}
