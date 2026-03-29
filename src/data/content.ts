export type BlockType = 'p' | 'h2' | 'h3' | 'callout' | 'code' | 'ul' | 'ol';

export interface Block {
    type: BlockType;
    text?: string;
    items?: string[];
    variant?: 'fire' | 'skull' | 'idea' | 'zap';
    language?: string;
    code?: string;
}

export interface Section {
    id: string;
    slug: string;
    title: string;
    blocks: Block[];
}

export const content: Section[] = [
    {
        id: '1',
        slug: 'start-here',
        title: '1. Start Here',
        blocks: [
            { type: 'p', text: "I'm George. I'm 22, from Armenia, and I run @web.dev.george on Instagram with 27K followers. I build SaaS products, I do client work, and I vibe code basically everything." },
            { type: 'p', text: "I built Siteo — an automated landing page generator for real estate agents. I built a CRM that auto-generates branded flyers and videos. I grew an Instagram account to 27K in the developer niche from scratch. I did all of this while figuring things out as I went. No CS degree. No bootcamp. Just building." },
            { type: 'callout', variant: 'fire', text: 'The moment I stopped trying to write perfect code and started treating AI as a partner — everything sped up. I went from spending days on features to shipping them in hours.' },
            { type: 'p', text: "This is not a course. There are no modules, no quizzes, no certificates. This is my actual brain dump — the stuff I wish someone had handed me when I started. The tools I use, the systems I built, the mistakes I made, and the workflow that actually works." },
            { type: 'p', text: "Vibe coding gets a bad reputation because people do it wrong. They open ChatGPT, type 'build me an app', get garbage, and blame the AI. That's not vibe coding. Vibe coding is a discipline. It's knowing how to break a problem down, how to give an agent the right context, when to switch tools, and when to just write the code yourself." },
            { type: 'callout', variant: 'idea', text: 'I built this because I kept explaining the same things over and over to developers in my DMs. Now I just send them this.' },
            { type: 'h2', text: 'What you will get from this' },
            { type: 'p', text: "By the time you finish reading this, you will know my exact setup, how I use Antigravity and Claude Code together, my honest take on every major AI model, and the exact workflow I used to go from idea to deployed product in days. Not theory. Actual stuff I do every day." },
            { type: 'h2', text: 'Who this is for' },
            {
                type: 'ul', items: [
                    'Developers who are already using AI tools but feel like they are not getting the most out of them.',
                    'People who want to build and ship products fast without a team.',
                    'Anyone who has tried vibe coding, got frustrated, and wants to understand why it was not working.',
                    'Developers who want to see how someone actually uses these tools in real projects, not tutorial demos.'
                ]
            },
            { type: 'h2', text: 'Who this is NOT for' },
            {
                type: 'ul', items: [
                    'People looking for a hand-held step by step tutorial.',
                    'Anyone who thinks AI will write their entire app with zero input.',
                    'Developers who are not willing to actually learn what the tools are doing.'
                ]
            },
            { type: 'callout', variant: 'skull', text: 'If you are looking for a magic button that writes code for you, close this now. This is about building a system, not finding a shortcut.' },
            { type: 'p', text: "Everything in here is stuff I actually use. If I stopped using it, I removed it. If I found something better, I updated it. This is a living document, not a snapshot." },
        ]
    },
    {
        id: '2',
        slug: 'my-setup',
        title: '2. My Setup',
        blocks: [
            { type: 'p', text: "Before we talk about AI tools, prompts, or workflows — your environment matters. A bad setup creates friction. Friction kills momentum. And when you are vibe coding, momentum is everything." },
            { type: 'p', text: "I have tried a lot of setups. I went through the phase of installing every extension, trying every theme, switching between editors. At some point I just locked in on what worked and stopped changing things. This is that setup." },
            { type: 'h2', text: 'Editor' },
            { type: 'p', text: "VS Code. I know, not exciting. But it works, every AI tool integrates with it, and the ecosystem is unmatched. I use Vim keybindings inside VS Code which sounds painful but after two weeks of muscle memory it makes you genuinely faster. You stop reaching for the mouse." },
            { type: 'callout', variant: 'idea', text: 'My opinion: Do not switch to a new editor to feel productive. Get fast in the one you already use.' },
            { type: 'h2', text: 'Core Stack' },
            { type: 'p', text: "Every project I build uses the same base stack. This is intentional. When your stack is consistent, your AI tools get smarter because they always have the same context. You stop debugging environment issues and start shipping." },
            {
                type: 'ul', items: [
                    'Next.js 14 — App router, server components, API routes. Does everything.',
                    'Tailwind v4 — Utility first, no context switching between CSS files.',
                    'TypeScript — Non negotiable. The AI writes better code when types are enforced.',
                    'Supabase — Database, auth, storage. Replaces an entire backend for most projects.',
                    'Vercel — Deploy in seconds. Zero config for Next.js.'
                ]
            },
            { type: 'callout', variant: 'fire', text: 'Consistency in your stack is a superpower when vibe coding. The agent already knows Next.js and Tailwind deeply. You are speaking its language.' },
            { type: 'h2', text: 'Extensions' },
            { type: 'p', text: "I keep extensions minimal. Every extension you add is something that can break, slow things down, or conflict with something else. Here is what I actually have installed and use daily." },
            {
                type: 'ul', items: [
                    'Prettier — Auto formats on save. Set it and forget it.',
                    'ESLint — Catches errors before the AI does.',
                    'Tailwind CSS IntelliSense — Autocomplete for Tailwind classes. Essential.',
                    'GitLens — See who changed what and when without leaving the editor.',
                    'Symbols — Clean minimal file icons. Small thing but makes navigation faster.'
                ]
            },
            { type: 'callout', variant: 'skull', text: 'I once had 30 extensions installed. Half of them were doing the same thing. Killed my editor startup time and caused random conflicts. Strip it down.' },
            { type: 'h2', text: 'Settings' },
            { type: 'p', text: "The two most important settings in VS Code are format on save and a single default formatter. Everything else is preference. If you are not formatting on save you are wasting time." },
            { type: 'code', language: 'json', code: '{\n  "editor.formatOnSave": true,\n  "editor.defaultFormatter": "esbenp.prettier-vscode",\n  "editor.fontSize": 14,\n  "editor.tabSize": 2,\n  "editor.wordWrap": "on",\n  "editor.minimap.enabled": false,\n  "terminal.integrated.fontSize": 13\n}' },
            { type: 'h2', text: 'Terminal' },
            { type: 'p', text: "I use the built in VS Code terminal. No separate terminal app. Keeping everything in one window means less context switching. I use zsh with a minimal prompt — just the current directory and git branch. Nothing fancy." },
            { type: 'callout', variant: 'zap', text: 'Pro tip: Keep your dotfiles in a private GitHub repo. If your machine dies or you get a new one, you are back up and running in 15 minutes.' },
            { type: 'h2', text: 'Folder Structure' },
            { type: 'p', text: "Every project follows the same structure. This matters for AI tools — when the agent knows where things live it makes fewer mistakes." },
            { type: 'code', language: 'markdown', code: 'src/\n  app/          — Next.js pages and API routes\n  components/   — Reusable UI components\n  lib/          — Utility functions and helpers\n  hooks/        — Custom React hooks\n  types/        — TypeScript type definitions\n  skills/       — AI skill files (more on this later)\nAGENTS.md       — Agent instructions at root\nCLAUDE.md       — Claude Code instructions at root' },
            { type: 'callout', variant: 'idea', text: 'The skills/ folder is the most important part of this structure. It is where you store instructions for the AI on how to build specific things in your project. This is what makes the agent consistent across sessions.' },
        ]
    },
    {
        id: '3',
        slug: 'antigravity',
        title: '3. Antigravity',
        blocks: [
            { type: 'p', text: "Antigravity is my main tool for building. Not for small edits or quick fixes — for actual features. The kind of task where you need to touch 5 files, wire up a new API route, update the types, and make sure nothing breaks. That is where Antigravity shines." },
            { type: 'p', text: "Most people use AI coding tools wrong. They open a blank chat, type something vague like 'build me a login page', get something that half works, then spend an hour debugging why the styles are wrong and the types don't match. That's not the tool's fault. That's a context problem." },
            { type: 'callout', variant: 'fire', text: 'This changed everything for me: you have to think like a senior developer giving instructions to a very talented junior. The junior is smart but knows nothing about your project unless you tell them.' },
            { type: 'h2', text: 'How I actually use it' },
            { type: 'p', text: "Every time I open Antigravity I give it three things: the task, the files it needs to look at, and the constraints. That's it. No essays. No over-explaining. Just enough context to not make a mess." },
            { type: 'code', language: 'markdown', code: 'Task: Add a loading skeleton to the agent listing page.\nFiles: src/app/agents/page.tsx, src/components/AgentCard.tsx\nConstraints: Use existing Tailwind classes only. Do not change the data fetching logic.' },
            { type: 'p', text: "That prompt takes me 30 seconds to write and Antigravity gets it right almost every time. The more specific you are about constraints, the less cleanup you do afterwards." },
            { type: 'callout', variant: 'skull', text: 'Vague prompts are the number one reason people think AI coding tools are bad. The tool is not bad. The prompt is bad.' },
            { type: 'h2', text: 'The AGENTS.md System' },
            { type: 'p', text: "This is the most important thing in this entire document. If you take one thing from reading this, make it AGENTS.md." },
            { type: 'p', text: "AGENTS.md is a file you create at the root of your project. It is a set of rules and instructions that Antigravity reads every single session. You write it once and it applies to every prompt forever. It is basically a permanent system prompt for your entire codebase." },
            { type: 'p', text: "Before I had AGENTS.md, the agent would randomly use inline styles, forget to use TypeScript, import things from the wrong place, or ignore my folder structure. Not because it was bad — because it had no memory of what my project looked like. AGENTS.md fixed all of that." },
            { type: 'code', language: 'markdown', code: '# AGENTS.md\n\n## Stack\n- Next.js 14 App Router\n- Tailwind v4\n- TypeScript strict mode\n- Supabase for database and auth\n\n## Rules\n- Always use TypeScript. No plain JS files.\n- Never use inline styles. Always use Tailwind classes.\n- All components go in src/components/\n- All utility functions go in src/lib/\n- Always use existing types from src/types/ before creating new ones.\n\n## Skill Files\n- For landing pages: read src/skills/landing-page.md\n- For auth flows: read src/skills/auth.md\n- For database queries: read src/skills/supabase.md\n\n## Tone\n- Write clean, minimal code\n- No unnecessary comments\n- No console.logs left in production code' },
            { type: 'callout', variant: 'fire', text: 'Once I added AGENTS.md the agent stopped making stupid decisions. It finally had context. My cleanup time after each task dropped by about 80%.' },
            { type: 'h2', text: 'Skill Files' },
            { type: 'p', text: "Skill files are markdown files inside src/skills/ that teach the agent how to build specific things in your project. AGENTS.md points to them. The agent reads them before doing the relevant task." },
            { type: 'p', text: "For example my landing-page.md skill file tells the agent exactly what sections a landing page should have, what components to use, what the hero section should look like, and what CTA patterns I prefer. Every landing page I generate with Siteo uses this skill file. Every single one comes out consistent." },
            { type: 'code', language: 'markdown', code: '# src/skills/landing-page.md\n\n## Structure\nEvery landing page must include:\n1. Hero section with headline, subheadline, and CTA button\n2. Features section with 3 cards\n3. Social proof section\n4. Final CTA section\n5. Footer\n\n## Rules\n- Hero headline must be under 8 words\n- CTA buttons use variant="primary" from src/components/Button.tsx\n- Always include a mobile responsive layout\n- Use semantic HTML (section, article, header, footer)' },
            { type: 'callout', variant: 'zap', text: 'Pro tip: Every time you find yourself correcting the agent for the same mistake twice, add a rule to AGENTS.md or the relevant skill file. Over time your agent gets smarter and smarter for your specific project.' },
            { type: 'h2', text: 'What Antigravity is bad at' },
            { type: 'p', text: "Being honest about this matters. Antigravity struggles when the task is too abstract or requires deep reasoning about business logic. If I ask it to 'improve the user experience of the onboarding flow' I will get something generic. But if I say 'add a progress bar to the onboarding flow that shows step 1 of 3' it nails it." },
            { type: 'p', text: "It also struggles with heavily nested dynamic components where the props chain is complex. In those cases I switch to Claude Code which handles pure TypeScript logic much better." },
            {
                type: 'ul', items: [
                    'Bad at: abstract UX decisions',
                    'Bad at: deeply nested prop drilling fixes',
                    'Bad at: tasks with zero context or files provided',
                    'Good at: feature scaffolding with clear requirements',
                    'Good at: multi-file refactors when you point it at the right files',
                    'Good at: building UI components from a description'
                ]
            },
            { type: 'h2', text: 'Useful YouTube Resources' },
            {
                type: 'ul', items: [
                    '[Fireship — Best channel for fast AI coding breakdowns](https://www.youtube.com/@Fireship)',
                    '[Theo (t3.gg) — Opinionated takes on vibe coding and modern web dev](https://www.youtube.com/@t3dotgg)',
                    '[ThePrimeagen — No BS opinions on AI tools and dev workflow](https://www.youtube.com/@ThePrimeTimeagen)'
                ]
            }
        ]
    },
    {
        id: '4',
        slug: 'claude-code',
        title: '4. Claude Code',
        blocks: [
            { type: 'p', text: "Claude Code is a CLI tool built by Anthropic that lets you run Claude directly in your terminal, inside your actual project. Not a chat window. Not a separate app. It sits in your codebase, reads your files, and makes changes directly." },
            { type: 'p', text: "I use it differently to Antigravity. Antigravity is my partner for building features with UI. Claude Code is what I reach for when I need to reason through something complex — a tricky TypeScript refactor, a database migration, a logic bug I cannot figure out. It thinks differently. It is slower but more deliberate." },
            { type: 'callout', variant: 'fire', text: 'Claude Code feels like pairing with a senior developer who reads your entire codebase before saying anything. It does not just generate — it reasons.' },
            { type: 'h2', text: 'Installation' },
            { type: 'p', text: "One command. You need Node.js installed and an Anthropic API key. After install, run claude in any project folder and it starts." },
            { type: 'code', language: 'bash', code: 'npm install -g @anthropic-ai/claude-code' },
            { type: 'p', text: "First time you run it, it will ask for your API key. Set it once and it remembers. Then just navigate to your project root and type claude to start a session." },
            { type: 'callout', variant: 'zap', text: 'Pro tip: Run claude from the root of your project, not a subfolder. It needs to see the full project structure to be useful.' },
            { type: 'h2', text: 'The CLAUDE.md System' },
            { type: 'p', text: "Same concept as AGENTS.md but specific to Claude Code. You create a CLAUDE.md file at the root of your project and it gets read at the start of every session. This is how you give it permanent context about your project without repeating yourself every time." },
            { type: 'p', text: "The most important things to put in CLAUDE.md are your stack, your conventions, and your boundaries. Boundaries especially — you do not want it touching config files, environment variables, or anything that could break your deployment." },
            { type: 'code', language: 'markdown', code: '# CLAUDE.md\n\n## Stack\n- Next.js 14 App Router\n- Tailwind v4\n- TypeScript strict mode\n- Supabase\n\n## Conventions\n- Functional React components only\n- All hooks go in src/hooks/\n- All types go in src/types/\n- Never use any type — always be explicit\n\n## Boundaries — DO NOT TOUCH\n- .env and .env.local\n- next.config.js\n- tailwind.config.ts\n- package.json\n- Any file in /migrations\n\n## Preferred Patterns\n- Use server components by default, client components only when needed\n- Always handle loading and error states\n- Use existing utility functions from src/lib/ before writing new ones' },
            { type: 'callout', variant: 'skull', text: 'I once let Claude Code touch my next.config.js without a boundary rule. It helpfully rewrote it and broke my entire build. Lesson learned. Add boundaries before you start.' },
            { type: 'h2', text: 'Real CLI Workflow' },
            { type: 'p', text: "My actual session flow every time I use Claude Code. This is not theory — this is what I do." },
            {
                type: 'ol', items: [
                    'Navigate to project root in terminal',
                    'Run claude to start the session',
                    'Describe the task in one clear sentence — no essays',
                    'Let it read whatever files it asks for — do not skip this step',
                    'Review every diff carefully before accepting — it is fast but check it',
                    'If something looks wrong, tell it exactly what is wrong and let it fix it',
                    'Once done, run npm run build to verify nothing broke'
                ]
            },
            { type: 'callout', variant: 'idea', text: 'My opinion: The review step is where most people get lazy. Claude Code is good but it is not perfect. Read the diff. Every time. Takes 30 seconds and saves you from mysterious bugs.' },
            { type: 'h2', text: 'What Claude Code is best at' },
            { type: 'p', text: "After using it daily I have a clear picture of where it excels versus where I should use Antigravity instead." },
            {
                type: 'ul', items: [
                    'Refactoring complex TypeScript logic without touching the UI',
                    'Writing and fixing unit tests',
                    'Debugging — describe the bug and it traces through the logic',
                    'Database query optimization',
                    'CLI scripts and automation tasks',
                    'Understanding an unfamiliar codebase — just ask it to explain a file'
                ]
            },
            { type: 'h2', text: 'Useful Resources' },
            {
                type: 'ul', items: [
                    '[Anthropic Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code)',
                    '[Anthropic YouTube — Claude Code demos](https://www.youtube.com/@Anthropic/videos)',
                    '[Fireship YouTube — AI tool breakdowns](https://www.youtube.com/@Fireship)'
                ]
            }
        ]
    },
    {
        id: '5',
        slug: 'antigravity-vs-claude-code',
        title: '5. Antigravity vs Claude Code',
        blocks: [
            { type: 'p', text: "This is the most common question I get from developers who find my content. Which one should I use? The honest answer is both — but for completely different things. Trying to use one for everything is exactly how you end up frustrated and thinking AI tools are overhyped." },
            { type: 'p', text: "Think of it this way. Antigravity is like having a contractor who shows up, looks at the blueprints, and builds the thing. Claude Code is like having an architect who sits down, reads everything carefully, and tells you exactly what needs to change and why. Both are valuable. Neither replaces the other." },
            { type: 'callout', variant: 'skull', text: 'I wasted weeks trying to make one tool do everything. Every time I forced the wrong tool for the job I ended up with more work than if I had just written it myself.' },
            { type: 'h2', text: 'Antigravity is better when' },
            {
                type: 'ul', items: [
                    'You are building a full-stack feature that touches both UI and backend',
                    'You need to see the result instantly in the browser',
                    'The task involves creating new components or pages',
                    'You are scaffolding a new project or section from scratch',
                    'You need multi-file changes wired together correctly in one pass',
                    'The task is visual — layouts, responsive design, component styling'
                ]
            },
            { type: 'h2', text: 'Claude Code is better when' },
            {
                type: 'ul', items: [
                    'You have a bug and you need someone to trace the logic and find it',
                    'You are refactoring TypeScript types or utility functions',
                    'You need to write or fix unit tests',
                    'The task is purely backend — API logic, database queries, migrations',
                    'You need to understand a file or codebase you did not write',
                    'You are doing CLI automation or scripting tasks'
                ]
            },
            { type: 'h2', text: 'How I actually switch between them' },
            { type: 'p', text: "My typical day looks like this: I open Antigravity to build a new feature. UI, API route, types, all wired together. Then I switch to Claude Code to refactor the logic I just built, clean up the TypeScript, and write tests for the critical paths. Then back to Antigravity to build the next feature." },
            { type: 'p', text: "They work incredibly well together because they have different strengths. Antigravity ships fast. Claude Code makes it solid. I use both on almost every project." },
            { type: 'callout', variant: 'fire', text: 'The workflow that changed everything: build fast with Antigravity, then pass the output to Claude Code and say — review this, find any issues, clean up the types. You get speed AND quality.' },
            { type: 'h2', text: 'The one rule' },
            { type: 'p', text: "If the task involves the browser and you need to see it — Antigravity. If the task lives in the terminal and you need to think — Claude Code. That single rule covers 90% of decisions." },
            { type: 'callout', variant: 'zap', text: 'Pro tip: Start a feature in Antigravity to get it working fast, then open Claude Code and ask it to review what was just built. It will catch things you missed and suggest improvements you would not have thought of.' },
        ]
    },
    {
        id: '6',
        slug: 'ai-breakdown',
        title: '6. AI Breakdown',
        blocks: [
            { type: 'p', text: "Everyone has an opinion on which AI model is best. Most of those opinions are based on hype, not actual usage. I use all of these models daily for different things. This is my honest take after real usage, not benchmarks." },
            { type: 'callout', variant: 'skull', text: 'Stop chasing the newest model every time one drops. Pick the right tool for the job and get good at using it. Model hopping is just procrastination with extra steps.' },
            { type: 'h2', text: 'Claude Sonnet 4.6 — my main coding model' },
            { type: 'p', text: "This is what I use for the majority of my coding work. It reasons through problems better than any other model right now. When I give it a complex TypeScript refactor or a tricky API design problem, it does not just generate code — it thinks about the implications, catches edge cases, and tells me when my approach is wrong." },
            { type: 'p', text: "It is also the most honest model. It will tell you when it does not know something instead of making something up. That matters a lot when you are building real products." },
            {
                type: 'ul', items: [
                    'Best for: complex coding tasks, refactoring, debugging, reasoning through architecture',
                    'Best for: anything where you need the AI to actually think, not just generate',
                    'Weak at: being fast — it is slower than GPT-4o for simple tasks',
                    'Weak at: image generation (use a dedicated tool for that)'
                ]
            },
            { type: 'callout', variant: 'fire', text: 'Claude Sonnet 4.6 is the undisputed king of coding right now. If you are not using it for your main development work you are leaving speed on the table.' },
            { type: 'h2', text: 'ChatGPT GPT-4o — brainstorming and quick answers' },
            { type: 'p', text: "I do not use ChatGPT for coding anymore. Claude is better. But GPT-4o is still my go-to for brainstorming non-technical things — naming things, writing copy drafts, thinking through business ideas, summarizing documents. It is fast and conversational." },
            { type: 'p', text: "It is also the most recognizable brand so if you are building something for non-technical clients, showing them ChatGPT output is an easier sell than explaining what Claude is." },
            {
                type: 'ul', items: [
                    'Best for: brainstorming, naming, copywriting, quick non-code questions',
                    'Best for: non-technical clients who recognize the brand',
                    'Weak at: complex multi-file coding tasks',
                    'Weak at: reasoning through architectural decisions'
                ]
            },
            { type: 'h2', text: 'Gemini 3.1 Pro — the context window beast' },
            { type: 'p', text: "Gemini is heavily underrated and I think it is because people use it wrong. Nobody beats Gemini when it comes to context windows. I can dump an entire codebase, 50 PDFs, a full documentation site, and a 2 hour transcript into a single Gemini session and it handles it." },
            { type: 'p', text: "I use it specifically when I need to understand a large unfamiliar codebase, when I have a ton of reference documents I want to query, or when I am doing research that requires reading a lot of sources at once. For those tasks it is unmatched." },
            {
                type: 'ul', items: [
                    'Best for: massive context — entire codebases, huge documents, research',
                    'Best for: querying across multiple large files or PDFs at once',
                    'Weak at: coding quality compared to Claude',
                    'Weak at: following precise formatting or structural instructions'
                ]
            },
            { type: 'callout', variant: 'idea', text: 'My actual use case for Gemini: I paste in an entire third party API documentation and ask it to write me a typed TypeScript client for it. Works incredibly well because it can hold the whole doc in context.' },
            { type: 'h2', text: 'My model routing in plain English' },
            { type: 'p', text: "This is the actual decision I make every time I need AI help. It takes about 2 seconds once you have the habit." },
            {
                type: 'ol', items: [
                    'Writing or debugging code → Claude Sonnet 4.6',
                    'Brainstorming, naming, copy, non-code thinking → GPT-4o',
                    'Need to process a huge amount of text or docs → Gemini 3.1 Pro',
                    'Building UI fast with an agent → Antigravity with Claude under the hood',
                    'CLI refactoring or deep reasoning → Claude Code'
                ]
            },
            { type: 'callout', variant: 'zap', text: 'Pro tip: Do not use one model for everything. The 10 seconds it takes to switch models saves you hours of bad output. Each model has a lane. Keep it in its lane.' },
            { type: 'h2', text: 'What about the others?' },
            { type: 'p', text: "There are dozens of other models — Mistral, Llama, DeepSeek, Grok, and more dropping every month. My honest take: most of them are not worth the context switching cost for a solo developer trying to ship. The three models above cover 99% of what I need. Master those before adding more tools." },
            { type: 'callout', variant: 'skull', text: 'Chasing every new model release is a productivity killer. A new model drops, you spend two days testing it, you get distracted, you ship nothing. Stay focused.' },
        ]
    },
    {
        id: '7',
        slug: 'vibe-coding-workflow',
        title: '7. Vibe Coding Workflow',
        blocks: [
            { type: 'p', text: "This is the section everything else has been building towards. The setup, the tools, the models — they all feed into this. This is the actual workflow I use to go from a blank page to a deployed product fast." },
            { type: 'p', text: "I want to be clear about what fast means. Fast does not mean sloppy. Fast does not mean letting the AI write everything while you watch. Fast means having a system so tight that you are never blocked, never confused about what to do next, and never wasting time on things that do not matter." },
            { type: 'callout', variant: 'fire', text: 'The biggest unlock for me was realizing that vibe coding is not about prompting. It is about thinking. The better you think through the problem before touching the AI, the faster everything goes.' },
            { type: 'h2', text: 'Step 1 — The Brain Dump' },
            { type: 'p', text: "Before I open any AI tool I open a blank markdown file and write down everything. Every feature, every page, every user flow, every edge case I can think of. I do not filter. I just dump." },
            { type: 'p', text: "Then I read through it and cut 50% of it. Ruthlessly. If a feature is not essential for the first version it goes in a 'later' section at the bottom. I have shipped more products since I started cutting early than I ever did trying to build everything at once." },
            { type: 'code', language: 'markdown', code: '# Project: Siteo\n\n## Core features (must have v1)\n- Landing page generator with AI\n- Real estate agent inputs (name, photo, listings)\n- Shareable link for each generated page\n- Email magic link auth\n\n## Later (do not touch until v1 is live)\n- Custom domain support\n- Analytics dashboard\n- Team accounts\n- White label option' },
            { type: 'callout', variant: 'skull', text: 'The graveyard of unfinished projects is full of people who tried to build everything in v1. Cut it down. Ship the small thing. Add the rest later.' },
            { type: 'h2', text: 'Step 2 — The Architecture Pass' },
            { type: 'p', text: "Once I know what I am building I spend 10-15 minutes thinking about the structure before writing a single prompt. What pages do I need. What components. What API routes. What database tables. What does the data flow look like." },
            { type: 'p', text: "I write this in the same markdown file. It does not need to be perfect. It just needs to exist so I am not making these decisions in the middle of a prompt when the agent is waiting." },
            { type: 'code', language: 'markdown', code: '## Pages\n- / — landing page (public)\n- /generate — the generator form (auth required)\n- /p/[slug] — public shareable agent page\n- /dashboard — saved pages list (auth required)\n\n## Components\n- GeneratorForm — inputs for agent details\n- PagePreview — live preview of generated page\n- AgentCard — card for dashboard list\n\n## API Routes\n- POST /api/generate — calls AI, returns HTML\n- POST /api/save — saves page to Supabase\n- GET /api/pages — returns user pages' },
            { type: 'h2', text: 'Step 3 — The Scaffold Prompt' },
            { type: 'p', text: "Now I open Antigravity and give it one job: build the skeleton. Empty components, empty pages, empty API routes with the right structure and types. No logic yet. Just the shells." },
            { type: 'p', text: "This is the most important prompt in the whole project. Get this right and every subsequent prompt is easy because the agent always has the right structure to work with." },
            { type: 'code', language: 'markdown', code: 'Scaffold this Next.js 14 App Router project.\n\nPages needed:\n- src/app/page.tsx — marketing landing page, empty for now\n- src/app/generate/page.tsx — protected route, empty for now\n- src/app/p/[slug]/page.tsx — public agent page, empty for now\n- src/app/dashboard/page.tsx — protected route, empty for now\n\nComponents needed:\n- src/components/GeneratorForm.tsx — accepts AgentInput type, onSubmit callback\n- src/components/PagePreview.tsx — accepts html string prop\n- src/components/AgentCard.tsx — accepts SavedPage type\n\nAPI Routes:\n- src/app/api/generate/route.ts — POST, accepts AgentInput, returns { html: string }\n- src/app/api/save/route.ts — POST, accepts html + metadata\n- src/app/api/pages/route.ts — GET, returns SavedPage[]\n\nTypes needed in src/types/index.ts:\n- AgentInput\n- SavedPage\n\nJust the shells. Correct TypeScript types. No implementation logic yet.' },
            { type: 'callout', variant: 'fire', text: 'The scaffold prompt is everything. When you get this right the rest of the project is just filling in boxes. The agent always knows exactly where to put things.' },
            { type: 'h2', text: 'Step 4 — Feature by Feature' },
            { type: 'p', text: "After the scaffold is in place I build one feature at a time. One prompt per feature. I never give the agent two things to do at once. This is the discipline that separates people who ship from people who have half-finished projects." },
            { type: 'p', text: "Each prompt follows the same format: task, files, constraints. The agent does the work. I review the diff. I test it in the browser. If it works I move to the next feature. If it does not I give it specific feedback — not 'fix it' but exactly what is wrong." },
            {
                type: 'ol', items: [
                    'Write the feature prompt — task, files, constraints',
                    'Let Antigravity make the changes',
                    'Review every file it touched in the diff',
                    'Run the dev server and test it in the browser',
                    'If broken — describe exactly what is wrong, not just "it does not work"',
                    'If working — commit and move to the next feature'
                ]
            },
            { type: 'callout', variant: 'zap', text: 'Pro tip: Commit after every working feature. Not at the end of the day. After every single working feature. If the agent breaks something in the next prompt you can roll back in seconds.' },
            { type: 'h2', text: 'Step 5 — The Claude Code Pass' },
            { type: 'p', text: "Once a section of the app is working I switch to Claude Code and do a review pass. I ask it to read the files I just built and tell me what is wrong, what could be cleaner, and what edge cases I missed." },
            { type: 'p', text: "It almost always finds something. A missing error state. A type that should be more specific. A function that is doing two things when it should do one. This pass is what turns fast code into solid code." },
            { type: 'code', language: 'markdown', code: 'Review these files:\n- src/app/api/generate/route.ts\n- src/components/GeneratorForm.tsx\n\nTell me:\n1. Any TypeScript issues or loose types\n2. Missing error handling\n3. Any obvious edge cases not covered\n4. Anything that could break in production\n\nDo not rewrite anything yet. Just tell me what you find.' },
            { type: 'callout', variant: 'idea', text: 'Ask Claude Code to review before it fixes. If you ask it to fix directly it will rewrite things you did not want touched. Ask for the report first, then approve what to fix.' },
            { type: 'h2', text: 'Step 6 — Deploy Early' },
            { type: 'p', text: "I deploy to Vercel before the product is finished. Not when it is done — early. As soon as the core flow works I push it live. This forces real feedback, catches environment issues early, and means I am always shipping instead of endlessly building locally." },
            { type: 'p', text: "Vercel deployment for Next.js is zero config. Push to GitHub, connect to Vercel, done. Every push to main auto-deploys. There is no reason to wait." },
            { type: 'callout', variant: 'fire', text: 'Deploy early. The number of times I have built something locally for weeks only to find a production environment issue on day one of launch is embarrassing. Deploy on day one of the project.' },
            { type: 'h2', text: 'The full workflow in one place' },
            {
                type: 'ol', items: [
                    'Brain dump everything into a markdown file',
                    'Cut 50% — only essential v1 features survive',
                    'Map the architecture — pages, components, API routes, types',
                    'Write the scaffold prompt and build the skeleton with Antigravity',
                    'Build one feature at a time — task, files, constraints, review, test, commit',
                    'Switch to Claude Code for a review pass after each section',
                    'Deploy to Vercel early and keep it live from day one'
                ]
            },
        ]
    },
    {
        id: '8',
        slug: 'real-project',
        title: '8. Real Project',
        blocks: [
            { type: 'p', text: "Everything in the previous sections is theory until you see it applied to a real project. This is the full story of how I built Siteo — an automated landing page generator for real estate agents — using exactly this workflow. No gaps, no skipping the hard parts." },
            { type: 'p', text: "Siteo generates a branded landing page for a real estate agent in seconds. The agent fills in their name, photo, listings, contact info, and the AI produces a fully styled, mobile responsive, SEO optimized page with a shareable link. Real estate agents use it to send to leads instead of a business card." },
            { type: 'callout', variant: 'fire', text: 'Siteo went from idea to deployed in 3 days. Not 3 days of 8 hour grind sessions — 3 actual calendar days of focused building using this exact workflow.' },
            { type: 'h2', text: 'Day 1 — Brain dump and scaffold' },
            { type: 'p', text: "I started with the markdown brain dump. Wrote down everything Siteo could eventually be — custom domains, analytics, team accounts, white label, CRM integration, the works. Then I cut 80% of it and defined v1 as three things only: generate a page, save it, share it with a link." },
            { type: 'p', text: "Then I mapped the architecture. Four pages, three API routes, four components, one Supabase table. That was the entire v1 scope written in a markdown file before I touched any code." },
            { type: 'code', language: 'markdown', code: '# Siteo V1 Scope\n\n## Only these three things\n1. Agent fills in form → AI generates landing page HTML\n2. Page gets saved to Supabase with a unique slug\n3. Shareable link at /p/[slug] shows the page publicly\n\n## Stack\n- Next.js 14 App Router\n- Tailwind v4\n- Supabase (database + auth)\n- OpenAI API for generation\n- Vercel for deployment\n\n## Database\n- Table: pages\n  - id, user_id, slug, html, agent_name, created_at' },
            { type: 'p', text: "Then I wrote the scaffold prompt. This took me about 10 minutes to write carefully. The agent built the entire skeleton in about 2 minutes — all the empty files, correct TypeScript types, folder structure exactly how I wanted it." },
            { type: 'code', language: 'markdown', code: 'Scaffold a Next.js 14 App Router project called Siteo.\n\nStack: Next.js 14, Tailwind v4, TypeScript strict, Supabase\n\nPages:\n- src/app/page.tsx — public marketing page, empty\n- src/app/generate/page.tsx — protected, contains GeneratorForm\n- src/app/p/[slug]/page.tsx — public agent page, renders saved HTML\n- src/app/dashboard/page.tsx — protected, lists user saved pages\n\nComponents:\n- src/components/GeneratorForm.tsx — form with fields: agentName, agentPhoto, bio, listings[], phone, email. Accepts onGenerate callback.\n- src/components/PagePreview.tsx — renders html string in an iframe\n- src/components/AgentCard.tsx — shows saved page with copy link button\n- src/components/LoadingScreen.tsx — full screen loading with a message prop\n\nAPI Routes:\n- POST /api/generate — accepts AgentInput, calls AI, returns { html: string }\n- POST /api/save — accepts { html, agentName, slug }, saves to Supabase, returns { slug }\n- GET /api/pages — returns all pages for authenticated user\n\nTypes in src/types/index.ts:\n- AgentInput: { agentName, agentPhoto, bio, listings, phone, email }\n- SavedPage: { id, slug, agentName, createdAt, html }\n\nEmpty shells only. Correct types. No implementation yet.\nFollow AGENTS.md rules.' },
            { type: 'callout', variant: 'zap', text: 'Pro tip: The more precise your scaffold prompt, the less you fight the agent for the rest of the project. Spend 10 minutes here and save hours later.' },
            { type: 'h2', text: 'Day 1 continued — first real feature' },
            { type: 'p', text: "After the scaffold was committed I built the generator form first because it is the core of the product. One prompt, one feature." },
            { type: 'code', language: 'markdown', code: 'Implement GeneratorForm.tsx.\n\nFiles: src/components/GeneratorForm.tsx, src/types/index.ts\n\nThe form should have:\n- Text input for agent name\n- File upload for agent photo (store as base64 for now)\n- Textarea for bio (max 200 chars with counter)\n- Dynamic list for listings — user can add up to 3, each has address and price\n- Phone and email inputs\n- Submit button that calls onGenerate(agentInput)\n- Loading state on the button while generating\n\nConstraints:\n- Tailwind only, no inline styles\n- Controlled inputs with useState\n- Validate that name and email are filled before submit\n- No external form libraries' },
            { type: 'p', text: "Reviewed the diff. Tested in the browser. Worked first try. Committed. Then moved to the API route." },
            { type: 'h2', text: 'Day 2 — The AI generation and Supabase' },
            { type: 'p', text: "Day 2 was the hardest part — the actual AI generation. Getting the prompt right so the output was a clean, styled HTML page that looked professional took the most iteration. This is where I switched between Antigravity for the code and Claude Code for reviewing the prompt engineering." },
            { type: 'code', language: 'markdown', code: 'Implement POST /api/generate route.\n\nFile: src/app/api/generate/route.ts\n\nIt should:\n1. Accept AgentInput from request body\n2. Validate required fields (agentName, email)\n3. Build a prompt that instructs the AI to generate a complete HTML page\n4. Call OpenAI gpt-4o with the prompt\n5. Return { html: string }\n\nThe AI prompt should tell it to:\n- Generate a complete single file HTML page\n- Use inline styles only (no external CSS)\n- Include: hero with agent name and photo, bio section, listings grid, contact section\n- Mobile responsive using CSS media queries\n- Professional real estate aesthetic, dark navy and gold color scheme\n- Return ONLY the HTML, no markdown, no explanation\n\nConstraints:\n- Handle OpenAI errors gracefully\n- Set a 30 second timeout\n- Validate the response is actual HTML before returning' },
            { type: 'callout', variant: 'skull', text: 'The AI generation prompt took me about 6 iterations to get right. The model kept adding markdown code fences around the HTML or generating CSS in a style tag that conflicted with itself. Constraints in the prompt are everything.' },
            { type: 'p', text: "After the generation worked I wired up Supabase for saving pages. Created the table, set up the client, built the save API route, and connected the frontend flow. This took about 3 hours including debugging one RLS policy issue." },
            { type: 'h2', text: 'Day 3 — Polish and deploy' },
            { type: 'p', text: "Day 3 was the shareable page, the dashboard, a loading screen, and deployment. None of these were technically complex — the hard work was done. Each one was a single focused prompt." },
            { type: 'p', text: "At the end of day 3 I ran the Claude Code review pass on the entire codebase. It found a missing error state in the generate route, a type that was using any instead of the proper AgentInput type, and a potential SQL injection in a Supabase query I had written manually. All fixed in one session." },
            { type: 'callout', variant: 'fire', text: 'The Claude Code review pass on day 3 found bugs that would have hit me in production. This step is not optional if you care about shipping something that actually works.' },
            { type: 'h2', text: 'What I would do differently' },
            { type: 'p', text: "Looking back there are two things I would change. First, I would set up authentication on day 1 before building any features. I added it on day 2 and had to refactor several components to handle the auth state. Second, I would write the AI generation prompt in a separate skill file from the start instead of hardcoding it in the API route. When I needed to update it I had to dig through the route file every time." },
            {
                type: 'ul', items: [
                    'Set up auth first — before any features, not halfway through',
                    'Put AI prompts in skill files, not hardcoded in routes',
                    'Deploy to Vercel on day 1 — I waited until day 3 and hit an environment variable issue that cost me 2 hours',
                    'The dashboard was an afterthought — design it as part of the core flow from the start'
                ]
            },
            { type: 'callout', variant: 'idea', text: 'The mistakes I made building Siteo are exactly why section 9 exists. Read it before you start your project.' },
        ]
    },
    {
        id: '9',
        slug: 'context-window-crash',
        title: '9. The Context Window Crash',
        blocks: [
            { type: 'p', text: "There is a moment every vibe coder hits. You have been building for hours, everything is flowing, features are shipping fast, and then suddenly the agent starts acting weird. It references a file you deleted two hours ago. It rewrites something it already wrote correctly. It hallucinates a function that does not exist. It contradicts itself in the same response." },
            { type: 'p', text: "This is not a bug. This is not the tool being bad. This is the context window crash — and it will happen to you if you do not know how to prevent it." },
            { type: 'callout', variant: 'skull', text: 'The context window crash is the number one reason long vibe coding sessions fall apart. You are not running out of tokens. You are running out of useful signal. The noise takes over and the agent loses the plot.' },
            { type: 'h2', text: 'What is actually happening' },
            { type: 'p', text: "Large language models do not have memory the way humans do. They have a context window — a finite amount of text they can hold in attention at once. Every file you load, every prompt you send, every response the agent generates gets added to that window." },
            { type: 'p', text: "The problem is not just size. Even models with massive context windows — 200K tokens, 1 million tokens — suffer from degraded recall when that window is stuffed with irrelevant information. The model technically has access to everything but it starts paying less attention to the important parts because there is too much noise around them." },
            { type: 'p', text: "After 3-4 hours of continuous building, your context window is full of: the files from features you finished hours ago, failed attempts the agent made and then corrected, your early scaffold prompts that are now irrelevant, component code that has since been refactored, and conversation history that adds nothing to the current task. All of that is diluting the signal." },
            { type: 'callout', variant: 'fire', text: 'Think of it like a whiteboard. At the start of the session it is clean and the agent can see everything clearly. After 4 hours it is covered in half-erased diagrams, crossed out notes, and outdated plans. The important stuff is still there but it is buried.' },
            { type: 'h2', text: 'How to prevent it' },
            { type: 'p', text: "The solution is not a bigger context window. The solution is discipline about what goes into the context window in the first place. Here is exactly what I do." },
            { type: 'h3', text: 'Start fresh after each feature' },
            { type: 'p', text: "The moment a feature is working and committed, I clear the chat history. Not save it for later. Clear it. The agent does not need to know how we got here. It just needs to know where we are now. A fresh context with a clear task prompt outperforms a stale context with full history every single time." },
            { type: 'callout', variant: 'zap', text: 'Pro tip: Treat each feature like a new shift. Clock out when it is done. Clock back in with a clean slate for the next one. The agent performs better and so do you.' },
            { type: 'h3', text: 'Only load what the task needs' },
            { type: 'p', text: "This is the discipline most people skip. When I write a prompt I specify exactly which files the agent needs to look at. Not the whole src folder. Not the whole components directory. The exact files the task touches." },
            { type: 'p', text: "If I am fixing a bug in the GeneratorForm component I give it GeneratorForm.tsx and the relevant type file. That is it. Loading the entire codebase for a CSS change is like handing someone your entire filing cabinet when they asked for one document." },
            { type: 'code', language: 'markdown', code: '// Bad — too much context for a simple task\n"Look at the whole src folder and fix the button styling"\n\n// Good — precise context for a precise task\n"Fix the button styling in src/components/GeneratorForm.tsx line 47.\nThe button should use the existing btn-primary class from globals.css.\nDo not touch anything else."' },
            { type: 'h3', text: 'Keep components under 200 lines' },
            { type: 'p', text: "This one changed how I structure projects. When a component grows past 200 lines the agent starts making mistakes editing it — missing closing tags, duplicating logic, losing track of the component state. Under 200 lines it handles it cleanly almost every time." },
            { type: 'p', text: "If a component is growing too big, break it into smaller ones before asking the agent to edit it. Split the logic into a custom hook. Extract a sub-component. Make the pieces smaller and the agent gets smarter." },
            { type: 'callout', variant: 'idea', text: 'My rule: if I have to scroll to see the full component, it is too big. Break it up before the agent touches it.' },
            { type: 'h3', text: 'Use AGENTS.md to replace context' },
            { type: 'p', text: "This is the most powerful prevention technique. AGENTS.md means the agent never needs you to re-explain your stack, your conventions, or your folder structure. That information is always there at the start of every fresh context. You never need to carry it through a long session because it is always available." },
            { type: 'p', text: "Every time you catch yourself repeating something to the agent — a rule, a preference, a constraint — that thing belongs in AGENTS.md. Add it once and never repeat it again." },
            { type: 'h2', text: 'What to do when it happens anyway' },
            { type: 'p', text: "Sometimes you miss the warning signs and the crash happens mid-session. The agent is clearly confused, contradicting itself, or generating garbage. Here is how to recover without losing your work." },
            {
                type: 'ol', items: [
                    'Stop immediately — do not keep prompting hoping it will correct itself. It will not.',
                    'Do not accept any of the last response if it looks wrong — revert to your last commit.',
                    'Clear the entire chat history.',
                    'Write a fresh context prompt — your stack, the current state of the feature, what still needs to be done.',
                    'Load only the files relevant to where you are now.',
                    'Continue from the clean state.'
                ]
            },
            { type: 'callout', variant: 'skull', text: 'The worst thing you can do when the agent crashes is keep going. Every confused response makes the context worse. Stop, clear, restart. It takes 5 minutes and saves you an hour of debugging hallucinated code.' },
            { type: 'h2', text: 'The warning signs to watch for' },
            { type: 'p', text: "Learn to recognize these early. If you catch them at the first sign you can clear and restart before any damage is done." },
            {
                type: 'ul', items: [
                    'The agent references a file or function you deleted or renamed',
                    'It starts adding import statements for things that do not exist',
                    'It rewrites something correctly and then contradicts it in the same response',
                    'It asks clarifying questions about things you already told it earlier in the session',
                    'The code quality suddenly drops noticeably compared to earlier in the session',
                    'It adds console.logs or comments explaining basic things it understood fine before'
                ]
            },
            { type: 'callout', variant: 'fire', text: 'You will develop an instinct for this after a few crashes. The agent starts feeling uncertain. The responses get hedgy. The code gets sloppy. Trust that instinct and clear the context before it gets worse.' },
        ]
    },
    {
        id: '10',
        slug: 'database-migrations',
        title: '10. Database Migrations on Auto-Pilot',
        blocks: [
            { type: 'p', text: "There is a clear line between the parts of your stack where you want the AI to move fast and the parts where you want it to slow down and ask permission. Frontend components, API routes, utility functions — move fast, break things, revert if needed. Your database is different." },
            { type: 'p', text: "Letting an AI agent write your frontend is high-leverage and low-risk. If it makes a mistake you revert the file and try again. Letting an AI agent run ALTER TABLE scripts across your production Supabase database is a completely different situation. A bad migration does not revert cleanly. Dropped columns take user data with them. Restructured relationships can corrupt months of records in seconds." },
            { type: 'callout', variant: 'skull', text: 'I have seen developers lose production data because they told the AI to "fix the database so saving works" without any guardrails. The agent helpfully dropped a table and recreated it from scratch. Clean schema, zero data. Do not let this happen to you.' },
            { type: 'h2', text: 'Why agents are dangerous with databases' },
            { type: 'p', text: "The problem is not that the AI writes bad SQL. It often writes perfectly correct SQL. The problem is that it does not understand consequences. It does not know that the users table has 50,000 rows. It does not know that the column it wants to drop is referenced by 12 other queries across your codebase. It does not know that the relationship it wants to restructure will orphan half your data." },
            { type: 'p', text: "When you tell an AI to fix a bug in a React component it has full context — it can read the file, understand the logic, and make a targeted change. When you tell it to fix a database issue it is working with partial context. It sees the schema but not the data. It sees the query but not the downstream effects. That gap is where disasters happen." },
            { type: 'callout', variant: 'fire', text: 'The agent is not malicious. It is just optimizing for making the immediate problem go away. Dropping and recreating a table absolutely fixes a schema mismatch. It also destroys all your data. The AI does not weigh those two outcomes the same way you do.' },
            { type: 'h2', text: 'The safe migration workflow' },
            { type: 'p', text: "This is the exact process I follow every time I need a schema change. It adds maybe 10 minutes to the process and has saved me from at least three potential disasters." },
            {
                type: 'ol', items: [
                    'Tell the agent to generate the migration SQL as a file — never to execute it directly',
                    'Read every line of the generated SQL before touching anything',
                    'Look specifically for DROP, TRUNCATE, DELETE, or ALTER COLUMN statements',
                    'Check if any dropped or renamed columns are referenced elsewhere in the codebase',
                    'Test the migration on a staging environment or a local Supabase instance first',
                    'Run it manually in the Supabase Dashboard SQL editor — never via the agent',
                    'Verify the data is intact after running it before deploying any code changes'
                ]
            },
            { type: 'code', language: 'markdown', code: '// The prompt that keeps you safe\n\n"Generate a SQL migration file for the following schema change.\nDo NOT execute it. Do NOT run any SQL commands.\nJust write the migration to a file called migrations/[timestamp]_description.sql\nand explain what each statement does and why.\n\nThe change I need: [describe the change]"\n' },
            { type: 'callout', variant: 'zap', text: 'That single prompt — "Do NOT execute it" — is the most important guardrail you can add. Make it a habit on every single database task. No exceptions.' },
            { type: 'h2', text: 'CLAUDE.md database boundaries' },
            { type: 'p', text: "Add this to your CLAUDE.md file right now. Before you need it. This tells Claude Code to never touch your database directly regardless of what you ask it to do." },
            { type: 'code', language: 'markdown', code: '## Database Rules — READ THIS FIRST\n- NEVER execute SQL directly against any database\n- NEVER run Supabase CLI migration commands without explicit approval\n- ALWAYS generate migration files, never run them\n- ALWAYS explain what each SQL statement does before generating it\n- Flag any statement that could result in data loss with a WARNING comment\n- The following are FORBIDDEN without explicit human confirmation:\n  - DROP TABLE\n  - DROP COLUMN\n  - TRUNCATE\n  - DELETE without a WHERE clause\n  - ALTER COLUMN that changes data type' },
            { type: 'callout', variant: 'idea', text: 'Put the database rules at the TOP of your CLAUDE.md, not the bottom. The agent reads top to bottom. You want these rules to be the first thing it internalizes, not the last.' },
            { type: 'h2', text: 'Additive migrations only in early development' },
            { type: 'p', text: "In the early stages of a project before you have real user data, follow one rule: only additive migrations. Add columns, add tables, add indexes. Never remove or rename anything. If you need to restructure something, add the new structure and migrate the data before removing the old." },
            { type: 'p', text: "This sounds overly cautious when you are on day two of a project with zero users. But the habit you build in development is the habit you carry into production. Developers who lose production data almost always say the same thing — I thought I was still in early development mode." },
            { type: 'h2', text: 'Always have a backup before any migration' },
            { type: 'p', text: "Supabase makes this easy. Before any schema change, go to the Supabase dashboard, open your project, and download a backup. Takes two minutes. If something goes wrong you have a restore point." },
            { type: 'p', text: "I add this to my pre-migration checklist and I do not run any migration without checking it off. Not because I expect something to go wrong every time — but because the one time something goes wrong and you do not have a backup is the time it actually matters." },
            { type: 'callout', variant: 'skull', text: '"I thought the migration was safe" is the last thing you want to be saying to a client whose data just disappeared. Backup first. Every time. Non-negotiable.' },
            { type: 'h2', text: 'When the agent does try to run SQL directly' },
            { type: 'p', text: "If you are using Claude Code and you see it attempting to execute SQL — either through the Supabase CLI, a direct database connection, or any other method — stop it immediately. Do not let it finish. Review what it was trying to do, add the restriction to your CLAUDE.md, and start the task fresh with the guardrails in place." },
            { type: 'p', text: "This is not a criticism of the tool. It is doing what you asked it to do as efficiently as possible. The responsibility for setting boundaries is yours. The tools in this bible — AGENTS.md, CLAUDE.md, skill files — exist precisely so you can set those boundaries once and never have to think about them again." },
            { type: 'callout', variant: 'fire', text: 'The best developers I know are not the ones who never make mistakes. They are the ones who build systems that make certain mistakes impossible. Database guardrails in CLAUDE.md is exactly that kind of system.' },
        ]
    },
    {
        id: '11',
        slug: 'beating-generic-ai-look',
        title: '11. Beating the Generic AI Look',
        blocks: [
            { type: 'p', text: "You can tell an AI built a site the second you see it. The buttons are pill shaped with bg-blue-500. The cards have the same rounded-xl shadow-md combo. The font is Inter at font-medium. The spacing is perfectly even and completely soulless. It is technically correct and visually forgettable." },
            { type: 'p', text: "This is not the AI being bad at design. It is the AI being statistically average. It was trained on millions of websites and it learned what the average website looks like. When you give it no design constraints it produces the mean. The mean is boring." },
            { type: 'callout', variant: 'skull', text: 'The generic AI look is not a tool problem. It is a prompt problem. The AI will produce whatever aesthetic you give it constraints for. Give it no constraints and you get the Tailwind default. Give it strong constraints and you get something that looks like you actually care.' },
            { type: 'h2', text: 'The root cause' },
            { type: 'p', text: "When the agent has no design system to reference it falls back to what it knows statistically works — safe colors, safe spacing, safe components. Blue-500 because blue reads as trustworthy. Rounded-xl because it looks modern. Shadow-md because it adds depth. All technically correct. All immediately recognizable as AI output." },
            { type: 'p', text: "The fix is not to ask it to 'make it look better' or 'make it more premium'. Those are vague instructions and the agent will interpret them as vague. The fix is to give it a specific design system with specific rules it cannot deviate from." },
            { type: 'h2', text: 'Ban the defaults first' },
            { type: 'p', text: "The first thing I add to any AGENTS.md for a project with real UI is a list of banned defaults. Things the agent is not allowed to use no matter what. This forces it out of the statistical mean immediately." },
            { type: 'code', language: 'markdown', code: '## Design Rules — UI\n\n### BANNED — never use these\n- bg-blue-500, bg-red-400, bg-green-500 or any standard Tailwind color for primary UI\n- rounded-full on buttons (pill buttons look generic)\n- shadow-md or shadow-lg as the only depth technique\n- border-gray-200 for dividers\n- text-gray-500 for secondary text\n- font-medium as the only weight variation\n- Any gradient that goes from blue to purple\n\n### REQUIRED — always use these\n- Color palette: Zinc, Slate, Neutral scales only — or custom hex values\n- Primary accent: define one custom color as a CSS variable --color-accent\n- Depth: use backdrop-blur and bg-white/5 for cards instead of solid fills\n- Borders: use border-white/10 for subtle borders on dark backgrounds\n- Typography: mix font-light and font-bold — avoid the middle weights' },
            { type: 'callout', variant: 'fire', text: 'Banning the defaults is more powerful than specifying what to use. The agent is creative when it cannot fall back on the safe options. Constraints produce better design than suggestions.' },
            { type: 'h2', text: 'Force glassmorphism for cards' },
            { type: 'p', text: "Solid background cards are the most recognizable sign of generic AI UI. The moment you switch to glassmorphism — semi-transparent backgrounds with backdrop blur — the whole product feels more considered." },
            { type: 'code', language: 'markdown', code: '## Card Pattern — always use this\nNever use solid background cards.\nAlways use: backdrop-blur-md bg-white/5 border border-white/10 rounded-xl\n\nFor hover states: hover:bg-white/10 transition-all duration-300\nFor active states: active:scale-95 transition-transform duration-150' },
            { type: 'p', text: "Add this pattern to your AGENTS.md and every card the agent generates will use it automatically. You stop fighting the AI about card styles on every single prompt." },
            { type: 'h2', text: 'Micro-interactions on everything interactive' },
            { type: 'p', text: "The difference between a site that feels premium and one that feels flat is almost always micro-interactions. Buttons that scale slightly on click. Links that transition smoothly. Inputs that highlight on focus. These take the agent about 10 extra tokens to add if you make them a rule." },
            { type: 'code', language: 'markdown', code: '## Interaction Rules\n- Every button: transition-all duration-200 active:scale-95\n- Every link: transition-colors duration-150\n- Every card with hover: hover:scale-[1.02] transition-transform duration-200\n- Every input: focus:ring-2 focus:ring-accent/50 transition-all duration-150\n- Every modal or sheet: animate-in fade-in slide-in-from-bottom-4 duration-300' },
            { type: 'callout', variant: 'zap', text: 'Pro tip: Add the interaction rules to your AGENTS.md under a section called "Motion Rules". Once it is there the agent adds transitions and animations to every interactive element automatically. Your UI starts feeling alive without you thinking about it.' },
            { type: 'h2', text: 'Typography that does not look auto-generated' },
            { type: 'p', text: "Generic AI typography uses one font, one or two weights, and predictable size scaling. Premium typography mixes weights deliberately, uses tracking and leading intentionally, and creates clear visual hierarchy without being mechanical about it." },
            { type: 'code', language: 'markdown', code: '## Typography Rules\n- Headlines: font-bold tracking-tight leading-none — never use the default leading\n- Subheadlines: font-light text-foreground/70 — contrast against the bold headline\n- Body: font-normal leading-relaxed — generous line height for readability\n- Labels and captions: text-xs font-medium uppercase tracking-widest\n- NEVER use font-medium for headlines — it looks auto-generated\n- NEVER use the same weight for more than two consecutive text elements' },
            { type: 'h2', text: 'The one prompt that fixes everything' },
            { type: 'p', text: "If you do not want to set up all these rules right now and you just need something better than the default for a specific component, this prompt works surprisingly well:" },
            { type: 'code', language: 'markdown', code: 'Build [component]. \n\nDesign constraints:\n- Dark background, zinc/slate palette only, no standard Tailwind colors\n- Glassmorphism cards: backdrop-blur-md bg-white/5 border border-white/10\n- Micro-interactions on all interactive elements: transition-all duration-200 active:scale-95\n- Typography: mix font-bold tracking-tight for headlines with font-light for supporting text\n- No pill buttons, no shadow-md, no border-gray-200\n- Should look like it was designed by a human who cares, not generated by default settings' },
            { type: 'callout', variant: 'idea', text: 'That last line — "designed by a human who cares, not generated by default settings" — is not fluffy language. It actually shifts the model away from the statistical mean. It has been part of my prompts for months and the quality difference is real.' },
            { type: 'h2', text: 'The AGENTS.md design system' },
            { type: 'p', text: "The most powerful version of all of this is combining everything above into a design system section in your AGENTS.md. Write it once at the start of a project and every single component the agent generates for the rest of the project follows it automatically. No reminding. No repeating. No fighting about pill buttons." },
            { type: 'p', text: "This is exactly why the AGENTS.md file in this repo has a dedicated design section. The agents in this codebase cannot produce generic UI even if they tried. The rules make it structurally impossible." },
            { type: 'callout', variant: 'fire', text: 'One hour writing a proper design system in AGENTS.md saves you from arguing with the agent about UI on every single prompt for the rest of the project. Do it on day one.' },
        ]
    },
    {
        id: '12',
        slug: 'securing-stripe',
        title: '12. Securing Stripe & Webhooks',
        blocks: [
            { type: 'p', text: "Stripe integration is one of those tasks where the AI looks incredibly competent right up until the moment it gets you hacked. It will scaffold a checkout session, wire up the success redirect, update your database, and send a confirmation email — all correctly. And then it will leave your webhook endpoint completely unsecured and one Postman request away from giving anyone your premium tier for free." },
            { type: 'p', text: "This is not an edge case. It is one of the most common security mistakes in AI-generated payment code. The agent optimizes for making the happy path work. Security is not part of the happy path." },
            { type: 'callout', variant: 'skull', text: 'I have reviewed codebases where the entire payment flow was working perfectly in testing and completely exploitable in production. The checkout worked. The webhook did not verify the signature. Anyone who knew the endpoint URL could upgrade any account for free.' },
            { type: 'h2', text: 'What the AI gets wrong' },
            { type: 'p', text: "The most common mistake is trusting the request body instead of verifying the cryptographic signature. The agent writes something like this:" },
            { type: 'code', language: 'typescript', code: '// What the AI often generates — NEVER do this\nexport async function POST(req: Request) {\n  const body = await req.json();\n  \n  if (body.type === "checkout.session.completed") {\n    if (body.data.object.payment_status === "paid") {\n      await upgradeUser(body.data.object.customer_email);\n    }\n  }\n  \n  return Response.json({ received: true });\n}' },
            { type: 'p', text: "This code works perfectly in development. It processes real Stripe events correctly. And it will also process completely fake events sent by anyone who knows your webhook URL. There is no verification. The endpoint trusts whatever JSON body it receives." },
            { type: 'callout', variant: 'fire', text: 'That endpoint is not a webhook handler. It is a free upgrade button. Anyone can POST { type: "checkout.session.completed", data: { object: { payment_status: "paid", customer_email: "victim@example.com" } } } and your code will upgrade that account instantly.' },
            { type: 'h2', text: 'The correct implementation' },
            { type: 'p', text: "Every Stripe webhook request includes a Stripe-Signature header. Stripe uses your endpoint secret to generate a cryptographic signature of the raw request body. You verify that signature before trusting anything in the payload. If the signature does not match, the request did not come from Stripe." },
            { type: 'code', language: 'typescript', code: '// The correct way — always verify the signature\nimport Stripe from "stripe";\nimport { headers } from "next/headers";\n\nconst stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);\n\nexport async function POST(req: Request) {\n  const body = await req.text(); // raw text, not json\n  const signature = headers().get("Stripe-Signature");\n\n  if (!signature) {\n    return new Response("No signature", { status: 400 });\n  }\n\n  let event: Stripe.Event;\n\n  try {\n    event = stripe.webhooks.constructEvent(\n      body,\n      signature,\n      process.env.STRIPE_WEBHOOK_SECRET!\n    );\n  } catch (err) {\n    // Signature verification failed — reject immediately\n    return new Response("Invalid signature", { status: 400 });\n  }\n\n  // Now you can trust the event\n  if (event.type === "checkout.session.completed") {\n    const session = event.data.object as Stripe.Checkout.Session;\n    await upgradeUser(session.customer_email!);\n  }\n\n  return Response.json({ received: true });\n}' },
            { type: 'callout', variant: 'zap', text: 'Two critical details: use req.text() not req.json() — you need the raw body for signature verification. And use a separate STRIPE_WEBHOOK_SECRET from your STRIPE_SECRET_KEY — they are different keys.' },
            { type: 'h2', text: 'The prompt that forces the AI to do it right' },
            { type: 'p', text: "The standard prompt for Stripe integration does not produce secure webhook code. You have to be explicitly paranoid in the prompt. Here is exactly what I use:" },
            { type: 'code', language: 'markdown', code: 'Build a Stripe webhook handler for Next.js 14 App Router.\n\nSECURITY REQUIREMENTS — these are non-negotiable:\n- MUST verify the Stripe-Signature header using stripe.webhooks.constructEvent()\n- MUST read the raw body with req.text() — never req.json() for webhooks\n- MUST use STRIPE_WEBHOOK_SECRET env variable — separate from STRIPE_SECRET_KEY\n- MUST return 400 immediately if signature verification fails\n- MUST NOT trust any data from the request body before signature is verified\n- NEVER write code that upgrades a user based on unverified request body data\n\nHandle these events:\n- checkout.session.completed — upgrade user to pro\n- customer.subscription.deleted — downgrade user to free\n\nFiles: src/app/api/webhooks/stripe/route.ts' },
            { type: 'h2', text: 'Add it to CLAUDE.md' },
            { type: 'p', text: "Add a payment security section to your CLAUDE.md so the agent never generates insecure payment code regardless of how the task is phrased." },
            { type: 'code', language: 'markdown', code: '## Payment Security Rules\n- NEVER trust webhook payloads without verifying the Stripe-Signature header\n- ALWAYS use stripe.webhooks.constructEvent() before processing any webhook\n- ALWAYS use req.text() for webhook route body parsing, never req.json()\n- NEVER upgrade or modify user accounts based on client-side payment confirmation\n- Payment status must ALWAYS be verified server-side via webhook, never via redirect params\n- The success redirect URL is for UX only — never use it to trigger account changes' },
            { type: 'callout', variant: 'idea', text: 'That last rule is important. The Stripe success redirect URL can be manipulated. Someone can visit yourapp.com/success?session_id=fake and if your code reads that URL to upgrade the account you have the same problem. All account changes happen in the webhook. Never in the redirect.' },
            { type: 'h2', text: 'Testing webhooks locally' },
            { type: 'p', text: "You cannot test webhooks by triggering real payments in development. Use the Stripe CLI to forward events to your local server. The agent often skips this in its instructions so here is the actual workflow." },
            { type: 'code', language: 'bash', code: '# Install Stripe CLI\nbrew install stripe/stripe-cli/stripe\n\n# Login\nstripe login\n\n# Forward webhooks to your local server\nstripe listen --forward-to localhost:3000/api/webhooks/stripe\n\n# In a separate terminal, trigger a test event\nstripe trigger checkout.session.completed' },
            { type: 'p', text: "The CLI will print a webhook signing secret when you run stripe listen. Use that as your STRIPE_WEBHOOK_SECRET in your .env.local for development. It is different from your production webhook secret." },
            { type: 'callout', variant: 'fire', text: 'Test the failure case too. Send a request to your webhook endpoint without the signature header and make sure it returns 400. If your endpoint processes unsigned requests in testing it will process them in production.' },
            { type: 'h2', text: 'The security checklist before going live' },
            {
                type: 'ol', items: [
                    'Stripe-Signature header is verified on every webhook request',
                    'Using req.text() not req.json() for raw body parsing',
                    'STRIPE_WEBHOOK_SECRET is set in production environment variables',
                    'Webhook endpoint returns 400 for invalid signatures',
                    'No account changes happen based on redirect URL parameters',
                    'Tested locally with Stripe CLI including the failure case',
                    'Webhook endpoint is not behind authentication middleware — Stripe cannot authenticate'
                ]
            },
            { type: 'callout', variant: 'skull', text: 'That last point catches people. If your webhook route is behind your auth middleware it will reject Stripe requests because they do not have a session cookie. Add your webhook route to the public routes list in your middleware config.' },
        ]
    },
    {
        id: '13',
        slug: 'hallucinated-apis',
        title: '13. Handling Hallucinated APIs',
        blocks: [
            { type: 'p', text: "You ask the agent to integrate a third party API. It writes clean, well typed, beautifully structured code. You run it. 404 Not Found. You check the actual documentation. The endpoint it used does not exist. It never existed. The agent invented it." },
            { type: 'p', text: "This is one of the most frustrating experiences in vibe coding because everything looks right. The TypeScript types are correct. The fetch logic is clean. The error handling is solid. The only problem is that the API endpoint is completely made up." },
            { type: 'callout', variant: 'skull', text: 'AI models are trained on data up to a cutoff date. APIs change constantly — endpoints get deprecated, renamed, versioned, restructured. When the model does not know the exact current endpoint it does not say "I am not sure". It confidently invents what the endpoint should logically be based on REST conventions. And it is wrong.' },
            { type: 'h2', text: 'Why this happens' },
            { type: 'p', text: "The model has seen thousands of API integrations in its training data. It knows what a well-structured REST API looks like. It knows that payment APIs usually have a /charges endpoint, that email APIs usually have a /send endpoint, that auth APIs usually have a /token endpoint." },
            { type: 'p', text: "When it does not have reliable information about the specific API you are using — either because the API is newer than its training data, because the API changed after the cutoff, or because the API is niche enough that it was barely represented in training — it pattern-matches to what it knows and fills in the gaps with confident guesses." },
            { type: 'p', text: "The guesses are structurally plausible. They follow REST conventions. They look like real endpoints. They just do not exist." },
            { type: 'callout', variant: 'fire', text: 'The most dangerous hallucinations are the ones that are almost right. An endpoint that is completely wrong is easy to catch. An endpoint that is one version number off — /v2/ instead of /v3/ — can waste hours of debugging.' },
            { type: 'h2', text: 'The Verify Docs First protocol' },
            { type: 'p', text: "The fix is simple but requires discipline: never ask the agent to integrate an API without giving it the actual current documentation first. Not from memory. Not from its training data. The actual docs, fetched live." },
            { type: 'code', language: 'markdown', code: '// Before any API integration, always do this first\n\n"Before writing any code, fetch the documentation at this URL and read it:\nhttps://resend.com/docs/api-reference/emails/send-email\n\nBase ALL code strictly on what you find in those docs.\nDo not use any endpoints, parameters, or response shapes\nthat are not explicitly documented at that URL.\nIf something is unclear, tell me — do not guess."' },
            { type: 'p', text: "That last line is critical. Telling the agent to flag uncertainty instead of guessing changes its behavior significantly. It will still sometimes guess, but the explicit instruction to not guess reduces hallucinations noticeably." },
            { type: 'callout', variant: 'zap', text: 'Pro tip: For APIs you use frequently, paste the relevant documentation section directly into your skill file. The agent reads it every session and never needs to guess about endpoints it uses regularly.' },
            { type: 'h2', text: 'Using curl to self-correct' },
            { type: 'p', text: "When you are using Claude Code and an API call is returning unexpected errors, tell the agent to test the endpoint directly with curl before trying to fix the code. This forces it to get real feedback from the actual API instead of reasoning from potentially incorrect assumptions." },
            { type: 'code', language: 'markdown', code: '"The API call in src/lib/resend.ts is returning a 422 error.\nBefore changing any code, use curl to hit the endpoint directly\nand read the actual error response. Then fix the code based\non what the API actually returns, not what you expect it to return."' },
            { type: 'p', text: "When the agent runs curl and reads the real error message it self-corrects almost immediately. The actual API response contains the real parameter names, the real required fields, and the real error descriptions. This is always more reliable than the agent reasoning about what might be wrong." },
            { type: 'h2', text: 'The APIs most likely to hallucinate' },
            { type: 'p', text: "Not all APIs are equal hallucination risks. Here is my rough ranking of what to watch out for:" },
            {
                type: 'ul', items: [
                    'Any API that released a major version after 2024 — the model may know v1 but not v2 or v3',
                    'Niche or less popular APIs — less training data means more guessing',
                    'APIs that recently rebranded — the model knows the old name and old endpoints',
                    'Internal or private APIs — the model has never seen these and will invent everything',
                    'APIs with complex authentication flows — OAuth scopes and token exchanges get hallucinated constantly',
                    'Supabase edge functions and newer Supabase features — the platform evolves fast'
                ]
            },
            { type: 'h2', text: 'Building a personal API reference' },
            { type: 'p', text: "For APIs I integrate regularly — Supabase, Resend, Stripe, OpenAI — I keep a docs folder in my projects with the key reference pages saved as markdown files. When I need the agent to use one of these APIs I point it at the local file instead of asking it to remember." },
            { type: 'code', language: 'markdown', code: 'src/\n  docs/\n    resend-send-email.md      — copied from Resend docs\n    supabase-rls-patterns.md  — common RLS policy patterns\n    stripe-webhook-events.md  — webhook event types I use\n    openai-chat-params.md     — current chat completion params' },
            { type: 'p', text: "This sounds like extra work but it pays off immediately. The agent never hallucinates endpoints for APIs that have a local docs file. It reads the file, uses exactly what is documented, and the integration works first time." },
            { type: 'callout', variant: 'idea', text: 'Add the docs folder to your AGENTS.md: "For any API integration, check src/docs/ first for reference documentation before writing any code." One line in AGENTS.md and the agent always looks there first.' },
            { type: 'h2', text: 'What to do when you catch a hallucination' },
            { type: 'p', text: "When you hit a 404 or an unexpected error on a third party API call, do not just tell the agent it is wrong and ask it to fix it. That often produces another confident hallucination. Instead give it the actual information it needs." },
            {
                type: 'ol', items: [
                    'Find the actual current documentation for the endpoint',
                    'Paste the relevant section directly into the prompt',
                    'Tell it explicitly: "The endpoint you used does not exist. Here is the actual documentation. Rewrite the integration using only what is in these docs."',
                    'If the error is unclear, have it run curl first to get the real API response',
                    'Add the correct endpoint to your local docs file so it never happens again'
                ]
            },
            { type: 'callout', variant: 'skull', text: 'Never just say "that is wrong, fix it" when an API call fails. The agent will generate another confident wrong answer. Give it the real documentation. Make it read the source of truth before touching the code.' },
        ]
    },
    {
        id: '14',
        slug: 'scale-vs-speed',
        title: '14. Prompting for Scale vs Speed',
        blocks: [
            { type: 'p', text: "There are two modes of vibe coding. The first is speed mode — you want something working as fast as possible, you do not care about the architecture, you just need to see it run. The second is scale mode — you are building something you intend to maintain, extend, and eventually ship to real users." },
            { type: 'p', text: "The mistake most developers make is using speed mode prompts for scale mode projects. You tell the agent 'build a working chat app' and it does exactly that — it builds a working chat app. All the database logic, all the UI, all the state management, all the API calls, stuffed into one 800 line page.tsx file. It works. You cannot maintain it." },
            { type: 'callout', variant: 'skull', text: 'Speed prompting gets you a prototype. Scale prompting gets you a product. They require completely different prompt structures and the agent will not choose scale mode by default — it always defaults to speed.' },
            { type: 'h2', text: 'What speed prompting produces' },
            { type: 'p', text: "Speed prompting is a single high-level instruction with no architectural constraints. The agent makes every structural decision itself and it optimizes for working code delivered fast, not maintainable code delivered thoughtfully." },
            { type: 'code', language: 'markdown', code: '// Speed prompt — produces working but unmaintainable code\n"Build a chat app where users can send messages in real time.\nUse Supabase for the backend and Next.js for the frontend."' },
            { type: 'p', text: "What you get: a single page component that fetches data, manages state, handles subscriptions, renders the UI, and contains all the business logic in one place. It works on day one. On day thirty when you need to add features, change the data model, or fix a bug, you are untangling a 800 line file where everything is coupled to everything else." },
            { type: 'h2', text: 'What scale prompting looks like' },
            { type: 'p', text: "Scale prompting breaks the same task into sequential steps with explicit architectural boundaries. You do not ask for the whole thing at once. You build it in layers, each layer with clear separation from the others." },
            { type: 'p', text: "The key insight is that you are not just breaking the work into smaller chunks — you are forcing the agent to think about the architecture before it writes any implementation. By defining types first, you create a contract that every subsequent piece of code has to conform to." },
            { type: 'h2', text: 'The four layer sequence' },
            { type: 'p', text: "This is the sequence I use for every feature that needs to last beyond the initial build. It takes longer upfront and produces code that is dramatically easier to work with long term." },
            { type: 'code', language: 'markdown', code: '// Layer 1 — Types first, always\n"Define the TypeScript interfaces for the chat feature.\nNo implementation. Types only.\n\nCreate in src/types/chat.ts:\n- Message: id, content, userId, channelId, createdAt, readBy\n- Channel: id, name, memberIds, lastMessage, createdAt\n- ChatUser: id, name, avatarUrl, isOnline, lastSeen\n\nThink carefully about the relationships. These types\nwill be used by every other layer."' },
            { type: 'code', language: 'markdown', code: '// Layer 2 — UI shells with no logic\n"Build the UI components for chat. No data fetching.\nNo state management. No Supabase calls. Just the visual shells\nwith the correct TypeScript props using the types from src/types/chat.ts.\n\nComponents needed:\n- MessageBubble.tsx — accepts Message prop\n- MessageList.tsx — accepts Message[] prop\n- MessageInput.tsx — accepts onSend callback\n- ChannelHeader.tsx — accepts Channel prop\n- OnlineIndicator.tsx — accepts isOnline boolean"' },
            { type: 'code', language: 'markdown', code: '// Layer 3 — Data access in isolation\n"Build the database access layer for chat.\nNo UI. No React. Pure async functions only.\n\nCreate src/lib/chat.ts with these functions:\n- getMessages(channelId: string): Promise<Message[]>\n- sendMessage(content: string, channelId: string, userId: string): Promise<Message>\n- subscribeToChannel(channelId: string, onMessage: (msg: Message) => void): () => void\n- markAsRead(messageId: string, userId: string): Promise<void>\n\nUse Supabase. Handle errors. Return typed responses."' },
            { type: 'code', language: 'markdown', code: '// Layer 4 — Wire it together\n"Build the chat page that wires the components and data layer together.\n\nFile: src/app/chat/[channelId]/page.tsx\n\nImport components from src/components/\nImport data functions from src/lib/chat.ts\nImport types from src/types/chat.ts\n\nThe page manages state and subscriptions only.\nNo inline SQL. No direct Supabase calls. No business logic.\nEverything goes through src/lib/chat.ts."' },
            { type: 'callout', variant: 'fire', text: 'That last instruction — "no inline SQL, no direct Supabase calls, everything goes through the lib file" — is what keeps the page component clean. Without it the agent will start mixing data access into the component the moment it feels convenient.' },
            { type: 'h2', text: 'Why types first is non-negotiable' },
            { type: 'p', text: "Starting with types is the single most important part of scale prompting. When the types exist before any implementation, every subsequent prompt has a contract to conform to. The agent cannot invent a different shape for Message in the database layer because Message is already defined in types.ts." },
            { type: 'p', text: "Without types first, each layer invents its own shape for the same data. The database returns one thing, the component expects another, and you spend hours writing transformation functions to bridge the gap. I have been on projects where 20% of the codebase was just data transformation code caused by inconsistent types across layers." },
            { type: 'callout', variant: 'idea', text: 'Types are a forcing function for architectural consistency. Define them first, add them to AGENTS.md as the source of truth, and tell the agent to never create new types that duplicate existing ones. The whole codebase stays coherent.' },
            { type: 'h2', text: 'When to use speed mode vs scale mode' },
            { type: 'p', text: "Speed mode is not always wrong. Knowing when to use each is part of the skill." },
            {
                type: 'ul', items: [
                    'Speed mode — prototypes, demos, proof of concepts, throwaway experiments, internal tools nobody else will touch',
                    'Speed mode — when you need to validate an idea before committing to building it properly',
                    'Scale mode — anything with real users, anything you will maintain for more than a month, anything with a team',
                    'Scale mode — features that touch payments, auth, or user data regardless of project size',
                    'Scale mode — any feature you know will need to change or extend over time'
                ]
            },
            { type: 'p', text: "The trap is building something in speed mode, deciding it is worth keeping, and then trying to scale it without refactoring. Speed mode code does not scale gracefully. If you decide something is worth keeping, rebuild it in scale mode before adding features. It is faster than trying to untangle speed mode architecture mid-product." },
            { type: 'callout', variant: 'zap', text: 'Pro tip: Add a comment at the top of speed mode files — "// PROTOTYPE — not for production". When you come back to it later you know exactly what you are dealing with and you are not tempted to build on top of it.' },
            { type: 'h2', text: 'The refactor prompt' },
            { type: 'p', text: "If you already have a speed mode file that you need to convert to scale mode, this prompt works well. It forces the agent to extract and separate without changing the behavior." },
            { type: 'code', language: 'markdown', code: '"Refactor src/app/chat/page.tsx into a proper layered architecture.\nDo NOT change any functionality. Only restructure.\n\nExtract:\n1. All TypeScript interfaces → src/types/chat.ts\n2. All Supabase queries and subscriptions → src/lib/chat.ts\n3. Each distinct UI section → its own component in src/components/\n4. Leave src/app/chat/page.tsx as a thin orchestration layer only\n\nAfter refactoring, the page.tsx should have zero direct database calls\nand zero inline type definitions."' },
            { type: 'callout', variant: 'skull', text: 'Always commit before running a refactor prompt. The agent will touch a lot of files at once. If anything breaks you need a clean rollback point. A refactor that breaks behavior is worse than the messy original.' },
        ]
    },
    {
        id: '15',
        slug: 'mistakes-i-made',
        title: '15. Mistakes I Made',
        blocks: [
            { type: 'p', text: "This is the section I wish had existed when I started. Everything here is something I actually did wrong, wasted real time on, or had to learn the hard way. No made up cautionary tales. Real mistakes from real projects." },
            { type: 'callout', variant: 'skull', text: 'Reading this section and ignoring it is the most expensive thing you can do. Every mistake here cost me anywhere from a few hours to a few weeks. You have been warned.' },
            { type: 'h2', text: 'Mistake 1 — Vague prompts' },
            { type: 'p', text: "This was my most expensive mistake when I started. I would write prompts like 'make the UI better' or 'fix the auth flow' and get confused, half-broken output. Then I would blame the tool." },
            { type: 'p', text: "The tool was fine. My prompt was garbage. Every vague prompt is a coin flip. Sometimes you get lucky, most times you get something you have to undo. I now spend more time writing the prompt than the agent spends executing it and my success rate went from maybe 60% to over 90%." },
            { type: 'callout', variant: 'skull', text: 'Vague prompt = vague output. Every single time. The AI is not going to read your mind. Tell it exactly what you want, exactly which files to touch, and exactly what it cannot touch.' },
            { type: 'h2', text: 'Mistake 2 — No AGENTS.md from the start' },
            { type: 'p', text: "I built three projects before I discovered AGENTS.md. In all three projects the agent randomly used inline styles on some components, forgot TypeScript on others, put files in the wrong folders, and imported from paths that did not exist. I spent hours cleaning up after each session." },
            { type: 'p', text: "The moment I added AGENTS.md to my fourth project the agent became consistent from the first prompt. It knew the stack, it knew the rules, it knew where things go. Create AGENTS.md before you write a single line of code. Non-negotiable." },
            { type: 'h2', text: 'Mistake 3 — Adding auth halfway through' },
            { type: 'p', text: "On Siteo I built the generator, the preview, and the save flow before adding authentication. Big mistake. When I added auth I had to refactor every component that fetched data, every API route that needed a user ID, and every page that needed to be protected. It touched almost every file in the project." },
            { type: 'p', text: "Auth is infrastructure. Build it first. Before any features. Before any pages. Set up your Supabase auth, your middleware, your session handling. Then build everything else on top of it." },
            { type: 'callout', variant: 'skull', text: 'Adding auth to an existing project is 3x harder than building on top of auth from day one. Do it first. Always.' },
            { type: 'h2', text: 'Mistake 4 — Not committing after each working feature' },
            { type: 'p', text: "I used to commit at the end of the day or when I remembered to. Bad idea. The agent would break something in a new prompt, I would not be able to remember exactly what the working state looked like, and I would waste an hour trying to undo things manually." },
            { type: 'p', text: "Now I commit after every single working feature. Not every few features. Every one. Takes 30 seconds. Has saved me hours. If the next prompt breaks something I just revert and try a different approach." },
            { type: 'h2', text: 'Mistake 5 — Fighting outdated libraries' },
            { type: 'p', text: "I spent two weeks on a project trying to use a library that the AI models did not know well. The docs were sparse, the model kept hallucinating methods that did not exist, and every prompt needed heavy manual correction." },
            { type: 'p', text: "If the AI does not know the library well, switch libraries. This sounds obvious but the sunk cost fallacy is real. I kept thinking I was almost through the hard part. I was not. The moment I switched to a well-known alternative the whole project moved at normal speed again." },
            { type: 'callout', variant: 'skull', text: 'The AI knows Next.js, Tailwind, Supabase, and Prisma deeply. It knows niche libraries poorly. Stick to the well-known stack and you will never fight the agent on documentation.' },
            { type: 'h2', text: 'Mistake 6 — Giving the agent too much at once' },
            { type: 'p', text: "Early on I would write massive prompts trying to build an entire feature in one go. Ten components, three API routes, database schema, all in one prompt. The agent would start well and gradually lose track of what it was doing. By the end it was contradicting itself, using inconsistent types, and leaving half the tasks incomplete." },
            { type: 'p', text: "One task per prompt. One feature per session. If the task feels too big, break it down. I have never regretted breaking something into smaller prompts. I have regretted the mega-prompts every single time." },
            { type: 'h2', text: 'Mistake 7 — Deploying late' },
            { type: 'p', text: "On my first few projects I treated deployment as the last step. Build everything locally, then deploy when done. This was a mistake every time. Environment variables behaved differently, build optimizations broke things that worked in dev, and edge cases only appeared in production." },
            { type: 'p', text: "Now I deploy on day one. The moment the scaffold is in place and I have one working route, I push to Vercel. I build the rest of the project against the live deployment. Issues surface immediately instead of all at once on launch day." },
            { type: 'callout', variant: 'zap', text: 'Pro tip: Set up your Vercel project and environment variables on day one before you build anything. Then every push goes live automatically and you are always testing against production.' },
            { type: 'h2', text: 'Mistake 8 — Skipping the Claude Code review pass' },
            { type: 'p', text: "When I was in a rush I would skip the Claude Code review pass and ship directly from Antigravity output. Every single time I did this I found bugs in production that the review pass would have caught. A missing null check. An unhandled promise rejection. A type that was secretly any." },
            { type: 'p', text: "The review pass takes 20 minutes. Fixing production bugs takes hours plus the stress of something being broken for real users. Do the review pass." },
            { type: 'h2', text: 'Mistake 9 — Hardcoding AI prompts in routes' },
            { type: 'p', text: "When I built the Siteo generation route I hardcoded the AI prompt directly in the API route file. Every time I wanted to tweak the prompt — change the tone, add a new section, adjust the styling instructions — I had to dig into the route, find the prompt string, edit it carefully without breaking the surrounding code, and redeploy." },
            { type: 'p', text: "AI prompts should live in skill files or dedicated prompt files, not inside route handlers. They change constantly. They need to be readable and editable without touching the surrounding logic." },
            { type: 'h2', text: 'Mistake 10 — Building in isolation too long' },
            { type: 'p', text: "I would build for weeks before showing anyone. By the time I got feedback the product was so developed in a specific direction that changing course felt painful. I had assumptions baked into every design decision that turned out to be wrong." },
            { type: 'p', text: "Ship ugly. Ship early. Show someone on day three, not day thirty. The feedback you get from a real person using the actual product is worth more than a month of solo building." },
            { type: 'callout', variant: 'fire', text: 'Your most valuable feedback always comes from someone who is not you, using the product for the first time, doing something you did not expect. Get that feedback as early as possible.' },
        ]
    },
    {
        id: '16',
        slug: 'resources',
        title: '16. Resources',
        blocks: [
            { type: 'p', text: "Everything I actually use, read, watch, and reference. No filler. If it is on this list I have personally used it and found it valuable. If I stopped using something I removed it." },
            { type: 'callout', variant: 'idea', text: 'Do not try to consume all of this at once. Bookmark it and come back when you need something specific. The best resource is always the one that solves the problem you have right now.' },
            { type: 'h2', text: 'Tools I use daily' },
            {
                type: 'ul', items: [
                    '[Antigravity](https://antigravity.dev) — my main AI coding agent for building features',
                    '[Claude Code](https://docs.anthropic.com/en/docs/claude-code) — CLI tool for reasoning, refactoring, and review passes',
                    '[Supabase](https://supabase.com) — database, auth, storage. Replaces an entire backend',
                    '[Vercel](https://vercel.com) — deploy Next.js in seconds, zero config',
                    '[Gumroad](https://gumroad.com) — sell digital products instantly, no setup',
                    '[ManyChat](https://manychat.com) — Instagram DM automation for comment triggers',
                ]
            },
            { type: 'h2', text: 'Documentation I actually read' },
            {
                type: 'ul', items: [
                    '[Next.js Docs](https://nextjs.org/docs) — the App Router docs specifically, read the server components section',
                    '[Tailwind v4 Docs](https://tailwindcss.com/docs) — especially the migration guide from v3',
                    '[Supabase Docs](https://supabase.com/docs) — RLS policies and auth helpers are where most people get stuck',
                    '[Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) — how to actually prompt Claude well',
                    '[Anthropic Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code) — full reference for CLI workflows',
                    '[Vercel Docs](https://vercel.com/docs) — environment variables and edge functions are what you will need most',
                ]
            },
            { type: 'h2', text: 'YouTube channels worth your time' },
            { type: 'p', text: "I am selective about YouTube. These are the only dev channels I consistently get value from. No padding." },
            {
                type: 'ul', items: [
                    '[Fireship](https://www.youtube.com/@Fireship) — fast, opinionated, always current. Best channel for staying up to date on tools',
                    '[Theo (t3.gg)](https://www.youtube.com/@t3dotgg) — honest takes on modern web dev, TypeScript, and why most things are overengineered',
                    '[ThePrimeagen](https://www.youtube.com/@ThePrimeTimeagen) — no BS opinions on dev tools, workflow, and the industry',
                    '[Anthropic](https://www.youtube.com/@Anthropic/videos) — official Claude demos and use case walkthroughs',
                    '[Kevin Powell](https://www.youtube.com/@KevinPowell) — best CSS resource on YouTube, still relevant even with Tailwind',
                ]
            },
            { type: 'h2', text: 'AI models and where to access them' },
            {
                type: 'ul', items: [
                    '[Claude](https://claude.ai) — use Sonnet 4.6 for coding, best model available right now',
                    '[ChatGPT](https://chat.openai.com) — GPT-4o for brainstorming and non-code tasks',
                    '[Gemini](https://gemini.google.com) — 3.1 Pro for massive context window tasks',
                    '[Anthropic API](https://console.anthropic.com) — direct API access for building with Claude in your own apps',
                ]
            },
            { type: 'h2', text: 'People worth following' },
            { type: 'p', text: "These are people whose takes on AI, building, and developer tools I actually trust. All on X/Twitter." },
            {
                type: 'ul', items: [
                    '[@sama](https://x.com/sama) — Sam Altman, OpenAI. First to know about GPT updates',
                    '[@karpathy](https://x.com/karpathy) — Andrej Karpathy. Best technical explanations of how AI actually works',
                    '[@theo](https://x.com/t3dotgg) — Theo. Real opinions on web dev without the hype',
                    '[@web.dev.george](https://instagram.com/web.dev.george) — me. Vibe coding, building in public, SaaS content for developers',
                ]
            },
            { type: 'h2', text: 'Books that actually helped' },
            { type: 'p', text: "I do not read many books. These are the ones I finished and actually changed how I think." },
            {
                type: 'ul', items: [
                    'The Lean Startup — Eric Ries. Build, measure, learn. Still the best framework for shipping fast',
                    'Zero to One — Peter Thiel. How to think about building something new instead of copying',
                    'The Mom Test — Rob Fitzpatrick. How to talk to customers without them lying to you. Essential before you build anything',
                ]
            },
            { type: 'callout', variant: 'fire', text: 'The Mom Test is the most underrated book in this list. Read it before you build your next product. It will change how you validate ideas and talk to potential customers.' },
            { type: 'h2', text: 'GitHub repos worth studying' },
            {
                type: 'ul', items: [
                    '[Anthropic Prompt Engineering Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) — interactive guide to prompting Claude',
                    '[Shadcn UI](https://github.com/shadcn-ui/ui) — best component library for Next.js, study the source code',
                    '[Taxonomy by shadcn](https://github.com/shadcn-ui/taxonomy) — real Next.js App Router project, great reference for structure',
                ]
            },
            { type: 'callout', variant: 'zap', text: 'Pro tip: The best way to learn how to structure a real Next.js project is to read the source code of a real Next.js project. Taxonomy is the best example available publicly.' },
            { type: 'h2', text: 'One final thing' },
            { type: 'p', text: "You have read everything in this bible. You know the setup, the tools, the workflow, the mistakes to avoid, and the resources to reference. The only thing left is to actually build something." },
            { type: 'p', text: "Pick one idea. Not the best idea. Not the perfect idea. Just one idea that solves a real problem for a real person. Open a markdown file. Start the brain dump. Run the scaffold prompt. Ship it in a week." },
            { type: 'callout', variant: 'fire', text: 'Everything in here means nothing if you do not ship. Close this, open your editor, and build something. That is the only thing that actually matters.' },
        ]
    },

];
