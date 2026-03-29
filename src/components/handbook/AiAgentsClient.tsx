"use client";

import { useState } from 'react';
import { Terminal, Lightbulb, Zap, Code, ShieldCheck } from 'lucide-react';

export interface WorkflowEntry {
    cmd: string;
    desc: string;
    steps: number;
    color: string;
}

interface Props {
    workflows: WorkflowEntry[];
}

export default function AiAgentsClient({ workflows }: Props) {
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
            <div className="flex flex-wrap gap-2 border-b border-border/50 pb-px mb-8">
                {[
                    { id: 'overview', label: 'Overview', icon: Lightbulb },
                    { id: 'workflows', label: 'Agent Workflows', icon: Zap },
                    { id: 'uiux', label: 'UI/UX Pro Max', icon: Code },
                    { id: 'seo', label: 'SEO Audit', icon: ShieldCheck },
                    { id: 'cursorrules', label: 'CursorRules', icon: Code },
                    { id: 'honnibal', label: 'Honnibal Skills', icon: Terminal },
                ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as 'overview' | 'uiux' | 'seo' | 'cursorrules' | 'honnibal' | 'workflows')}
                            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-all ${isActive
                                ? 'border-primary text-primary'
                                : 'border-transparent text-foreground/60 hover:text-foreground hover:border-border'
                                }`}
                        >
                            <Icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Tab Content */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {activeTab === 'overview' && (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold mb-3">What are Skills and Workflows?</h2>
                            <p className="text-foreground/80 leading-relaxed">
                                Most people use AI by pasting code and asking &quot;fix this&quot;. That is basic.
                                Advanced vibe coding uses <strong className="text-foreground font-medium">Skills</strong> (context-heavy system instructions) and <strong className="text-foreground font-medium">Workflows</strong> (step-by-step execution scripts).
                            </p>
                        </section>

                        <div className="grid sm:grid-cols-2 gap-4 mt-6">
                            <div className="bg-muted/30 p-5 rounded-xl border border-border/50">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/30">
                                    <Code size={16} />
                                </div>
                                <h3 className="font-semibold mb-2">Skill Files (.md)</h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    Knowledge bases injected into the AI&apos;s system prompt. Teaching it design systems, specific API patterns, or security checks before it writes code.
                                </p>
                            </div>
                            <div className="bg-muted/30 p-5 rounded-xl border border-border/50">
                                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 border border-indigo-500/30">
                                    <Terminal size={16} />
                                </div>
                                <h3 className="font-semibold mb-2">Workflow Files (.md)</h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    Step-by-step instructions. Instead of &quot;review this code&quot;, a workflow tells the AI: 1. Read files 2. Check types 3. Check logs 4. Write report.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'uiux' && (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                <Code className="w-5 h-5 text-purple-500" /> UI/UX Pro Max Agent
                            </h2>
                            <p className="text-foreground/80 leading-relaxed mb-4">
                                This is the flagship skill in my arsenal. It transforms baseline AI responses into stunning, production-ready, highly animated interfaces. It carries thousands of lines of deeply curated design tokens, glassmorphism rules, and animation timings.
                            </p>
                            <div className="bg-black/50 p-4 rounded-md border text-sm font-mono whitespace-pre text-zinc-300">
                                <span className="text-zinc-500">{"// To inject it into any task, mention its filename:"}</span><br />
                                @ui-ux-pro-max build me a pricing component
                            </div>
                        </section>
                    </div>
                )}

                {activeTab === 'seo' && (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-emerald-500" /> SEO Audit Workflow
                            </h2>
                            <p className="text-foreground/80 leading-relaxed">
                                The SEO Audit Workflow is a deterministic 7-step checklist. It forces the agent to use curl or browser tools to analyze meta tags, contrast ratios, and OpenGraph payloads, instead of hallucinating answers.
                            </p>
                        </section>
                        <div className="bg-black/50 p-4 rounded-md border text-sm font-mono text-zinc-300">
                            /seo-audit https://siteo.io
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
                            <p className="text-foreground/80 leading-relaxed pb-3">Simply copy the rules that match your tech stack and paste them into your project&apos;s root <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-pink-400">.cursorrules</code> or <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-pink-400">.cursor/rules/</code> directory. The AI magically reads them on every prompt.</p>
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
                                Workflows are step-by-step automation scripts stored in <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-indigo-400">.agent/workflows/</code>. Your AI agent reads these files and executes each step sequentially against your codebase. Invoke any workflow by typing the slash command in your agent terminal.
                            </p>
                        </section>

                        <div className="grid gap-3">
                            {workflows.length > 0 ? workflows.map((wf) => (
                                <div key={wf.cmd} className="border border-border/50 rounded-lg overflow-hidden hover:border-border transition-colors">
                                    <div className="bg-muted/30 px-4 py-3 flex items-center gap-2">
                                        <Terminal className="w-4 h-4 text-indigo-400" />
                                        <span className={`font-mono text-sm ${wf.color}`}>{wf.cmd}</span>
                                        <span className="text-xs text-foreground/40 ml-auto">{wf.steps} steps</span>
                                    </div>
                                    <div className="px-4 py-3 text-sm text-foreground/70">{wf.desc}</div>
                                </div>
                            )) : (
                                <div className="p-8 text-center text-foreground/50 border border-dashed rounded-lg bg-muted/10">
                                    No workflows found in .agent/workflows/
                                </div>
                            )}
                        </div>

                        <div className="bg-black/50 p-4 rounded-md border text-sm font-mono text-zinc-300">
                            <span className="text-zinc-500">{"# Invoke any workflow from your AI agent terminal:"}</span><br />
                            {workflows.slice(0, 3).map(wf => (
                                <div key={wf.cmd}>{wf.cmd}</div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
