import { Category } from '../types';

export const category: Category = {
    id: 'cat-4',
    slug: 'building-products',
    title: 'Building Products',
    sections: [
    {
        "id": "8",
        "slug": "real-project",
        "title": "8. Real Project",
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
                "text": "The mistakes I made building Siteo are exactly why section 9 exists. Read it before you start your project."
            }
        ]
    },
    {
        "id": "10",
        "slug": "database-migrations",
        "title": "10. Database Migrations on Auto-Pilot",
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
                "type": "p",
                "text": "I add this to my pre-migration checklist and I do not run any migration without checking it off. Not because I expect something to go wrong every time — but because the one time something goes wrong and you do not have a backup is the time it actually matters."
            },
            {
                "type": "callout",
                "variant": "skull",
                "text": "\"I thought the migration was safe\" is the last thing you want to be saying to a client whose data just disappeared. Backup first. Every time. Non-negotiable."
            },
            {
                "type": "h2",
                "text": "When the agent does try to run SQL directly"
            },
            {
                "type": "p",
                "text": "If you are using Claude Code and you see it attempting to execute SQL — either through the Supabase CLI, a direct database connection, or any other method — stop it immediately. Do not let it finish. Review what it was trying to do, add the restriction to your CLAUDE.md, and start the task fresh with the guardrails in place."
            },
            {
                "type": "p",
                "text": "This is not a criticism of the tool. It is doing what you asked it to do as efficiently as possible. The responsibility for setting boundaries is yours. The tools in this bible — AGENTS.md, CLAUDE.md, skill files — exist precisely so you can set those boundaries once and never have to think about them again."
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
        "title": "11. Beating the Generic AI Look",
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
                "text": "The root cause"
            },
            {
                "type": "p",
                "text": "When the agent has no design system to reference it falls back to what it knows statistically works — safe colors, safe spacing, safe components. Blue-500 because blue reads as trustworthy. Rounded-xl because it looks modern. Shadow-md because it adds depth. All technically correct. All immediately recognizable as AI output."
            },
            {
                "type": "p",
                "text": "The fix is not to ask it to 'make it look better' or 'make it more premium'. Those are vague instructions and the agent will interpret them as vague. The fix is to give it a specific design system with specific rules it cannot deviate from."
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
                "type": "h2",
                "text": "The AGENTS.md design system"
            },
            {
                "type": "p",
                "text": "The most powerful version of all of this is combining everything above into a design system section in your AGENTS.md. Write it once at the start of a project and every single component the agent generates for the rest of the project follows it automatically. No reminding. No repeating. No fighting about pill buttons."
            },
            {
                "type": "p",
                "text": "This is exactly why the AGENTS.md file in this repo has a dedicated design section. The agents in this codebase cannot produce generic UI even if they tried. The rules make it structurally impossible."
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
        "title": "18. Building with Supabase RLS",
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
                "type": "p",
                "text": "For public read tables you still enable RLS — you just add a policy that allows anyone to read. The table is not unprotected, it is intentionally open for reads while still protected for writes."
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
                "type": "p",
                "text": "When a Supabase query returns unexpected results — wrong data, empty data, silent failures — check RLS before anything else. Go to the Supabase dashboard, open the table, and check the RLS policies. Nine times out of ten a missing or incorrect policy is the cause."
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
                "text": "Testing RLS policies"
            },
            {
                "type": "p",
                "text": "Before shipping any feature that touches user data, test the RLS policies explicitly. The Supabase dashboard has a built in RLS testing tool — use it. You can simulate queries as a specific user and verify they only see the data they should."
            },
            {
                "type": "code",
                "language": "sql",
                "code": "-- Test RLS as a specific user in the Supabase SQL editor\n-- Switch from service role to a specific user\nSET LOCAL role authenticated;\nSET LOCAL request.jwt.claims = '{\"sub\": \"user-uuid-here\"}';\n\n-- Now run your query — it will respect RLS policies\nSELECT * FROM pages;\n\n-- You should only see pages where user_id = \"user-uuid-here\""
            },
            {
                "type": "h2",
                "text": "The prompt for debugging RLS issues"
            },
            {
                "type": "p",
                "text": "When you have an RLS issue tell the agent specifically that you suspect an RLS problem. Do not just describe the symptom. Give it the table schema, the current policies, and the query that is failing."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "\"I have an RLS issue with my Supabase pages table.\n\nCurrent RLS policies:\n[paste your current policies from the Supabase dashboard]\n\nThe query that is failing:\n[paste the query]\n\nThe user making the request:\n[describe the user — authenticated, their user_id, etc]\n\nWhat I expect to happen:\n[describe expected result]\n\nWhat actually happens:\n[describe actual result — empty array, error, etc]\n\nAnalyze the policies and tell me what is wrong.\nDo not rewrite the policies yet — just explain the issue.\""
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
                "type": "h2",
                "text": "Adding RLS to your CLAUDE.md"
            },
            {
                "type": "p",
                "text": "Make RLS non-negotiable in your CLAUDE.md. The agent should never create a Supabase table without RLS policies and should never use the service role key in client side code."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "## Supabase Security Rules\n- ALWAYS enable RLS on every new table before writing any queries\n- ALWAYS add SELECT, INSERT, UPDATE, DELETE policies for every table\n- Default policy pattern: users can only access rows where user_id = auth.uid()\n- For public content: SELECT policy USING (true), write policies still use auth.uid()\n- NEVER use the service role key in frontend or client side code\n- NEVER use the service role key in API routes unless explicitly required for admin operations\n- When a query returns unexpected results, check RLS policies first\n- Always test RLS from application code, not the Supabase dashboard"
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
        "title": "20. The Overnight Build",
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
                "type": "p",
                "text": "Not every idea works for an overnight build. The ones that work share specific characteristics. Before you commit a night to something, check it against this list."
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
                "type": "p",
                "text": "Writing the 'explicitly not building tonight' section is the most important part. It is a contract with yourself. Every time a new feature idea appears during the build — and they will appear constantly — you check it against this list and put it there if it is not already."
            },
            {
                "type": "h2",
                "text": "The scaffold — first 45 minutes"
            },
            {
                "type": "p",
                "text": "With the plan written, move fast on the scaffold. This is maximum agent territory. Your job is to get the skeleton running as fast as possible so you can start building on top of something real."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "# Scaffold prompt for overnight builds\n\n\"Scaffold a Next.js 14 App Router project called [name].\nThis is an overnight build — prioritize speed over perfection.\n\nStack: Next.js 14, Tailwind v4, TypeScript strict, Supabase, Vercel ready\n\nPages:\n- src/app/page.tsx — simple landing with one CTA\n- src/app/[core-page]/page.tsx — the main product page\n\nComponents:\n- src/components/[CoreComponent].tsx — the main interactive element\n\nAPI Routes:\n- src/app/api/[core-action]/route.ts — the one endpoint that makes it work\n\nTypes in src/types/index.ts:\n- [Your core type]\n\nAlso create:\n- AGENTS.md with standard rules\n- .env.local.example with required variables\n\nEmpty shells. Correct types. Deploy-ready structure.\nI need to be live in one night.\""
            },
            {
                "type": "callout",
                "variant": "zap",
                "text": "Pro tip: Tell the agent this is an overnight build in the prompt. It changes how it scaffolds — leaner structure, fewer abstractions, faster to get running. It knows what fast means when you tell it the constraint."
            },
            {
                "type": "h2",
                "text": "Deploy immediately — before building features"
            },
            {
                "type": "p",
                "text": "The moment the scaffold is running locally, deploy to Vercel. Not when features are done. Not when it looks good. Right now, with just the skeleton."
            },
            {
                "type": "p",
                "text": "This does three things. It catches environment and build issues early when you have time to fix them. It gives you a real URL to share the moment anything works. And it means every feature you build is immediately live — no deployment step at the end of the night when you are exhausted."
            },
            {
                "type": "code",
                "language": "bash",
                "code": "# Immediately after scaffold works locally\ngit add .\ngit commit -m \"feat: initial scaffold\"\ngit push\n\n# Connect to Vercel if not already connected\nnpx vercel\n\n# Add environment variables in Vercel dashboard\n# NEXT_PUBLIC_SUPABASE_URL\n# NEXT_PUBLIC_SUPABASE_ANON_KEY\n# Any other required vars\n\n# Every push to main after this is automatically live"
            },
            {
                "type": "h2",
                "text": "The build sequence"
            },
            {
                "type": "p",
                "text": "After the scaffold is deployed, build in this exact order. The sequence matters — each layer depends on the one before it and building out of order causes you to rewrite things."
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
                "type": "p",
                "text": "The overnight build has a predictable energy curve. The first two hours are high energy — everything is new, progress is fast, the idea feels exciting. Around midnight there is a dip — the hard parts appear, progress slows, doubt creeps in. After 2am either you have broken through the hard parts and the energy comes back, or you are debugging something that is not working and fatigue is setting in."
            },
            {
                "type": "p",
                "text": "Know this curve in advance. The midnight dip is normal. It is not a sign the idea is bad or that you should stop. It is just where the hard part lives. Push through it and the 2am second wind almost always comes."
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
                "text": "Not every overnight build should make it to morning. Sometimes the core assumption is wrong and you know it by 1am. The landing page AI generates garbage responses. The core interaction is confusing even to you. The API costs are ten times what you expected."
            },
            {
                "type": "p",
                "text": "Killing an overnight build at 1am instead of pushing through to a bad 6am launch is a good decision. You saved five hours of diminishing returns and you learned the idea does not work in the cheapest possible way — one night of your time."
            },
            {
                "type": "callout",
                "variant": "skull",
                "text": "Shipping something bad because you stayed up all night and feel obligated to have something to show is worse than killing it at 1am. The sunk cost of a sleepless night does not make a broken product worth sharing."
            },
            {
                "type": "h2",
                "text": "Sharing when it is live"
            },
            {
                "type": "p",
                "text": "The moment the core flow works and it is live, share it. Do not wait for it to be perfect. Post on Instagram, send it to people you know, drop it in communities. Real feedback from real people in the first hour is worth more than another hour of solo building."
            },
            {
                "type": "p",
                "text": "The overnight build is a story. People love watching something get built in real time. Post when you start. Post when you hit the hard part. Post when it goes live. The process is as interesting as the product."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "The overnight build post always performs. \"I built this in one night\" is a compelling story. Document the process as you go — a screenshot at midnight, one at 3am, one when it goes live. That content is authentic and developers respond to it."
            },
            {
                "type": "h2",
                "text": "The morning after"
            },
            {
                "type": "p",
                "text": "Sleep. Before you do anything else, sleep. The decisions you make on no sleep are almost always wrong. Features that seemed important at 4am look unnecessary after six hours of sleep. Bugs that felt catastrophic are obvious fixes when you are rested."
            },
            {
                "type": "p",
                "text": "When you wake up, read the feedback you got while you were sleeping. Talk to anyone who tried it. Decide in the cold light of day whether to keep building or move on. The overnight build gave you an answer. Now you know what to do with it."
            },
            {
                "type": "callout",
                "variant": "zap",
                "text": "Pro tip: Before you sleep, write three sentences about what you would build differently if you started again. Do it while the night is fresh. That document is your roadmap for v2 — if v1 deserves one."
            }
        ]
    }
]
};
