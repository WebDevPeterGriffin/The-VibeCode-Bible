import { Category } from '../types';

export const category: Category = {
    id: 'cat-4',
    slug: 'advanced-and-scale',
    title: 'Advanced & Scale',
    sections: [
        {
            "id": "27",
            "slug": "the-ad-production-problem",
            "title": "31. The Ad Production Problem",
            "blocks": [
                {
                    "type": "p",
                    "text": "Running ad creative at scale is a volume game. The brands that win are the ones testing the most variations — different hooks, different styles, different formats — against real audiences until something converts. The problem is that producing video ads manually is brutal."
                },
                {
                    "type": "p",
                    "text": "This is what making one ad used to look like. Write a prompt manually. Open Higgsfield, paste it in, configure the settings. Wait for generation. Download it. Re-upload it somewhere else for the video step. Write another prompt for the video. Configure again. Wait again. Then do that 100 more times for a real campaign."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Repeat that process 100 times for a single campaign. Most people give up after 10. The ones who do not give up are spending 80 percent of their time on repetitive clicking, not on strategy or creative direction."
                },
                {
                    "type": "h2",
                    "text": "Why Higgsfield changes the equation"
                },
                {
                    "type": "p",
                    "text": "Higgsfield with Seedance 2.0 generates photorealistic UGC-style video from a still image and a text prompt. The output quality is at the point where it is genuinely usable for paid ads. The bottleneck is not the AI generation anymore. The bottleneck is the human manually operating the tool."
                },
                {
                    "type": "p",
                    "text": "If you can remove the human from the repetitive part — the uploading, the configuring, the waiting, the downloading — and keep the human only in the creative direction seat, you can produce at a completely different scale. That is what this pipeline does."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "The creative director does not sit in front of the camera for every shot. They set the vision and let the crew execute. This pipeline makes Claude and Playwright your crew. You set the vision once and let them execute at scale."
                }
            ]
        },
        {
            "id": "28",
            "slug": "the-claude-higgsfield-pipeline",
            "title": "32. The Claude + Higgsfield Pipeline",
            "blocks": [
                {
                    "type": "p",
                    "text": "One command sets up the entire pipeline. No tab switching. No manual clicking. No copy-pasting prompts one at a time. This is the four-step system that replaces a full day of manual ad production work."
                },
                {
                    "type": "h2",
                    "text": "How it works"
                },
                {
                    "type": "ol",
                    "items": [
                        "One command sets up the entire pipeline — you tell Claude your product, your audience, and the style direction. That is the only input you give.",
                        "Claude writes 15 style-specific Seedance prompts — each one written as a specialized creative director for that style. Hook-first structure built into every prompt. Variations across energy, pacing, and visual treatment.",
                        "Playwright MCP opens Higgsfield in a real browser — uploads your product image, pastes each prompt, configures the generation settings, triggers generation, and waits for output. No human involvement.",
                        "Videos are downloaded automatically — named, organized, ready to review and test. Run the pipeline again with a new style direction whenever you need more."
                    ]
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "Zero manual clicking after setup. The pipeline runs while you do something else. You come back to a folder of finished ad videos ready for testing."
                },
                {
                    "type": "h2",
                    "text": "What Playwright MCP actually does"
                },
                {
                    "type": "p",
                    "text": "Playwright MCP gives Claude full control of a real browser. Not a headless simulation. A real Chromium window that Claude can navigate, click, fill forms, upload files, and interact with exactly like a human would — just faster and without making mistakes."
                },
                {
                    "type": "p",
                    "text": "This is what makes the Higgsfield automation possible. Claude does not call a Higgsfield API because Higgsfield does not have a public API for this workflow. Claude uses Playwright to operate Higgsfield the same way a human would, just autonomously."
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Pro tip: Playwright MCP works on any web app, not just Higgsfield. Any repetitive browser workflow you do manually — logging in, filling forms, scraping results, downloading files — can be automated the same way."
                },
                {
                    "type": "h2",
                    "text": "Setting up the pipeline"
                },
                {
                    "type": "ol",
                    "items": [
                        "Install Playwright MCP — add it to your Claude Code MCP config so Claude has browser access in your sessions",
                        "Have your product image ready — a clean shot, white or neutral background works best for Seedance 2.0",
                        "Give Claude your brand brief — product name, target audience, tone, and any style references",
                        "Run the pipeline command — Claude handles everything from prompt generation through to download",
                        "Review and select — go through the outputs, pick the strongest variations, and send them to testing"
                    ]
                }
            ]
        },
        {
            "id": "29",
            "slug": "scaling-unlimited-ads",
            "title": "33. Scaling Unlimited Ads",
            "blocks": [
                {
                    "type": "p",
                    "text": "Once the pipeline is running, the creative constraint is gone. You are no longer limited by how many ads you can manually produce. You are limited only by how well you can brief Claude and how fast you can interpret test results. That is a fundamentally different problem to have."
                },
                {
                    "type": "h2",
                    "text": "What the pipeline gives you"
                },
                {
                    "type": "ul",
                    "items": [
                        "Seedance 2.0 — photorealistic UGC video generation. The output looks like real user-generated content, which is exactly what performs best in paid social right now.",
                        "15 Style Skills — Claude acts as a specialized creative director for each style. Not the same prompt with minor tweaks. Genuinely different creative directions: testimonial, product demo, lifestyle, before-after, hook-led, and more.",
                        "2-second hook framework — every prompt has the hook structure built in. The first two seconds of the video are designed to stop the scroll.",
                        "Playwright MCP — full browser control with no tab switching. Claude operates Higgsfield the same way a human would but without the fatigue, mistakes, or time cost.",
                        "Unlimited scale — run the pipeline as many times as you need. New product, new audience, new style direction. One command, different brief, thousands more videos."
                    ]
                },
                {
                    "type": "h2",
                    "text": "How to think about creative testing at scale"
                },
                {
                    "type": "p",
                    "text": "The reason most ad accounts plateau is not budget. It is creative fatigue. The same ads run until performance drops, then the team scrambles to produce something new. With this pipeline you can have fresh creative variations ready before the current batch fatigues."
                },
                {
                    "type": "p",
                    "text": "The process becomes: run pipeline, test variations, identify the winning style direction, brief Claude with the insights from the winners, run pipeline again with refined direction. Every cycle you get smarter about what works for your audience and faster at producing more of it."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "The brands spending $50k per month on ads are not smarter than you. They are just testing more creative. This pipeline gives you the same testing velocity without the production team."
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Once you have Playwright MCP set up, look at every browser task you do repeatedly and ask: could Claude run this? The answer is almost always yes."
                }
            ]
        },
        {
            "id": "30",
            "slug": "antigravity-2-claude-code",
            "title": "34. Antigravity 2.0 + Claude Code",
            "blocks": [
                {
                    "type": "p",
                    "text": "Google dropped Antigravity 2.0 at I/O in May 2026. It is an agent-first CLI built in Go. The premise: you describe what you want, and Antigravity spins up specialist agents — planner, coder, tester, reviewer — each running in its own managed cloud sandbox. No shared state, no interference. Claude Code connects to it as the orchestrator via an MCP bridge. Your job is to describe the outcome. The agents figure out how to get there."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "This is not Cursor with a plugin. This is a multi-agent architecture with native voice commands, isolated cloud sandboxes, and an MCP bridge that lets Claude Code direct the entire fleet. The delta between this and manually coding is enormous."
                },
                {
                    "type": "h2",
                    "text": "The Stack"
                },
                {
                    "type": "ul",
                    "items": [
                        "Antigravity CLI — @google/antigravity-cli, install globally via npm",
                        "Claude Code — the orchestration layer that manages the agent fleet",
                        "Antigravity MCP bridge — the connection between Claude Code and Antigravity's agent runtime",
                        "Google Cloud sandboxes — isolated execution environments, one per agent, managed automatically"
                    ]
                },
                {
                    "type": "h2",
                    "text": "Setup"
                },
                {
                    "type": "code",
                    "language": "bash",
                    "code": "npm install -g @google/antigravity-cli\nag mcp add claude-code --bridge\nag extensions install claude-code\nag init && claude /init"
                },
                {
                    "type": "h2",
                    "text": "The Workflow — Claude Code as Orchestrator"
                },
                {
                    "type": "ol",
                    "items": [
                        "Open Claude Code in your project and confirm the Antigravity bridge shows as a connected tool",
                        "Describe the full task to Claude Code — stack, constraints, and what done looks like",
                        "Claude Code drafts an execution plan and proposes which agents to dispatch for each step",
                        "Approve the plan. Claude Code dispatches the planner agent first — it writes an architecture spec and returns it to you",
                        "Review the spec. Claude Code passes it to the coder agent, which builds in its own sandbox",
                        "The coder's output goes to the tester agent. It runs the test suite and returns a pass/fail report",
                        "Failing tests go back to the coder. Passing tests go to the reviewer agent for a final audit",
                        "You review the reviewer's findings, approve or reject, and merge"
                    ]
                },
                {
                    "type": "h2",
                    "text": "Ready-to-use Claude Code Prompt"
                },
                {
                    "type": "code",
                    "language": "text",
                    "code": "You are the orchestrator for a multi-agent Antigravity build.\n\nTask: [describe what you're building]\nStack: [your stack]\nConstraints: [what the agents must not touch]\n\nDispatch a planner agent to design the architecture and data model.\nReturn the plan to me for review before dispatching the coder.\nAfter the coder completes, dispatch the tester agent and return results.\nAfter all tests pass, dispatch the reviewer agent for a final audit.\n\nDo not proceed to the next agent without my explicit approval at each stage."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "Go deeper — the Antigravity CLI repo and docs are at antigravity.dev. The MCP bridge spec lives in the Claude Code docs under tool integrations. Start with a small feature to get a feel for the approval loop before running it on anything production-critical."
                }
            ]
        },
        {
            "id": "31",
            "slug": "scrapling-fast-python-scraping",
            "title": "35. Scrapling — Fast Python Web Scraping",
            "blocks": [
                {
                    "type": "p",
                    "text": "BeautifulSoup works on simple HTML pages. But modern websites have anti-bot protection, JavaScript rendering, and dynamic content that makes it fail immediately. Scrapling is a Python scraping library built for this reality. It handles stealth mode, async requests, auto-matching selectors, and proxy rotation out of the box."
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Auto-matching selectors is the killer feature. If a site updates its HTML and your old selector breaks, Scrapling's adaptive matching finds the equivalent element automatically. You do not need to babysit your scrapers every time a site redesigns."
                },
                {
                    "type": "h2",
                    "text": "The Stack"
                },
                {
                    "type": "ul",
                    "items": [
                        "Scrapling — pip install scrapling, then scrapling install to fetch browser drivers",
                        "Python 3.10+ — required for async support",
                        "Claude Code — to write and iterate on the scraper from your description",
                        "A proxy service — optional, needed only for high-volume scraping on protected sites"
                    ]
                },
                {
                    "type": "h2",
                    "text": "The Workflow"
                },
                {
                    "type": "ol",
                    "items": [
                        "Install Scrapling in your project",
                        "Identify the data you need — URLs, the fields to extract, and whether the content is static or JS-rendered",
                        "Use the starter prompt below to have Claude Code write the scraper against your target",
                        "Run it and inspect the output — print the first result to verify the selectors are correct",
                        "Tell Claude Code what to adjust — field names, pagination handling, rate limits between requests",
                        "Switch to StealthyFetcher and add proxy rotation if the target returns 403s or CAPTCHAs"
                    ]
                },
                {
                    "type": "code",
                    "language": "bash",
                    "code": "pip install scrapling\nscrapling install"
                },
                {
                    "type": "code",
                    "language": "python",
                    "code": "from scrapling import Fetcher, StealthyFetcher\n\nfetcher = Fetcher()\npage = fetcher.get('https://example.com/listings')\nitems = page.find_all('div.listing-card')\n\nfor item in items:\n    print({\n        'title': item.find('h2').text,\n        'price': item.find('.price').text,\n        'url': item.find('a').get('href'),\n    })"
                },
                {
                    "type": "h2",
                    "text": "Ready-to-use Claude Code Prompt"
                },
                {
                    "type": "code",
                    "language": "text",
                    "code": "Set up a Scrapling scraper for [target URL].\n\nI want to extract: [list the fields — title, price, date, description, etc.]\nThe data is on: [describe the page structure or paste a snippet of the HTML]\nOutput format: JSON, one object per item, saved to output.json\n\nUse StealthyFetcher if the site has bot protection.\nAdd pagination to loop through all pages automatically.\nPrint progress to the console so I can see it running."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "Go deeper — github.com/D4Vinci/Scrapling. The README covers selectors, stealth options, and async patterns in detail. Check the examples folder first — most common scraping patterns are already there and you can adapt them rather than starting from scratch."
                }
            ]
        },
        {
            "id": "32",
            "slug": "browser-harness-ai-automation",
            "title": "36. Browser Harness — AI Browser Automation",
            "blocks": [
                {
                    "type": "p",
                    "text": "Playwright is powerful but you have to write every action in code — navigate here, find this selector, click it, wait for the next state. Browser Harness flips that. You describe what you want the browser to do in plain English and it executes the actions. Connect it to Claude Code via MCP and you can automate any browser workflow just by describing it."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "This is the same pattern as the Higgsfield ad pipeline — Claude controls a real browser and runs repetitive tasks without you touching the keyboard. Browser Harness makes that setup plug-and-play for any web application, not just one specific tool."
                },
                {
                    "type": "h2",
                    "text": "The Stack"
                },
                {
                    "type": "ul",
                    "items": [
                        "Browser Harness MCP server — the bridge between Claude Code and a real browser instance",
                        "Claude Code — gives the natural language instructions to the browser",
                        "Chromium — the browser that executes the actions (launched and managed by Browser Harness)",
                        "Your MCP config file — where you wire Browser Harness into Claude Code"
                    ]
                },
                {
                    "type": "h2",
                    "text": "The Workflow"
                },
                {
                    "type": "ol",
                    "items": [
                        "Install the Browser Harness MCP server and add it to your Claude Code MCP config",
                        "Restart Claude Code so it detects the new tool — confirm the browser tool shows as available",
                        "Describe the browser workflow you want to automate — start with the URL and the end goal",
                        "Claude Code opens a browser, navigates to the URL, and executes the steps you described",
                        "Watch the first run to verify it is doing what you intended before letting it run unattended",
                        "Iterate in plain English — 'also extract the phone number' or 'skip the cookie popup' — Claude adjusts without you touching any code",
                        "Once verified, run it on the full dataset or set it on a schedule via a cron job"
                    ]
                },
                {
                    "type": "h2",
                    "text": "Ready-to-use Claude Code Prompt"
                },
                {
                    "type": "code",
                    "language": "text",
                    "code": "Using the browser tool, automate the following workflow:\n\n1. Go to [URL]\n2. Log in with username [x] and password [y]\n3. Navigate to [section]\n4. Extract [data you need] from every row in the table\n5. Save the result as a CSV named [filename]\n\nIf you hit a popup or CAPTCHA, pause and tell me.\nRepeat for pages 1 through [n] and combine all results into one file."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "Start with internal tools and dashboards — admin panels, your own SaaS, your client's CMS. Those are the highest-leverage automations and the easiest to get running because there are no anti-bot measures. Once the pattern is clear, move to external sites."
                }
            ]
        },
        {
            "id": "33",
            "slug": "agency-agent-stack",
            "title": "37. Multi-Agent Orchestration for Agencies",
            "blocks": [
                {
                    "type": "p",
                    "text": "The old agency model: hire developers, assign tickets, review pull requests, bill the client. The new model: you are the engineering director, AI agents are your workforce, and your value is the system you build around them. One person can now run what used to require a team — because you are not writing code, you are directing agents."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "The failure mode is treating agents like a chat assistant. Ask, paste, repeat. That is not orchestration — that is copy-paste with extra steps. Real orchestration means scoped tasks, defined handoffs, and reviewed output at every stage."
                },
                {
                    "type": "h2",
                    "text": "The Stack"
                },
                {
                    "type": "ul",
                    "items": [
                        "Claude Code — the manager and orchestrator, sees the full picture and dispatches agents",
                        "Research agent — scoped to read-only, gathers context, reads docs, summarises existing code",
                        "Build agent — scoped to implementation only, given the research output as context before it starts",
                        "Test agent — scoped to writing tests for what the build agent produced, never modifies the implementation",
                        "Review agent — final audit for security issues, pattern consistency, and spec compliance"
                    ]
                },
                {
                    "type": "h2",
                    "text": "The Agency Agent Stack Workflow"
                },
                {
                    "type": "ol",
                    "items": [
                        "Define the task in full — what is being built, what it connects to, what files are in scope, what done looks like",
                        "Create a task.md file at the project root with the full spec, constraints, and acceptance criteria",
                        "Run the research agent first — give it read-only access to the codebase, ask it to produce a context.md",
                        "Review context.md yourself before it goes to the build agent — catch wrong assumptions now, not after hours of build time",
                        "Pass context.md and task.md to the build agent — its only job is to implement against the spec",
                        "Pass the build output to the test agent — its only job is to write tests for the new implementation",
                        "Pass everything to the review agent — security check, pattern consistency, anything the build agent missed",
                        "Review the reviewer's output, approve or send back with notes, then merge"
                    ]
                },
                {
                    "type": "h2",
                    "text": "Keeping Agents From Stepping On Each Other"
                },
                {
                    "type": "p",
                    "text": "The most common failure in multi-agent builds is one agent modifying files another agent is still working on, or a build agent drifting into architecture decisions that were already settled. The fix is task scoping. Every agent prompt must specify what files it can touch, what it cannot touch, and what it must produce before it hands off."
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Scope every agent with this pattern: 'You may only read and write [files]. Do not modify [files]. Your output must include [deliverable]. When done, write a summary of every file you changed to agent-log.md.' The log file is how you audit each agent's work before the next one starts."
                },
                {
                    "type": "h2",
                    "text": "Ready-to-use Claude Code Prompt"
                },
                {
                    "type": "code",
                    "language": "text",
                    "code": "You are the orchestrator for this build. We are using a four-agent workflow.\n\nTask spec is in task.md. Read it first.\n\nAgent 1 — Research:\nRead the existing codebase. Produce a context.md that summarises the relevant files,\npatterns in use, and anything the build agent needs to know. Do not write any code.\n\nAgent 2 — Build:\nRead context.md and task.md. Implement only what is in scope.\nTouch only [files]. Do not modify [other files].\nWrite a summary of every file changed to build-log.md when done.\n\nAgent 3 — Test:\nRead build-log.md. Write unit and integration tests for every new function.\nDo not modify the implementation. Tests only.\n\nAgent 4 — Review:\nRead all changed files. Check for security issues, pattern consistency, and spec compliance.\nWrite your findings to review-log.md. Flag anything that must be fixed before merge.\n\nDo not proceed to the next agent without my explicit approval."
                }
            ]
        },
        {
            "id": "34",
            "slug": "claude-md-context-mode",
            "title": "38. Context Mode — The CLAUDE.md System",
            "blocks": [
                {
                    "type": "p",
                    "text": "Every time you start a new Claude Code session, the model starts fresh. It does not know your stack. It does not know your naming conventions. It does not know the decisions you made last week. CLAUDE.md fixes this. You create it at the root of every project. Claude reads it automatically at the start of every session. Stack, folder structure, conventions, current state, what not to touch — all of it lives there. No re-explaining. No drift."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "CLAUDE.md is not a nice-to-have. It is the difference between an agent that drifts further from your codebase every session and one that stays aligned. Agencies not using this are burning hours re-explaining context that could have been written down once."
                },
                {
                    "type": "h2",
                    "text": "The Stack"
                },
                {
                    "type": "ul",
                    "items": [
                        "CLAUDE.md — a plain markdown file at your project root, read automatically by Claude Code on session start",
                        "AGENTS.md — the companion file for agent constraints and workflow rules",
                        "Claude Code — the tool that reads both files and uses them to stay aligned across every session"
                    ]
                },
                {
                    "type": "h2",
                    "text": "The Workflow — Make Claude Code Remember Everything"
                },
                {
                    "type": "ol",
                    "items": [
                        "Create CLAUDE.md at your project root — copy the template below and fill it in",
                        "Start a new Claude Code session and verify it reads the file by asking Claude to summarise your stack",
                        "At the end of any session where architecture decisions were made, add them to the Open Decisions or Recent Changes section",
                        "When a decision is finalised, move it from Open Decisions to Conventions so it becomes a constraint",
                        "When handing the project to another developer or a new Claude instance, the file is their onboarding doc"
                    ]
                },
                {
                    "type": "h2",
                    "text": "The CLAUDE.md Template"
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "# [Project Name]\n\n## Stack\n- Frontend: [e.g. Next.js 15, TypeScript, Tailwind CSS]\n- Backend: [e.g. Supabase, Drizzle ORM]\n- Deployment: [e.g. Vercel]\n- Key libraries: [list the non-obvious ones]\n\n## Folder Structure\n- /src/app — Next.js app router pages\n- /src/components — shared UI components\n- /src/lib — utilities and helpers\n- /src/data — data models and types\n\n## Conventions\n- Components: PascalCase, one per file\n- Utilities: camelCase, no default exports\n- API routes: kebab-case slugs\n- Styling: Tailwind only, no inline styles\n\n## Current State\n- What is built and working\n- What is in progress\n- What is not started yet\n\n## Do Not Touch\n- [Files or folders the agent must never modify]\n- [Dependencies locked at a specific version and why]\n\n## Open Decisions\n- [Architecture choices still being evaluated]\n\n## Recent Changes\n- [Date] — [what changed and why]"
                },
                {
                    "type": "h2",
                    "text": "Ready-to-use Claude Code Prompt"
                },
                {
                    "type": "code",
                    "language": "text",
                    "code": "Read CLAUDE.md before doing anything else.\nConfirm you have read it by summarising the stack and the current state in two sentences.\nThen proceed with: [your actual task]"
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "The real leverage is keeping it updated. After every session where an architecture decision was made, write it down. Three months in, a new developer — or a new Claude instance — can get fully up to speed in 60 seconds by reading one file."
                }
            ]
        },
        {
            "id": "35",
            "slug": "website-lead-system",
            "title": "39. The Website Lead System",
            "blocks": [
                {
                    "type": "p",
                    "text": "Most freelancers deliver a website. The website gets traffic, someone fills out the contact form, and the lead sits in an inbox until it goes cold. Smart builders deliver a system. The difference is a backend that catches every lead, sends an instant reply, tags it in a CRM, runs a 5-day nurture sequence automatically, and only notifies the owner when a lead actually responds. The whole stack costs under $20 a month."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Most small businesses lose the majority of their leads in the first 24 hours — not because the lead was not interested, but because nobody followed up fast enough. An instant auto-reply within 60 seconds of a form submit is the single highest-leverage thing you can build for any client."
                },
                {
                    "type": "h2",
                    "text": "The Stack"
                },
                {
                    "type": "ul",
                    "items": [
                        "n8n — the automation layer. Self-host on a $5 VPS for free, or use n8n.cloud for ~$20/month",
                        "Airtable — the lead CRM. The free tier handles most small clients with room to spare",
                        "Resend or Mailgun — transactional email. Resend has a generous free tier and a clean API",
                        "Your client's website — any form that can POST to a webhook, which is all of them"
                    ]
                },
                {
                    "type": "h2",
                    "text": "The Workflow"
                },
                {
                    "type": "ol",
                    "items": [
                        "Set up n8n. Self-host on a VPS or use n8n.cloud. Create a new workflow and copy the webhook URL.",
                        "Wire the client's contact form to the n8n webhook — any form builder supports POST to URL.",
                        "Build the n8n flow: Webhook trigger → format lead data → create Airtable record → send instant auto-reply → start nurture sequence timer.",
                        "Create the Airtable base with fields: Name, Email, Message, Source, Status, Date, Reply Status.",
                        "Write the instant auto-reply — short, personal tone, sets a specific response time, gives one piece of value immediately.",
                        "Build the 5-email sequence in n8n using Wait nodes to space the emails out correctly.",
                        "Set the owner notification to trigger only when a lead replies to any email in the sequence.",
                        "Test the full flow end-to-end by submitting the form yourself and tracking each step in Airtable."
                    ]
                },
                {
                    "type": "h2",
                    "text": "The 5-Day Nurture Sequence"
                },
                {
                    "type": "ul",
                    "items": [
                        "Day 0 (instant): Auto-reply — acknowledge the form submit, set expectations on response time, give one useful resource immediately",
                        "Day 1: Value email — one actionable tip directly relevant to what they enquired about",
                        "Day 2: Case study — 'Here is what we did for someone with the same problem and what the result was'",
                        "Day 3: Objection handler — answer the question they are probably thinking but have not asked yet",
                        "Day 5: Direct follow-up — 'Just checking in. Still happy to help if the timing works.'"
                    ]
                },
                {
                    "type": "h2",
                    "text": "Ready-to-use Claude Code Prompt"
                },
                {
                    "type": "code",
                    "language": "text",
                    "code": "Build a lead capture and nurture backend for a client website.\n\nStack: n8n for automation, Airtable for CRM, Resend for email.\nThe client's form collects: name, email, message, and service type.\n\nBuild:\n1. An n8n workflow that receives the form webhook, creates an Airtable record, and sends an instant auto-reply via Resend\n2. A 5-email nurture sequence using n8n Wait nodes (Day 0, 1, 2, 3, 5)\n3. An owner notification that fires only when a lead replies to any email in the sequence\n4. An Airtable base schema with fields for status, source, and reply tracking\n\nDeliver:\n- The n8n workflow as exported JSON so I can import it directly\n- The Airtable base field schema\n- All 5 email templates in plain text, ready to paste into Resend"
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "Once you have built this once, template it. Every future client gets the same system deployed in 20 minutes. That is the difference between delivering a website and delivering recurring infrastructure. Charge accordingly."
                }
            ]
        },
        {
            "id": "36",
            "slug": "the-mentor-stack",
            "title": "40. The Mentor Stack",
            "blocks": [
                {
                    "type": "p",
                    "text": "The builders you want to learn from are putting everything out for free — tweets, YouTube videos, newsletter issues, podcast transcripts. The problem is it is scattered across platforms and buried in chronological feeds. The Mentor Stack is a research agent you build once that scrapes and summarises content from the builders you actually follow, indexes it into a local knowledge base, and lets you ask it questions."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "You are not replacing the need to think. You are replacing the need to manually aggregate. The insight is still yours to extract and apply. But instead of spending 3 hours hunting across 200 tweets and 40 YouTube videos, you spend 10 minutes asking the right question."
                },
                {
                    "type": "h2",
                    "text": "The Stack"
                },
                {
                    "type": "ul",
                    "items": [
                        "Scrapling or Apify — for scraping tweets, YouTube transcripts via youtube-transcript-api, and newsletter archives",
                        "Claude Code — to build and run the research agent and query interface",
                        "LanceDB or Chroma — a local vector database to store and search the indexed content (both free)",
                        "Claude API — to answer questions by retrieving relevant chunks and generating a response with citations"
                    ]
                },
                {
                    "type": "h2",
                    "text": "The Workflow"
                },
                {
                    "type": "ol",
                    "items": [
                        "Identify 3 to 5 builders you want to learn from — get their Twitter handles, YouTube channel URLs, and newsletter archive URLs",
                        "Use Claude Code with the prompt below to build a scraper for each source type",
                        "Run the scrapers and collect raw content into a /sources folder — one JSON file per builder per source",
                        "Process the raw content: chunk it into 500-token segments with source metadata attached to each chunk",
                        "Generate embeddings and load them into LanceDB — a single Python script handles this step",
                        "Build a query interface — a Python script that takes a question, retrieves the 5 most relevant chunks, and sends them to Claude with instructions to answer only from the retrieved content",
                        "Test with real questions: 'What does [builder] say about pricing strategy?' or 'How does [builder] approach their launch process?'",
                        "Run the scrapers on a weekly schedule to keep the knowledge base current as new content is published"
                    ]
                },
                {
                    "type": "h2",
                    "text": "Ready-to-use Claude Code Prompt"
                },
                {
                    "type": "code",
                    "language": "text",
                    "code": "Build a personal mentor knowledge base.\n\nSources to scrape:\n- Twitter/X: [handles, e.g. @levelsio @naval]\n- YouTube: [channel URLs — fetch transcripts via youtube-transcript-api]\n- Newsletter: [archive page URLs]\n\nProcessing pipeline:\n1. Scrape each source and save raw content to /sources/[builder-name]/[source-type].json\n2. Chunk content into 500-token segments with source metadata attached to each chunk\n3. Generate embeddings and store in LanceDB at /db/mentor-knowledge-base\n\nQuery interface — build query.py that:\n- Takes a question as a command-line argument\n- Retrieves the 5 most relevant chunks from LanceDB\n- Sends them to Claude with the prompt: 'Answer the question based only on the following content from [builder names]. If the answer is not in the content, say so.'\n- Prints the answer with source citations so I can verify where it came from"
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "The real leverage is cross-builder questions — 'How do @levelsio and @naval approach the same problem differently?' The knowledge base makes that a 10-second query instead of a 3-hour research session. Build it once and it compounds every week as new content is indexed."
                }
            ]
        },
        {
            "id": "21",
            "slug": "mistakes-i-made",
            "title": "41. Mistakes I Made",
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
                    "text": "This was my most expensive mistake when I started. I would write prompts like 'make the UI better' or 'fix the auth flow' and get confused, half-broken output. Then I would blame the tool. The tool was fine. My prompt was garbage. Every vague prompt is a coin flip. Sometimes you get lucky, most times you get something you have to undo."
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
                    "text": "I built three projects before I discovered AGENTS.md. In all three projects the agent randomly used inline styles on some components, forgot TypeScript on others, put files in the wrong folders, and imported from paths that did not exist. The moment I added AGENTS.md to my fourth project the agent became consistent from the first prompt. Create AGENTS.md before you write a single line of code. Non-negotiable."
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
                    "text": "I used to commit at the end of the day or when I remembered to. The agent would break something in a new prompt, I would not be able to remember exactly what the working state looked like, and I would waste an hour trying to undo things manually. Now I commit after every single working feature. Takes 30 seconds. Has saved me hours."
                },
                {
                    "type": "h2",
                    "text": "Mistake 5 — Fighting outdated libraries"
                },
                {
                    "type": "p",
                    "text": "I spent two weeks on a project trying to use a library that the AI models did not know well. The docs were sparse, the model kept hallucinating methods that did not exist, and every prompt needed heavy manual correction. If the AI does not know the library well, switch libraries."
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
                    "text": "Early on I would write massive prompts trying to build an entire feature in one go. Ten components, three API routes, database schema, all in one prompt. The agent would start well and gradually lose track of what it was doing. One task per prompt. One feature per session. I have never regretted breaking something into smaller prompts."
                },
                {
                    "type": "h2",
                    "text": "Mistake 7 — Deploying late"
                },
                {
                    "type": "p",
                    "text": "On my first few projects I treated deployment as the last step. Build everything locally, then deploy when done. This was a mistake every time. Environment variables behaved differently, build optimizations broke things that worked in dev, and edge cases only appeared in production. Now I deploy on day one."
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
                    "text": "When I was in a rush I would skip the Claude Code review pass and ship directly from Antigravity output. Every single time I did this I found bugs in production that the review pass would have caught. The review pass takes 20 minutes. Fixing production bugs takes hours plus the stress of something being broken for real users. Do the review pass."
                },
                {
                    "type": "h2",
                    "text": "Mistake 9 — Hardcoding AI prompts in routes"
                },
                {
                    "type": "p",
                    "text": "When I built the Siteo generation route I hardcoded the AI prompt directly in the API route file. Every time I wanted to tweak the prompt I had to dig into the route, find the prompt string, edit it carefully without breaking the surrounding code, and redeploy. AI prompts should live in skill files or dedicated prompt files, not inside route handlers."
                },
                {
                    "type": "h2",
                    "text": "Mistake 10 — Building in isolation too long"
                },
                {
                    "type": "p",
                    "text": "I would build for weeks before showing anyone. By the time I got feedback the product was so developed in a specific direction that changing course felt painful. Ship ugly. Ship early. Show someone on day three, not day thirty."
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
            "title": "42. Resources",
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
                    "text": "Books that actually helped"
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
