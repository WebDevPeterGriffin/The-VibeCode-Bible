"use client";

import { Search, Sparkles, Zap, Bot, BookText, AtSign, Layout, Server, FileText, ExternalLink, ArrowRight, Globe, CheckCircle2, AlertCircle, BarChart3 } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';

interface GeoCommand {
    cmd: string;
    icon: typeof Search;
    color: string;
    short: string;
    detail: string;
}

const COMMANDS: GeoCommand[] = [
    {
        cmd: 'audit',
        icon: BarChart3,
        color: 'text-violet-400',
        short: 'Full GEO + SEO audit',
        detail: 'Runs 5 parallel sub-agents — citability, platforms, technical, content, schema. Outputs a composite 0–100 GEO Score with prioritized actions.'
    },
    {
        cmd: 'quick',
        icon: Zap,
        color: 'text-yellow-400',
        short: '60-second visibility snapshot',
        detail: 'Fast read on whether your site is AI-search ready. Good for the first look or rapid checks across multiple sites.'
    },
    {
        cmd: 'citability',
        icon: Sparkles,
        color: 'text-pink-400',
        short: 'Score for AI citation readiness',
        detail: 'Identifies which passages on your page AI models are most likely to quote. Optimal range: 134–167 words per passage.'
    },
    {
        cmd: 'crawlers',
        icon: Bot,
        color: 'text-emerald-400',
        short: 'Check AI crawler access',
        detail: 'Verifies your robots.txt allows the 14+ bots that matter — GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bingbot, etc.'
    },
    {
        cmd: 'llmstxt',
        icon: BookText,
        color: 'text-sky-400',
        short: 'Analyze or generate llms.txt',
        detail: 'The new standard file that helps AI systems understand your site. Validates an existing one or generates a fresh one from your sitemap.'
    },
    {
        cmd: 'brands',
        icon: AtSign,
        color: 'text-orange-400',
        short: 'Brand mention scan',
        detail: 'Scans YouTube, Reddit, Wikipedia, LinkedIn and 7+ platforms for mentions of your brand. AI models lean on these signals heavily.'
    },
    {
        cmd: 'platforms',
        icon: Layout,
        color: 'text-cyan-400',
        short: 'Platform-specific optimization',
        detail: 'Tailored readiness check for ChatGPT search, Perplexity, Google AI Overviews, Claude, Gemini, Bing Copilot.'
    },
    {
        cmd: 'schema',
        icon: Layout,
        color: 'text-indigo-400',
        short: 'Structured data analysis',
        detail: 'Detects existing JSON-LD, validates it, generates missing markup. Templates for Organization, LocalBusiness, Article, Product, Software.'
    },
    {
        cmd: 'technical',
        icon: Server,
        color: 'text-blue-400',
        short: 'Technical SEO audit',
        detail: 'Crawlability, indexability, security, performance, SSR. Plus the GEO-specific checks traditional SEO tools miss.'
    },
    {
        cmd: 'content',
        icon: FileText,
        color: 'text-amber-400',
        short: 'Content quality + E-E-A-T',
        detail: 'Experience, Expertise, Authoritativeness, Trustworthiness. The exact framework AI models use to decide whether to cite you.'
    },
    {
        cmd: 'report',
        icon: FileText,
        color: 'text-green-400',
        short: 'Client-ready markdown report',
        detail: 'Combines every audit dimension into one polished document. Drop it straight into a client doc or email.'
    },
    {
        cmd: 'report-pdf',
        icon: FileText,
        color: 'text-rose-400',
        short: 'Styled PDF with charts',
        detail: 'Score gauges, bar charts, color-coded tables. A deliverable you can actually charge for.'
    }
];

