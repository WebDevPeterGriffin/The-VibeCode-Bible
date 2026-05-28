import { Category } from '../types';

export const category: Category = {
    id: 'cat-2',
    slug: 'building-and-shipping',
    title: 'Building & Shipping',
    sections: [
        {
            "id": "8",
            "slug": "real-project",
            "title": "11. Real Project Walkthrough",
            "blocks": [
                {
                    "type": "p",
                    "text": "Everything in the previous sections is theory until you see it applied to a real project. This is the full story of how I built Siteo — an automated landing page generator for real estate agents — using exactly this workflow. No gaps, no skipping the hard parts."
                },
                {
                    "type": "p",
                    "text": "Siteo generates a branded landing page for a real estate agent in seconds. The agent fills in their name, photo, listings, contact info, and the AI produces a fully styled, mobile responsive, SEO optimized page with a shareable link. Real estate agents use it to send to leads instead of a business card."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "Siteo went from idea to deployed in 3 days. Not 3 days of 8 hour grind sessions — 3 actual calendar days of focused building using this exact workflow."
                },
                {
                    "type": "h2",
                    "text": "Day 1 — Brain dump and scaffold"
                },
                {
                    "type": "p",
                    "text": "I started with the markdown brain dump. Wrote down everything Siteo could eventually be — custom domains, analytics, team accounts, white label, CRM integration, the works. Then I cut 80% of it and defined v1 as three things only: generate a page, save it, share it with a link."
                },
                {
                    "type": "p",
                    "text": "Then I mapped the architecture. Four pages, three API routes, four components, one Supabase table. That was the entire v1 scope written in a markdown file before I touched any code."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "# Siteo V1 Scope\n\n## Only these three things\n1. Agent fills in form → AI generates landing page HTML\n2. Page gets saved to Supabase with a unique slug\n3. Shareable link at /p/[slug] shows the page publicly\n\n## Stack\n- Next.js 14 App Router\n- Tailwind v4\n- Supabase (database + auth)\n- OpenAI API for generation\n- Vercel for deployment\n\n## Database\n- Table: pages\n  - id, user_id, slug, html, agent_name, created_at"
                },
                {
                    "type": "p",
                    "text": "Then I wrote the scaffold prompt. This took me about 10 minutes to write carefully. The agent built the entire skeleton in about 2 minutes — all the empty files, correct TypeScript types, folder structure exactly how I wanted it."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "Scaffold a Next.js 14 App Router project called Siteo.\n\nStack: Next.js 14, Tailwind v4, TypeScript strict, Supabase\n\nPages:\n- src/app/page.tsx — public marketing page, empty\n- src/app/generate/page.tsx — protected, contains GeneratorForm\n- src/app/p/[slug]/page.tsx — public agent page, renders saved HTML\n- src/app/dashboard/page.tsx — protected, lists user saved pages\n\nComponents:\n- src/components/GeneratorForm.tsx — form with fields: agentName, agentPhoto, bio, listings[], phone, email. Accepts onGenerate callback.\n- src/components/PagePreview.tsx — renders html string in an iframe\n- src/components/AgentCard.tsx — shows saved page with copy link button\n- src/components/LoadingScreen.tsx — full screen loading with a message prop\n\nAPI Routes:\n- POST /api/generate — accepts AgentInput, calls AI, returns { html: string }\n- POST /api/save — accepts { html, agentName, slug }, saves to Supabase, returns { slug }\n- GET /api/pages — returns all pages for authenticated user\n\nTypes in src/types/index.ts:\n- AgentInput: { agentName, agentPhoto, bio, listings, phone, email }\n- SavedPage: { id, slug, agentName, createdAt, html }\n\nEmpty shells only. Correct types. No implementation yet.\nFollow AGENTS.md rules."
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Pro tip: The more precise your scaffold prompt, the less you fight the agent for the rest of the project. Spend 10 minutes here and save hours later."
                },
                {
                    "type": "h2",
                    "text": "Day 1 continued — first real feature"
                },
                {
                    "type": "p",
                    "text": "After the scaffold was committed I built the generator form first because it is the core of the product. One prompt, one feature."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "Implement GeneratorForm.tsx.\n\nFiles: src/components/GeneratorForm.tsx, src/types/index.ts\n\nThe form should have:\n- Text input for agent name\n- File upload for agent photo (store as base64 for now)\n- Textarea for bio (max 200 chars with counter)\n- Dynamic list for listings — user can add up to 3, each has address and price\n- Phone and email inputs\n- Submit button that calls onGenerate(agentInput)\n- Loading state on the button while generating\n\nConstraints:\n- Tailwind only, no inline styles\n- Controlled inputs with useState\n- Validate that name and email are filled before submit\n- No external form libraries"
                },
                {
                    "type": "p",
                    "text": "Reviewed the diff. Tested in the browser. Worked first try. Committed. Then moved to the API route."
                },
                {
                    "type": "h2",
                    "text": "Day 2 — The AI generation and Supabase"
                },
                {
                    "type": "p",
                    "text": "Day 2 was the hardest part — the actual AI generation. Getting the prompt right so the output was a clean, styled HTML page that looked professional took the most iteration. This is where I switched between Antigravity for the code and Claude Code for reviewing the prompt engineering."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "Implement POST /api/generate route.\n\nFile: src/app/api/generate/route.ts\n\nIt should:\n1. Accept AgentInput from request body\n2. Validate required fields (agentName, email)\n3. Build a prompt that instructs the AI to generate a complete HTML page\n4. Call OpenAI gpt-4o with the prompt\n5. Return { html: string }\n\nThe AI prompt should tell it to:\n- Generate a complete single file HTML page\n- Use inline styles only (no external CSS)\n- Include: hero with agent name and photo, bio section, listings grid, contact section\n- Mobile responsive using CSS media queries\n- Professional real estate aesthetic, dark navy and gold color scheme\n- Return ONLY the HTML, no markdown, no explanation\n\nConstraints:\n- Handle OpenAI errors gracefully\n- Set a 30 second timeout\n- Validate the response is actual HTML before returning"
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "The AI generation prompt took me about 6 iterations to get right. The model kept adding markdown code fences around the HTML or generating CSS in a style tag that conflicted with itself. Constraints in the prompt are everything."
                },
                {
                    "type": "p",
                    "text": "After the generation worked I wired up Supabase for saving pages. Created the table, set up the client, built the save API route, and connected the frontend flow. This took about 3 hours including debugging one RLS policy issue."
                },
                {
                    "type": "h2",
                    "text": "Day 3 — Polish and deploy"
                },
                {
                    "type": "p",
                    "text": "Day 3 was the shareable page, the dashboard, a loading screen, and deployment. None of these were technically complex — the hard work was done. Each one was a single focused prompt."
                },
                {
                    "type": "p",
                    "text": "At the end of day 3 I ran the Claude Code review pass on the entire codebase. It found a missing error state in the generate route, a type that was using any instead of the proper AgentInput type, and a potential SQL injection in a Supabase query I had written manually. All fixed in one session."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "The Claude Code review pass on day 3 found bugs that would have hit me in production. This step is not optional if you care about shipping something that actually works."
                },
                {
                    "type": "h2",
                    "text": "What I would do differently"
                },
                {
                    "type": "p",
                    "text": "Looking back there are two things I would change. First, I would set up authentication on day 1 before building any features. I added it on day 2 and had to refactor several components to handle the auth state. Second, I would write the AI generation prompt in a separate skill file from the start instead of hardcoding it in the API route. When I needed to update it I had to dig through the route file every time."
                },
                {
                    "type": "ul",
                    "items": [
                        "Set up auth first — before any features, not halfway through",
                        "Put AI prompts in skill files, not hardcoded in routes",
                        "Deploy to Vercel on day 1 — I waited until day 3 and hit an environment variable issue that cost me 2 hours",
                        "The dashboard was an afterthought — design it as part of the core flow from the start"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "The mistakes I made building Siteo are exactly why the Mistakes section exists. Read it before you start your project."
                }
            ]
        },
        {
            "id": "10",
            "slug": "database-migrations",
            "title": "12. Database Migrations on Auto-Pilot",
            "blocks": [
                {
                    "type": "p",
                    "text": "There is a clear line between the parts of your stack where you want the AI to move fast and the parts where you want it to slow down and ask permission. Frontend components, API routes, utility functions — move fast, break things, revert if needed. Your database is different."
                },
                {
                    "type": "p",
                    "text": "Letting an AI agent write your frontend is high-leverage and low-risk. If it makes a mistake you revert the file and try again. Letting an AI agent run ALTER TABLE scripts across your production Supabase database is a completely different situation. A bad migration does not revert cleanly. Dropped columns take user data with them. Restructured relationships can corrupt months of records in seconds."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "I have seen developers lose production data because they told the AI to \"fix the database so saving works\" without any guardrails. The agent helpfully dropped a table and recreated it from scratch. Clean schema, zero data. Do not let this happen to you."
                },
                {
                    "type": "h2",
                    "text": "Why agents are dangerous with databases"
                },
                {
                    "type": "p",
                    "text": "The problem is not that the AI writes bad SQL. It often writes perfectly correct SQL. The problem is that it does not understand consequences. It does not know that the users table has 50,000 rows. It does not know that the column it wants to drop is referenced by 12 other queries across your codebase. It does not know that the relationship it wants to restructure will orphan half your data."
                },
                {
                    "type": "p",
                    "text": "When you tell an AI to fix a bug in a React component it has full context — it can read the file, understand the logic, and make a targeted change. When you tell it to fix a database issue it is working with partial context. It sees the schema but not the data. It sees the query but not the downstream effects. That gap is where disasters happen."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "The agent is not malicious. It is just optimizing for making the immediate problem go away. Dropping and recreating a table absolutely fixes a schema mismatch. It also destroys all your data. The AI does not weigh those two outcomes the same way you do."
                },
                {
                    "type": "h2",
                    "text": "The safe migration workflow"
                },
                {
                    "type": "p",
                    "text": "This is the exact process I follow every time I need a schema change. It adds maybe 10 minutes to the process and has saved me from at least three potential disasters."
                },
                {
                    "type": "ol",
                    "items": [
                        "Tell the agent to generate the migration SQL as a file — never to execute it directly",
                        "Read every line of the generated SQL before touching anything",
                        "Look specifically for DROP, TRUNCATE, DELETE, or ALTER COLUMN statements",
                        "Check if any dropped or renamed columns are referenced elsewhere in the codebase",
                        "Test the migration on a staging environment or a local Supabase instance first",
                        "Run it manually in the Supabase Dashboard SQL editor — never via the agent",
                        "Verify the data is intact after running it before deploying any code changes"
                    ]
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "// The prompt that keeps you safe\n\n\"Generate a SQL migration file for the following schema change.\nDo NOT execute it. Do NOT run any SQL commands.\nJust write the migration to a file called migrations/[timestamp]_description.sql\nand explain what each statement does and why.\n\nThe change I need: [describe the change]\"\n"
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "That single prompt — \"Do NOT execute it\" — is the most important guardrail you can add. Make it a habit on every single database task. No exceptions."
                },
                {
                    "type": "h2",
                    "text": "CLAUDE.md database boundaries"
                },
                {
                    "type": "p",
                    "text": "Add this to your CLAUDE.md file right now. Before you need it. This tells Claude Code to never touch your database directly regardless of what you ask it to do."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "## Database Rules — READ THIS FIRST\n- NEVER execute SQL directly against any database\n- NEVER run Supabase CLI migration commands without explicit approval\n- ALWAYS generate migration files, never run them\n- ALWAYS explain what each SQL statement does before generating it\n- Flag any statement that could result in data loss with a WARNING comment\n- The following are FORBIDDEN without explicit human confirmation:\n  - DROP TABLE\n  - DROP COLUMN\n  - TRUNCATE\n  - DELETE without a WHERE clause\n  - ALTER COLUMN that changes data type"
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "Put the database rules at the TOP of your CLAUDE.md, not the bottom. The agent reads top to bottom. You want these rules to be the first thing it internalizes, not the last."
                },
                {
                    "type": "h2",
                    "text": "Additive migrations only in early development"
                },
                {
                    "type": "p",
                    "text": "In the early stages of a project before you have real user data, follow one rule: only additive migrations. Add columns, add tables, add indexes. Never remove or rename anything. If you need to restructure something, add the new structure and migrate the data before removing the old."
                },
                {
                    "type": "p",
                    "text": "This sounds overly cautious when you are on day two of a project with zero users. But the habit you build in development is the habit you carry into production. Developers who lose production data almost always say the same thing — I thought I was still in early development mode."
                },
                {
                    "type": "h2",
                    "text": "Always have a backup before any migration"
                },
                {
                    "type": "p",
                    "text": "Supabase makes this easy. Before any schema change, go to the Supabase dashboard, open your project, and download a backup. Takes two minutes. If something goes wrong you have a restore point."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "\"I thought the migration was safe\" is the last thing you want to be saying to a client whose data just disappeared. Backup first. Every time. Non-negotiable."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "The best developers I know are not the ones who never make mistakes. They are the ones who build systems that make certain mistakes impossible. Database guardrails in CLAUDE.md is exactly that kind of system."
                }
            ]
        },
        {
            "id": "11",
            "slug": "beating-generic-ai-look",
            "title": "13. Beating the Generic AI Look",
            "blocks": [
                {
                    "type": "p",
                    "text": "You can tell an AI built a site the second you see it. The buttons are pill shaped with bg-blue-500. The cards have the same rounded-xl shadow-md combo. The font is Inter at font-medium. The spacing is perfectly even and completely soulless. It is technically correct and visually forgettable."
                },
                {
                    "type": "p",
                    "text": "This is not the AI being bad at design. It is the AI being statistically average. It was trained on millions of websites and it learned what the average website looks like. When you give it no design constraints it produces the mean. The mean is boring."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "The generic AI look is not a tool problem. It is a prompt problem. The AI will produce whatever aesthetic you give it constraints for. Give it no constraints and you get the Tailwind default. Give it strong constraints and you get something that looks like you actually care."
                },
                {
                    "type": "h2",
                    "text": "Ban the defaults first"
                },
                {
                    "type": "p",
                    "text": "The first thing I add to any AGENTS.md for a project with real UI is a list of banned defaults. Things the agent is not allowed to use no matter what. This forces it out of the statistical mean immediately."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "## Design Rules — UI\n\n### BANNED — never use these\n- bg-blue-500, bg-red-400, bg-green-500 or any standard Tailwind color for primary UI\n- rounded-full on buttons (pill buttons look generic)\n- shadow-md or shadow-lg as the only depth technique\n- border-gray-200 for dividers\n- text-gray-500 for secondary text\n- font-medium as the only weight variation\n- Any gradient that goes from blue to purple\n\n### REQUIRED — always use these\n- Color palette: Zinc, Slate, Neutral scales only — or custom hex values\n- Primary accent: define one custom color as a CSS variable --color-accent\n- Depth: use backdrop-blur and bg-white/5 for cards instead of solid fills\n- Borders: use border-white/10 for subtle borders on dark backgrounds\n- Typography: mix font-light and font-bold — avoid the middle weights"
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "Banning the defaults is more powerful than specifying what to use. The agent is creative when it cannot fall back on the safe options. Constraints produce better design than suggestions."
                },
                {
                    "type": "h2",
                    "text": "Force glassmorphism for cards"
                },
                {
                    "type": "p",
                    "text": "Solid background cards are the most recognizable sign of generic AI UI. The moment you switch to glassmorphism — semi-transparent backgrounds with backdrop blur — the whole product feels more considered."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "## Card Pattern — always use this\nNever use solid background cards.\nAlways use: backdrop-blur-md bg-white/5 border border-white/10 rounded-xl\n\nFor hover states: hover:bg-white/10 transition-all duration-300\nFor active states: active:scale-95 transition-transform duration-150"
                },
                {
                    "type": "p",
                    "text": "Add this pattern to your AGENTS.md and every card the agent generates will use it automatically. You stop fighting the AI about card styles on every single prompt."
                },
                {
                    "type": "h2",
                    "text": "Micro-interactions on everything interactive"
                },
                {
                    "type": "p",
                    "text": "The difference between a site that feels premium and one that feels flat is almost always micro-interactions. Buttons that scale slightly on click. Links that transition smoothly. Inputs that highlight on focus. These take the agent about 10 extra tokens to add if you make them a rule."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "## Interaction Rules\n- Every button: transition-all duration-200 active:scale-95\n- Every link: transition-colors duration-150\n- Every card with hover: hover:scale-[1.02] transition-transform duration-200\n- Every input: focus:ring-2 focus:ring-accent/50 transition-all duration-150\n- Every modal or sheet: animate-in fade-in slide-in-from-bottom-4 duration-300"
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Pro tip: Add the interaction rules to your AGENTS.md under a section called \"Motion Rules\". Once it is there the agent adds transitions and animations to every interactive element automatically. Your UI starts feeling alive without you thinking about it."
                },
                {
                    "type": "h2",
                    "text": "Typography that does not look auto-generated"
                },
                {
                    "type": "p",
                    "text": "Generic AI typography uses one font, one or two weights, and predictable size scaling. Premium typography mixes weights deliberately, uses tracking and leading intentionally, and creates clear visual hierarchy without being mechanical about it."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "## Typography Rules\n- Headlines: font-bold tracking-tight leading-none — never use the default leading\n- Subheadlines: font-light text-foreground/70 — contrast against the bold headline\n- Body: font-normal leading-relaxed — generous line height for readability\n- Labels and captions: text-xs font-medium uppercase tracking-widest\n- NEVER use font-medium for headlines — it looks auto-generated\n- NEVER use the same weight for more than two consecutive text elements"
                },
                {
                    "type": "h2",
                    "text": "The one prompt that fixes everything"
                },
                {
                    "type": "p",
                    "text": "If you do not want to set up all these rules right now and you just need something better than the default for a specific component, this prompt works surprisingly well:"
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "Build [component]. \n\nDesign constraints:\n- Dark background, zinc/slate palette only, no standard Tailwind colors\n- Glassmorphism cards: backdrop-blur-md bg-white/5 border border-white/10\n- Micro-interactions on all interactive elements: transition-all duration-200 active:scale-95\n- Typography: mix font-bold tracking-tight for headlines with font-light for supporting text\n- No pill buttons, no shadow-md, no border-gray-200\n- Should look like it was designed by a human who cares, not generated by default settings"
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "That last line — \"designed by a human who cares, not generated by default settings\" — is not fluffy language. It actually shifts the model away from the statistical mean. It has been part of my prompts for months and the quality difference is real."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "One hour writing a proper design system in AGENTS.md saves you from arguing with the agent about UI on every single prompt for the rest of the project. Do it on day one."
                }
            ]
        },
        {
            "id": "18",
            "slug": "building-with-supabase-rls",
            "title": "14. Building with Supabase RLS",
            "blocks": [
                {
                    "type": "p",
                    "text": "Row Level Security is the most important Supabase feature and the one the AI gets wrong most consistently. Without RLS every user in your database can read and write every other user's data. Your entire database is effectively public to anyone with an API key."
                },
                {
                    "type": "p",
                    "text": "The terrifying part is that everything works perfectly in development without RLS. Your app functions, your queries return data, your writes succeed. The moment a real user gets hold of your anon key — which is exposed in every frontend app — they can query any table and get everyone's data. RLS is not optional. It is the lock on the door."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "I have seen production apps with thousands of users and zero RLS policies. Every user could query every other user's data with a simple fetch call. The developers had no idea because it worked fine in their own testing. Enable RLS on every table before you write a single query."
                },
                {
                    "type": "h2",
                    "text": "What RLS actually does"
                },
                {
                    "type": "p",
                    "text": "RLS lets you define policies that control which rows a user can see or modify. Instead of your application code deciding what data to show, the database enforces it at the query level. Even if someone gets your anon key and queries your table directly, they only see the rows the policy allows."
                },
                {
                    "type": "p",
                    "text": "The most common policy pattern is simple: users can only see their own rows. A user with id abc123 can query the pages table and only get back rows where user_id = abc123. The database filters automatically. Your application code does not need to add where clauses. The policy handles it."
                },
                {
                    "type": "code",
                    "language": "sql",
                    "code": "-- Enable RLS on a table (do this first, before any policies)\nALTER TABLE pages ENABLE ROW LEVEL SECURITY;\n\n-- Policy: users can only see their own pages\nCREATE POLICY \"users can view own pages\"\nON pages\nFOR SELECT\nUSING (auth.uid() = user_id);\n\n-- Policy: users can only insert their own pages\nCREATE POLICY \"users can insert own pages\"\nON pages\nFOR INSERT\nWITH CHECK (auth.uid() = user_id);\n\n-- Policy: users can only update their own pages\nCREATE POLICY \"users can update own pages\"\nON pages\nFOR UPDATE\nUSING (auth.uid() = user_id)\nWITH CHECK (auth.uid() = user_id);\n\n-- Policy: users can only delete their own pages\nCREATE POLICY \"users can delete own pages\"\nON pages\nFOR DELETE\nUSING (auth.uid() = user_id);"
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "auth.uid() is the key. Supabase automatically knows who is making the request from the JWT token. You never pass the user ID manually — the database reads it from the authenticated session. This means the policy cannot be spoofed from the client."
                },
                {
                    "type": "h2",
                    "text": "The AI and RLS"
                },
                {
                    "type": "p",
                    "text": "Here is the problem: when you ask the agent to build a feature with Supabase it almost never adds RLS policies. It writes the query, sets up the table, wires up the frontend — and leaves the table completely unprotected. Not because it does not know about RLS. Because you did not ask for it."
                },
                {
                    "type": "p",
                    "text": "The fix is to make RLS part of every database prompt. Never ask the agent to create a table without asking for the RLS policies in the same prompt."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "\"Create a Supabase table for storing agent pages.\n\nTable: pages\nColumns:\n- id: uuid, primary key, default gen_random_uuid()\n- user_id: uuid, references auth.users(id), not null\n- agent_name: text, not null\n- slug: text, unique, not null\n- html: text, not null\n- created_at: timestamptz, default now()\n\nAfter creating the table:\n1. Enable RLS on the table\n2. Add SELECT policy: users can only view their own pages\n3. Add INSERT policy: users can only insert pages with their own user_id\n4. Add UPDATE policy: users can only update their own pages\n5. Add DELETE policy: users can only delete their own pages\n\nWrite the complete SQL including the CREATE TABLE and all RLS policies.\""
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Pro tip: Add to your CLAUDE.md — \"Every new Supabase table must have RLS enabled and appropriate policies before any queries are written against it.\" One line in CLAUDE.md and the agent never skips RLS again."
                },
                {
                    "type": "h2",
                    "text": "Public tables — the exception"
                },
                {
                    "type": "p",
                    "text": "Not every table needs user-based RLS. Some tables are genuinely public — anyone should be able to read them. The shareable agent pages in Siteo are a good example. The page at /p/slug should be readable by anyone, including unauthenticated visitors."
                },
                {
                    "type": "code",
                    "language": "sql",
                    "code": "-- Public pages are readable by anyone\nCREATE POLICY \"public pages are viewable by everyone\"\nON pages\nFOR SELECT\nUSING (true);\n\n-- But only the owner can modify them\nCREATE POLICY \"users can update own pages\"\nON pages\nFOR UPDATE\nUSING (auth.uid() = user_id);\n\nCREATE POLICY \"users can delete own pages\"\nON pages\nFOR DELETE\nUSING (auth.uid() = user_id);"
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "USING (true) on a SELECT policy means anyone can read — authenticated or not. This is intentional for public content. The key is that write operations are still protected. Read widely, write carefully."
                },
                {
                    "type": "h2",
                    "text": "The RLS debugging nightmare"
                },
                {
                    "type": "p",
                    "text": "RLS errors are some of the most confusing errors in Supabase development because they do not always look like permission errors. Sometimes you get an empty array instead of data. Sometimes you get a 200 response with no rows. Sometimes the insert silently fails. The agent almost always misdiagnoses these."
                },
                {
                    "type": "ul",
                    "items": [
                        "Query returns empty array but data exists — RLS is filtering all rows because the policy does not match",
                        "Insert succeeds but row does not appear in queries — SELECT policy is missing or wrong",
                        "Update returns success but data did not change — UPDATE policy is missing",
                        "Works for you but not for other users — your user happens to match the policy, others do not",
                        "Works in Supabase dashboard but not in the app — dashboard uses service role which bypasses RLS"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "The Supabase dashboard SQL editor runs as service role by default which bypasses all RLS policies. This means your queries always work in the dashboard even if they would fail in the app. Always test queries from your application code, not the dashboard."
                },
                {
                    "type": "h2",
                    "text": "Service role vs anon key"
                },
                {
                    "type": "p",
                    "text": "Supabase gives you two keys: the anon key and the service role key. Understanding the difference is critical and the agent often confuses them."
                },
                {
                    "type": "ul",
                    "items": [
                        "Anon key — safe to use in frontend code, respects RLS policies, limited to what policies allow",
                        "Service role key — bypasses ALL RLS policies, has full database access, NEVER use in frontend code",
                        "Use anon key in: Next.js frontend components, client side Supabase calls, public API routes",
                        "Use service role key in: server side admin operations, background jobs, webhook handlers that need full access"
                    ]
                },
                {
                    "type": "code",
                    "language": "typescript",
                    "code": "// Frontend / client side — use anon key, respects RLS\nconst supabase = createClient(\n  process.env.NEXT_PUBLIC_SUPABASE_URL!,\n  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // safe to expose\n);\n\n// Server side admin operations — use service role, bypasses RLS\nconst supabaseAdmin = createClient(\n  process.env.NEXT_PUBLIC_SUPABASE_URL!,\n  process.env.SUPABASE_SERVICE_ROLE_KEY! // NEVER expose this\n);"
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "The service role key in frontend code is one of the most dangerous mistakes in Supabase development. It bypasses every RLS policy you wrote. Anyone who inspects your JavaScript bundle gets full read and write access to your entire database. Keep it server side only, always."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "RLS is not a feature you add when you have time. It is infrastructure you build from day one. A database without RLS is not a production database — it is a development database with a live URL. Enable it on every table before you write your first query."
                }
            ]
        },
        {
            "id": "20",
            "slug": "the-overnight-build",
            "title": "15. The Overnight Build",
            "blocks": [
                {
                    "type": "p",
                    "text": "The overnight build is the purest form of vibe coding. You have an idea at 9pm. You open your laptop. You do not sleep until it is deployed and real people can use it. By morning you have either shipped something or learned exactly why the idea does not work."
                },
                {
                    "type": "p",
                    "text": "I have done this more times than I can count. Some of those nights produced products that are still running. Some produced ideas I killed by 3am when the core assumption fell apart. Both outcomes are valuable. The overnight build is the fastest way to find out if something is worth building."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "The overnight build is not about sleep deprivation. It is about scope discipline. You have one night. That constraint forces you to cut everything that is not essential and ship the thing that actually matters."
                },
                {
                    "type": "h2",
                    "text": "What makes a good overnight build candidate"
                },
                {
                    "type": "ul",
                    "items": [
                        "The core value can be demonstrated with one user flow — if it takes more than one flow to show why it is useful, it is too big",
                        "You can describe it in one sentence — if you cannot explain it in one sentence it is not scoped tightly enough",
                        "It uses your existing stack — an overnight build is not the time to learn a new database or framework",
                        "The riskiest assumption can be tested without all the features — you want to know if the core idea works, not if the complete product works",
                        "No third party dependencies that require approval or setup time — payment processors, OAuth apps, and API access that need manual review will kill your timeline"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "The biggest overnight build killer is scope creep at 11pm. You ship the core thing, it works, and then you think \"I will just add one more feature\". That feature takes three hours. The sun comes up and you have a half-finished product instead of a shipped one. Ship the core. Add features tomorrow."
                },
                {
                    "type": "h2",
                    "text": "The pre-build setup — 30 minutes"
                },
                {
                    "type": "p",
                    "text": "The first thirty minutes determine the whole night. Do not touch code yet. Do this first."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "# Overnight Build Plan — [Product Name]\n\n## The one sentence description\n[Write it here. If you cannot, the idea is not ready.]\n\n## The single core user flow\n1. User arrives at the page\n2. User does [one thing]\n3. User gets [the value]\n\n## V1 scope — ONLY these things\n- [Feature 1]\n- [Feature 2]\n- [Feature 3 maximum]\n\n## Explicitly NOT building tonight\n- [Everything else]\n\n## Stack\n- Next.js 14, Tailwind v4, TypeScript, Supabase, Vercel\n\n## Deployed by\n- [Time you want to be live by]\n\n## How I will know if the idea works\n- [One measurable thing — a signup, a share, someone using it]"
                },
                {
                    "type": "h2",
                    "text": "The build sequence"
                },
                {
                    "type": "ol",
                    "items": [
                        "Database schema and RLS policies — the foundation everything else sits on",
                        "The core API route — the one endpoint that delivers the main value",
                        "The core UI component — the thing the user actually interacts with",
                        "Wire them together — connect the component to the route",
                        "Test the core flow end to end — does the thing actually work",
                        "The landing page — now that you know it works, sell it",
                        "Basic error states — what happens when something goes wrong",
                        "Deploy and share — get it in front of real people"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "Notice that the landing page comes after the core flow works. Most people build the landing page first because it feels productive. Build the thing first. If the thing does not work the landing page is irrelevant."
                },
                {
                    "type": "h2",
                    "text": "Managing energy through the night"
                },
                {
                    "type": "ul",
                    "items": [
                        "9pm-11pm — scaffold, deploy, database, core API. Move fast. This is the easy part.",
                        "11pm-1am — core UI, wiring, first end to end test. This is where it gets hard.",
                        "1am-3am — debugging, edge cases, landing page. The make or break hours.",
                        "3am-5am — polish, error states, final testing. Only get here if the core works.",
                        "5am+ — ship it or kill it. If it works, share it. If it does not, write down what you learned and sleep."
                    ]
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "If by 2am the core flow does not work and you cannot see why, that is information. The idea might have a technical blocker you did not anticipate. Write down exactly what you tried and what broke. That document is valuable even if the product is not."
                },
                {
                    "type": "h2",
                    "text": "When to kill it"
                },
                {
                    "type": "p",
                    "text": "Not every overnight build should make it to morning. Sometimes the core assumption is wrong and you know it by 1am. Killing an overnight build at 1am instead of pushing through to a bad 6am launch is a good decision. You saved five hours of diminishing returns and you learned the idea does not work in the cheapest possible way — one night of your time."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Shipping something bad because you stayed up all night and feel obligated to have something to show is worse than killing it at 1am. The sunk cost of a sleepless night does not make a broken product worth sharing."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "The overnight build post always performs. \"I built this in one night\" is a compelling story. Document the process as you go — a screenshot at midnight, one at 3am, one when it goes live. That content is authentic and developers respond to it."
                }
            ]
        },
        {
            "id": "9",
            "slug": "context-window-crash",
            "title": "16. The Context Window Crash",
            "blocks": [
                {
                    "type": "p",
                    "text": "There is a moment every vibe coder hits. You have been building for hours, everything is flowing, features are shipping fast, and then suddenly the agent starts acting weird. It references a file you deleted two hours ago. It rewrites something it already wrote correctly. It hallucinates a function that does not exist. It contradicts itself in the same response."
                },
                {
                    "type": "p",
                    "text": "This is not a bug. This is not the tool being bad. This is the context window crash — and it will happen to you if you do not know how to prevent it."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "The context window crash is the number one reason long vibe coding sessions fall apart. You are not running out of tokens. You are running out of useful signal. The noise takes over and the agent loses the plot."
                },
                {
                    "type": "h2",
                    "text": "What is actually happening"
                },
                {
                    "type": "p",
                    "text": "Large language models do not have memory the way humans do. They have a context window — a finite amount of text they can hold in attention at once. Every file you load, every prompt you send, every response the agent generates gets added to that window."
                },
                {
                    "type": "p",
                    "text": "After 3-4 hours of continuous building, your context window is full of: the files from features you finished hours ago, failed attempts the agent made and then corrected, your early scaffold prompts that are now irrelevant, and conversation history that adds nothing to the current task. All of that is diluting the signal."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "Think of it like a whiteboard. At the start of the session it is clean and the agent can see everything clearly. After 4 hours it is covered in half-erased diagrams, crossed out notes, and outdated plans. The important stuff is still there but it is buried."
                },
                {
                    "type": "h2",
                    "text": "How to prevent it"
                },
                {
                    "type": "h3",
                    "text": "Start fresh after each feature"
                },
                {
                    "type": "p",
                    "text": "The moment a feature is working and committed, I clear the chat history. Not save it for later. Clear it. The agent does not need to know how we got here. It just needs to know where we are now. A fresh context with a clear task prompt outperforms a stale context with full history every single time."
                },
                {
                    "type": "h3",
                    "text": "Only load what the task needs"
                },
                {
                    "type": "p",
                    "text": "When I write a prompt I specify exactly which files the agent needs to look at. Not the whole src folder. Not the whole components directory. The exact files the task touches."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "// Bad — too much context for a simple task\n\"Look at the whole src folder and fix the button styling\"\n\n// Good — precise context for a precise task\n\"Fix the button styling in src/components/GeneratorForm.tsx line 47.\nThe button should use the existing btn-primary class from globals.css.\nDo not touch anything else.\""
                },
                {
                    "type": "h3",
                    "text": "Keep components under 200 lines"
                },
                {
                    "type": "p",
                    "text": "When a component grows past 200 lines the agent starts making mistakes editing it — missing closing tags, duplicating logic, losing track of the component state. Under 200 lines it handles it cleanly almost every time. If a component is growing too big, break it into smaller ones before asking the agent to edit it."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "My rule: if I have to scroll to see the full component, it is too big. Break it up before the agent touches it."
                },
                {
                    "type": "h2",
                    "text": "What to do when it happens anyway"
                },
                {
                    "type": "ol",
                    "items": [
                        "Stop immediately — do not keep prompting hoping it will correct itself. It will not.",
                        "Do not accept any of the last response if it looks wrong — revert to your last commit.",
                        "Clear the entire chat history.",
                        "Write a fresh context prompt — your stack, the current state of the feature, what still needs to be done.",
                        "Load only the files relevant to where you are now.",
                        "Continue from the clean state."
                    ]
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "The worst thing you can do when the agent crashes is keep going. Every confused response makes the context worse. Stop, clear, restart. It takes 5 minutes and saves you an hour of debugging hallucinated code."
                },
                {
                    "type": "h2",
                    "text": "The warning signs to watch for"
                },
                {
                    "type": "ul",
                    "items": [
                        "The agent references a file or function you deleted or renamed",
                        "It starts adding import statements for things that do not exist",
                        "It rewrites something correctly and then contradicts it in the same response",
                        "It asks clarifying questions about things you already told it earlier in the session",
                        "The code quality suddenly drops noticeably compared to earlier in the session",
                        "It adds console.logs or comments explaining basic things it understood fine before"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "You will develop an instinct for this after a few crashes. The agent starts feeling uncertain. The responses get hedgy. The code gets sloppy. Trust that instinct and clear the context before it gets worse."
                }
            ]
        },
        {
            "id": "12",
            "slug": "securing-stripe",
            "title": "17. Securing Stripe & Webhooks",
            "blocks": [
                {
                    "type": "p",
                    "text": "Stripe integration is one of those tasks where the AI looks incredibly competent right up until the moment it gets you hacked. It will scaffold a checkout session, wire up the success redirect, update your database, and send a confirmation email — all correctly. And then it will leave your webhook endpoint completely unsecured and one Postman request away from giving anyone your premium tier for free."
                },
                {
                    "type": "p",
                    "text": "This is not an edge case. It is one of the most common security mistakes in AI-generated payment code. The agent optimizes for making the happy path work. Security is not part of the happy path."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "I have reviewed codebases where the entire payment flow was working perfectly in testing and completely exploitable in production. The checkout worked. The webhook did not verify the signature. Anyone who knew the endpoint URL could upgrade any account for free."
                },
                {
                    "type": "h2",
                    "text": "What the AI gets wrong"
                },
                {
                    "type": "p",
                    "text": "The most common mistake is trusting the request body instead of verifying the cryptographic signature. The agent writes something like this:"
                },
                {
                    "type": "code",
                    "language": "typescript",
                    "code": "// What the AI often generates — NEVER do this\nexport async function POST(req: Request) {\n  const body = await req.json();\n  \n  if (body.type === \"checkout.session.completed\") {\n    if (body.data.object.payment_status === \"paid\") {\n      await upgradeUser(body.data.object.customer_email);\n    }\n  }\n  \n  return Response.json({ received: true });\n}"
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "That endpoint is not a webhook handler. It is a free upgrade button. Anyone can POST { type: \"checkout.session.completed\", data: { object: { payment_status: \"paid\", customer_email: \"victim@example.com\" } } } and your code will upgrade that account instantly."
                },
                {
                    "type": "h2",
                    "text": "The correct implementation"
                },
                {
                    "type": "code",
                    "language": "typescript",
                    "code": "// The correct way — always verify the signature\nimport Stripe from \"stripe\";\nimport { headers } from \"next/headers\";\n\nconst stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);\n\nexport async function POST(req: Request) {\n  const body = await req.text(); // raw text, not json\n  const signature = headers().get(\"Stripe-Signature\");\n\n  if (!signature) {\n    return new Response(\"No signature\", { status: 400 });\n  }\n\n  let event: Stripe.Event;\n\n  try {\n    event = stripe.webhooks.constructEvent(\n      body,\n      signature,\n      process.env.STRIPE_WEBHOOK_SECRET!\n    );\n  } catch (err) {\n    // Signature verification failed — reject immediately\n    return new Response(\"Invalid signature\", { status: 400 });\n  }\n\n  // Now you can trust the event\n  if (event.type === \"checkout.session.completed\") {\n    const session = event.data.object as Stripe.Checkout.Session;\n    await upgradeUser(session.customer_email!);\n  }\n\n  return Response.json({ received: true });\n}"
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Two critical details: use req.text() not req.json() — you need the raw body for signature verification. And use a separate STRIPE_WEBHOOK_SECRET from your STRIPE_SECRET_KEY — they are different keys."
                },
                {
                    "type": "h2",
                    "text": "The prompt that forces the AI to do it right"
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "Build a Stripe webhook handler for Next.js 14 App Router.\n\nSECURITY REQUIREMENTS — these are non-negotiable:\n- MUST verify the Stripe-Signature header using stripe.webhooks.constructEvent()\n- MUST read the raw body with req.text() — never req.json() for webhooks\n- MUST use STRIPE_WEBHOOK_SECRET env variable — separate from STRIPE_SECRET_KEY\n- MUST return 400 immediately if signature verification fails\n- MUST NOT trust any data from the request body before signature is verified\n- NEVER write code that upgrades a user based on unverified request body data\n\nHandle these events:\n- checkout.session.completed — upgrade user to pro\n- customer.subscription.deleted — downgrade user to free\n\nFiles: src/app/api/webhooks/stripe/route.ts"
                },
                {
                    "type": "h2",
                    "text": "Add it to CLAUDE.md"
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "## Payment Security Rules\n- NEVER trust webhook payloads without verifying the Stripe-Signature header\n- ALWAYS use stripe.webhooks.constructEvent() before processing any webhook\n- ALWAYS use req.text() for webhook route body parsing, never req.json()\n- NEVER upgrade or modify user accounts based on client-side payment confirmation\n- Payment status must ALWAYS be verified server-side via webhook, never via redirect params\n- The success redirect URL is for UX only — never use it to trigger account changes"
                },
                {
                    "type": "h2",
                    "text": "Testing webhooks locally"
                },
                {
                    "type": "code",
                    "language": "bash",
                    "code": "# Install Stripe CLI\nbrew install stripe/stripe-cli/stripe\n\n# Login\nstripe login\n\n# Forward webhooks to your local server\nstripe listen --forward-to localhost:3000/api/webhooks/stripe\n\n# In a separate terminal, trigger a test event\nstripe trigger checkout.session.completed"
                },
                {
                    "type": "h2",
                    "text": "The security checklist before going live"
                },
                {
                    "type": "ol",
                    "items": [
                        "Stripe-Signature header is verified on every webhook request",
                        "Using req.text() not req.json() for raw body parsing",
                        "STRIPE_WEBHOOK_SECRET is set in production environment variables",
                        "Webhook endpoint returns 400 for invalid signatures",
                        "No account changes happen based on redirect URL parameters",
                        "Tested locally with Stripe CLI including the failure case",
                        "Webhook endpoint is not behind authentication middleware — Stripe cannot authenticate"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "That last point catches people. If your webhook route is behind your auth middleware it will reject Stripe requests because they do not have a session cookie. Add your webhook route to the public routes list in your middleware config."
                }
            ]
        },
        {
            "id": "13",
            "slug": "hallucinated-apis",
            "title": "18. Handling Hallucinated APIs",
            "blocks": [
                {
                    "type": "p",
                    "text": "You ask the agent to integrate a third party API. It writes clean, well typed, beautifully structured code. You run it. 404 Not Found. You check the actual documentation. The endpoint it used does not exist. It never existed. The agent invented it."
                },
                {
                    "type": "p",
                    "text": "This is one of the most frustrating experiences in vibe coding because everything looks right. The TypeScript types are correct. The fetch logic is clean. The error handling is solid. The only problem is that the API endpoint is completely made up."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "AI models are trained on data up to a cutoff date. APIs change constantly — endpoints get deprecated, renamed, versioned, restructured. When the model does not know the exact current endpoint it does not say \"I am not sure\". It confidently invents what the endpoint should logically be based on REST conventions. And it is wrong."
                },
                {
                    "type": "h2",
                    "text": "The Verify Docs First protocol"
                },
                {
                    "type": "p",
                    "text": "The fix is simple but requires discipline: never ask the agent to integrate an API without giving it the actual current documentation first. Not from memory. Not from its training data. The actual docs, fetched live."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "// Before any API integration, always do this first\n\n\"Before writing any code, fetch the documentation at this URL and read it:\nhttps://resend.com/docs/api-reference/emails/send-email\n\nBase ALL code strictly on what you find in those docs.\nDo not use any endpoints, parameters, or response shapes\nthat are not explicitly documented at that URL.\nIf something is unclear, tell me — do not guess.\""
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Pro tip: For APIs you use frequently, paste the relevant documentation section directly into your skill file. The agent reads it every session and never needs to guess about endpoints it uses regularly."
                },
                {
                    "type": "h2",
                    "text": "Using curl to self-correct"
                },
                {
                    "type": "p",
                    "text": "When you are using Claude Code and an API call is returning unexpected errors, tell the agent to test the endpoint directly with curl before trying to fix the code. This forces it to get real feedback from the actual API instead of reasoning from potentially incorrect assumptions."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "\"The API call in src/lib/resend.ts is returning a 422 error.\nBefore changing any code, use curl to hit the endpoint directly\nand read the actual error response. Then fix the code based\non what the API actually returns, not what you expect it to return.\""
                },
                {
                    "type": "h2",
                    "text": "The APIs most likely to hallucinate"
                },
                {
                    "type": "ul",
                    "items": [
                        "Any API that released a major version after 2024 — the model may know v1 but not v2 or v3",
                        "Niche or less popular APIs — less training data means more guessing",
                        "APIs that recently rebranded — the model knows the old name and old endpoints",
                        "Internal or private APIs — the model has never seen these and will invent everything",
                        "APIs with complex authentication flows — OAuth scopes and token exchanges get hallucinated constantly",
                        "Supabase edge functions and newer Supabase features — the platform evolves fast"
                    ]
                },
                {
                    "type": "h2",
                    "text": "Building a personal API reference"
                },
                {
                    "type": "p",
                    "text": "For APIs I integrate regularly — Supabase, Resend, Stripe, OpenAI — I keep a docs folder in my projects with the key reference pages saved as markdown files. When I need the agent to use one of these APIs I point it at the local file instead of asking it to remember."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "src/\n  docs/\n    resend-send-email.md      — copied from Resend docs\n    supabase-rls-patterns.md  — common RLS policy patterns\n    stripe-webhook-events.md  — webhook event types I use\n    openai-chat-params.md     — current chat completion params"
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "Add the docs folder to your AGENTS.md: \"For any API integration, check src/docs/ first for reference documentation before writing any code.\" One line in AGENTS.md and the agent always looks there first."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Never just say \"that is wrong, fix it\" when an API call fails. The agent will generate another confident wrong answer. Give it the real documentation. Make it read the source of truth before touching the code."
                }
            ]
        },
        {
            "id": "15",
            "slug": "debugging-with-ai",
            "title": "19. Debugging with AI",
            "blocks": [
                {
                    "type": "p",
                    "text": "Debugging is where most people use AI the worst. They copy the error message, paste it into the chat, and say 'fix this'. The agent produces something that looks like a fix, they paste it in, the error changes slightly, they paste the new error, and they spend two hours in a loop that goes nowhere."
                },
                {
                    "type": "p",
                    "text": "Debugging with AI is a skill. The agent cannot see your screen, does not know your full codebase, and has no context about what changed right before the bug appeared. If you give it nothing, it guesses. If you give it everything it needs, it finds the problem almost every time."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "The quality of your bug report to the AI determines the quality of the fix. A vague error paste gets a vague guess. A precise reproduction with full context gets a precise solution."
                },
                {
                    "type": "h2",
                    "text": "The bug report formula"
                },
                {
                    "type": "p",
                    "text": "Every time I have a bug I cannot immediately see I write a structured bug report before touching any AI tool. It takes 3 minutes and it almost always produces the fix on the first response."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "Bug Report:\n\nWhat I expected to happen:\n[describe the expected behavior]\n\nWhat actually happened:\n[describe the actual behavior, including exact error message]\n\nFull error output:\n[paste the complete error including stack trace]\n\nRelevant files:\n[list the files involved]\n\nWhat I changed right before this started:\n[describe the last thing you did before the bug appeared]\n\nWhat I have already tried:\n[list anything you have already attempted]\n\nEnvironment:\n[Next.js version, Node version, any relevant dependencies]"
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Never just paste an error message and say \"fix this\". The agent has no context. It will produce a generic fix that addresses the symptom, not the cause. You will be back with the same bug in a different form within the hour."
                },
                {
                    "type": "h2",
                    "text": "Give it the full stack trace"
                },
                {
                    "type": "p",
                    "text": "The single most common debugging mistake is truncating the error. People copy the first line — the error message — and ignore the stack trace below it. The stack trace is where the actual information lives. It tells you exactly which file, which line, which function call triggered the error."
                },
                {
                    "type": "h2",
                    "text": "Use Claude Code for serious debugging"
                },
                {
                    "type": "p",
                    "text": "For bugs that are not immediately obvious from the error, switch to Claude Code instead of Antigravity. Claude Code can read your actual files, trace the execution path, and reason through the logic in a way that a chat-based agent cannot."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "\"I have a bug I cannot figure out. Before suggesting any fixes,\nread these files and trace the execution:\n- src/app/api/generate/route.ts\n- src/lib/openai.ts\n- src/types/index.ts\n\nThe bug: when I call the generate endpoint with a valid AgentInput,\nit returns a 500 error. The full error is:\n[paste full error]\n\nThis started after I added error handling to the route yesterday.\n\nDo not suggest a fix yet. First tell me exactly what you think\nis causing this and why.\""
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "That last instruction — \"do not suggest a fix yet, tell me what is causing it first\" — is one of the most useful debugging prompts I use. It forces the agent to diagnose before prescribing. The diagnosis is almost always right and the fix follows naturally."
                },
                {
                    "type": "h2",
                    "text": "The debugging prompts I use most"
                },
                {
                    "type": "ul",
                    "items": [
                        "\"Read [file] and trace what happens when [function] is called with [input]. Do not suggest fixes yet. Just trace the execution.\"",
                        "\"This was working before I made [change]. What in [file] could [change] have broken?\"",
                        "\"The error says [error]. Given that the data comes from [source] and is used in [component], what are the three most likely causes?\"",
                        "\"Add console.logs to [file] to trace [data] through the execution. Show me exactly where it changes from what I expect.\"",
                        "\"I think the bug is [hypothesis]. Confirm or correct this reasoning based on [files].\""
                    ]
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "The best debugging prompt is always the most specific one. The more precisely you describe what you expect versus what you get, the faster the agent finds it. Precision is everything."
                }
            ]
        },
        {
            "id": "16",
            "slug": "writing-tests-with-ai",
            "title": "20. Writing Tests with AI",
            "blocks": [
                {
                    "type": "p",
                    "text": "Most vibe coders skip tests entirely. I get it — you are moving fast, the feature works in the browser, writing tests feels like slowing down. But skipping tests is not moving fast. It is borrowing time from your future self at a very high interest rate."
                },
                {
                    "type": "p",
                    "text": "The good news is that writing tests is one of the things AI is genuinely excellent at — better than most humans at the mechanical parts. Give it a function and it will generate edge cases you would not have thought of. Give it a component and it will write interaction tests that cover the happy path and the failure modes."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "AI written tests are only as good as the context you give them. A test written with no context tests the wrong things. A test written with full context catches real bugs before they hit production."
                },
                {
                    "type": "h2",
                    "text": "The testing stack I use"
                },
                {
                    "type": "ul",
                    "items": [
                        "Vitest — faster than Jest, works natively with Next.js and TypeScript, same API as Jest so the AI knows it well",
                        "React Testing Library — for component tests, tests behavior not implementation",
                        "MSW (Mock Service Worker) — for mocking API calls in tests without touching the real endpoints",
                        "Playwright — for end to end tests, full browser automation"
                    ]
                },
                {
                    "type": "code",
                    "language": "bash",
                    "code": "npm install -D vitest @testing-library/react @testing-library/user-event msw playwright"
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "Add your testing stack to AGENTS.md so the agent always writes tests using the correct libraries. Without this it will sometimes default to Jest syntax or use outdated React Testing Library patterns."
                },
                {
                    "type": "h2",
                    "text": "What to test and what to skip"
                },
                {
                    "type": "ul",
                    "items": [
                        "Always test: utility functions with logic — anything in src/lib/ that transforms data",
                        "Always test: API route handlers — especially anything that touches payments, auth, or user data",
                        "Always test: complex conditional logic — if you needed to think about it, test it",
                        "Always test: anything that has broken before — if a bug appeared once it will appear again",
                        "Skip: simple presentational components with no logic",
                        "Skip: third party library wrappers — test your code not theirs",
                        "Skip: one-line functions — if the test is longer than the function, skip it"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Testing implementation details is the most common testing mistake. If your test breaks every time you refactor but the behavior stays the same, you are testing the wrong thing. Test what the code does, not how it does it."
                },
                {
                    "type": "h2",
                    "text": "The prompt for utility function tests"
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "\"Write comprehensive Vitest tests for the function in src/lib/agents.ts.\n\nPaste the function here:\n[paste the function]\n\nFor each test:\n- Test the happy path with valid input\n- Test edge cases (empty arrays, null values, boundary conditions)\n- Test error cases (invalid input, missing required fields)\n- Use descriptive test names that explain what the test verifies\n\nDo not mock anything unless absolutely necessary.\nDo not test implementation details — test behavior.\nFile: src/lib/__tests__/agents.test.ts\""
                },
                {
                    "type": "h2",
                    "text": "Making the AI find edge cases you missed"
                },
                {
                    "type": "p",
                    "text": "This is where AI genuinely outperforms humans at testing. Ask it to think about edge cases before writing any tests and it will surface scenarios you would never have considered."
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "\"Before writing any tests for [function/component/route],\nlist every edge case and failure mode you can think of.\nInclude:\n- Boundary conditions\n- Null and undefined inputs\n- Empty arrays and strings\n- Concurrent calls\n- Race conditions\n- Network failures\n- Invalid data shapes\n\nDo not write any code yet. Just list the scenarios.\nI will tell you which ones to test.\""
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "The edge case listing prompt is one of the most valuable prompts in this entire bible. Do it for any critical function — payments, auth, data transformation. The agent thinks of failure modes differently than humans and the combination catches more than either alone."
                },
                {
                    "type": "h2",
                    "text": "Adding tests to CLAUDE.md"
                },
                {
                    "type": "code",
                    "language": "markdown",
                    "code": "## Testing Rules\n- Testing stack: Vitest, React Testing Library, MSW\n- Test files go in __tests__/ folder next to the file being tested\n- Always write tests for: utility functions, API routes, complex conditionals\n- Never test: simple presentational components, third party wrappers\n- Always mock external APIs with MSW — never hit real endpoints in tests\n- Query by role and label in component tests — never by class or test ID\n- When adding a new utility function, add tests in the same task\n- When fixing a bug, add a test that would have caught it before fixing it"
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "That last rule — write a test that would have caught the bug before fixing it — is the single habit that most improves a codebase over time. Every bug you fix leaves a test behind. After six months your test suite is a perfect map of every failure mode your product has ever had."
                }
            ]
        }
    ]
};
