import { Category } from '../types';

export const category: Category = {
    id: 'cat-7',
    slug: 'lessons-learned',
    title: 'Lessons Learned',
    sections: [
        {
            "id": "21",
            "slug": "mistakes-i-made",
            "title": "21. Mistakes I Made",
            "blocks": [
                {
                    "type": "p",
                    "text": "This is the section I wish had existed when I started. Everything here is something I actually did wrong, wasted real time on, or had to learn the hard way. No made up cautionary tales. Real mistakes from real projects."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Reading this section and ignoring it is the most expensive thing you can do. Every mistake here cost me anywhere from a few hours to a few weeks. You have been warned."
                },
                {
                    "type": "h2",
                    "text": "Mistake 1 — Vague prompts"
                },
                {
                    "type": "p",
                    "text": "This was my most expensive mistake when I started. I would write prompts like 'make the UI better' or 'fix the auth flow' and get confused, half-broken output. Then I would blame the tool."
                },
                {
                    "type": "p",
                    "text": "The tool was fine. My prompt was garbage. Every vague prompt is a coin flip. Sometimes you get lucky, most times you get something you have to undo. I now spend more time writing the prompt than the agent spends executing it and my success rate went from maybe 60% to over 90%."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Vague prompt = vague output. Every single time. The AI is not going to read your mind. Tell it exactly what you want, exactly which files to touch, and exactly what it cannot touch."
                },
                {
                    "type": "h2",
                    "text": "Mistake 2 — No AGENTS.md from the start"
                },
                {
                    "type": "p",
                    "text": "I built three projects before I discovered AGENTS.md. In all three projects the agent randomly used inline styles on some components, forgot TypeScript on others, put files in the wrong folders, and imported from paths that did not exist. I spent hours cleaning up after each session."
                },
                {
                    "type": "p",
                    "text": "The moment I added AGENTS.md to my fourth project the agent became consistent from the first prompt. It knew the stack, it knew the rules, it knew where things go. Create AGENTS.md before you write a single line of code. Non-negotiable."
                },
                {
                    "type": "h2",
                    "text": "Mistake 3 — Adding auth halfway through"
                },
                {
                    "type": "p",
                    "text": "On Siteo I built the generator, the preview, and the save flow before adding authentication. Big mistake. When I added auth I had to refactor every component that fetched data, every API route that needed a user ID, and every page that needed to be protected. It touched almost every file in the project."
                },
                {
                    "type": "p",
                    "text": "Auth is infrastructure. Build it first. Before any features. Before any pages. Set up your Supabase auth, your middleware, your session handling. Then build everything else on top of it."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Adding auth to an existing project is 3x harder than building on top of auth from day one. Do it first. Always."
                },
                {
                    "type": "h2",
                    "text": "Mistake 4 — Not committing after each working feature"
                },
                {
                    "type": "p",
                    "text": "I used to commit at the end of the day or when I remembered to. Bad idea. The agent would break something in a new prompt, I would not be able to remember exactly what the working state looked like, and I would waste an hour trying to undo things manually."
                },
                {
                    "type": "p",
                    "text": "Now I commit after every single working feature. Not every few features. Every one. Takes 30 seconds. Has saved me hours. If the next prompt breaks something I just revert and try a different approach."
                },
                {
                    "type": "h2",
                    "text": "Mistake 5 — Fighting outdated libraries"
                },
                {
                    "type": "p",
                    "text": "I spent two weeks on a project trying to use a library that the AI models did not know well. The docs were sparse, the model kept hallucinating methods that did not exist, and every prompt needed heavy manual correction."
                },
                {
                    "type": "p",
                    "text": "If the AI does not know the library well, switch libraries. This sounds obvious but the sunk cost fallacy is real. I kept thinking I was almost through the hard part. I was not. The moment I switched to a well-known alternative the whole project moved at normal speed again."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "The AI knows Next.js, Tailwind, Supabase, and Prisma deeply. It knows niche libraries poorly. Stick to the well-known stack and you will never fight the agent on documentation."
                },
                {
                    "type": "h2",
                    "text": "Mistake 6 — Giving the agent too much at once"
                },
                {
                    "type": "p",
                    "text": "Early on I would write massive prompts trying to build an entire feature in one go. Ten components, three API routes, database schema, all in one prompt. The agent would start well and gradually lose track of what it was doing. By the end it was contradicting itself, using inconsistent types, and leaving half the tasks incomplete."
                },
                {
                    "type": "p",
                    "text": "One task per prompt. One feature per session. If the task feels too big, break it down. I have never regretted breaking something into smaller prompts. I have regretted the mega-prompts every single time."
                },
                {
                    "type": "h2",
                    "text": "Mistake 7 — Deploying late"
                },
                {
                    "type": "p",
                    "text": "On my first few projects I treated deployment as the last step. Build everything locally, then deploy when done. This was a mistake every time. Environment variables behaved differently, build optimizations broke things that worked in dev, and edge cases only appeared in production."
                },
                {
                    "type": "p",
                    "text": "Now I deploy on day one. The moment the scaffold is in place and I have one working route, I push to Vercel. I build the rest of the project against the live deployment. Issues surface immediately instead of all at once on launch day."
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Pro tip: Set up your Vercel project and environment variables on day one before you build anything. Then every push goes live automatically and you are always testing against production."
                },
                {
                    "type": "h2",
                    "text": "Mistake 8 — Skipping the Claude Code review pass"
                },
                {
                    "type": "p",
                    "text": "When I was in a rush I would skip the Claude Code review pass and ship directly from Antigravity output. Every single time I did this I found bugs in production that the review pass would have caught. A missing null check. An unhandled promise rejection. A type that was secretly any."
                },
                {
                    "type": "p",
                    "text": "The review pass takes 20 minutes. Fixing production bugs takes hours plus the stress of something being broken for real users. Do the review pass."
                },
                {
                    "type": "h2",
                    "text": "Mistake 9 — Hardcoding AI prompts in routes"
                },
                {
                    "type": "p",
                    "text": "When I built the Siteo generation route I hardcoded the AI prompt directly in the API route file. Every time I wanted to tweak the prompt — change the tone, add a new section, adjust the styling instructions — I had to dig into the route, find the prompt string, edit it carefully without breaking the surrounding code, and redeploy."
                },
                {
                    "type": "p",
                    "text": "AI prompts should live in skill files or dedicated prompt files, not inside route handlers. They change constantly. They need to be readable and editable without touching the surrounding logic."
                },
                {
                    "type": "h2",
                    "text": "Mistake 10 — Building in isolation too long"
                },
                {
                    "type": "p",
                    "text": "I would build for weeks before showing anyone. By the time I got feedback the product was so developed in a specific direction that changing course felt painful. I had assumptions baked into every design decision that turned out to be wrong."
                },
                {
                    "type": "p",
                    "text": "Ship ugly. Ship early. Show someone on day three, not day thirty. The feedback you get from a real person using the actual product is worth more than a month of solo building."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "Your most valuable feedback always comes from someone who is not you, using the product for the first time, doing something you did not expect. Get that feedback as early as possible."
                }
            ]
        },
        {
            "id": "22",
            "slug": "resources",
            "title": "22. Resources",
            "blocks": [
                {
                    "type": "p",
                    "text": "Everything I actually use, read, watch, and reference. No filler. If it is on this list I have personally used it and found it valuable. If I stopped using something I removed it."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "Do not try to consume all of this at once. Bookmark it and come back when you need something specific. The best resource is always the one that solves the problem you have right now."
                },
                {
                    "type": "h2",
                    "text": "Tools I use daily"
                },
                {
                    "type": "ul",
                    "items": [
                        "[Antigravity](https://antigravity.dev) — my main AI coding agent for building features",
                        "[Claude Code](https://docs.anthropic.com/en/docs/claude-code) — CLI tool for reasoning, refactoring, and review passes",
                        "[Supabase](https://supabase.com) — database, auth, storage. Replaces an entire backend",
                        "[Vercel](https://vercel.com) — deploy Next.js in seconds, zero config",
                        "[Gumroad](https://gumroad.com) — sell digital products instantly, no setup",
                        "[ManyChat](https://manychat.com) — Instagram DM automation for comment triggers"
                    ]
                },
                {
                    "type": "h2",
                    "text": "Documentation I actually read"
                },
                {
                    "type": "ul",
                    "items": [
                        "[Next.js Docs](https://nextjs.org/docs) — the App Router docs specifically, read the server components section",
                        "[Tailwind v4 Docs](https://tailwindcss.com/docs) — especially the migration guide from v3",
                        "[Supabase Docs](https://supabase.com/docs) — RLS policies and auth helpers are where most people get stuck",
                        "[Anthropic Prompt Engineering Guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) — how to actually prompt Claude well",
                        "[Anthropic Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code) — full reference for CLI workflows",
                        "[Vercel Docs](https://vercel.com/docs) — environment variables and edge functions are what you will need most"
                    ]
                },
                {
                    "type": "h2",
                    "text": "YouTube channels worth your time"
                },
                {
                    "type": "p",
                    "text": "I am selective about YouTube. These are the only dev channels I consistently get value from. No padding."
                },
                {
                    "type": "ul",
                    "items": [
                        "[Fireship](https://www.youtube.com/@Fireship) — fast, opinionated, always current. Best channel for staying up to date on tools",
                        "[Theo (t3.gg)](https://www.youtube.com/@t3dotgg) — honest takes on modern web dev, TypeScript, and why most things are overengineered",
                        "[ThePrimeagen](https://www.youtube.com/@ThePrimeTimeagen) — no BS opinions on dev tools, workflow, and the industry",
                        "[Anthropic](https://www.youtube.com/@Anthropic/videos) — official Claude demos and use case walkthroughs",
                        "[Kevin Powell](https://www.youtube.com/@KevinPowell) — best CSS resource on YouTube, still relevant even with Tailwind"
                    ]
                },
                {
                    "type": "h2",
                    "text": "AI models and where to access them"
                },
                {
                    "type": "ul",
                    "items": [
                        "[Claude](https://claude.ai) — use Sonnet 4.6 for coding, best model available right now",
                        "[ChatGPT](https://chat.openai.com) — GPT-4o for brainstorming and non-code tasks",
                        "[Gemini](https://gemini.google.com) — 3.1 Pro for massive context window tasks",
                        "[Anthropic API](https://console.anthropic.com) — direct API access for building with Claude in your own apps"
                    ]
                },
                {
                    "type": "h2",
                    "text": "People worth following"
                },
                {
                    "type": "p",
                    "text": "These are people whose takes on AI, building, and developer tools I actually trust. All on X/Twitter."
                },
                {
                    "type": "ul",
                    "items": [
                        "[@sama](https://x.com/sama) — Sam Altman, OpenAI. First to know about GPT updates",
                        "[@karpathy](https://x.com/karpathy) — Andrej Karpathy. Best technical explanations of how AI actually works",
                        "[@theo](https://x.com/t3dotgg) — Theo. Real opinions on web dev without the hype",
                        "[@web.dev.george](https://instagram.com/web.dev.george) — me. Vibe coding, building in public, SaaS content for developers"
                    ]
                },
                {
                    "type": "h2",
                    "text": "Books that actually helped"
                },
                {
                    "type": "p",
                    "text": "I do not read many books. These are the ones I finished and actually changed how I think."
                },
                {
                    "type": "ul",
                    "items": [
                        "The Lean Startup — Eric Ries. Build, measure, learn. Still the best framework for shipping fast",
                        "Zero to One — Peter Thiel. How to think about building something new instead of copying",
                        "The Mom Test — Rob Fitzpatrick. How to talk to customers without them lying to you. Essential before you build anything"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "The Mom Test is the most underrated book in this list. Read it before you build your next product. It will change how you validate ideas and talk to potential customers."
                },
                {
                    "type": "h2",
                    "text": "GitHub repos worth studying"
                },
                {
                    "type": "ul",
                    "items": [
                        "[Anthropic Prompt Engineering Tutorial](https://github.com/anthropics/prompt-eng-interactive-tutorial) — interactive guide to prompting Claude",
                        "[Shadcn UI](https://github.com/shadcn-ui/ui) — best component library for Next.js, study the source code",
                        "[Taxonomy by shadcn](https://github.com/shadcn-ui/taxonomy) — real Next.js App Router project, great reference for structure"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Pro tip: The best way to learn how to structure a real Next.js project is to read the source code of a real Next.js project. Taxonomy is the best example available publicly."
                },
                {
                    "type": "h2",
                    "text": "One final thing"
                },
                {
                    "type": "p",
                    "text": "You have read everything in this bible. You know the setup, the tools, the workflow, the mistakes to avoid, and the resources to reference. The only thing left is to actually build something."
                },
                {
                    "type": "p",
                    "text": "Pick one idea. Not the best idea. Not the perfect idea. Just one idea that solves a real problem for a real person. Open a markdown file. Start the brain dump. Run the scaffold prompt. Ship it in a week."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "Everything in here means nothing if you do not ship. Close this, open your editor, and build something. That is the only thing that actually matters."
                }
            ]
        }
    ]
};
