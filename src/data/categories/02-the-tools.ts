import { Category } from '../types';

export const category: Category = {
    id: 'cat-2',
    slug: 'the-tools',
    title: 'The Tools',
    sections: [
    {
        "id": "3",
        "slug": "antigravity",
        "title": "3. Antigravity",
        "blocks": [
            {
                "type": "p",
                "text": "Antigravity is my main tool for building. Not for small edits or quick fixes — for actual features. The kind of task where you need to touch 5 files, wire up a new API route, update the types, and make sure nothing breaks. That is where Antigravity shines."
            },
            {
                "type": "p",
                "text": "Most people use AI coding tools wrong. They open a blank chat, type something vague like 'build me a login page', get something that half works, then spend an hour debugging why the styles are wrong and the types don't match. That's not the tool's fault. That's a context problem."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "This changed everything for me: you have to think like a senior developer giving instructions to a very talented junior. The junior is smart but knows nothing about your project unless you tell them."
            },
            {
                "type": "h2",
                "text": "How I actually use it"
            },
            {
                "type": "p",
                "text": "Every time I open Antigravity I give it three things: the task, the files it needs to look at, and the constraints. That's it. No essays. No over-explaining. Just enough context to not make a mess."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "Task: Add a loading skeleton to the agent listing page.\nFiles: src/app/agents/page.tsx, src/components/AgentCard.tsx\nConstraints: Use existing Tailwind classes only. Do not change the data fetching logic."
            },
            {
                "type": "p",
                "text": "That prompt takes me 30 seconds to write and Antigravity gets it right almost every time. The more specific you are about constraints, the less cleanup you do afterwards."
            },
            {
                "type": "callout",
                "variant": "skull",
                "text": "Vague prompts are the number one reason people think AI coding tools are bad. The tool is not bad. The prompt is bad."
            },
            {
                "type": "h2",
                "text": "The AGENTS.md System"
            },
            {
                "type": "p",
                "text": "This is the most important thing in this entire document. If you take one thing from reading this, make it AGENTS.md."
            },
            {
                "type": "p",
                "text": "AGENTS.md is a file you create at the root of your project. It is a set of rules and instructions that Antigravity reads every single session. You write it once and it applies to every prompt forever. It is basically a permanent system prompt for your entire codebase."
            },
            {
                "type": "p",
                "text": "Before I had AGENTS.md, the agent would randomly use inline styles, forget to use TypeScript, import things from the wrong place, or ignore my folder structure. Not because it was bad — because it had no memory of what my project looked like. AGENTS.md fixed all of that."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "# AGENTS.md\n\n## Stack\n- Next.js 14 App Router\n- Tailwind v4\n- TypeScript strict mode\n- Supabase for database and auth\n\n## Rules\n- Always use TypeScript. No plain JS files.\n- Never use inline styles. Always use Tailwind classes.\n- All components go in src/components/\n- All utility functions go in src/lib/\n- Always use existing types from src/types/ before creating new ones.\n\n## Skill Files\n- For landing pages: read src/skills/landing-page.md\n- For auth flows: read src/skills/auth.md\n- For database queries: read src/skills/supabase.md\n\n## Tone\n- Write clean, minimal code\n- No unnecessary comments\n- No console.logs left in production code"
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "Once I added AGENTS.md the agent stopped making stupid decisions. It finally had context. My cleanup time after each task dropped by about 80%."
            },
            {
                "type": "h2",
                "text": "Skill Files"
            },
            {
                "type": "p",
                "text": "Skill files are markdown files inside src/skills/ that teach the agent how to build specific things in your project. AGENTS.md points to them. The agent reads them before doing the relevant task."
            },
            {
                "type": "p",
                "text": "For example my landing-page.md skill file tells the agent exactly what sections a landing page should have, what components to use, what the hero section should look like, and what CTA patterns I prefer. Every landing page I generate with Siteo uses this skill file. Every single one comes out consistent."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "# src/skills/landing-page.md\n\n## Structure\nEvery landing page must include:\n1. Hero section with headline, subheadline, and CTA button\n2. Features section with 3 cards\n3. Social proof section\n4. Final CTA section\n5. Footer\n\n## Rules\n- Hero headline must be under 8 words\n- CTA buttons use variant=\"primary\" from src/components/Button.tsx\n- Always include a mobile responsive layout\n- Use semantic HTML (section, article, header, footer)"
            },
            {
                "type": "callout",
                "variant": "zap",
                "text": "Pro tip: Every time you find yourself correcting the agent for the same mistake twice, add a rule to AGENTS.md or the relevant skill file. Over time your agent gets smarter and smarter for your specific project."
            },
            {
                "type": "h2",
                "text": "What Antigravity is bad at"
            },
            {
                "type": "p",
                "text": "Being honest about this matters. Antigravity struggles when the task is too abstract or requires deep reasoning about business logic. If I ask it to 'improve the user experience of the onboarding flow' I will get something generic. But if I say 'add a progress bar to the onboarding flow that shows step 1 of 3' it nails it."
            },
            {
                "type": "p",
                "text": "It also struggles with heavily nested dynamic components where the props chain is complex. In those cases I switch to Claude Code which handles pure TypeScript logic much better."
            },
            {
                "type": "ul",
                "items": [
                    "Bad at: abstract UX decisions",
                    "Bad at: deeply nested prop drilling fixes",
                    "Bad at: tasks with zero context or files provided",
                    "Good at: feature scaffolding with clear requirements",
                    "Good at: multi-file refactors when you point it at the right files",
                    "Good at: building UI components from a description"
                ]
            },
            {
                "type": "h2",
                "text": "Useful YouTube Resources"
            },
            {
                "type": "ul",
                "items": [
                    "[Fireship — Best channel for fast AI coding breakdowns](https://www.youtube.com/@Fireship)",
                    "[Theo (t3.gg) — Opinionated takes on vibe coding and modern web dev](https://www.youtube.com/@t3dotgg)",
                    "[ThePrimeagen — No BS opinions on AI tools and dev workflow](https://www.youtube.com/@ThePrimeTimeagen)"
                ]
            }
        ]
    },
    {
        "id": "4",
        "slug": "claude-code",
        "title": "4. Claude Code",
        "blocks": [
            {
                "type": "p",
                "text": "Claude Code is a CLI tool built by Anthropic that lets you run Claude directly in your terminal, inside your actual project. Not a chat window. Not a separate app. It sits in your codebase, reads your files, and makes changes directly."
            },
            {
                "type": "p",
                "text": "I use it differently to Antigravity. Antigravity is my partner for building features with UI. Claude Code is what I reach for when I need to reason through something complex — a tricky TypeScript refactor, a database migration, a logic bug I cannot figure out. It thinks differently. It is slower but more deliberate."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "Claude Code feels like pairing with a senior developer who reads your entire codebase before saying anything. It does not just generate — it reasons."
            },
            {
                "type": "h2",
                "text": "Installation"
            },
            {
                "type": "p",
                "text": "One command. You need Node.js installed and an Anthropic API key. After install, run claude in any project folder and it starts."
            },
            {
                "type": "code",
                "language": "bash",
                "code": "npm install -g @anthropic-ai/claude-code"
            },
            {
                "type": "p",
                "text": "First time you run it, it will ask for your API key. Set it once and it remembers. Then just navigate to your project root and type claude to start a session."
            },
            {
                "type": "callout",
                "variant": "zap",
                "text": "Pro tip: Run claude from the root of your project, not a subfolder. It needs to see the full project structure to be useful."
            },
            {
                "type": "h2",
                "text": "The CLAUDE.md System"
            },
            {
                "type": "p",
                "text": "Same concept as AGENTS.md but specific to Claude Code. You create a CLAUDE.md file at the root of your project and it gets read at the start of every session. This is how you give it permanent context about your project without repeating yourself every time."
            },
            {
                "type": "p",
                "text": "The most important things to put in CLAUDE.md are your stack, your conventions, and your boundaries. Boundaries especially — you do not want it touching config files, environment variables, or anything that could break your deployment."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "# CLAUDE.md\n\n## Stack\n- Next.js 14 App Router\n- Tailwind v4\n- TypeScript strict mode\n- Supabase\n\n## Conventions\n- Functional React components only\n- All hooks go in src/hooks/\n- All types go in src/types/\n- Never use any type — always be explicit\n\n## Boundaries — DO NOT TOUCH\n- .env and .env.local\n- next.config.js\n- tailwind.config.ts\n- package.json\n- Any file in /migrations\n\n## Preferred Patterns\n- Use server components by default, client components only when needed\n- Always handle loading and error states\n- Use existing utility functions from src/lib/ before writing new ones"
            },
            {
                "type": "callout",
                "variant": "skull",
                "text": "I once let Claude Code touch my next.config.js without a boundary rule. It helpfully rewrote it and broke my entire build. Lesson learned. Add boundaries before you start."
            },
            {
                "type": "h2",
                "text": "Real CLI Workflow"
            },
            {
                "type": "p",
                "text": "My actual session flow every time I use Claude Code. This is not theory — this is what I do."
            },
            {
                "type": "ol",
                "items": [
                    "Navigate to project root in terminal",
                    "Run claude to start the session",
                    "Describe the task in one clear sentence — no essays",
                    "Let it read whatever files it asks for — do not skip this step",
                    "Review every diff carefully before accepting — it is fast but check it",
                    "If something looks wrong, tell it exactly what is wrong and let it fix it",
                    "Once done, run npm run build to verify nothing broke"
                ]
            },
            {
                "type": "callout",
                "variant": "idea",
                "text": "My opinion: The review step is where most people get lazy. Claude Code is good but it is not perfect. Read the diff. Every time. Takes 30 seconds and saves you from mysterious bugs."
            },
            {
                "type": "h2",
                "text": "What Claude Code is best at"
            },
            {
                "type": "p",
                "text": "After using it daily I have a clear picture of where it excels versus where I should use Antigravity instead."
            },
            {
                "type": "ul",
                "items": [
                    "Refactoring complex TypeScript logic without touching the UI",
                    "Writing and fixing unit tests",
                    "Debugging — describe the bug and it traces through the logic",
                    "Database query optimization",
                    "CLI scripts and automation tasks",
                    "Understanding an unfamiliar codebase — just ask it to explain a file"
                ]
            },
            {
                "type": "h2",
                "text": "Useful Resources"
            },
            {
                "type": "ul",
                "items": [
                    "[Anthropic Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code)",
                    "[Anthropic YouTube — Claude Code demos](https://www.youtube.com/@Anthropic/videos)",
                    "[Fireship YouTube — AI tool breakdowns](https://www.youtube.com/@Fireship)"
                ]
            }
        ]
    },
    {
        "id": "5",
        "slug": "antigravity-vs-claude-code",
        "title": "5. Antigravity vs Claude Code",
        "blocks": [
            {
                "type": "p",
                "text": "This is the most common question I get from developers who find my content. Which one should I use? The honest answer is both — but for completely different things. Trying to use one for everything is exactly how you end up frustrated and thinking AI tools are overhyped."
            },
            {
                "type": "p",
                "text": "Think of it this way. Antigravity is like having a contractor who shows up, looks at the blueprints, and builds the thing. Claude Code is like having an architect who sits down, reads everything carefully, and tells you exactly what needs to change and why. Both are valuable. Neither replaces the other."
            },
            {
                "type": "callout",
                "variant": "skull",
                "text": "I wasted weeks trying to make one tool do everything. Every time I forced the wrong tool for the job I ended up with more work than if I had just written it myself."
            },
            {
                "type": "h2",
                "text": "Antigravity is better when"
            },
            {
                "type": "ul",
                "items": [
                    "You are building a full-stack feature that touches both UI and backend",
                    "You need to see the result instantly in the browser",
                    "The task involves creating new components or pages",
                    "You are scaffolding a new project or section from scratch",
                    "You need multi-file changes wired together correctly in one pass",
                    "The task is visual — layouts, responsive design, component styling"
                ]
            },
            {
                "type": "h2",
                "text": "Claude Code is better when"
            },
            {
                "type": "ul",
                "items": [
                    "You have a bug and you need someone to trace the logic and find it",
                    "You are refactoring TypeScript types or utility functions",
                    "You need to write or fix unit tests",
                    "The task is purely backend — API logic, database queries, migrations",
                    "You need to understand a file or codebase you did not write",
                    "You are doing CLI automation or scripting tasks"
                ]
            },
            {
                "type": "h2",
                "text": "How I actually switch between them"
            },
            {
                "type": "p",
                "text": "My typical day looks like this: I open Antigravity to build a new feature. UI, API route, types, all wired together. Then I switch to Claude Code to refactor the logic I just built, clean up the TypeScript, and write tests for the critical paths. Then back to Antigravity to build the next feature."
            },
            {
                "type": "p",
                "text": "They work incredibly well together because they have different strengths. Antigravity ships fast. Claude Code makes it solid. I use both on almost every project."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "The workflow that changed everything: build fast with Antigravity, then pass the output to Claude Code and say — review this, find any issues, clean up the types. You get speed AND quality."
            },
            {
                "type": "h2",
                "text": "The one rule"
            },
            {
                "type": "p",
                "text": "If the task involves the browser and you need to see it — Antigravity. If the task lives in the terminal and you need to think — Claude Code. That single rule covers 90% of decisions."
            },
            {
                "type": "callout",
                "variant": "zap",
                "text": "Pro tip: Start a feature in Antigravity to get it working fast, then open Claude Code and ask it to review what was just built. It will catch things you missed and suggest improvements you would not have thought of."
            }
        ]
    }
]
};
