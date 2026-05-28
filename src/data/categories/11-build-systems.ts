import { Category } from '../types';

export const category: Category = {
    id: 'cat-11',
    slug: 'build-systems',
    title: 'Build Systems',
    sections: [
        {
            "id": "33",
            "slug": "agency-agent-stack",
            "title": "33. Multi-Agent Orchestration for Agencies",
            "blocks": [
                {
                    "type": "p",
                    "text": "The old agency model: hire developers, assign tickets, review pull requests, bill the client. The new model: you are the engineering director, AI agents are your workforce, and your value is the system you build around them. One person can now run what used to require a team — because you are not writing code, you are directing agents. Claude Code is the manager. Specialist agents handle research, building, testing, and review. You define the tasks, review the output, and ship."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "The failure mode is treating agents like a chat assistant. Ask, paste, repeat. That is not orchestration — that is copy-paste with extra steps. Real orchestration means scoped tasks, defined handoffs, and reviewed output at every stage. Agents that step on each other's work are a symptom of a system nobody designed."
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
            "title": "34. Context Mode — The CLAUDE.md System",
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
                        "AGENTS.md — the companion file for agent constraints and workflow rules (covered in the Agentic Engineering section)",
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
                    "code": "# [Project Name]\n\n## Stack\n- Frontend: [e.g. Next.js 15, TypeScript, Tailwind CSS]\n- Backend: [e.g. Supabase, Drizzle ORM]\n- Deployment: [e.g. Vercel]\n- Key libraries: [list the non-obvious ones]\n\n## Folder Structure\n- /src/app — Next.js app router pages\n- /src/components — shared UI components\n- /src/lib — utilities and helpers\n- /src/data — data models and types\n\n## Conventions\n- Components: PascalCase, one per file\n- Utilities: camelCase, no default exports\n- API routes: kebab-case slugs\n- Styling: Tailwind only, no inline styles\n\n## Current State\n- What is built and working\n- What is in progress\n- What is not started yet\n\n## Do Not Touch\n- [Files or folders the agent must never modify]\n- [Dependencies locked at a specific version and why]\n\n## Open Decisions\n- [Architecture choices still being evaluated]\n- [Known trade-offs you have accepted]\n\n## Recent Changes\n- [Date] — [what changed and why]"
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
                    "text": "The real leverage is keeping it updated. After every session where an architecture decision was made, write it down. Three months in, a new developer — or a new Claude instance — can get fully up to speed in 60 seconds by reading one file. That is faster than any wiki, any Notion doc, any video walkthrough."
                }
            ]
        },
        {
            "id": "35",
            "slug": "website-lead-system",
            "title": "35. The Website Lead System",
            "blocks": [
                {
                    "type": "p",
                    "text": "Most freelancers deliver a website. The website gets traffic, someone fills out the contact form, and the lead sits in an inbox until it goes cold. Smart builders deliver a system. The difference is a backend that catches every lead, sends an instant reply, tags it in a CRM, runs a 5-day nurture sequence automatically, and only notifies the owner when a lead actually responds. The whole stack costs under $20 a month. n8n handles the automation. Airtable handles the CRM. Any transactional email provider handles the sends."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Most small businesses lose the majority of their leads in the first 24 hours — not because the lead was not interested, but because nobody followed up fast enough. An instant auto-reply within 60 seconds of a form submit is the single highest-leverage thing you can build for any client. It should be on every project by default."
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
                    "text": "The Workflow — Build a Lead Machine Behind Any Client Website"
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
                        "Set the owner notification to trigger only when a lead replies to any email in the sequence — not on every new lead.",
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
                    "text": "Once you have built this once, template it. Every future client gets the same system deployed in 20 minutes. That is the difference between delivering a website and delivering recurring infrastructure. Charge accordingly — this system has a quantifiable value and most clients have no idea it exists."
                }
            ]
        },
        {
            "id": "36",
            "slug": "the-mentor-stack",
            "title": "36. The Mentor Stack",
            "blocks": [
                {
                    "type": "p",
                    "text": "The builders you want to learn from are putting everything out for free — tweets, YouTube videos, newsletter issues, podcast transcripts. The problem is it is scattered across platforms and buried in chronological feeds. The Mentor Stack is a research agent you build once that scrapes and summarises content from the builders you actually follow, indexes it into a local knowledge base, and lets you ask it questions. No courses. No middlemen. Just the actual thinking of the people whose output you respect, queryable in seconds."
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
                    "text": "The Workflow — Build Your Own Mentor AI"
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
        }
    ]
};
