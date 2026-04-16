"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import { Send, Bot, User, Loader2, Wifi, WifiOff, Trash2, Plus, MessageSquare, AlertTriangle, PanelLeftClose, PanelLeft, ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

interface Message {
    role: "system" | "user" | "assistant";
    content: string;
}

interface ChatSession {
    id: string;
    title: string;
    messages: Message[];
    updatedAt: number;
}

interface OllamaModel {
    name: string;
    size: number;
}

const SYSTEM_PROMPT = `You are the VibeCode Bible Assistant. You are a helpful AI designed to answer questions strictly about the VibeCode Bible project, vibe coding methodology, and specific topics covered in this knowledge base.

Be conversational, friendly, and direct. Talk like a senior dev explaining things over coffee. Use Markdown formatting and code blocks for code examples. Keep your answers concise and directly answer the user's questions without asking follow-up questions.

Here is the complete content map of the VibeCode Bible. When referencing a lesson, you MUST use the exact markdown link provided below so the user can click it (e.g., [Start Here](/start-here)):

GETTING STARTED:
- [Start Here](/start-here) — Introduction to vibe coding: letting AI write most of the code while you steer. Not no-code, not traditional coding — a third way.
- [My Setup](/my-setup) — The exact stack: Antigravity IDE (or VS Code + Cline), Claude Code for terminal, Next.js 14 App Router, Tailwind v4, TypeScript strict, Supabase for backend, Vercel for deploy.
- [AI Breakdown](/ai-breakdown) — Honest comparison of Claude, ChatGPT, and Gemini. Claude is best for code. ChatGPT for planning. Gemini for research. No fluff.

THE TOOLS:
- [Antigravity](/antigravity) — Google DeepMind's agentic IDE. It reads your entire repo, runs terminal commands, edits files, and manages browser testing autonomously.
- [Claude Code](/claude-code) — Anthropic's terminal-based coding agent. Best for precise refactors, multi-file edits, and running in parallel with your IDE agent.
- [Antigravity vs Claude Code](/antigravity-vs-claude-code) — When to use which. Antigravity for full-stack features. Claude Code for surgical precision. Use both together.

THE METHODOLOGY:
- [Vibe Coding Workflow](/vibe-coding-workflow) — The 7-step workflow: Brain Dump → Architecture Pass → Scaffold Prompt → Feature by Feature → Claude Code Pass → Deploy Early → Know When to Stop.
- [Prompting for Scale vs Speed](/prompting-for-scale-vs-speed) — Quick prompts for prototypes, detailed prompts for production. Know the difference.
- [Git Workflow for Vibe Coders](/git-workflow-for-vibe-coders) — Commit often, use conventional commits, let AI write commit messages, branch per feature.
- [When to Stop Vibe Coding](/when-to-stop-vibe-coding) — Auth, payments, security, data migrations — things you should write yourself.

BUILDING PRODUCTS:
- [Real Project](/real-project) — How Siteo (a SaaS) was built in 3 days using this exact methodology.
- [Database Migrations on Auto-Pilot](/database-migrations-on-auto-pilot) — Let AI write your Supabase migrations but always review RLS policies.
- [Beating the Generic AI Look](/beating-the-generic-ai-look) — Skill files, design tokens, and curated palettes prevent the "AI-generated" aesthetic.
- [Building with Supabase RLS](/building-with-supabase-rls) — Row Level Security patterns. Frontend uses anon key (respects RLS). Server uses service role (bypasses RLS). Never expose service role key.
- [The Overnight Build](/the-overnight-build) — Building a complete product in one night using the full workflow.

DEBUGGING & TESTING:
- [The Context Window Crash](/the-context-window-crash) — When AI loses context mid-conversation. Solution: AGENTS.md, smaller prompts, fresh conversations.
- [Securing Stripe & Webhooks](/securing-stripe-and-webhooks) — Webhook signature verification, idempotency, never trust client-side price data.
- [Handling Hallucinated APIs](/handling-hallucinated-apis) — AI invents APIs that don't exist. Solution: paste actual docs into context, use skill files with real API references.
- [Debugging with AI](/debugging-with-ai) — Paste the full error + file + what you expected. AI can't debug without context.
- [Writing Tests with AI](/writing-tests-with-ai) — AI writes great unit tests if you give it the function + types + expected behavior.

LESSONS LEARNED:
- [Mistakes I Made](/mistakes-i-made) — Common traps: trusting AI blindly, not reading generated code, skipping types, no git commits.
- [Resources](/resources) — Curated links to Supabase docs, Vercel, Resend, Stripe, OpenAI.

AGENTIC ENGINEERING:
- [Vibe Coding Is Dead](/vibe-coding-is-dead) — Why pure vibe coding failed at scale. Code churn up 41%, duplication up 4x.
- [Why It Really Broke Down](/why-it-really-broke-down) — The three skipped steps: design, review, testing. The prototype trap.
- [Meet Agentic Engineering](/meet-agentic-engineering) — Same tools, new mindset. You are the governor, the AI is the workforce.
- [The Agentic Workflow](/the-agentic-workflow) — The 6-step loop: design first, scaffold with constraints, build in small loops, review every diff, test golden path, ship early.
- [Claude Opus 4.7 — What Changed](/claude-opus-4-7) — Extended thinking up to 128K tokens, new tokenizer, effort parameter, file-system memory, /ultrareview command, Auto Mode for Max subscribers.

KEY CONCEPTS:
- AGENTS.md — A file at your project root that gives AI permanent context about your stack, rules, and skill file locations. Every AI agent reads it automatically.
- Skill Files — .md files in .agent/skills/ injected into the AI system prompt. They carry design systems, API patterns, security rules. "Raw prompts get you 60%, skill files get the rest."
- Workflow Files — Step-by-step .md scripts in .agent/workflows/ that AI agents execute sequentially. Invoked via slash commands like /code-review or /deploy-checklist.
- The repo ships with 1,316 pre-loaded skill files and 10 executable workflows.

BUNDLED SKILL PACKS:
- Awesome CursorRules (1,242 files) — framework-specific rules for Next.js, React, Python, etc.
- Claude SEO (68 files) — full technical SEO automation
- GSAP Skills (33 files) — GSAP/ScrollTrigger animation patterns
- UI/UX Pro Max (31 files) — design intelligence with 50 styles, 21 palettes, 50 font pairings
- Honnibal Claude Skills (10 files) — mutation testing, type tightening, docstrings

IMPORTANT RULES:
1. ONLY answer about topics in the VibeCode Bible. If asked about unrelated topics, say something like "That's outside the VibeCode Bible — but I can help you with [suggest relevant topic]."
2. When referencing a lesson, you MUST output a markdown link using the EXACT paths from the map above. Do not prefix the lesson name with a number.
3. Keep responses concise but helpful. No essays.
4. Use markdown code blocks for any code examples.
5. Be opinionated — this is an opinionated knowledge base.`;

