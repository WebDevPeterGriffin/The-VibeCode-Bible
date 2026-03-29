"use client";

import { useState } from 'react';
import { Terminal, Lightbulb, Zap, Code, ShieldCheck } from 'lucide-react';

export default function AiAgentsPage() {
    const [activeTab, setActiveTab] = useState<'overview' | 'uiux' | 'seo' | 'cursorrules' | 'honnibal' | 'workflows'>('overview');

    return (
        <div className="w-full max-w-3xl mx-auto py-12 px-6">
            <div className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight mb-2">AI Agents & Skills Toolbox</h1>
                <p className="text-foreground/60 leading-relaxed">
                    Raw prompts get you 60% of the way there. Skill files get you the rest.
                    This repo comes pre-loaded with a massively growing list of the best ones I have found.
                </p>
            </div>

            {/* Tabs Navigation */}
            <div className="flex overflow-x-auto whitespace-nowrap gap-2 border-b border-border/50 pb-px mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
                    Design Agent (UI/UX)
                </button>
                <button
                    onClick={() => setActiveTab('seo')}
                    className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${activeTab === 'seo' ? 'border-primary text-foreground' : 'border-transparent text-foreground/50 hover:text-foreground hover:border-border'}`}
                >
                    SEO & Growth Agent
                </button>
                <button
                    onClick={() => setActiveTab('cursorrules')}
                    className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${activeTab === 'cursorrules' ? 'border-primary text-foreground' : 'border-transparent text-foreground/50 hover:text-foreground hover:border-border'}`}
                >
                    Awesome CursorRules
                </button>
                <button
                    onClick={() => setActiveTab('honnibal')}
                    className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${activeTab === 'honnibal' ? 'border-primary text-foreground' : 'border-transparent text-foreground/50 hover:text-foreground hover:border-border'}`}
                >
                    Honnibal Skills
                </button>
                <button
                    onClick={() => setActiveTab('workflows')}
                    className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 ${activeTab === 'workflows' ? 'border-primary text-foreground' : 'border-transparent text-foreground/50 hover:text-foreground hover:border-border'}`}
                >
                    Workflows
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
                                    <div className="text-zinc-500 mb-1"># Example: Installing a UI design skill via NPM</div>
                                    <div className="mb-3">npm install -g design-agent-cli<br />design-agent init</div>
                                    <div className="text-zinc-500 mb-1"># Example: Cloning an SEO sub-agent locally</div>
                                    <div>git clone --depth 1 https://github.com/example/seo-agent.git<br />cd seo-agent && ./install.sh</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'uiux' && (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                <Code className="w-5 h-5 text-blue-500" /> Advanced Design Agents
                            </h2>
                            <p className="text-foreground/80 leading-relaxed">
                                You can load comprehensive UI/UX intelligence skills into your repository. These provide deep design rules for generating professional interfaces, avoiding standard sterile AI outputs.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-medium mb-3">How to Use It</h3>
                            <p className="text-foreground/80 leading-relaxed pb-3">Once initialized, the skill auto-activates boundaries in your hidden `.agents` folder. Just chat naturally with your agent:</p>
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
                                <ShieldCheck className="w-5 h-5 text-green-500" /> Technical SEO Agents
                            </h2>
                            <p className="text-foreground/80 leading-relaxed">
                                You can easily integrate universal SEO skills composed of multiple sub-skills functioning in tandem.
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

                {activeTab === 'cursorrules' && (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                <Code className="w-5 h-5 text-pink-500" /> Awesome CursorRules
                            </h2>
                            <p className="text-foreground/80 leading-relaxed">
                                We utilize framework-specific boundaries from <a href="https://github.com/PatrickJS/awesome-cursorrules" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PatrickJS/awesome-cursorrules</a>. This massively viral repository contains hundreds of optimized <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-pink-400">.cursorrules</code> files that force your primary AI to follow industry-standard best practices for Next.js, Python, Go, and more.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-medium mb-3">How to Use It</h3>
                            <p className="text-foreground/80 leading-relaxed pb-3">Simply copy the rules that match your tech stack and paste them into your project's root <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-pink-400">.cursorrules</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-pink-400">.cursor/rules/</code> directory. The AI magically reads them on every prompt.</p>
                            <div className="bg-black/50 p-4 rounded-md border text-sm font-mono mt-2 mb-4 whitespace-pre text-zinc-300">
                                <span className="text-zinc-500">{"# Download a specific Next.js skill directly"}</span><br />
                                curl -O https://raw.githubusercontent.com/PatrickJS/awesome-cursorrules/main/rules/nextjs.mdc
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === 'honnibal' && (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                <Terminal className="w-5 h-5 text-cyan-500" /> Honnibal Claude Skills
                            </h2>
                            <p className="text-foreground/80 leading-relaxed">
                                We also integrate <a href="https://github.com/honnibal/claude-skills" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">honnibal/claude-skills</a>, a highly regarded collection of reusable slash-command workflows for Claude Code focusing on practical, high-quality development like type-tightening and docstring generation.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-medium mb-3">How to Use It</h3>
                            <p className="text-foreground/80 leading-relaxed pb-3">Load the skills into your terminal workflow, allowing you to run powerful code auditing commands locally over your entire <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-cyan-400">.src</code> tree.</p>
                            <div className="bg-black/50 p-4 rounded-md border text-sm font-mono mt-2 mb-4 whitespace-pre text-zinc-300">
                                /tighten-types src/components/<br />
                                /generate-docstrings src/utils/
                            </div>
                        </section>

                        <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4 flex gap-3 text-sm">
                            <span className="text-xl">🛡️</span>
                            <div className="text-cyan-200/90 leading-relaxed">
                                <strong className="text-cyan-500 block mb-1">Security Warning</strong>
                                Always independently audit third-party skills before running them, as they execute raw Python/Bash code on your local machine. These specific modules belong to the official VibeCode pre-vetted registry.
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'workflows' && (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                <Terminal className="w-5 h-5 text-indigo-500" /> Agent Workflows
                            </h2>
                            <p className="text-foreground/80 leading-relaxed">
                                Workflows allow you to chain multiple agent skills logically to execute complex, multi-step tasks across the entire repository.
                            </p>
                        </section>
                        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4 flex gap-3 text-sm">
                            <span className="text-xl">⚙️</span>
                            <div className="text-indigo-200/90 leading-relaxed">
                                <strong className="text-indigo-400 block mb-1">Coming Soon</strong>
                                The workflow execution engine is currently in development. You will soon be able to write automation scripts seamlessly combining all your specialized agent skills into unified chains.
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
