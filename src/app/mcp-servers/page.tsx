"use client";

import { useState } from 'react';
import { Plug, Globe, BookOpen, Brain, Sparkles, Network, Terminal, CheckCircle2 } from 'lucide-react';
import CodeBlock from '@/components/CodeBlock';

interface McpServer {
    id: string;
    name: string;
    icon: typeof Globe;
    color: string;
    tagline: string;
    description: string;
    whenToUse: string[];
    installCli: string;
    installJson: string;
    bonus?: { label: string; body: string };
}

const SERVERS: McpServer[] = [
    {
        id: 'playwright',
        name: 'Playwright MCP',
        icon: Globe,
        color: 'sky',
        tagline: 'Real browser control for Claude',
        description:
            'Gives Claude full control of a real Chromium browser. Not a headless simulation — a real window the agent can navigate, click, fill forms, upload files, take screenshots, and scrape from. Exactly like a human would, only without the fatigue or the mistakes.',
        whenToUse: [
            'Automating repetitive browser workflows — logins, form fills, dashboard exports',
            'Running web apps with no public API (Higgsfield, ManyChat, half of SaaS)',
            'Scraping pages that need JavaScript rendering or infinite scroll',
            'Visual regression — screenshots before and after a deploy',
            'Click-through QA of a flow you built before pushing'
        ],
        installCli: 'claude mcp add playwright -- npx @playwright/mcp@latest',
        installJson: `{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}`,
        bonus: {
            label: 'Smoke test prompt',
            body: 'Open https://news.ycombinator.com in the browser. List the top 5 story titles with their points and comment counts as a markdown table. If Claude does this — Playwright is wired up correctly.'
        }
    },
    {
        id: 'context7',
        name: 'Context7',
        icon: BookOpen,
        color: 'emerald',
        tagline: 'Live, up-to-date library docs',
        description:
            'Solves the hallucinated API problem. When Claude does not know the current version of a library, it confidently invents methods that do not exist. Context7 fetches the actual current documentation at request time and feeds it into the conversation.',
        whenToUse: [
            'Stop fighting the agent over outdated API methods that no longer exist',
            'Build against just-released framework versions before the training data catches up',
            'Get the right import paths and signatures on the first try',
            'Reduce the need to manually copy docs into prompts',
            'Especially useful for Next.js, React, Tailwind, Supabase, Stripe, Drizzle, Resend'
        ],
        installCli: 'claude mcp add context7 -- npx -y @upstash/context7-mcp',
        installJson: `{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    }
  }
}`,
        bonus: {
            label: 'The magic phrase',
            body: 'Append "use context7" anywhere in your prompt. The server detects which library you mentioned, pulls live docs, and Claude builds against current reality instead of its training data.'
        }
    },
    {
        id: 'sequential-thinking',
        name: 'Sequential Thinking',
        icon: Brain,
        color: 'violet',
        tagline: 'Structured step-by-step reasoning',
        description:
            'Gives Claude a structured scratchpad for hard problems. Instead of jumping straight to an answer, the model lays out numbered thoughts, revises them as it works, and keeps a visible chain of reasoning you can audit. On easy tasks you will not notice it. On architecture decisions and gnarly bugs the quality jump is real.',
        whenToUse: [
            'Architecture decisions that touch more than one file',
            'Debugging where the cause is not obvious from the stack trace',
            'Migrations — moving from one library or pattern to another',
            'Designing a schema or API contract before any code is written',
            'Code reviews where you want trade-off analysis, not just bug spotting'
        ],
        installCli: 'claude mcp add sequential-thinking -- npx -y @modelcontextprotocol/server-sequential-thinking',
        installJson: `{
  "mcpServers": {
    "sequential-thinking": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  }
}`,
        bonus: {
            label: 'Do not over-use it',
            body: 'The structured thinking eats tokens and slows responses. Save it for prompts where you would otherwise get a confidently-wrong answer. Trivial tasks do not need it.'
        }
    },
    {
        id: 'codex',
        name: 'Codex Plugin',
        icon: Sparkles,
        color: 'amber',
        tagline: 'OpenAI second opinion from inside Claude',
        description:
            'Brings OpenAI models into your Claude Code workflow. You stay in Claude as the driver, but on specific tasks you can hand off to GPT-5 or o1 for a second opinion. Different model, different training, different blind spots — sometimes that is exactly what you need to break a stuck prompt.',
        whenToUse: [
            'Claude has tried three times and the bug is still there — fresh eyes',
            'Architecture decisions where two opinions are better than one',
            'Code review — Claude generates, Codex critiques (or vice versa)',
            'Math, algorithms, and pure reasoning where OpenAI models edge ahead',
            'Comparing style — sometimes one model writes cleaner solutions'
        ],
        installCli: `# Set your OpenAI API key first
export OPENAI_API_KEY=sk-...        # macOS / Linux
$env:OPENAI_API_KEY="sk-..."        # Windows PowerShell

claude mcp add codex -- npx -y codex-mcp`,
        installJson: `{
  "mcpServers": {
    "codex": {
      "command": "npx",
      "args": ["-y", "codex-mcp"],
      "env": {
        "OPENAI_API_KEY": "sk-..."
      }
    }
  }
}`,
        bonus: {
            label: 'Costs real money',
            body: 'This MCP runs on the OpenAI API which means each handoff costs real money. Use it deliberately, not by default. Set a usage cap in your OpenAI dashboard before turning it on.'
        }
    },
    {
        id: 'memory',
        name: 'Knowledge Graph Memory',
        icon: Network,
        color: 'pink',
        tagline: 'Persistent memory across sessions',
        description:
            'The official MCP server that gives Claude persistent memory across sessions. Instead of forgetting everything when the chat ends, it stores facts, entities, and relationships as a knowledge graph Claude can read from and write to in future conversations. This is the upgrade from "I have to re-explain my stack every session" to "Claude already knows."',
        whenToUse: [
            'Your preferred stack and the reasons you chose each piece',
            'Clients and collaborators you work with often, and what they care about',
            'Conventions you have settled on across multiple projects',
            'Decisions you made in past projects — what worked, what did not',
            'Anything you find yourself re-explaining to Claude every session'
        ],
        installCli: 'claude mcp add memory -- npx -y @modelcontextprotocol/server-memory',
        installJson: `{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}`,
        bonus: {
            label: 'Make it a habit, not just a tool',
            body: 'Add to your CLAUDE.md: "At the start of every session, check the knowledge graph for relevant context. At the end, store anything worth remembering." That single line turns the MCP from a passive tool into an active habit.'
        }
    }
];