const EMPTY_MESSAGES: Message[] = [];

export default function OllamaChat() {
    const [sessions, setSessions] = useState<ChatSession[]>([]);
    const [activeSessionId, setActiveSessionId] = useState<string>("");
    const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const [input, setInput] = useState("");
    const [isStreaming, setIsStreaming] = useState(false);
    const [ollamaStatus, setOllamaStatus] = useState<"checking" | "connected" | "disconnected">("checking");
    const [availableModels, setAvailableModels] = useState<OllamaModel[]>([]);
    const [selectedModel, setSelectedModel] = useState<string>("");
    const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const modelDropdownRef = useRef<HTMLDivElement>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const initialized = useRef(false);

    // Derived current messages state
    const activeSession = sessions.find(s => s.id === activeSessionId);
    const messages = activeSession ? activeSession.messages : EMPTY_MESSAGES;

    // Custom setMessages wrapper to proxy state into active session seamlessly
    function setMessages(newMessagesOrUpdater: Message[] | ((prev: Message[]) => Message[])) {
        setSessions(prevSessions => prevSessions.map(session => {
            if (session.id === activeSessionId) {
                const updatedMessages = typeof newMessagesOrUpdater === "function"
                    ? newMessagesOrUpdater(session.messages)
                    : newMessagesOrUpdater;

                // Auto-generate title on first user message if title is default
                let title = session.title;
                if (title === "New Chat" && updatedMessages.length > 0) {
                    const firstUserMsg = updatedMessages.find(m => m.role === "user");
                    if (firstUserMsg) {
                        title = firstUserMsg.content.slice(0, 30) + (firstUserMsg.content.length > 30 ? "..." : "");
                    }
                }

                return {
                    ...session,
                    messages: updatedMessages,
                    updatedAt: Date.now(),
                    title
                };
            }
            return session;
        }));
    }

    function createNewSession() {
        const newSession: ChatSession = {
            id: Date.now().toString(),
            title: "New Chat",
            messages: [],
            updatedAt: Date.now()
        };
        setSessions(prev => [newSession, ...prev]);
        setActiveSessionId(newSession.id);
    }

    // Load from localStorage on mount (Handles migration from old vibe-chat-history automatically)
    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        const savedSessions = localStorage.getItem("vibe-chat-sessions");
        if (savedSessions) {
            try {
                const parsed = JSON.parse(savedSessions);
                if (parsed.length > 0) {
                    setSessions(parsed);
                    const mostRecent = [...parsed].sort((a, b) => b.updatedAt - a.updatedAt)[0];
                    setActiveSessionId(mostRecent.id);
                } else {
                    createNewSession();
                }
            } catch {
                createNewSession();
            }
        } else {
            // Check for legacy migration
            const legacyHistory = localStorage.getItem("vibe-chat-history");
            if (legacyHistory) {
                try {
                    const parsed = JSON.parse(legacyHistory);
                    if (parsed.length > 0) {
                        const legacySession: ChatSession = {
                            id: Date.now().toString(),
                            title: "Previous Chat",
                            messages: parsed,
                            updatedAt: Date.now()
                        };
                        setSessions([legacySession]);
                        setActiveSessionId(legacySession.id);
                        localStorage.removeItem("vibe-chat-history");
                    } else {
                        createNewSession();
                    }
                } catch {
                    createNewSession();
                }
            } else {
                createNewSession();
            }
        }
        setIsLoaded(true);
    }, []);

    // Save to localStorage when sessions change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("vibe-chat-sessions", JSON.stringify(sessions));
        }
    }, [sessions, isLoaded]);

    // Check Ollama connectivity and discover models on mount
    useEffect(() => {
        checkOllamaStatus();
    }, []);

    // Close model dropdown on outside click
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (modelDropdownRef.current && !modelDropdownRef.current.contains(e.target as Node)) {
                setModelDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Auto-scroll to bottom on new messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    async function checkOllamaStatus() {
        setOllamaStatus("checking");
        try {
            const res = await fetch("/api/ollama/tags");
            if (res.ok) {
                const data = await res.json();
                const models: OllamaModel[] = (data.models || []).map((m: { name: string; size: number }) => ({
                    name: m.name,
                    size: m.size || 0,
                }));
                setAvailableModels(models);
                if (models.length > 0 && !selectedModel) {
                    setSelectedModel(models[0].name);
                }
                setOllamaStatus("connected");
            } else {
                setOllamaStatus("disconnected");
            }
        } catch {
            setOllamaStatus("disconnected");
        }
    }

    const resolvedModel = selectedModel || (availableModels.length > 0 ? availableModels[0].name : "");

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed || isStreaming || ollamaStatus !== "connected") return;

        const userMessage: Message = { role: "user", content: trimmed };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput("");
        setIsStreaming(true);

        // Add a placeholder assistant message
        const assistantMessage: Message = { role: "assistant", content: "" };
        setMessages([...updatedMessages, assistantMessage]);

        try {
            const res = await fetch("/api/ollama/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: resolvedModel,
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        ...updatedMessages,
                    ],
                    stream: true,
                    options: { temperature: 0.5 },
                }),
            });

            if (!res.ok || !res.body) {
                throw new Error("Failed to connect to Ollama");
            }

            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let accumulated = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                const lines = chunk.split("\n").filter(Boolean);

                for (const line of lines) {
                    try {
                        const json = JSON.parse(line);
                        if (json.message?.content) {
                            accumulated += json.message.content;
                            setMessages((prev) => {
                                const copy = [...prev];
                                copy[copy.length - 1] = {
                                    role: "assistant",
                                    content: accumulated,
                                };
                                return copy;
                            });
                        }
                    } catch {
                        // skip malformed lines
                    }
                }
            }
        } catch {
            setMessages((prev) => {
                const copy = [...prev];
                copy[copy.length - 1] = {
                    role: "assistant",
                    content: "⚠️ Failed to get a response from Ollama. Make sure the server is running at `http://localhost:11434`.",
                };
                return copy;
            });
        } finally {
            setIsStreaming(false);
            inputRef.current?.focus();
        }
    }

    function requestDelete(id: string) {
        setPendingDeleteId(id);
    }

    function confirmDelete() {
        if (!pendingDeleteId) return;
        const updated = sessions.filter(s => s.id !== pendingDeleteId);
        if (updated.length === 0) {
            const freshSession: ChatSession = {
                id: Date.now().toString(),
                title: "New Chat",
                messages: [],
                updatedAt: Date.now()
            };
            setSessions([freshSession]);
            setActiveSessionId(freshSession.id);
        } else {
            setSessions(updated);
            if (activeSessionId === pendingDeleteId) {
                setActiveSessionId(updated[0].id);
            }
        }
        setPendingDeleteId(null);
    }

    function cancelDelete() {
        setPendingDeleteId(null);
    }

    const visibleMessages = messages.filter((m) => m.role !== "system");

    if (!isLoaded) return null; // Hydration preservation

    return (
        <div className="flex w-full h-full min-h-0 bg-[var(--color-background)]">

            {/* Inner Chat Sidebar (Desktop Only) */}
            <div
                className={`shrink-0 border-r border-white/[0.04] flex-col bg-background/40 hidden md:flex min-h-0 transition-all duration-300 ease-in-out overflow-hidden ${sidebarOpen ? "w-64" : "w-0 border-r-0"
                    }`}
            >
                <div className="p-4 border-b border-white/[0.04] flex items-center justify-between w-64">
                    <h3 className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest pl-1">Chat History</h3>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={createNewSession}
                            className="p-1.5 hover:bg-white/[0.06] rounded-md transition text-foreground/40 hover:text-primary cursor-pointer border border-transparent hover:border-white/[0.05]"
                            title="New Chat"
                        >
                            <Plus size={14} />
                        </button>
                        <button
                            onClick={() => setSidebarOpen(false)}
                            className="p-1.5 hover:bg-white/[0.06] rounded-md transition text-foreground/40 hover:text-foreground cursor-pointer border border-transparent hover:border-white/[0.05]"
                            title="Close sidebar"
                        >
                            <PanelLeftClose size={14} />
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-1 w-64">
                    {[...sessions].sort((a, b) => b.updatedAt - a.updatedAt).map(s => (
                        <div key={s.id} className="group relative">
                            <button
                                onClick={() => setActiveSessionId(s.id)}
                                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200 truncate pr-8 flex items-center gap-2 ${activeSessionId === s.id
                                    ? "bg-primary/10 text-primary font-medium border border-primary/20 shadow-sm"
                                    : "text-foreground/70 hover:bg-white/[0.03] hover:text-foreground border border-transparent"
                                    }`}
                            >
                                <MessageSquare size={13} className={activeSessionId === s.id ? "text-primary/70" : "text-foreground/30"} />
                                <span className="truncate">{s.title}</span>
                            </button>
                            {sessions.length > 1 && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); requestDelete(s.id); }}
                                    className={`absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-red-500/20 text-foreground/30 hover:text-red-400 transition-all cursor-pointer ${activeSessionId === s.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                                        }`}
                                >
                                    <Trash2 size={12} />
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col min-w-0 min-h-0">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.04]">
                    <div className="flex items-center gap-3">
                        {!sidebarOpen && (
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="p-1.5 hover:bg-white/[0.06] rounded-md transition text-foreground/40 hover:text-foreground cursor-pointer border border-transparent hover:border-white/[0.05] hidden md:flex"
                                title="Open sidebar"
                            >
                                <PanelLeft size={16} />
                            </button>
                        )
                        }
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Bot size={16} className="text-primary" />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                                <h2 className="text-sm font-semibold tracking-tight">VibeCode Assistant</h2>
                                <span className="text-[10px] text-foreground/40 hidden sm:inline">· {resolvedModel || "No model"}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Mobile New Chat */}
                        <button
                            onClick={createNewSession}
                            title="New Chat"
                            className="p-1 px-2 rounded-md text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 transition-colors duration-200 cursor-pointer flex items-center gap-1 shrink-0 md:hidden"
                        >
                            <Plus size={14} /> New
                        </button>

                        {/* Status Indicator */}
                        <button
                            onClick={checkOllamaStatus}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer hover:scale-[1.02]"
                            style={{
                                background:
                                    ollamaStatus === "connected"
                                        ? "rgba(34,197,94,0.05)"
                                        : ollamaStatus === "checking"
                                            ? "rgba(250,204,21,0.05)"
                                            : "rgba(239,68,68,0.05)",
                                borderColor: "transparent",
                                color:
                                    ollamaStatus === "connected"
                                        ? "rgb(74,222,128)"
                                        : ollamaStatus === "checking"
                                            ? "rgb(250,204,21)"
                                            : "rgb(248,113,113)",
                            }}
                        >
                            {ollamaStatus === "connected" && <Wifi size={12} />}
                            {ollamaStatus === "disconnected" && <WifiOff size={12} />}
                            {ollamaStatus === "checking" && <Loader2 size={12} className="animate-spin" />}
                            {ollamaStatus === "connected" ? "Connected" : ollamaStatus === "checking" ? "Checking…" : "Not Found"}
                        </button>
                    </div>
                </div>

                {/* Model Selector Dropdown */}
                <div className="flex items-center gap-2 px-5 py-2.5">
                    <div ref={modelDropdownRef} className="relative">
                        <button
                            onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
                            disabled={isStreaming || availableModels.length === 0}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed min-w-[160px]"
                        >
                            <span className="text-foreground/70 truncate">
                                {resolvedModel || "No models found"}
                            </span>
                            <ChevronDown size={12} className={`text-foreground/40 ml-auto transition-transform duration-200 ${modelDropdownOpen ? "rotate-180" : ""}`} />
                        </button>
                        {modelDropdownOpen && availableModels.length > 0 && (
                            <div className="absolute top-full left-0 mt-1 w-full min-w-[200px] bg-[#1a1a2e] border border-white/[0.1] rounded-lg shadow-2xl shadow-black/40 z-50 overflow-hidden animate-[scaleIn_150ms_ease-out]">
                                {availableModels.map((model) => (
                                    <button
                                        key={model.name}
                                        onClick={() => {
                                            setSelectedModel(model.name);
                                            setModelDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-3 py-2 text-xs transition-colors duration-150 cursor-pointer flex items-center justify-between ${selectedModel === model.name
                                            ? "bg-primary/10 text-primary font-medium"
                                            : "text-foreground/60 hover:bg-white/[0.05] hover:text-foreground/80"
                                            }`}
                                    >
                                        <span className="truncate">{model.name}</span>
                                        {model.size > 0 && (
                                            <span className="text-[10px] text-foreground/25 ml-2 shrink-0">
                                                {(model.size / 1e9).toFixed(1)}GB
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    {availableModels.length === 0 && ollamaStatus === "connected" && (
                        <span className="text-[10px] text-foreground/30">No models installed — run <code className="text-primary/60">ollama pull gemma3:4b</code></span>
                    )}
                </div>

                {/* Messages — sole scrollable area */}
                <div className="flex-1 overflow-y-auto custom-scrollbar px-5 py-6 space-y-5">
                    {visibleMessages.length === 0 && (
                        <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-16">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-[0_0_40px_-10px_rgba(var(--primary),0.2)]">
                                <Bot size={28} className="text-primary" />
                            </div>
                            <div>
                                <p className="text-foreground/70 font-medium mb-1">Ask the VibeCode Bible anything</p>
                                <p className="text-xs text-foreground/30 max-w-sm">
                                    Skills, workflows, AGENTS.md, deployment strategies, or how to ship faster with AI agents.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 justify-center mt-2">
                                {[
                                    "What is the vibe coding workflow?",
                                    "How do skill files work?",
                                    "Antigravity vs Claude Code?",
                                    "How was Siteo built in 3 days?",
                                ].map((q) => (
                                    <button
                                        key={q}
                                        onClick={() => {
                                            setInput(q);
                                            inputRef.current?.focus();
                                        }}
                                        className="px-3 py-1.5 text-xs rounded-full border border-white/[0.08] bg-white/[0.03] text-foreground/50 hover:bg-white/[0.06] hover:text-foreground/70 hover:border-white/[0.12] transition-all duration-200 cursor-pointer"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {visibleMessages.map((msg, i) => (
                        <div
                            key={i}
                            className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                            {msg.role === "assistant" && (
                                <div className="w-7 h-7 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Bot size={14} className="text-primary" />
                                </div>
                            )}

                            <div
                                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === "user"
                                    ? "bg-primary/15 border border-primary/20 text-foreground/90 rounded-br-md"
                                    : "bg-white/[0.04] border border-white/[0.08] text-foreground/80 rounded-bl-md"
                                    }`}
                            >
                                {msg.role === "assistant" && msg.content === "" && isStreaming ? (
                                    <div className="flex items-center gap-2 text-foreground/40">
                                        <Loader2 size={14} className="animate-spin" />
                                        <span className="text-xs">Thinking…</span>
                                    </div>
                                ) : (
                                    <ReactMarkdown
                                        remarkPlugins={[remarkGfm]}
                                        /* eslint-disable @typescript-eslint/no-unused-vars */
                                        components={{
                                            a: ({ node: _node, href, children, ...props }) => {
                                                const isInternal = href?.startsWith('/') || href?.startsWith('#');
                                                if (isInternal) {
                                                    return <Link href={href!} {...props} className="text-primary font-medium hover:underline underline-offset-2">{children}</Link>;
                                                }
                                                return <a href={href} target="_blank" rel="noopener noreferrer" {...props} className="text-primary font-medium hover:underline underline-offset-2">{children}</a>;
                                            },
                                            p: ({ node: _node, ...props }) => (
                                                <p {...props} className="mb-4 last:mb-0 leading-relaxed" />
                                            ),
                                            ul: ({ node: _node, ...props }) => (
                                                <ul {...props} className="list-disc list-outside ml-4 mb-4 space-y-1" />
                                            ),
                                            ol: ({ node: _node, ...props }) => (
                                                <ol {...props} className="list-decimal list-outside ml-4 mb-4 space-y-1" />
                                            ),
                                            li: ({ node: _node, ...props }) => (
                                                <li {...props} className="leading-relaxed" />
                                            ),
                                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                            code: ({ node: _node, inline, ...props }: any) =>
                                                inline ? (
                                                    <code {...props} className="bg-black/20 text-primary/90 rounded px-1.5 py-0.5 text-[0.9em]" />
                                                ) : (
                                                    <code {...props} className="block bg-black/40 p-3 rounded-lg text-[0.9em] overflow-x-auto my-3 border border-white/[0.05]" />
                                                ),
                                            strong: ({ node: _node, ...props }) => (
                                                <strong {...props} className="font-semibold text-foreground/95" />
                                            ),
                                        }}
                                    /* eslint-enable @typescript-eslint/no-unused-vars */
                                    >
                                        {msg.content}
                                    </ReactMarkdown>
                                )}
                            </div>

                            {msg.role === "user" && (
                                <div className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <User size={14} className="text-foreground/50" />
                                </div>
                            )}
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input — pinned to bottom */}
                <div className="shrink-0 px-5 pt-3 pb-4 border-t border-white/[0.04] bg-background/90 backdrop-blur-xl">

                    <form
                        onSubmit={handleSubmit}
                        className="relative"
                    >
                        <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-2.5 focus-within:border-primary/30 focus-within:shadow-[0_0_20px_-6px_rgba(var(--primary),0.15)] transition-all duration-300">
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={
                                    ollamaStatus === "connected"
                                        ? "Ask the VibeCode Bible…"
                                        : "Ollama not connected — start it first"
                                }
                                disabled={isStreaming || ollamaStatus !== "connected"}
                                className="flex-1 bg-transparent text-sm text-foreground/90 placeholder:text-foreground/25 outline-none disabled:opacity-40"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim() || isStreaming || ollamaStatus !== "connected"}
                                className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/25 disabled:opacity-30 disabled:hover:bg-primary/15 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed flex-shrink-0"
                            >
                                {isStreaming ? (
                                    <Loader2 size={14} className="animate-spin" />
                                ) : (
                                    <Send size={14} />
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {pendingDeleteId && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={cancelDelete}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_150ms_ease-out]" />

                    {/* Modal */}
                    <div
                        className="relative bg-[#1a1a2e] border border-white/[0.08] rounded-2xl shadow-2xl w-full max-w-sm p-6 animate-[scaleIn_200ms_ease-out]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                                <AlertTriangle size={18} className="text-red-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-sm font-semibold text-foreground tracking-tight">Delete Chat</h3>
                                <p className="text-xs text-foreground/50 mt-1 leading-relaxed">
                                    This will permanently remove <span className="text-foreground/70 font-medium">&ldquo;{sessions.find(s => s.id === pendingDeleteId)?.title || "this chat"}&rdquo;</span> and all its messages. This action cannot be undone.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-2 mt-6">
                            <button
                                onClick={cancelDelete}
                                className="px-4 py-2 rounded-lg text-xs font-medium text-foreground/60 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] hover:text-foreground/80 transition-all duration-200 cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 rounded-lg text-xs font-medium text-white bg-red-500/80 border border-red-500/30 hover:bg-red-500 transition-all duration-200 cursor-pointer shadow-lg shadow-red-500/10"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
