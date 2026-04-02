"use client";

import { useState } from 'react';
import { Terminal, Lightbulb, Zap, Code, ShieldCheck } from 'lucide-react';
import SkillSearchBox from './SkillSearchBox';
import WorkflowAccordion from '@/components/WorkflowAccordion';

export interface WorkflowEntry {
    cmd: string;
    desc: string;
    steps: number;
    color: string;
    whyImportant?: string;
    details?: string[];
}

export interface SkillEntry {
    filename: string;
    path: string;
    type: string;
}

interface Props {
    workflows: WorkflowEntry[];
    skillsMap: Record<string, SkillEntry[]>;
}

export default function AiAgentsClient({ workflows, skillsMap }: Props) {
    const [activeTab, setActiveTab] = useState<'overview' | 'uiux' | 'seo' | 'cursorrules' | 'honnibal' | 'workflows' | 'gsap'>('overview');



    return (
        <div className="w-full max-w-3xl mx-auto py-12 px-6">
            <div className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight mb-2 bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">AI Agents & Skills Toolbox</h1>
                <p className="text-foreground/50 leading-relaxed">
                    Raw prompts get you 60% of the way there. Skill files get you the rest.
                    This repo comes pre-loaded with a massively growing list of the best ones I have found.
                </p>
            </div>

            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
                {[
                    { id: 'overview', label: 'Overview', icon: Lightbulb },
                    { id: 'workflows', label: 'Agent Workflows', icon: Zap },
                    { id: 'uiux', label: 'UI/UX Pro Max', icon: Code },
                    { id: 'seo', label: 'SEO Audit', icon: ShieldCheck },
                    { id: 'cursorrules', label: 'CursorRules', icon: Code },
                    { id: 'honnibal', label: 'Honnibal Skills', icon: Terminal },
                    { id: 'gsap', label: 'GSAP Skills', icon: Code },
                ].map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as 'overview' | 'uiux' | 'seo' | 'cursorrules' | 'honnibal' | 'workflows' | 'gsap')}
                            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer border ${isActive
                                ? 'bg-primary/15 text-primary border-primary/30 shadow-[0_0_12px_rgba(124,58,237,0.12)]'
                                : 'bg-white/[0.03] text-foreground/50 border-white/[0.06] hover:bg-white/[0.06] hover:text-foreground/80 hover:border-white/10'
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
                            <div className="bg-white/[0.03] p-5 rounded-xl border border-white/[0.08] hover:border-white/[0.12] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/[0.04] transition-all duration-300 cursor-pointer">
                                <div className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
                                    <Code size={16} />
                                </div>
                                <h3 className="font-semibold mb-2">Skill Files (.md)</h3>
                                <p className="text-sm text-foreground/50 leading-relaxed">
                                    Knowledge bases injected into the AI&apos;s system prompt. Teaching it design systems, specific API patterns, or security checks before it writes code.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] p-5 rounded-xl border border-white/[0.08] hover:border-white/[0.12] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/[0.04] transition-all duration-300 cursor-pointer">
                                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-4 border border-indigo-500/20">
                                    <Terminal size={16} />
                                </div>
                                <h3 className="font-semibold mb-2">Workflow Files (.md)</h3>
                                <p className="text-sm text-foreground/50 leading-relaxed">
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
                            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/[0.08] text-sm font-mono whitespace-pre text-zinc-300">
                                <span className="text-zinc-500">{"// To inject it into any task, mention its filename:"}</span><br />
                                @ui-ux-pro-max build me a pricing component
                            </div>
                        </section>
                        <SkillSearchBox skills={skillsMap?.uiux || []} label="UI/UX Skills" />
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
                        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/[0.08] text-sm font-mono text-zinc-300">
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
                            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/[0.08] text-sm font-mono mt-2 mb-4 whitespace-pre text-zinc-300">
                                <span className="text-zinc-500">{"# Download a specific Next.js skill directly"}</span><br />
                                curl -O https://raw.githubusercontent.com/PatrickJS/awesome-cursorrules/main/rules/nextjs.mdc
                            </div>
                        </section>
                        <SkillSearchBox skills={skillsMap?.cursorrules || []} label="CursorRules" />
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
                            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/[0.08] text-sm font-mono mt-2 mb-4 whitespace-pre text-zinc-300">
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
                        <SkillSearchBox skills={skillsMap?.honnibal || []} label="Honnibal Skills" />
                    </div>
                )}

                {activeTab === 'gsap' && (
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                                <Code className="w-5 h-5 text-green-500" /> GSAP Skills
                            </h2>
                            <p className="text-foreground/80 leading-relaxed">
                                A dedicated skill for building complex, high-performance web animations using GreenSock Animation Platform (GSAP). It includes best practices, scroll-trigger animations, and React/Next.js integration patterns learned from <a href="https://github.com/greensock/gsap-skills" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">greensock/gsap-skills</a>.
                            </p>
                        </section>

                        <section>
                            <h3 className="font-medium mb-3">How to Use It</h3>
                            <p className="text-foreground/80 leading-relaxed pb-3">Inject this skill when you need the AI to build complex timelines, scroll-driven animations, or transition effects.</p>
                            <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/[0.08] text-sm font-mono mt-2 mb-4 whitespace-pre text-zinc-300">
                                <span className="text-zinc-500">{"// To use it, simply mention it in your prompt:"}</span><br />
                                @gsap-skills animate this hero section with a stagger effect
                            </div>
                        </section>
                        <SkillSearchBox skills={skillsMap?.gsap || []} label="GSAP Skills" />
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

                        {workflows.length > 0 ? (
                            <div className="mt-4">
                                <WorkflowAccordion
                                    workflows={workflows.map((wf) => ({
                                        title: wf.cmd,
                                        whatItDoes: wf.desc,
                                        whyImportant: wf.whyImportant || "Increases reliability and handles complex agent orchestration automatically.",
                                        details: wf.details || []
                                    }))}
                                    index={0}
                                />
                            </div>
                        ) : (
                            <div className="p-8 text-center text-foreground/40 border border-dashed border-white/[0.08] rounded-lg bg-white/[0.02]">
                                No workflows found in .agent/workflows/
                            </div>
                        )}

                        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/[0.08] text-sm font-mono text-zinc-300">
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
