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
            { type: 'p', text: 'There are too many models. Here is the real talk.' },
            { type: 'callout', variant: 'idea', text: 'Gemini 3.1 Pro is heavily underrated for massive codebase context windows. Use it.' },
            { type: 'p', text: 'ChatGPT is fine for general knowledge, but Claude 4.6 Sonnet is currently the undisputed king of coding.' },
            { type: 'h2', text: 'My typical model routing' },
            { type: 'p', text: 'Claude 4.6 Sonnet for writing code. GPT-4o for brainstorming non-code. Gemini 3.1 Pro for dumping 50 PDFs and asking it questions.' }
        ]
    },
    {
        id: '7',
        slug: 'vibe-coding-workflow',
        title: '7. Vibe Coding Workflow',
        blocks: [
            { type: 'p', text: 'Going from idea to deployed app fast.' },
            { type: 'callout', variant: 'zap', text: 'Pro tip: Draft the whole app structure in a single markdown file before touching code.' },
            { type: 'h3', text: 'Step 1: The Brain Dump' },
            { type: 'p', text: 'Write down every feature. Then cut 50% of them.' },
            { type: 'h3', text: 'Step 2: The Agent Pass' },
            { type: 'p', text: 'Give the brain dump to the agent and have it scaffold the skeleton.' },
            { type: 'code', language: 'markdown', code: 'Build these 10 components. Just empty shells with the right standard props.' }
        ]
    },
    {
        id: '8',
        slug: 'real-project',
        title: '8. Real Project',
        blocks: [
            { type: 'p', text: 'I built this exact knowledge base using this setup. Here is the literal prompt I used to start.' },
            { type: 'callout', variant: 'fire', text: 'I spent 10 minutes writing the prompt, and the agent did 90% of the scaffolding in 2 minutes.' },
            { type: 'p', text: 'I told it "No corporate feel, no lesson 1 of 8 energy". It nailed it.' },
            { type: 'p', text: 'I built Siteo — an automated landing page generator for real estate agents. Here is exactly how I used this setup to build it fast.' },
            { type: 'h3', text: 'Step 1 — The Prompt' },
            { type: 'code', language: 'markdown', code: 'Build an automated landing page generator for real estate agents. Use Next.js 14, standard Tailwind classes. Follow strict contrast rules.' },
            { type: 'h3', text: 'Step 2 — The Skill File' },
            { type: 'code', language: 'markdown', code: '# Landing Page Generator\n## Rules\n1. Always use structured semantic HTML\n2. Include hero sections with clear CTAs\n3. Optimize for SEO performance' },
            { type: 'h3', text: 'Step 3 — Iterate' },
            { type: 'p', text: 'Every new feature was a new task. I never gave the agent more than one thing at a time.' },
            { type: 'callout', variant: 'fire', text: 'Siteo went from idea to deployed in 3 days using this exact workflow.' }
        ]
    },
    {
        id: '9',
        slug: 'mistakes-i-made',
        title: '9. Mistakes I Made',
        blocks: [
            { type: 'p', text: 'I messed up a lot so you don\'t have to.' },
            { type: 'callout', variant: 'skull', text: 'Wasted weeks fighting the agent on outdated libraries. If the AI doesn\'t know the library well, switch libraries.' },
            { type: 'h2', text: 'Top 3 Fails' },
            {
                type: 'ol', items: [
                    'Trying to force Tailwind classes onto deeply nested dynamic components without a system.',
                    'Not using task boundaries. The agent got confused and overwrote its own work.',
                    'Forgetting to enforce dark mode strictly at the root level.'
                ]
            }
        ]
    },
    {
        id: '10',
        slug: 'resources',
        title: '10. Resources',
        blocks: [
            { type: 'p', text: 'The actual things I read and use.' },
            {
                type: 'ul', items: [
                    '[Vercel Docs](https://vercel.com/docs)',
                    '[Tailwind v4 PostCSS Config](https://tailwindcss.com/docs/installation/using-postcss)',
                    '[Anthropic Prompt Engineering Interactive Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial)'
                ]
            },
            { type: 'callout', variant: 'zap', text: 'Pro tip: Stop reading tutorials and start building.' }
        ]
    }
];
