import { Category } from '../types';

export const category: Category = {
    id: 'cat-1',
    slug: 'getting-started',
    title: 'Getting Started',
    sections: [
        {
            "id": "1",
            "slug": "start-here",
            "title": "1. Start Here",
            "blocks": [
                {
                    "type": "p",
                    "text": "I'm George. I'm 25, and I run @web.dev.george on Instagram with 27K followers. I build SaaS products, I do client work, and I vibe code basically everything."
                },
                {
                    "type": "p",
                    "text": "I built Siteo — an automated landing page generator for real estate agents. I built a CRM that auto-generates branded flyers and videos. I grew an Instagram account to 27K in the developer niche from scratch. I did all of this while figuring things out as I went. No CS degree. No bootcamp. Just building."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "The moment I stopped trying to write perfect code and started treating AI as a partner — everything sped up. I went from spending days on features to shipping them in hours."
                },
                {
                    "type": "p",
                    "text": "This is not a course. There are no modules, no quizzes, no certificates. This is my actual brain dump — the stuff I wish someone had handed me when I started. The tools I use, the systems I built, the mistakes I made, and the workflow that actually works."
                },
                {
                    "type": "p",
                    "text": "Vibe coding gets a bad reputation because people do it wrong. They open ChatGPT, type 'build me an app', get garbage, and blame the AI. That's not vibe coding. Vibe coding is a discipline. It's knowing how to break a problem down, how to give an agent the right context, when to switch tools, and when to just write the code yourself."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "I built this because I kept explaining the same things over and over to developers in my DMs. Now I just send them this."
                },
                {
                    "type": "h2",
                    "text": "What you will get from this"
                },
                {
                    "type": "p",
                    "text": "By the time you finish reading this, you will know my exact setup, how I use Antigravity and Claude Code together, my honest take on every major AI model, and the exact workflow I used to go from idea to deployed product in days. Not theory. Actual stuff I do every day."
                },
                {
                    "type": "h2",
                    "text": "Who this is for"
                },
                {
                    "type": "ul",
                    "items": [
                        "Developers who are already using AI tools but feel like they are not getting the most out of them.",
                        "People who want to build and ship products fast without a team.",
                        "Anyone who has tried vibe coding, got frustrated, and wants to understand why it was not working.",
                        "Developers who want to see how someone actually uses these tools in real projects, not tutorial demos."
                    ]
                },
                {
                    "type": "h2",
                    "text": "Who this is NOT for"
                },
                {
                    "type": "ul",
                    "items": [
                        "People looking for a hand-held step by step tutorial.",
                        "Anyone who thinks AI will write their entire app with zero input.",
                        "Developers who are not willing to actually learn what the tools are doing."
                    ]
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "If you are looking for a magic button that writes code for you, close this now. This is about building a system, not finding a shortcut."
                },
                {
                    "type": "p",
                    "text": "Everything in here is stuff I actually use. If I stopped using it, I removed it. If I found something better, I updated it. This is a living document, not a snapshot."
                }
            ]
        },
        {
            "id": "2",
            "slug": "my-setup",
            "title": "2. My Setup",
            "blocks": [
                {
                    "type": "p",
                    "text": "Before we talk about AI tools, prompts, or workflows — your environment matters. A bad setup creates friction. Friction kills momentum. And when you are vibe coding, momentum is everything."
                },
                {
                    "type": "p",
                    "text": "I have tried a lot of setups. I went through the phase of installing every extension, trying every theme, switching between editors. At some point I just locked in on what worked and stopped changing things. This is that setup."
                },
                {
                    "type": "h2",
                    "text": "Editor"
                },
                {
                    "type": "p",
                    "text": "VS Code. I know, not exciting. But it works, every AI tool integrates with it, and the ecosystem is unmatched. I use Vim keybindings inside VS Code which sounds painful but after two weeks of muscle memory it makes you genuinely faster. You stop reaching for the mouse."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "My opinion: Do not switch to a new editor to feel productive. Get fast in the one you already use."
                },
                {
                    "type": "h2",
                    "text": "Core Stack"
                },
                {
                    "type": "p",
                    "text": "Every project I build uses the same base stack. This is intentional. When your stack is consistent, your AI tools get smarter because they always have the same context. You stop debugging environment issues and start shipping."
                },
                {
                    "type": "ul",
                    "items": [
                        "Next.js 14 — App router, server components, API routes. Does everything.",
                        "Tailwind v4 — Utility first, no context switching between CSS files.",
                        "TypeScript — Non negotiable. The AI writes better code when types are enforced.",
                        "Supabase — Database, auth, storage. Replaces an entire backend for most projects.",
                        "Vercel — Deploy in seconds. Zero config for Next.js."
                    ]
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "Consistency in your stack is a superpower when vibe coding. The agent already knows Next.js and Tailwind deeply. You are speaking its language."
                },
                {
                    "type": "h2",
                    "text": "Extensions"
                },
                {
                    "type": "p",
                    "text": "I keep extensions minimal. Every extension you add is something that can break, slow things down, or conflict with something else. Here is what I actually have installed and use daily."
                },
                {
                    "type": "ul",
                    "items": [
                        "Prettier — Auto formats on save. Set it and forget it.",
                        "ESLint — Catches errors before the AI does.",
                        "Tailwind CSS IntelliSense — Autocomplete for Tailwind classes. Essential.",
                        "GitLens — See who changed what and when without leaving the editor.",
                        "Symbols — Clean minimal file icons. Small thing but makes navigation faster."
                    ]
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "I once had 30 extensions installed. Half of them were doing the same thing. Killed my editor startup time and caused random conflicts. Strip it down."
                },
                {
                    "type": "h2",
                    "text": "Settings"
                },
                {
                    "type": "p",
                    "text": "The two most important settings in VS Code are format on save and a single default formatter. Everything else is preference. If you are not formatting on save you are wasting time."
                },
                {
                    "type": "code",
                    "language": "json",
                    "code": "{\n  \"editor.formatOnSave\": true,\n  \"editor.defaultFormatter\": \"esbenp.prettier-vscode\",\n  \"editor.fontSize\": 14,\n  \"editor.tabSize\": 2,\n  \"editor.wordWrap\": \"on\",\n  \"editor.minimap.enabled\": false,\n  \"terminal.integrated.fontSize\": 13\n}"
                },
                {
                    "type": "h2",
                    "text": "Terminal"
                },
                {
                    "type": "p",
                    "text": "I use the built in VS Code terminal. No separate terminal app. Keeping everything in one window means less context switching. I use zsh with a minimal prompt — just the current directory and git branch. Nothing fancy."
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Pro tip: Keep your dotfiles in a private GitHub repo. If your machine dies or you get a new one, you are back up and running in 15 minutes."
                },
                {
                    "type": "h2",
                    "text": "Folder Structure"
                },
                {
                    "type": "p",
                    "text": "Every project follows the same structure. This matters for AI tools — when the agent knows where things live it makes fewer mistakes."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "src/\n  app/          — Next.js pages and API routes\n  components/   — Reusable UI components\n  lib/          — Utility functions and helpers\n  hooks/        — Custom React hooks\n  types/        — TypeScript type definitions\n  skills/       — AI skill files (more on this later)\nAGENTS.md       — Agent instructions at root\nCLAUDE.md       — Claude Code instructions at root"
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "The skills/ folder is the most important part of this structure. It is where you store instructions for the AI on how to build specific things in your project. This is what makes the agent consistent across sessions."
                }
            ]
        },
        {
            "id": "6",
            "slug": "ai-breakdown",
            "title": "6. AI Breakdown",
            "blocks": [
                {
                    "type": "p",
                    "text": "Everyone has an opinion on which AI model is best. Most of those opinions are based on hype, not actual usage. I use all of these models daily for different things. This is my honest take after real usage, not benchmarks."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Stop chasing the newest model every time one drops. Pick the right tool for the job and get good at using it. Model hopping is just procrastination with extra steps."
                },
                {
                    "type": "h2",
                    "text": "Claude Sonnet 4.6 — my main coding model"
                },
                {
                    "type": "p",
                    "text": "This is what I use for the majority of my coding work. It reasons through problems better than any other model right now. When I give it a complex TypeScript refactor or a tricky API design problem, it does not just generate code — it thinks about the implications, catches edge cases, and tells me when my approach is wrong."
                },
                {
                    "type": "p",
                    "text": "It is also the most honest model. It will tell you when it does not know something instead of making something up. That matters a lot when you are building real products."
                },
                {
                    "type": "ul",
                    "items": [
                        "Best for: complex coding tasks, refactoring, debugging, reasoning through architecture",
                        "Best for: anything where you need the AI to actually think, not just generate",
                        "Weak at: being fast — it is slower than GPT-4o for simple tasks",
                        "Weak at: image generation (use a dedicated tool for that)"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "Claude Sonnet 4.6 is the undisputed king of coding right now. If you are not using it for your main development work you are leaving speed on the table."
                },
                {
                    "type": "h2",
                    "text": "ChatGPT GPT-4o — brainstorming and quick answers"
                },
                {
                    "type": "p",
                    "text": "I do not use ChatGPT for coding anymore. Claude is better. But GPT-4o is still my go-to for brainstorming non-technical things — naming things, writing copy drafts, thinking through business ideas, summarizing documents. It is fast and conversational."
                },
                {
                    "type": "p",
                    "text": "It is also the most recognizable brand so if you are building something for non-technical clients, showing them ChatGPT output is an easier sell than explaining what Claude is."
                },
                {
                    "type": "ul",
                    "items": [
                        "Best for: brainstorming, naming, copywriting, quick non-code questions",
                        "Best for: non-technical clients who recognize the brand",
                        "Weak at: complex multi-file coding tasks",
                        "Weak at: reasoning through architectural decisions"
                    ]
                },
                {
                    "type": "h2",
                    "text": "Gemini 3.1 Pro — the context window beast"
                },
                {
                    "type": "p",
                    "text": "Gemini is heavily underrated and I think it is because people use it wrong. Nobody beats Gemini when it comes to context windows. I can dump an entire codebase, 50 PDFs, a full documentation site, and a 2 hour transcript into a single Gemini session and it handles it."
                },
                {
                    "type": "p",
                    "text": "I use it specifically when I need to understand a large unfamiliar codebase, when I have a ton of reference documents I want to query, or when I am doing research that requires reading a lot of sources at once. For those tasks it is unmatched."
                },
                {
                    "type": "ul",
                    "items": [
                        "Best for: massive context — entire codebases, huge documents, research",
                        "Best for: querying across multiple large files or PDFs at once",
                        "Weak at: coding quality compared to Claude",
                        "Weak at: following precise formatting or structural instructions"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "My actual use case for Gemini: I paste in an entire third party API documentation and ask it to write me a typed TypeScript client for it. Works incredibly well because it can hold the whole doc in context."
                },
                {
                    "type": "h2",
                    "text": "My model routing in plain English"
                },
                {
                    "type": "p",
                    "text": "This is the actual decision I make every time I need AI help. It takes about 2 seconds once you have the habit."
                },
                {
                    "type": "ol",
                    "items": [
                        "Writing or debugging code → Claude Sonnet 4.6",
                        "Brainstorming, naming, copy, non-code thinking → GPT-4o",
                        "Need to process a huge amount of text or docs → Gemini 3.1 Pro",
                        "Building UI fast with an agent → Antigravity with Claude under the hood",
                        "CLI refactoring or deep reasoning → Claude Code"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Pro tip: Do not use one model for everything. The 10 seconds it takes to switch models saves you hours of bad output. Each model has a lane. Keep it in its lane."
                },
                {
                    "type": "h2",
                    "text": "What about the others?"
                },
                {
                    "type": "p",
                    "text": "There are dozens of other models — Mistral, Llama, DeepSeek, Grok, and more dropping every month. My honest take: most of them are not worth the context switching cost for a solo developer trying to ship. The three models above cover 99% of what I need. Master those before adding more tools."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Chasing every new model release is a productivity killer. A new model drops, you spend two days testing it, you get distracted, you ship nothing. Stay focused."
                }
            ]
        }
    ]
};
