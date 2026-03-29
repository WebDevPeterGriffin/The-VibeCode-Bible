import { Category } from '../types';

export const category: Category = {
    id: 'cat-5',
    slug: 'debugging-and-testing',
    title: 'Debugging & Testing',
    sections: [
    {
        "id": "9",
        "slug": "context-window-crash",
        "title": "9. The Context Window Crash",
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
                "text": "The problem is not just size. Even models with massive context windows — 200K tokens, 1 million tokens — suffer from degraded recall when that window is stuffed with irrelevant information. The model technically has access to everything but it starts paying less attention to the important parts because there is too much noise around them."
            },
            {
                "type": "p",
                "text": "After 3-4 hours of continuous building, your context window is full of: the files from features you finished hours ago, failed attempts the agent made and then corrected, your early scaffold prompts that are now irrelevant, component code that has since been refactored, and conversation history that adds nothing to the current task. All of that is diluting the signal."
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
                "type": "p",
                "text": "The solution is not a bigger context window. The solution is discipline about what goes into the context window in the first place. Here is exactly what I do."
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
                "type": "callout",
                "variant": "zap",
                "text": "Pro tip: Treat each feature like a new shift. Clock out when it is done. Clock back in with a clean slate for the next one. The agent performs better and so do you."
            },
            {
                "type": "h3",
                "text": "Only load what the task needs"
            },
            {
                "type": "p",
                "text": "This is the discipline most people skip. When I write a prompt I specify exactly which files the agent needs to look at. Not the whole src folder. Not the whole components directory. The exact files the task touches."
            },
            {
                "type": "p",
                "text": "If I am fixing a bug in the GeneratorForm component I give it GeneratorForm.tsx and the relevant type file. That is it. Loading the entire codebase for a CSS change is like handing someone your entire filing cabinet when they asked for one document."
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
                "text": "This one changed how I structure projects. When a component grows past 200 lines the agent starts making mistakes editing it — missing closing tags, duplicating logic, losing track of the component state. Under 200 lines it handles it cleanly almost every time."
            },
            {
                "type": "p",
                "text": "If a component is growing too big, break it into smaller ones before asking the agent to edit it. Split the logic into a custom hook. Extract a sub-component. Make the pieces smaller and the agent gets smarter."
            },
            {
                "type": "callout",
                "variant": "idea",
                "text": "My rule: if I have to scroll to see the full component, it is too big. Break it up before the agent touches it."
            },
            {
                "type": "h3",
                "text": "Use AGENTS.md to replace context"
            },
            {
                "type": "p",
                "text": "This is the most powerful prevention technique. AGENTS.md means the agent never needs you to re-explain your stack, your conventions, or your folder structure. That information is always there at the start of every fresh context. You never need to carry it through a long session because it is always available."
            },
            {
                "type": "p",
                "text": "Every time you catch yourself repeating something to the agent — a rule, a preference, a constraint — that thing belongs in AGENTS.md. Add it once and never repeat it again."
            },
            {
                "type": "h2",
                "text": "What to do when it happens anyway"
            },
            {
                "type": "p",
                "text": "Sometimes you miss the warning signs and the crash happens mid-session. The agent is clearly confused, contradicting itself, or generating garbage. Here is how to recover without losing your work."
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
                "type": "p",
                "text": "Learn to recognize these early. If you catch them at the first sign you can clear and restart before any damage is done."
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
        "title": "12. Securing Stripe & Webhooks",
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
                "type": "p",
                "text": "This code works perfectly in development. It processes real Stripe events correctly. And it will also process completely fake events sent by anyone who knows your webhook URL. There is no verification. The endpoint trusts whatever JSON body it receives."
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
                "type": "p",
                "text": "Every Stripe webhook request includes a Stripe-Signature header. Stripe uses your endpoint secret to generate a cryptographic signature of the raw request body. You verify that signature before trusting anything in the payload. If the signature does not match, the request did not come from Stripe."
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
                "type": "p",
                "text": "The standard prompt for Stripe integration does not produce secure webhook code. You have to be explicitly paranoid in the prompt. Here is exactly what I use:"
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
                "type": "p",
                "text": "Add a payment security section to your CLAUDE.md so the agent never generates insecure payment code regardless of how the task is phrased."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "## Payment Security Rules\n- NEVER trust webhook payloads without verifying the Stripe-Signature header\n- ALWAYS use stripe.webhooks.constructEvent() before processing any webhook\n- ALWAYS use req.text() for webhook route body parsing, never req.json()\n- NEVER upgrade or modify user accounts based on client-side payment confirmation\n- Payment status must ALWAYS be verified server-side via webhook, never via redirect params\n- The success redirect URL is for UX only — never use it to trigger account changes"
            },
            {
                "type": "callout",
                "variant": "idea",
                "text": "That last rule is important. The Stripe success redirect URL can be manipulated. Someone can visit yourapp.com/success?session_id=fake and if your code reads that URL to upgrade the account you have the same problem. All account changes happen in the webhook. Never in the redirect."
            },
            {
                "type": "h2",
                "text": "Testing webhooks locally"
            },
            {
                "type": "p",
                "text": "You cannot test webhooks by triggering real payments in development. Use the Stripe CLI to forward events to your local server. The agent often skips this in its instructions so here is the actual workflow."
            },
            {
                "type": "code",
                "language": "bash",
                "code": "# Install Stripe CLI\nbrew install stripe/stripe-cli/stripe\n\n# Login\nstripe login\n\n# Forward webhooks to your local server\nstripe listen --forward-to localhost:3000/api/webhooks/stripe\n\n# In a separate terminal, trigger a test event\nstripe trigger checkout.session.completed"
            },
            {
                "type": "p",
                "text": "The CLI will print a webhook signing secret when you run stripe listen. Use that as your STRIPE_WEBHOOK_SECRET in your .env.local for development. It is different from your production webhook secret."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "Test the failure case too. Send a request to your webhook endpoint without the signature header and make sure it returns 400. If your endpoint processes unsigned requests in testing it will process them in production."
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
        "title": "13. Handling Hallucinated APIs",
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
                "text": "Why this happens"
            },
            {
                "type": "p",
                "text": "The model has seen thousands of API integrations in its training data. It knows what a well-structured REST API looks like. It knows that payment APIs usually have a /charges endpoint, that email APIs usually have a /send endpoint, that auth APIs usually have a /token endpoint."
            },
            {
                "type": "p",
                "text": "When it does not have reliable information about the specific API you are using — either because the API is newer than its training data, because the API changed after the cutoff, or because the API is niche enough that it was barely represented in training — it pattern-matches to what it knows and fills in the gaps with confident guesses."
            },
            {
                "type": "p",
                "text": "The guesses are structurally plausible. They follow REST conventions. They look like real endpoints. They just do not exist."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "The most dangerous hallucinations are the ones that are almost right. An endpoint that is completely wrong is easy to catch. An endpoint that is one version number off — /v2/ instead of /v3/ — can waste hours of debugging."
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
                "type": "p",
                "text": "That last line is critical. Telling the agent to flag uncertainty instead of guessing changes its behavior significantly. It will still sometimes guess, but the explicit instruction to not guess reduces hallucinations noticeably."
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
                "type": "p",
                "text": "When the agent runs curl and reads the real error message it self-corrects almost immediately. The actual API response contains the real parameter names, the real required fields, and the real error descriptions. This is always more reliable than the agent reasoning about what might be wrong."
            },
            {
                "type": "h2",
                "text": "The APIs most likely to hallucinate"
            },
            {
                "type": "p",
                "text": "Not all APIs are equal hallucination risks. Here is my rough ranking of what to watch out for:"
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
                "type": "p",
                "text": "This sounds like extra work but it pays off immediately. The agent never hallucinates endpoints for APIs that have a local docs file. It reads the file, uses exactly what is documented, and the integration works first time."
            },
            {
                "type": "callout",
                "variant": "idea",
                "text": "Add the docs folder to your AGENTS.md: \"For any API integration, check src/docs/ first for reference documentation before writing any code.\" One line in AGENTS.md and the agent always looks there first."
            },
            {
                "type": "h2",
                "text": "What to do when you catch a hallucination"
            },
            {
                "type": "p",
                "text": "When you hit a 404 or an unexpected error on a third party API call, do not just tell the agent it is wrong and ask it to fix it. That often produces another confident hallucination. Instead give it the actual information it needs."
            },
            {
                "type": "ol",
                "items": [
                    "Find the actual current documentation for the endpoint",
                    "Paste the relevant section directly into the prompt",
                    "Tell it explicitly: \"The endpoint you used does not exist. Here is the actual documentation. Rewrite the integration using only what is in these docs.\"",
                    "If the error is unclear, have it run curl first to get the real API response",
                    "Add the correct endpoint to your local docs file so it never happens again"
                ]
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
        "title": "15. Debugging with AI",
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
                "type": "p",
                "text": "The most important field is 'what I changed right before this started'. Bugs almost always appear immediately after a change. That change is almost always the cause. The agent needs to know what changed to trace backwards to the root cause."
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
                "text": "The single most common debugging mistake is truncating the error. People copy the first line — the error message — and ignore the stack trace below it. The stack trace is where the actual information lives. It tells you exactly which file, which line, which function call triggered the error and the entire chain of calls that led there."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "// Bad — just the error message\n\"TypeError: Cannot read properties of undefined (reading 'map')\"\n\n// Good — full stack trace\n\"TypeError: Cannot read properties of undefined (reading 'map')\n    at AgentCard (src/components/AgentCard.tsx:24:18)\n    at renderWithHooks (node_modules/react-dom/...)\n    at mountIndeterminateComponent (...)\n    at beginWork (...)\n    \nThe error occurs when the page loads. The agents prop is\npassed from src/app/dashboard/page.tsx.\""
            },
            {
                "type": "p",
                "text": "With the full stack trace the agent immediately knows it is a null/undefined issue on line 24 of AgentCard.tsx at the map call. It knows exactly where to look and what to fix. With just the error message it is guessing."
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
                "text": "The rubber duck method with AI"
            },
            {
                "type": "p",
                "text": "Sometimes the most useful thing the AI can do is listen while you explain the bug. The act of explaining a bug clearly enough for someone else to understand it often reveals the cause before they even respond. This works with human colleagues and it works with AI."
            },
            {
                "type": "p",
                "text": "When I am stuck I open Claude Code and explain the bug as if I am teaching someone who has never seen the codebase. I describe the data flow, the expected behavior, the actual behavior, and what I have tried. About 30% of the time I figure out the bug myself while writing the explanation."
            },
            {
                "type": "callout",
                "variant": "zap",
                "text": "Pro tip: If you figure out the bug while explaining it to the AI, tell it anyway and ask it to confirm your reasoning. It will often catch a secondary issue you missed while fixing the first one."
            },
            {
                "type": "h2",
                "text": "Debugging TypeScript type errors"
            },
            {
                "type": "p",
                "text": "TypeScript errors are the easiest category to debug with AI because the error message contains almost all the information needed. The key is to paste the full error including the type mismatch details, not just the first line."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "// Paste this kind of detail — not just the first line\n\"Type error in src/components/AgentCard.tsx:\n\nType '{ id: string; name: string; }' is not assignable\nto type 'Agent'.\nProperty 'email' is missing in type '{ id: string; name: string; }'\nbut required in type 'Agent'.\n\nThe Agent type is defined in src/types/index.ts.\nThe data comes from the Supabase query in src/lib/agents.ts.\nI think the query is not selecting all the fields the type requires.\""
            },
            {
                "type": "p",
                "text": "That description tells the agent exactly what is wrong, where the type is defined, where the data comes from, and your hypothesis. It will confirm or correct your hypothesis and give you a precise fix in one response."
            },
            {
                "type": "h2",
                "text": "When the agent cannot find the bug"
            },
            {
                "type": "p",
                "text": "Sometimes the agent genuinely cannot find the bug from the information you give it. When this happens there is a sequence I follow before giving up and writing it myself."
            },
            {
                "type": "ol",
                "items": [
                    "Add console.logs at every step of the execution and paste the output — real runtime data beats static analysis every time",
                    "Ask the agent to add its own console.logs to trace the data flow — let it instrument the code",
                    "Simplify the reproduction — strip everything out until the bug still appears in the simplest possible version",
                    "Check if the bug appears in a fresh component with the same logic — isolates whether it is the logic or the surrounding context",
                    "If all else fails — describe the bug to a human, not the AI. Fresh eyes from a different brain often catch what both you and the AI missed"
                ]
            },
            {
                "type": "callout",
                "variant": "skull",
                "text": "If you have been debugging the same bug for more than 90 minutes with AI help and made no progress, stop. Walk away for 20 minutes. Come back and read the code with fresh eyes. The number of times I have spotted the bug immediately after a break that I could not find after an hour of AI-assisted debugging is embarrassing."
            },
            {
                "type": "h2",
                "text": "The debugging prompts I use most"
            },
            {
                "type": "p",
                "text": "These are the exact prompts I reach for depending on the type of bug. Copy them, adapt them, add them to your workflow."
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
        "title": "16. Writing Tests with AI",
        "blocks": [
            {
                "type": "p",
                "text": "Most vibe coders skip tests entirely. I get it — you are moving fast, the feature works in the browser, writing tests feels like slowing down. But skipping tests is not moving fast. It is borrowing time from your future self at a very high interest rate."
            },
            {
                "type": "p",
                "text": "The good news is that writing tests is one of the things AI is genuinely excellent at — better than most humans at the mechanical parts. Give it a function and it will generate edge cases you would not have thought of. Give it a component and it will write interaction tests that cover the happy path and the failure modes. The problem is most people do not know how to prompt for tests correctly."
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
                "type": "p",
                "text": "Before writing any tests you need a consistent testing setup. This is what I use on every project and what the AI tools know best — which means fewer hallucinated APIs and more working tests."
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
                "type": "p",
                "text": "Not everything needs a test. Testing everything is as bad as testing nothing — you end up with a test suite that is expensive to maintain and does not actually protect you from real bugs. Here is how I decide what gets a test."
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
                "type": "p",
                "text": "Utility functions are the easiest and most valuable things to test. They are pure functions with clear inputs and outputs and the AI generates comprehensive tests for them almost perfectly every time."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "\"Write comprehensive Vitest tests for the function in src/lib/agents.ts.\n\nPaste the function here:\n[paste the function]\n\nFor each test:\n- Test the happy path with valid input\n- Test edge cases (empty arrays, null values, boundary conditions)\n- Test error cases (invalid input, missing required fields)\n- Use descriptive test names that explain what the test verifies\n\nDo not mock anything unless absolutely necessary.\nDo not test implementation details — test behavior.\nFile: src/lib/__tests__/agents.test.ts\""
            },
            {
                "type": "p",
                "text": "Pasting the actual function into the prompt is important. The agent writes better tests when it can see the implementation — it understands the edge cases, the conditionals, and the potential failure points from reading the code directly."
            },
            {
                "type": "h2",
                "text": "The prompt for API route tests"
            },
            {
                "type": "p",
                "text": "API route tests are more valuable than component tests for most SaaS products. If the API breaks, everything breaks. These tests catch the problems that matter most."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "\"Write Vitest tests for the API route at src/app/api/generate/route.ts.\n\nThe route:\n[paste the route handler]\n\nTest these scenarios:\n1. Valid request with all required fields — expect 200 with correct shape\n2. Missing required field (agentName) — expect 400 with error message\n3. Invalid API key — expect 401\n4. External API timeout — expect 500 with graceful error\n5. Malformed request body — expect 400\n\nMock the OpenAI call using MSW so tests do not hit real APIs.\nAssert on the response status and body shape, not implementation details.\nFile: src/app/api/__tests__/generate.test.ts\""
            },
            {
                "type": "callout",
                "variant": "zap",
                "text": "Pro tip: Always tell the agent to mock external API calls. If your tests hit real APIs they are slow, flaky, and cost money. MSW intercepts fetch calls at the network level — your code runs exactly as in production but the response is controlled."
            },
            {
                "type": "h2",
                "text": "The prompt for component tests"
            },
            {
                "type": "p",
                "text": "Component tests should test behavior — what the user sees and can do — not the internal state or implementation. React Testing Library is built around this philosophy and the AI writes much better tests when you remind it of this."
            },
            {
                "type": "code",
                "language": "markdown",
                "code": "\"Write React Testing Library tests for GeneratorForm.tsx.\n\nThe component:\n[paste the component]\n\nTest these user interactions:\n1. Form renders with all required fields visible\n2. Submit button is disabled when required fields are empty\n3. User fills in name and email — submit button becomes enabled\n4. User submits the form — onGenerate is called with the correct data\n5. Loading state shows correctly while generating\n6. Error state renders the error message when generation fails\n\nUse userEvent not fireEvent for all interactions.\nQuery elements by role and label, not by class or test ID.\nDo not test internal state — only test what the user sees.\nFile: src/components/__tests__/GeneratorForm.test.tsx\""
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
                "type": "p",
                "text": "Reading that list before the tests are written lets you catch gaps in your own thinking. The agent will almost always include two or three scenarios you had not considered. You add them to the list, tell it to proceed, and the test suite covers things you would have shipped unprotected."
            },
            {
                "type": "callout",
                "variant": "fire",
                "text": "The edge case listing prompt is one of the most valuable prompts in this entire bible. Do it for any critical function — payments, auth, data transformation. The agent thinks of failure modes differently than humans and the combination catches more than either alone."
            },
            {
                "type": "h2",
                "text": "Running tests as part of your workflow"
            },
            {
                "type": "p",
                "text": "Tests are useless if you never run them. I run the test suite at two specific points in my workflow — after the Claude Code review pass on each section, and before every deploy. Not continuously, not after every file change. Just those two moments."
            },
            {
                "type": "code",
                "language": "bash",
                "code": "# Run all tests\nnpm run test\n\n# Run tests for a specific file\nnpm run test src/lib/__tests__/agents.test.ts\n\n# Run tests in watch mode during active development\nnpm run test -- --watch\n\n# Run with coverage to see what is not tested\nnpm run test -- --coverage"
            },
            {
                "type": "callout",
                "variant": "skull",
                "text": "A failing test suite that you ignore is worse than no tests. If you let tests fail without fixing them you lose the signal entirely. Fix failing tests immediately or delete them. Never let them sit red."
            },
            {
                "type": "h2",
                "text": "Adding tests to CLAUDE.md"
            },
            {
                "type": "p",
                "text": "Add a testing section to your CLAUDE.md so that Claude Code automatically writes tests alongside new features without being asked."
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