export default function GeoSeoPage() {
    return (
        <div className="w-full max-w-3xl mx-auto py-12 px-6">
            {/* Header */}
            <div className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <Search size={14} className="text-foreground/30" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/30">
                        Agent Toolkit · GEO + SEO
                    </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight mb-3 bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                    GEO + SEO for Claude Code
                </h1>
                <p className="text-foreground/55 leading-relaxed mb-4">
                    A Claude Code skill that audits any live website for both classic SEO and the newer
                    Generative Engine Optimization — how visible you are to ChatGPT, Claude, Perplexity,
                    Gemini, and Google AI Overviews. One install, twelve commands, a 0–100 GEO score on any URL.
                </p>
                <a
                    href="https://github.com/zubair-trabzada/geo-seo-claude"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full border border-white/[0.08] bg-white/[0.03] text-foreground/60 hover:text-foreground/90 hover:border-white/[0.16] transition-all duration-200"
                >
                    <ExternalLink size={12} />
                    zubair-trabzada/geo-seo-claude
                </a>
            </div>

            {/* Why GEO */}
            <section className="mb-10 bg-gradient-to-br from-emerald-500/[0.04] to-violet-500/[0.04] border border-white/[0.06] rounded-xl p-5">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-400 mb-2">
                    Why this exists
                </div>
                <p className="text-[14.5px] text-foreground/75 leading-relaxed">
                    AI search is eating traditional search. AI-referred traffic converts at <strong className="text-white">4.4× the rate</strong> of organic search, yet only 23% of marketers
                    invest in optimizing for it. This skill closes that gap — it tells you what AI engines see when they look at your site,
                    and exactly what to fix to get cited.
                </p>
            </section>

            {/* Install */}
            <section className="mb-10">
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/40 mb-3">
                    Install — one command
                </h2>
                <CodeBlock
                    code={`curl -fsSL https://raw.githubusercontent.com/zubair-trabzada/geo-seo-claude/main/install.sh | bash`}
                    language="bash"
                />
                <p className="text-[13px] text-foreground/50 leading-relaxed mt-3">
                    Windows users on Git Bash use <code className="text-[12px] bg-white/[0.05] px-1.5 py-0.5 rounded text-foreground/70">install-win.sh</code> instead.
                    Dependencies land in <code className="text-[12px] bg-white/[0.05] px-1.5 py-0.5 rounded text-foreground/70">~/.claude/skills/geo/.venv/</code> —
                    isolated, your system Python is untouched.
                </p>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[12px]">
                    {['Python 3.8+', 'Claude Code CLI', 'Git', 'Playwright (optional)'].map((req) => (
                        <div key={req} className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-white/[0.03] border border-white/[0.06] text-foreground/55">
                            <CheckCircle2 size={11} className="text-emerald-400/80 shrink-0" />
                            {req}
                        </div>
                    ))}
                </div>
            </section>

            {/* How to use it on your own project */}
            <section className="mb-10">
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/40 mb-3">
                    Using it on your own project
                </h2>
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
                    <p className="text-[14.5px] text-foreground/75 leading-relaxed mb-4">
                        It is <strong className="text-white">URL-based, not project-path-based.</strong> Point it at any live domain — your own,
                        a client&apos;s, even a competitor&apos;s. It crawls the homepage, the sitemap, the robots.txt, and the public pages.
                        Nothing local needs to be wired in.
                    </p>

                    <div className="flex items-center gap-2 mb-3">
                        <Globe size={13} className="text-emerald-400" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/45">
                            Your first audit
                        </span>
                    </div>
                    <CodeBlock
                        code={`# Inside Claude Code, run:
/geo audit https://thegeorge.tech

# Or a 60-second snapshot first:
/geo quick https://thegeorge.tech

# For a client site:
/geo report https://client-domain.com
/geo report-pdf`}
                        language="bash"
                    />

                    <div className="mt-5 grid sm:grid-cols-3 gap-3">
                        {[
                            { label: '1. Run', body: 'You type a slash command with a URL inside Claude Code.' },
                            { label: '2. Crawl', body: 'It fetches the live site, splits work across 5 parallel sub-agents.' },
                            { label: '3. Deliver', body: 'You get a 0–100 GEO Score plus a prioritized fix list — markdown or PDF.' }
                        ].map((step) => (
                            <div key={step.label} className="bg-white/[0.02] border border-white/[0.05] rounded-lg p-3">
                                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-400 mb-1">{step.label}</div>
                                <p className="text-[12.5px] text-foreground/60 leading-relaxed">{step.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commands grid */}
            <section className="mb-10">
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/40 mb-3">
                    The 12 commands
                </h2>
                <p className="text-[13px] text-foreground/50 leading-relaxed mb-4">
                    Run any of these inside Claude Code as <code className="text-[12px] bg-white/[0.05] px-1.5 py-0.5 rounded text-foreground/70">/geo [command] &lt;url&gt;</code>.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                    {COMMANDS.map((c) => {
                        const Icon = c.icon;
                        return (
                            <div
                                key={c.cmd}
                                className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Icon size={14} className={c.color} />
                                    <code className="text-[13px] font-semibold text-foreground/85">/geo {c.cmd}</code>
                                </div>
                                <p className="text-[11.5px] font-semibold text-foreground/60 mb-1">{c.short}</p>
                                <p className="text-[12px] text-foreground/45 leading-relaxed">{c.detail}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Scoring breakdown */}
            <section className="mb-10">
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/40 mb-3">
                    How the GEO Score is weighted
                </h2>
                <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
                    <p className="text-[13px] text-foreground/50 leading-relaxed mb-4">
                        The composite 0–100 GEO Score from <code className="text-[12px] bg-white/[0.05] px-1.5 py-0.5 rounded text-foreground/70">/geo audit</code> rolls up six categories:
                    </p>
                    <div className="space-y-2.5">
                        {[
                            { label: 'AI Citability', weight: 25, color: 'bg-violet-400' },
                            { label: 'Brand Authority', weight: 20, color: 'bg-pink-400' },
                            { label: 'Content Quality (E-E-A-T)', weight: 20, color: 'bg-amber-400' },
                            { label: 'Technical Foundations', weight: 15, color: 'bg-blue-400' },
                            { label: 'Structured Data (Schema)', weight: 10, color: 'bg-indigo-400' },
                            { label: 'Platform Optimization', weight: 10, color: 'bg-emerald-400' }
                        ].map((cat) => (
                            <div key={cat.label} className="flex items-center gap-3">
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-[12.5px] font-medium text-foreground/75">{cat.label}</span>
                                        <span className="text-[11px] font-semibold text-foreground/40">{cat.weight}%</span>
                                    </div>
                                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                                        <div className={`h-full ${cat.color} rounded-full`} style={{ width: `${cat.weight * 3}%` }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Honest expectations */}
            <section className="mb-10">
                <div className="bg-amber-500/[0.06] border border-amber-500/[0.15] rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                        <AlertCircle size={14} className="text-amber-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400">Be realistic</span>
                    </div>
                    <p className="text-[13.5px] text-foreground/70 leading-relaxed">
                        The audit tells you what is wrong and what to fix. It does <strong className="text-white">not</strong> fix anything for you.
                        Acting on a GEO audit takes the same effort as acting on a regular SEO audit — you (or Claude in another session)
                        still need to write better content, ship schema markup, update <code className="text-[12px] bg-white/[0.08] px-1.5 py-0.5 rounded text-foreground/70">robots.txt</code>,
                        and create the <code className="text-[12px] bg-white/[0.08] px-1.5 py-0.5 rounded text-foreground/70">llms.txt</code> the tool drafts.
                    </p>
                </div>
            </section>

            {/* Workflow recommendation */}
            <section className="mb-10">
                <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/40 mb-3">
                    A weekly client workflow
                </h2>
                <div className="space-y-2">
                    {[
                        { num: 1, body: 'Run /geo quick on every active client site — fast pulse check, 60 seconds each.' },
                        { num: 2, body: 'On the lowest-scoring one, run /geo audit for the full breakdown with parallel sub-agents.' },
                        { num: 3, body: 'Pick the top 2 quick wins from the action plan. Implement them in Claude Code that session.' },
                        { num: 4, body: 'Run /geo report-pdf to ship the client a styled progress doc — they see the score move.' },
                        { num: 5, body: 'Next month, /geo compare baseline vs current to show the delta. That is your retainer justification.' }
                    ].map((s) => (
                        <div key={s.num} className="flex gap-3 items-start">
                            <div className="w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                                {s.num}
                            </div>
                            <p className="text-[13.5px] text-foreground/65 leading-relaxed">{s.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer link */}
            <div className="mt-10 pt-6 border-t border-white/[0.05] flex items-center justify-between">
                <p className="text-xs text-foreground/30">
                    Full docs and source on GitHub.
                </p>
                <a
                    href="https://github.com/zubair-trabzada/geo-seo-claude"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/50 hover:text-foreground/80 transition-colors duration-200"
                >
                    Read the README
                    <ArrowRight size={12} />
                </a>
            </div>
        </div>
    );
}
