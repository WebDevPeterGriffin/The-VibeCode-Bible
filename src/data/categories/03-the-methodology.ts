import { Category } from '../types';

export const category: Category = {
    id: 'cat-3',
    slug: 'the-methodology',
    title: 'The Methodology',
    sections: [
    {
        "id": "7",
        "slug": "vibe-coding-workflow",
        "title": "7. Vibe Coding Workflow",
        "blocks": [
            {
                "type": "p",
                "text": "This is the section everything else has been building towards. The setup, the tools, the models — they all feed into this. This is the actual workflow I use to go from a blank page to a deployed product fast."
            },
            {
                "type": "p",
                "text": "I want to be clear about what fast means. Fast does not mean sloppy. Fast does not mean letting the AI write everything while you watch. Fast means having a system so tight that you are never blocked, never confused about what to do next, and never wasting time on things that do not matter."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "The biggest unlock for me was realizing that vibe coding is not about prompting. It is about thinking. The better you think through the problem before touching the AI, the faster everything goes."
            },
            {
                "type": "h2",
                "text": "Step 1 — The Brain Dump"
            },
            {
                "type": "p",
                "text": "Before I open any AI tool I open a blank markdown file and write down everything. Every feature, every page, every user flow, every edge case I can think of. I do not filter. I just dump."
            },
            {
                "type": "p",
                "text": "Then I read through it and cut 50% of it. Ruthlessly. If a feature is not essential for the first version it goes in a 'later' section at the bottom. I have shipped more products since I started cutting early than I ever did trying to build everything at once."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "# Project: Siteo\n\n## Core features (must have v1)\n- Landing page generator with AI\n- Real estate agent inputs (name, photo, listings)\n- Shareable link for each generated page\n- Email magic link auth\n\n## Later (do not touch until v1 is live)\n- Custom domain support\n- Analytics dashboard\n- Team accounts\n- White label option"
            },
            {
                "type": "callout",
                "variant": "skull",
                "text": "The graveyard of unfinished projects is full of people who tried to build everything in v1. Cut it down. Ship the small thing. Add the rest later."
            },
            {
                "type": "h2",
                "text": "Step 2 — The Architecture Pass"
            },
            {
                "type": "p",
                "text": "Once I know what I am building I spend 10-15 minutes thinking about the structure before writing a single prompt. What pages do I need. What components. What API routes. What database tables. What does the data flow look like."
            },
            {
                "type": "p",
                "text": "I write this in the same markdown file. It does not need to be perfect. It just needs to exist so I am not making these decisions in the middle of a prompt when the agent is waiting."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "## Pages\n- / — landing page (public)\n- /generate — the generator form (auth required)\n- /p/[slug] — public shareable agent page\n- /dashboard — saved pages list (auth required)\n\n## Components\n- GeneratorForm — inputs for agent details\n- PagePreview — live preview of generated page\n- AgentCard — card for dashboard list\n\n## API Routes\n- POST /api/generate — calls AI, returns HTML\n- POST /api/save — saves page to Supabase\n- GET /api/pages — returns user pages"
            },
            {
                "type": "h2",
                "text": "Step 3 — The Scaffold Prompt"
            },
            {
                "type": "p",
                "text": "Now I open Antigravity and give it one job: build the skeleton. Empty components, empty pages, empty API routes with the right structure and types. No logic yet. Just the shells."
            },
            {
                "type": "p",
                "text": "This is the most important prompt in the whole project. Get this right and every subsequent prompt is easy because the agent always has the right structure to work with."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "Scaffold this Next.js 14 App Router project.\n\nPages needed:\n- src/app/page.tsx — marketing landing page, empty for now\n- src/app/generate/page.tsx — protected route, empty for now\n- src/app/p/[slug]/page.tsx — public agent page, empty for now\n- src/app/dashboard/page.tsx — protected route, empty for now\n\nComponents needed:\n- src/components/GeneratorForm.tsx — accepts AgentInput type, onSubmit callback\n- src/components/PagePreview.tsx — accepts html string prop\n- src/components/AgentCard.tsx — accepts SavedPage type\n\nAPI Routes:\n- src/app/api/generate/route.ts — POST, accepts AgentInput, returns { html: string }\n- src/app/api/save/route.ts — POST, accepts html + metadata\n- src/app/api/pages/route.ts — GET, returns SavedPage[]\n\nTypes needed in src/types/index.ts:\n- AgentInput\n- SavedPage\n\nJust the shells. Correct TypeScript types. No implementation logic yet."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "The scaffold prompt is everything. When you get this right the rest of the project is just filling in boxes. The agent always knows exactly where to put things."
            },
            {
                "type": "h2",
                "text": "Step 4 — Feature by Feature"
            },
            {
                "type": "p",
                "text": "After the scaffold is in place I build one feature at a time. One prompt per feature. I never give the agent two things to do at once. This is the discipline that separates people who ship from people who have half-finished projects."
            },
            {
                "type": "p",
                "text": "Each prompt follows the same format: task, files, constraints. The agent does the work. I review the diff. I test it in the browser. If it works I move to the next feature. If it does not I give it specific feedback — not 'fix it' but exactly what is wrong."
            },
            {
                "type": "ol",
                "items": [
                    "Write the feature prompt — task, files, constraints",
                    "Let Antigravity make the changes",
                    "Review every file it touched in the diff",
                    "Run the dev server and test it in the browser",
                    "If broken — describe exactly what is wrong, not just \"it does not work\"",
                    "If working — commit and move to the next feature"
                ]
            },
            {
                "type": "callout",
                "variant": "zap",
                "text": "Pro tip: Commit after every working feature. Not at the end of the day. After every single working feature. If the agent breaks something in the next prompt you can roll back in seconds."
            },
            {
                "type": "h2",
                "text": "Step 5 — The Claude Code Pass"
            },
            {
                "type": "p",
                "text": "Once a section of the app is working I switch to Claude Code and do a review pass. I ask it to read the files I just built and tell me what is wrong, what could be cleaner, and what edge cases I missed."
            },
            {
                "type": "p",
                "text": "It almost always finds something. A missing error state. A type that should be more specific. A function that is doing two things when it should do one. This pass is what turns fast code into solid code."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "Review these files:\n- src/app/api/generate/route.ts\n- src/components/GeneratorForm.tsx\n\nTell me:\n1. Any TypeScript issues or loose types\n2. Missing error handling\n3. Any obvious edge cases not covered\n4. Anything that could break in production\n\nDo not rewrite anything yet. Just tell me what you find."
            },
            {
                "type": "callout",
                "variant": "idea",
                "text": "Ask Claude Code to review before it fixes. If you ask it to fix directly it will rewrite things you did not want touched. Ask for the report first, then approve what to fix."
            },
            {
                "type": "h2",
                "text": "Step 6 — Deploy Early"
            },
            {
                "type": "p",
                "text": "I deploy to Vercel before the product is finished. Not when it is done — early. As soon as the core flow works I push it live. This forces real feedback, catches environment issues early, and means I am always shipping instead of endlessly building locally."
            },
            {
                "type": "p",
                "text": "Vercel deployment for Next.js is zero config. Push to GitHub, connect to Vercel, done. Every push to main auto-deploys. There is no reason to wait."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "Deploy early. The number of times I have built something locally for weeks only to find a production environment issue on day one of launch is embarrassing. Deploy on day one of the project."
            },
            {
                "type": "h2",
                "text": "The full workflow in one place"
            },
            {
                "type": "ol",
                "items": [
                    "Brain dump everything into a markdown file",
                    "Cut 50% — only essential v1 features survive",
                    "Map the architecture — pages, components, API routes, types",
                    "Write the scaffold prompt and build the skeleton with Antigravity",
                    "Build one feature at a time — task, files, constraints, review, test, commit",
                    "Switch to Claude Code for a review pass after each section",
                    "Deploy to Vercel early and keep it live from day one"
                ]
            }
        ]
    },
    {
        "id": "14",
        "slug": "scale-vs-speed",
        "title": "14. Prompting for Scale vs Speed",
        "blocks": [
            {
                "type": "p",
                "text": "There are two modes of vibe coding. The first is speed mode — you want something working as fast as possible, you do not care about the architecture, you just need to see it run. The second is scale mode — you are building something you intend to maintain, extend, and eventually ship to real users."
            },
            {
                "type": "p",
                "text": "The mistake most developers make is using speed mode prompts for scale mode projects. You tell the agent 'build a working chat app' and it does exactly that — it builds a working chat app. All the database logic, all the UI, all the state management, all the API calls, stuffed into one 800 line page.tsx file. It works. You cannot maintain it."
            },
            {
                "type": "callout",
                "variant": "skull",
                "text": "Speed prompting gets you a prototype. Scale prompting gets you a product. They require completely different prompt structures and the agent will not choose scale mode by default — it always defaults to speed."
            },
            {
                "type": "h2",
                "text": "What speed prompting produces"
            },
            {
                "type": "p",
                "text": "Speed prompting is a single high-level instruction with no architectural constraints. The agent makes every structural decision itself and it optimizes for working code delivered fast, not maintainable code delivered thoughtfully."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "// Speed prompt — produces working but unmaintainable code\n\"Build a chat app where users can send messages in real time.\nUse Supabase for the backend and Next.js for the frontend.\""
            },
            {
                "type": "p",
                "text": "What you get: a single page component that fetches data, manages state, handles subscriptions, renders the UI, and contains all the business logic in one place. It works on day one. On day thirty when you need to add features, change the data model, or fix a bug, you are untangling a 800 line file where everything is coupled to everything else."
            },
            {
                "type": "h2",
                "text": "What scale prompting looks like"
            },
            {
                "type": "p",
                "text": "Scale prompting breaks the same task into sequential steps with explicit architectural boundaries. You do not ask for the whole thing at once. You build it in layers, each layer with clear separation from the others."
            },
            {
                "type": "p",
                "text": "The key insight is that you are not just breaking the work into smaller chunks — you are forcing the agent to think about the architecture before it writes any implementation. By defining types first, you create a contract that every subsequent piece of code has to conform to."
            },
            {
                "type": "h2",
                "text": "The four layer sequence"
            },
            {
                "type": "p",
                "text": "This is the sequence I use for every feature that needs to last beyond the initial build. It takes longer upfront and produces code that is dramatically easier to work with long term."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "// Layer 1 — Types first, always\n\"Define the TypeScript interfaces for the chat feature.\nNo implementation. Types only.\n\nCreate in src/types/chat.ts:\n- Message: id, content, userId, channelId, createdAt, readBy\n- Channel: id, name, memberIds, lastMessage, createdAt\n- ChatUser: id, name, avatarUrl, isOnline, lastSeen\n\nThink carefully about the relationships. These types\nwill be used by every other layer.\""
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "// Layer 2 — UI shells with no logic\n\"Build the UI components for chat. No data fetching.\nNo state management. No Supabase calls. Just the visual shells\nwith the correct TypeScript props using the types from src/types/chat.ts.\n\nComponents needed:\n- MessageBubble.tsx — accepts Message prop\n- MessageList.tsx — accepts Message[] prop\n- MessageInput.tsx — accepts onSend callback\n- ChannelHeader.tsx — accepts Channel prop\n- OnlineIndicator.tsx — accepts isOnline boolean\""
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "// Layer 3 — Data access in isolation\n\"Build the database access layer for chat.\nNo UI. No React. Pure async functions only.\n\nCreate src/lib/chat.ts with these functions:\n- getMessages(channelId: string): Promise<Message[]>\n- sendMessage(content: string, channelId: string, userId: string): Promise<Message>\n- subscribeToChannel(channelId: string, onMessage: (msg: Message) => void): () => void\n- markAsRead(messageId: string, userId: string): Promise<void>\n\nUse Supabase. Handle errors. Return typed responses.\""
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "// Layer 4 — Wire it together\n\"Build the chat page that wires the components and data layer together.\n\nFile: src/app/chat/[channelId]/page.tsx\n\nImport components from src/components/\nImport data functions from src/lib/chat.ts\nImport types from src/types/chat.ts\n\nThe page manages state and subscriptions only.\nNo inline SQL. No direct Supabase calls. No business logic.\nEverything goes through src/lib/chat.ts.\""
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "That last instruction — \"no inline SQL, no direct Supabase calls, everything goes through the lib file\" — is what keeps the page component clean. Without it the agent will start mixing data access into the component the moment it feels convenient."
            },
            {
                "type": "h2",
                "text": "Why types first is non-negotiable"
            },
            {
                "type": "p",
                "text": "Starting with types is the single most important part of scale prompting. When the types exist before any implementation, every subsequent prompt has a contract to conform to. The agent cannot invent a different shape for Message in the database layer because Message is already defined in types.ts."
            },
            {
                "type": "p",
                "text": "Without types first, each layer invents its own shape for the same data. The database returns one thing, the component expects another, and you spend hours writing transformation functions to bridge the gap. I have been on projects where 20% of the codebase was just data transformation code caused by inconsistent types across layers."
            },
            {
                "type": "callout",
                "variant": "idea",
                "text": "Types are a forcing function for architectural consistency. Define them first, add them to AGENTS.md as the source of truth, and tell the agent to never create new types that duplicate existing ones. The whole codebase stays coherent."
            },
            {
                "type": "h2",
                "text": "When to use speed mode vs scale mode"
            },
            {
                "type": "p",
                "text": "Speed mode is not always wrong. Knowing when to use each is part of the skill."
            },
            {
                "type": "ul",
                "items": [
                    "Speed mode — prototypes, demos, proof of concepts, throwaway experiments, internal tools nobody else will touch",
                    "Speed mode — when you need to validate an idea before committing to building it properly",
                    "Scale mode — anything with real users, anything you will maintain for more than a month, anything with a team",
                    "Scale mode — features that touch payments, auth, or user data regardless of project size",
                    "Scale mode — any feature you know will need to change or extend over time"
                ]
            },
            {
                "type": "p",
                "text": "The trap is building something in speed mode, deciding it is worth keeping, and then trying to scale it without refactoring. Speed mode code does not scale gracefully. If you decide something is worth keeping, rebuild it in scale mode before adding features. It is faster than trying to untangle speed mode architecture mid-product."
            },
            {
                "type": "callout",
                "variant": "zap",
                "text": "Pro tip: Add a comment at the top of speed mode files — \"// PROTOTYPE — not for production\". When you come back to it later you know exactly what you are dealing with and you are not tempted to build on top of it."
            },
            {
                "type": "h2",
                "text": "The refactor prompt"
            },
            {
                "type": "p",
                "text": "If you already have a speed mode file that you need to convert to scale mode, this prompt works well. It forces the agent to extract and separate without changing the behavior."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "\"Refactor src/app/chat/page.tsx into a proper layered architecture.\nDo NOT change any functionality. Only restructure.\n\nExtract:\n1. All TypeScript interfaces → src/types/chat.ts\n2. All Supabase queries and subscriptions → src/lib/chat.ts\n3. Each distinct UI section → its own component in src/components/\n4. Leave src/app/chat/page.tsx as a thin orchestration layer only\n\nAfter refactoring, the page.tsx should have zero direct database calls\nand zero inline type definitions.\""
            },
            {
                "type": "callout",
                "variant": "skull",
                "text": "Always commit before running a refactor prompt. The agent will touch a lot of files at once. If anything breaks you need a clean rollback point. A refactor that breaks behavior is worse than the messy original."
            }
        ]
    },
    {
        "id": "17",
        "slug": "git-workflow-for-vibe-coders",
        "title": "17. Git Workflow for Vibe Coders",
        "blocks": [
            {
                "type": "p",
                "text": "Most vibe coders treat Git as an afterthought. They commit once at the end of the day with a message like 'stuff' or 'updates' and push everything at once. Then the agent breaks something, they cannot figure out what changed, and they spend an hour manually undoing things that a single git revert would have fixed in three seconds."
            },
            {
                "type": "p",
                "text": "Git is not bureaucracy. For vibe coders specifically, Git is a safety net that makes you faster. Every commit is a checkpoint you can return to. Every branch is an experiment you can abandon. When the agent does something catastrophic — and it will — Git is the difference between a five second fix and an hour of archaeology."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "The agent is going to break things. Not sometimes. Regularly. Your Git workflow is what determines whether a broken agent session costs you five seconds or five hours."
            },
            {
                "type": "h2",
                "text": "The one rule that changes everything"
            },
            {
                "type": "p",
                "text": "Commit after every working feature. Not every day. Not every few features. After every single feature that works. This is the most important Git habit for vibe coders and the one most people skip because it feels like overhead."
            },
            {
                "type": "p",
                "text": "It is not overhead. It takes thirty seconds. And it means that when the agent breaks something in the next prompt — which it will — you have a clean working state to revert to. You do not need to remember what changed. You do not need to manually undo things. You just revert."
            },
            {
                "type": "code",
                "language": "bash",
                "code": "# After every working feature\ngit add .\ngit commit -m \"feat: add loading skeleton to agent listing page\"\n\n# When the next prompt breaks something\ngit revert HEAD\n# or\ngit checkout -- src/components/AgentCard.tsx"
            },
            {
                "type": "callout",
                "variant": "skull",
                "text": "I once lost three hours of work because I had not committed in a day and the agent rewrote a core component in a way I could not undo. Every minute of those three hours was caused by one habit — not committing after each working feature. Never again."
            },
            {
                "type": "h2",
                "text": "Commit message format"
            },
            {
                "type": "p",
                "text": "Commit messages matter more in vibe coding than in regular development because you are making many small changes quickly. When something breaks you need to scan the commit history and immediately understand what each commit did. Vague messages make this impossible."
            },
            {
                "type": "p",
                "text": "I use a simple prefix system. It takes five seconds per commit and makes the history readable at a glance."
            },
            {
                "type": "code",
                "language": "bash",
                "code": "# Format: type: short description of what changed\n\ngit commit -m \"feat: add magic link auth with Supabase\"\ngit commit -m \"fix: resolve null error on agent listing page\"\ngit commit -m \"refactor: extract database logic to src/lib/agents.ts\"\ngit commit -m \"style: update card component to glassmorphism\"\ngit commit -m \"chore: remove build-error.log from repo\"\ngit commit -m \"test: add Vitest tests for generateSlug utility\""
            },
            {
                "type": "callout",
                "variant": "zap",
                "text": "Pro tip: Add commit message rules to your CLAUDE.md. When Claude Code makes changes it will suggest commit messages that follow your format. You just copy and paste."
            },
            {
                "type": "h2",
                "text": "Branching for experiments"
            },
            {
                "type": "p",
                "text": "Not every prompt is a feature. Sometimes you want to try something — a different approach to a component, a new library, a risky refactor — without committing to it on main. Branches are free. Use them for anything that might not work."
            },
            {
                "type": "p",
                "text": "My branching rule is simple: if I am not sure it will work, it gets a branch. If I am confident it will work, it goes straight to main. Vibe coding involves a lot of things I am not sure about, so I branch often."
            },
            {
                "type": "code",
                "language": "bash",
                "code": "# Create a branch for an experiment\ngit checkout -b experiment/new-generation-prompt\n\n# Work on it, commit as normal\ngit add .\ngit commit -m \"feat: try new structured prompt for generation\"\n\n# If it works — merge to main\ngit checkout main\ngit merge experiment/new-generation-prompt\n\n# If it does not work — just delete it\ngit checkout main\ngit branch -D experiment/new-generation-prompt\n# Everything on main is untouched"
            },
            {
                "type": "callout",
                "variant": "idea",
                "text": "Branch names tell a story. Use prefixes: feat/ for new features, fix/ for bug fixes, experiment/ for things you are not sure about, refactor/ for restructuring. When you have ten branches open the names tell you exactly what each one is."
            },
            {
                "type": "h2",
                "text": "What to do when the agent makes a mess"
            },
            {
                "type": "p",
                "text": "The agent will occasionally make a change that touches fifteen files, breaks three things, and cannot easily be undone manually. This is not a crisis if you have been committing regularly. It is a three second fix."
            },
            {
                "type": "ol",
                "items": [
                    "Do not panic and do not try to manually fix the mess",
                    "Check what the last working commit was — git log --oneline",
                    "Revert to it — git revert HEAD or git reset --hard [commit hash]",
                    "Start the prompt again with better constraints",
                    "Commit the working version before running the next prompt"
                ]
            },
            {
                "type": "code",
                "language": "bash",
                "code": "# See recent commits\ngit log --oneline\n\n# Output:\n# a3f9d2c feat: add loading skeleton to agent page\n# 8b2e1f4 feat: implement generator form\n# 3c7a9b1 feat: scaffold project structure\n\n# The agent just broke everything. Revert to last working commit.\ngit reset --hard a3f9d2c\n\n# Everything is back to the working state.\n# The agent mess never happened."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "git reset --hard is the most powerful command in your vibe coding toolkit. It is a time machine. Learn it, trust it, use it without hesitation when the agent breaks things. The only requirement is that you have been committing regularly."
            },
            {
                "type": "h2",
                "text": "The .gitignore you actually need"
            },
            {
                "type": "p",
                "text": "The agent will sometimes try to commit things that should never be in a repo. Make sure your .gitignore covers these before you start any project. Once something sensitive is committed and pushed it is in the Git history even if you delete it later."
            },
            {
                "type": "code",
                "language": "bash",
                "code": "# Essential .gitignore entries for Next.js vibe coding projects\n\n# Environment variables — never commit these\n.env\n.env.local\n.env.production\n.env*.local\n\n# Build outputs\n.next/\nout/\nbuild/\n\n# Dependencies\nnode_modules/\n\n# Debug and log files — the agent loves creating these\n*.log\nbuild-error.log\nnpm-debug.log*\n\n# OS files\n.DS_Store\nThumbs.db\n\n# Editor files\n.vscode/settings.json\n*.swp"
            },
            {
                "type": "callout",
                "variant": "skull",
                "text": "Check your .gitignore before your first commit on every project. The agent will generate log files, sometimes create .env examples with real values, and occasionally try to commit node_modules. Catch it before it happens."
            },
            {
                "type": "h2",
                "text": "Telling the agent your Git rules"
            },
            {
                "type": "p",
                "text": "Add a Git section to your CLAUDE.md. Claude Code can suggest commits, create branches, and run Git commands. You want it following your conventions when it does."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "## Git Rules\n- Never commit .env or any environment variable files\n- Never commit node_modules, build outputs, or log files\n- Commit message format: type: short description (feat/fix/refactor/style/chore/test)\n- Suggest a commit message after completing each task\n- Never force push to main\n- Never run git reset --hard without explicitly asking for confirmation first\n- Create a branch for any change that touches more than 5 files at once"
            },
            {
                "type": "h2",
                "text": "The Git commands you will use every day"
            },
            {
                "type": "p",
                "text": "You do not need to know every Git command. These are the only ones I use in a typical vibe coding session. Know these ten and you are covered for 99% of situations."
            },
            {
                "type": "ul",
                "items": [
                    "git status — see what changed since the last commit",
                    "git add . — stage all changes",
                    "git commit -m \"message\" — commit staged changes",
                    "git log --oneline — see recent commit history",
                    "git diff — see exactly what changed line by line",
                    "git checkout -- [file] — undo changes to a specific file",
                    "git reset --hard HEAD — undo all uncommitted changes",
                    "git reset --hard [hash] — go back to a specific commit",
                    "git checkout -b [branch] — create and switch to a new branch",
                    "git stash — temporarily shelve changes without committing"
                ]
            },
            {
                "type": "callout",
                "variant": "zap",
                "text": "Pro tip: git stash is underused by vibe coders. When the agent is mid-task and you want to quickly check something on main without committing the unfinished work, git stash saves the changes, you check what you need, then git stash pop brings them back."
            },
            {
                "type": "h2",
                "text": "Deploying from Git"
            },
            {
                "type": "p",
                "text": "Connect your repo to Vercel from day one and every push to main auto-deploys. This means your Git workflow and your deployment workflow are the same workflow. Commit a working feature, push, it is live. No separate deploy step."
            },
            {
                "type": "p",
                "text": "This also means main should always be deployable. Never commit broken code to main. Use branches for experiments, fix them until they work, then merge. If you follow this rule your production environment is always one git push away from the latest working version."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "Main is production. Treat every commit to main as if it is going live immediately — because with Vercel it is. This single mindset shift makes you a more disciplined vibe coder and eliminates an entire category of production incidents."
            }
        ]
    },
    {
        "id": "19",
        "slug": "when-to-stop-vibe-coding",
        "title": "19. When to Stop Vibe Coding and Just Write It Yourself",
        "blocks": [
            {
                "type": "p",
                "text": "This is the section nobody talks about because it contradicts the whole vibe coding narrative. Everyone is posting about shipping full SaaS products in a weekend with zero code written manually. The reality is more nuanced and if you do not understand the nuance you will waste enormous amounts of time fighting the agent on things you should just write yourself."
            },
            {
                "type": "p",
                "text": "Vibe coding is a multiplier, not a replacement. It makes good developers dramatically faster. It does not make the judgment calls for you. Knowing when to put the prompt down and open the file yourself is one of the most valuable skills in this entire bible."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "The best vibe coders I know write more manual code than most people think. They just write it in the right places. The agent handles the volume. The developer handles the precision."
            },
            {
                "type": "h2",
                "text": "The clearest signal — three failed prompts"
            },
            {
                "type": "p",
                "text": "This is my personal rule and I have never regretted following it. If I have written three prompts trying to get the agent to do something specific and it has not gotten it right after three attempts, I close the chat and write it myself."
            },
            {
                "type": "p",
                "text": "Three failed prompts means one of two things: either the task requires context that is too complex to communicate through a prompt, or the task is genuinely small enough that writing it manually is faster than explaining it. Either way, the answer is to stop prompting."
            },
            {
                "type": "callout",
                "variant": "skull",
                "text": "The sunk cost of failed prompts is real. After two failed attempts people think they are almost there, one more try will get it. They try five more times. Forty minutes later they write the twenty line function themselves in three minutes. Stop at three."
            },
            {
                "type": "h2",
                "text": "Tasks that almost always need manual code"
            },
            {
                "type": "p",
                "text": "After months of vibe coding I have a clear mental model of what the agent handles well and what it does not. These are the categories where I almost always end up writing the code myself."
            },
            {
                "type": "h3",
                "text": "Complex business logic with many conditions"
            },
            {
                "type": "p",
                "text": "If a function has more than four or five interacting conditions — user state, subscription tier, feature flags, time-based rules, regional restrictions — the agent tends to get some of them right and miss others. The logic is not wrong, it is incomplete. And incomplete business logic in production is worse than no logic at all."
            },
            {
                "type": "h3",
                "text": "Precise CSS and layout fixes"
            },
            {
                "type": "p",
                "text": "When something is almost right visually and you need to make a very specific adjustment — move this element 4px to the left, align these two things precisely, fix this specific responsive breakpoint — the agent almost always over-engineers the fix. It rewrites the whole layout instead of changing one property. Open the file and change the one property."
            },
            {
                "type": "h3",
                "text": "Performance optimizations"
            },
            {
                "type": "p",
                "text": "The agent understands performance concepts but applying them to your specific code requires understanding the actual bottleneck. When you need to optimize a slow query, memoize an expensive computation, or reduce unnecessary re-renders, you need to understand what is actually slow before changing anything. Profile it yourself, identify the bottleneck, then write the fix."
            },
            {
                "type": "h3",
                "text": "Anything touching authentication flow"
            },
            {
                "type": "p",
                "text": "Auth logic is too important to get slightly wrong. Middleware that almost works, session handling that is mostly correct, redirect logic that handles most cases — these are not acceptable. Auth either works completely or it is broken. Write it yourself and test every edge case manually."
            },
            {
                "type": "h3",
                "text": "One-liners and tiny fixes"
            },
            {
                "type": "p",
                "text": "If the fix is genuinely small — change a condition, update a value, add a null check — writing a prompt takes longer than just making the change. The overhead of the prompt, the agent reading files, generating a response, you reviewing the diff — for a three word fix this process takes two minutes. Opening the file and changing it takes ten seconds."
            },
            {
                "type": "callout",
                "variant": "idea",
                "text": "The threshold I use: if I can describe the exact change in one sentence and I know exactly which line to change, I make the change myself. If I need to explain context before describing the change, I use the agent."
            },
            {
                "type": "h2",
                "text": "When the agent is in a loop"
            },
            {
                "type": "p",
                "text": "You will recognize the loop when you see it. The agent makes a change. It breaks something else. You tell it what broke. It fixes that and breaks the first thing again. You are going in circles and the codebase is getting messier with each iteration."
            },
            {
                "type": "p",
                "text": "The loop happens when the agent does not have enough context to understand the real constraint — why both things need to be true simultaneously. You understand that constraint because you built the feature. Write it yourself."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "// Signs you are in a loop\n- Same error appearing after you told the agent to fix it\n- Agent fixing the new bug by reintroducing the old one\n- Each response getting longer and more complex without making progress\n- The agent starting to add comments explaining why it made a choice\n  (it does this when it is uncertain)\n- You have been on the same task for more than 30 minutes"
            },
            {
                "type": "callout",
                "variant": "skull",
                "text": "The agent adding explanatory comments to its own code is a warning sign. It does this when it is not confident. If the responses are getting more verbose and the code is getting more complex but the bug is still there — stop. Write it yourself."
            },
            {
                "type": "h2",
                "text": "Prototyping vs production code"
            },
            {
                "type": "p",
                "text": "There is a difference between code that demonstrates something works and code that runs reliably in production. The agent is excellent at the first and mediocre at the second without your guidance."
            },
            {
                "type": "p",
                "text": "For prototypes, demos, and MVPs — let the agent run. Imperfect code that demonstrates the concept is exactly what you need. For production paths that handle real user data, real payments, and real errors — be more hands on. Read every line. Write the critical paths yourself."
            },
            {
                "type": "h2",
                "text": "The hybrid approach"
            },
            {
                "type": "p",
                "text": "The most effective workflow is not pure vibe coding or pure manual coding. It is knowing which parts of each feature belong to which mode."
            },
            {
                "type": "ul",
                "items": [
                    "Agent: scaffold the component structure and basic layout",
                    "Manual: write the core business logic and state management",
                    "Agent: add the styling, animations, and responsive behavior",
                    "Manual: write the error handling and edge cases",
                    "Agent: write the tests based on the manual logic",
                    "Manual: review every file the agent touched before committing"
                ]
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "The scaffold and style work is high volume and low precision — perfect for the agent. The logic and error handling is low volume and high precision — perfect for you. Split the work accordingly."
            },
            {
                "type": "h2",
                "text": "Getting faster at writing code manually"
            },
            {
                "type": "p",
                "text": "Here is something counterintuitive: using AI tools makes you faster at writing code manually. Not slower. Because you spend your manual coding time on the hardest, most interesting problems — the logic, the architecture, the edge cases. You get better at exactly the things that matter most."
            },
            {
                "type": "p",
                "text": "The developers who over-rely on AI and never write anything manually are trading short term speed for long term skill stagnation. The ones who use AI for volume and write manually for precision get the best of both — they ship fast and they keep getting better."
            },
            {
                "type": "callout",
                "variant": "idea",
                "text": "Every time you write something manually instead of prompting for it, you are making a deposit into your skill account. The interest compounds. After six months of hybrid vibe coding you are both faster with AI and more capable without it."
            },
            {
                "type": "h2",
                "text": "The honest truth about vibe coding limits"
            },
            {
                "type": "p",
                "text": "Vibe coding as it exists today is best suited for standard web application patterns — CRUD operations, API integrations, UI components, authentication flows, dashboard layouts. The further you get from these patterns the less reliable the agent becomes."
            },
            {
                "type": "p",
                "text": "Custom algorithms, novel data structures, complex mathematical operations, real time systems with strict performance requirements, low level optimizations — these are not vibe coding territory. They require deep understanding and precise implementation that the agent cannot reliably produce without heavy guidance."
            },
            {
                "type": "p",
                "text": "This is not a criticism. It is a map. Knowing the boundaries of the territory means you never waste time trying to vibe code something that needs to be written. You go to the edge of what the agent handles well, stop, and write the rest yourself."
            },
            {
                "type": "callout",
                "variant": "zap",
                "text": "Pro tip: When you hit the edge of what the agent handles reliably, note it down. Over time you build a personal map of where vibe coding works for your specific stack and project type. Your map will be different from mine. Build yours."
            },
            {
                "type": "h2",
                "text": "The question to ask yourself"
            },
            {
                "type": "p",
                "text": "Before every prompt ask yourself one question: is the agent the fastest path to a working solution right now, or am I prompting because I do not want to think through the problem myself?"
            },
            {
                "type": "p",
                "text": "Vibe coding as avoidance is a real thing. It is easy to keep prompting when you are stuck instead of sitting with the problem and thinking it through. The agent gives you the feeling of progress even when it is not making real progress. Recognize this pattern and break it."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "Sometimes the most productive thing you can do is close every AI tool, open a blank file, and think. The agent is a collaborator, not a crutch. Use it when it makes you faster. Set it aside when thinking is what you actually need."
            }
        ]
    }
]
};