const COLOR_MAP: Record<string, { ring: string; bg: string; text: string; border: string; glow: string }> = {
    sky: { ring: 'ring-sky-500/30', bg: 'bg-sky-500/10', text: 'text-sky-400', border: 'border-sky-500/20', glow: 'hover:shadow-sky-500/[0.05]' },
    emerald: { ring: 'ring-emerald-500/30', bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20', glow: 'hover:shadow-emerald-500/[0.05]' },
    violet: { ring: 'ring-violet-500/30', bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/20', glow: 'hover:shadow-violet-500/[0.05]' },
    amber: { ring: 'ring-amber-500/30', bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', glow: 'hover:shadow-amber-500/[0.05]' },
    pink: { ring: 'ring-pink-500/30', bg: 'bg-pink-500/10', text: 'text-pink-400', border: 'border-pink-500/20', glow: 'hover:shadow-pink-500/[0.05]' }
};

export default function McpServersPage() {
    const [activeServer, setActiveServer] = useState<string>(SERVERS[0].id);
    const current = SERVERS.find(s => s.id === activeServer)!;
    const colors = COLOR_MAP[current.color];
    const Icon = current.icon;

    return (
        <div className="w-full max-w-3xl mx-auto py-12 px-6">
            {/* Header */}
            <div className="mb-10">
                <div className="flex items-center gap-2 mb-3">
                    <Plug size={14} className="text-foreground/30" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/30">
                        Agent Toolkit · MCP
                    </span>
                </div>
                <h1 className="text-3xl font-bold tracking-tight mb-3 bg-gradient-to-r from-sky-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                    MCP Servers
                </h1>
                <p className="text-foreground/55 leading-relaxed">
                    The Model Context Protocol is the standard that lets Claude reach for external tools.
                    Each MCP server you install becomes a new toolbox — browser control, live docs,
                    structured reasoning, persistent memory. These are the five I install on every machine.
                </p>
            </div>

            {/* How install works — intro block */}
            <section className="mb-10 bg-white/[0.02] border border-white/[0.06] rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                    <Terminal size={14} className="text-foreground/40" />
                    <h2 className="text-sm font-semibold tracking-tight">How installation works</h2>
                </div>
                <p className="text-sm text-foreground/55 leading-relaxed mb-3">
                    Two ways to install any MCP server. The Claude Code CLI is the fastest — one command and it is wired up.
                    Claude Desktop uses a JSON config file you edit by hand. Both end up with the same result.
                </p>
                <ul className="text-sm text-foreground/55 leading-relaxed space-y-1.5">
                    <li className="flex gap-2"><span className="text-foreground/30">→</span> Mac config: <code className="text-[12px] bg-white/[0.05] px-1.5 py-0.5 rounded text-foreground/70">~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
                    <li className="flex gap-2"><span className="text-foreground/30">→</span> Windows config: <code className="text-[12px] bg-white/[0.05] px-1.5 py-0.5 rounded text-foreground/70">%APPDATA%\Claude\claude_desktop_config.json</code></li>
                    <li className="flex gap-2"><span className="text-foreground/30">→</span> Always restart your client after installing or editing — MCPs only load on startup</li>
                </ul>
            </section>

            {/* Server selector tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
                {SERVERS.map((s) => {
                    const isActive = s.id === activeServer;
                    const sColors = COLOR_MAP[s.color];
                    const SIcon = s.icon;
                    return (
                        <button
                            key={s.id}
                            onClick={() => setActiveServer(s.id)}
                            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer border ${isActive
                                ? `${sColors.bg} ${sColors.text} ${sColors.border}`
                                : 'bg-white/[0.03] text-foreground/50 border-white/[0.06] hover:bg-white/[0.06] hover:text-foreground/80 hover:border-white/10'
                                }`}
                        >
                            <SIcon size={13} />
                            {s.name}
                        </button>
                    );
                })}
            </div>

            {/* Active server card */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500" key={current.id}>
                {/* Title block */}
                <div className={`bg-white/[0.02] border ${colors.border} rounded-xl p-6 mb-6 hover:shadow-xl ${colors.glow} transition-all duration-300`}>
                    <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl ${colors.bg} ${colors.text} border ${colors.border} flex items-center justify-center shrink-0`}>
                            <Icon size={22} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold tracking-tight mb-1">{current.name}</h2>
                            <p className={`text-sm font-medium ${colors.text}`}>{current.tagline}</p>
                        </div>
                    </div>
                    <p className="text-foreground/70 leading-relaxed text-[14.5px]">{current.description}</p>
                </div>

                {/* When to use */}
                <section className="mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/40 mb-3">
                        When to actually use it
                    </h3>
                    <ul className="space-y-2">
                        {current.whenToUse.map((item, i) => (
                            <li key={i} className="flex gap-2.5 text-[14px] text-foreground/70 leading-relaxed">
                                <CheckCircle2 size={15} className={`${colors.text} shrink-0 mt-0.5`} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Install — Claude Code */}
                <section className="mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/40 mb-2">
                        Install — Claude Code CLI
                    </h3>
                    <CodeBlock code={current.installCli} language="bash" />
                </section>

                {/* Install — Claude Desktop */}
                <section className="mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/40 mb-2">
                        Install — Claude Desktop (JSON config)
                    </h3>
                    <CodeBlock code={current.installJson} language="json" />
                </section>

                {/* Bonus tip */}
                {current.bonus && (
                    <section className={`bg-white/[0.02] border ${colors.border} rounded-xl p-5`}>
                        <div className={`text-[10px] font-bold uppercase tracking-[0.18em] ${colors.text} mb-2`}>
                            {current.bonus.label}
                        </div>
                        <p className="text-[14px] text-foreground/70 leading-relaxed">{current.bonus.body}</p>
                    </section>
                )}
            </div>

            {/* Footer hint */}
            <div className="mt-10 pt-6 border-t border-white/[0.05] text-center">
                <p className="text-xs text-foreground/30">
                    You do not need every MCP. You need the four or five that match how you actually build.
                </p>
            </div>
        </div>
    );
}
