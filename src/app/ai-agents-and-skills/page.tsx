"use client";

import { useState } from 'react';
import { Terminal, Lightbulb, Zap, Code, ShieldCheck } from 'lucide-react';

export default function AiAgentsPage() {
    const [activeTab, setActiveTab] = useState<'overview' | 'uiux' | 'seo'>('overview');

    return (
        <div className="w-full max-w-3xl mx-auto py-12 px-6">
            <div className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight mb-2">AI Agents & Skills Toolbox</h1>
                <p className="text-foreground/60 leading-relaxed">
                    To build powerful apps, you shouldn't rely solely on basic raw prompts. You need to use structured "Skills" files that the AI can read to enforce design systems, naming conventions, and best practices.
                </p>
            </div>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-2 border-b border-border/50 pb-px mb-8">
                <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${activeTab === 'overview' ? 'border-primary text-foreground' : 'border-transparent text-foreground/50 hover:text-foreground hover:border-border'}`}
                >
                    Getting Started
                </button>
                <button
                    onClick={() => setActiveTab('uiux')}
                    className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${activeTab === 'uiux' ? 'border-primary text-foreground' : 'border-transparent text-foreground/50 hover:text-foreground hover:border-border'}`}
                >
                    UI UX Pro Max
                </button>
                <button
                    onClick={() => setActiveTab('seo')}
                    className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${activeTab === 'seo' ? 'border-primary text-foreground' : 'border-transparent text-foreground/50 hover:text-foreground hover:border-border'}`}
                >
                    Claude SEO
                </button>
            </div>

            {/* Tabs Content */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                <Lightbulb className="w-5 h-5 text-yellow-500" /> How to Give Skills to Your Agent
                            </h2>
                            <p className="text-foreground/80 leading-relaxed">
                                The easiest way to add a skill is to install it via npm or CLI tools, or simply drop the instruction markdown into a specific folder like <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-primary">.agents/</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-primary">src/skills/</code>.
                                <br /><br />
                                When cloning this repository, you automatically gain access to the integrated skills inside the `.agents/` and `.claude/` directories since we already ran the initialization tools globally.
                            </p>
                        </section>

                        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex gap-3 items-start">
                            <Terminal className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-medium text-primary mb-1">Global CLI Installation Example</h3>
                                <p className="text-sm text-foreground/70 mb-3">If you are starting a fresh project elsewhere, you can run these commands globally:</p>
                                <div className="bg-black/50 p-3 rounded-md overflow-x-auto text-sm font-mono text-zinc-300">
                                    <div className="text-zinc-500 mb-1"># UI UX Pro Max</div>
                                    <div className="mb-3">npm install -g uipro-cli<br />uipro init --ai antigravity</div>
                                    <div className="text-zinc-500 mb-1"># Claude SEO (Windows)</div>
                                    <div>git clone --depth 1 https://github.com/AgriciDaniel/claude-seo.git<br />powershell -ExecutionPolicy Bypass -File claude-seo\install.ps1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'uiux' && (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                <Code className="w-5 h-5 text-blue-500" /> UI/UX Pro Max
                            </h2>
                            <p className="text-foreground/80 leading-relaxed">
                                This repository comes pre-installed with the <a href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">UI UX Pro Max</a> skill. It provides deep design intelligence for generating professional UI/UX, avoiding standard sterile AI outputs.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-medium mb-3">How to Use It</h3>
                            <p className="text-foreground/80 leading-relaxed pb-3">Because we ran `uipro init`, the skill is auto-activated boundaries in your hidden `.agents` folder. Just chat naturally with your agent:</p>
                            <div className="bg-muted p-4 rounded-md border text-sm font-mono mt-2 mb-4">
                                "Build a landing page for my SaaS product. Make it dark mode."
                            </div>
                        </section>

                        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 flex gap-3 text-sm">
                            <span className="text-xl">🔥</span>
                            <div className="text-orange-200/90 leading-relaxed">
                                <strong className="text-orange-400 block mb-1">Magic Happens</strong>
                                The agent will automatically read the skill file, generate a cohesive design system, and implement the UI with proper colors, fonts, spacing, and accessibility—no extra prompting needed.
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'seo' && (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-green-500" /> Claude SEO
                            </h2>
                            <p className="text-foreground/80 leading-relaxed">
                                We also use <a href="https://github.com/AgriciDaniel/claude-seo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Claude SEO</a>, a universal SEO skill composed of 13 sub-skills and 7 subagents working in tandem.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-medium mb-3">How to Use It</h3>
                            <p className="text-foreground/80 leading-relaxed pb-3">It handles Technical SEO audits, E-E-A-T analysis, rich schema markup generation, and AI Search Optimization (GEO/AEO). Try commands like:</p>
                            <div className="bg-muted p-4 rounded-md border text-sm font-mono mt-2 mb-4 whitespace-pre">
                                /seo audit [url]<br />
                                /seo competitor-pages [url]
                            </div>
                        </section>

                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 flex gap-3 text-sm">
                            <Zap className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                            <div className="text-yellow-200/90 leading-relaxed">
                                <strong className="text-yellow-500 block mb-1">Advanced Mode</strong>
                                It integrates directly with the DataForSEO MCP, granting web-search and rank-tracking capabilities completely inside your terminal.
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
