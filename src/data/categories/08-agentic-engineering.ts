import { Category } from '../types';

export const category: Category = {
    id: 'cat-8',
    slug: 'agentic-engineering',
    title: 'Agentic Engineering',
    sections: [
        {
            "id": "23",
            "slug": "vibe-coding-is-dead",
            "title": "23. Vibe Coding Is Dead",
            "blocks": [
                {
                    "type": "p",
                    "text": "Vibe coding felt like a superpower. You described what you wanted, the AI wrote it, and you shipped it. No architecture. No review. No testing. Just vibes. For demos it was incredible. For production it was a disaster waiting to happen."
                },
                {
                    "type": "p",
                    "text": "In early 2026, Andrej Karpathy — the person who coined the term — called it passé. That is not a minor update from a random blogger. That is the inventor of the methodology saying the methodology is over. It is worth taking seriously."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "The numbers do not lie. Code churn up 41%. Duplication up 4x. These are not theoretical risks. These are what actually happened to teams that shipped with pure vibes and no system."
                },
                {
                    "type": "h2",
                    "text": "Why it worked at first"
                },
                {
                    "type": "p",
                    "text": "Vibe coding was perfectly designed for the demo. You needed something to look good in a screen recording. You needed a prototype to show investors. You needed to validate an idea in a weekend. For all of those use cases it delivered. The AI could build something impressive in hours that would have taken days manually."
                },
                {
                    "type": "p",
                    "text": "The problem was that builders started shipping the demo to real users. The code that was good enough for a screenshot was suddenly handling real data, real edge cases, and real security requirements. And it fell apart."
                },
                {
                    "type": "h2",
                    "text": "Why it failed at scale"
                },
                {
                    "type": "p",
                    "text": "The AI does not remember what it built last week. Every prompt starts fresh. Without a system to enforce consistency — stack rules, naming conventions, file structure, review passes — the agent drifts. It uses inline styles in one component and Tailwind in another. It creates duplicate utilities. It ignores the existing patterns because it does not know they exist."
                },
                {
                    "type": "p",
                    "text": "Multiply that drift by weeks of daily prompts and you end up with a codebase that nobody fully understands. Not you. Not the AI. The technical debt compounds silently until something breaks in production and you have no idea where to start."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "Vibe coding was not wrong. It was the beginning. It proved that AI could build software. Agentic engineering is what comes next — the same tools, but with systems, oversight, and discipline built around them."
                }
            ]
        },
        {
            "id": "24",
            "slug": "why-it-really-broke-down",
            "title": "24. Why It Really Broke Down",
            "blocks": [
                {
                    "type": "p",
                    "text": "The post-mortems on failed vibe coding projects all point to the same three missing steps. Not missing libraries. Not the wrong AI model. Three steps that every serious software team does automatically that vibe coders skipped completely: design, review, and testing."
                },
                {
                    "type": "h2",
                    "text": "The three skipped steps"
                },
                {
                    "type": "ol",
                    "items": [
                        "Design — no architecture decisions made before the first prompt. No clarity on data flow, component structure, or API contracts. The AI made those decisions implicitly, inconsistently, and without knowing the full picture.",
                        "Review — no human looking at the output before it ships. The AI can write confident, plausible-looking code that is subtly wrong. Without a review pass that wrong code goes live.",
                        "Testing — no tests written, no edge cases checked, no manual QA on the golden path. Bugs only surface when real users hit them."
                    ]
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Security holes were the most expensive consequence. Input validation skipped. API routes left unprotected. User data exposed. The AI did not flag these because nobody asked it to look. Vibe coding has no security pass built in."
                },
                {
                    "type": "h2",
                    "text": "Technical debt that crushed real apps"
                },
                {
                    "type": "p",
                    "text": "Technical debt from vibe coding is different from normal technical debt. Normal debt is deliberate — you take a shortcut knowing you will clean it up later. Vibe coding debt is invisible. You do not know it exists until the codebase becomes unmaintainable and every new feature takes three times as long because you are fighting the existing code instead of building on top of it."
                },
                {
                    "type": "p",
                    "text": "The duplication problem compounds this. When the AI creates a utility function it does not know you already have one. So it creates another. Then another. Now you have three implementations of the same logic, potentially with different bugs in each one. Fix a bug in one and you still have the bug in the others."
                },
                {
                    "type": "h2",
                    "text": "The prototype trap"
                },
                {
                    "type": "p",
                    "text": "The most common failure pattern I saw: someone builds a prototype in a weekend, it works well enough to show people, people like it, so they keep building on top of it instead of starting fresh with a proper foundation. The prototype becomes the product. The shortcuts become the architecture."
                },
                {
                    "type": "p",
                    "text": "Prototypes are disposable by design. The moment you decide to ship something for real users, you need to decide whether to rebuild it properly or accept the consequences of a production prototype. Most people do not make that decision consciously. They just keep building."
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Great for prototypes. Disaster at scale. That is the honest summary of vibe coding. The tool was not the problem. Using the tool without a system around it was the problem."
                }
            ]
        },
        {
            "id": "25",
            "slug": "meet-agentic-engineering",
            "title": "25. Meet Agentic Engineering",
            "blocks": [
                {
                    "type": "p",
                    "text": "Agentic engineering is not a new set of tools. It is a new relationship with the tools you already have. You stop trying to write code with AI assistance. You start running agents that write, test, and ship code while you govern the process."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "You are the governor. The AI is the workforce. Your job is no longer to write code — it is to direct agents, review their output, catch their mistakes, and maintain the system that keeps them aligned."
                },
                {
                    "type": "h2",
                    "text": "What actually changes"
                },
                {
                    "type": "p",
                    "text": "In vibe coding you were a developer who used AI to write code faster. In agentic engineering you are an engineer who orchestrates agents to build systems. The distinction sounds subtle but it changes everything about how you spend your time."
                },
                {
                    "type": "ul",
                    "items": [
                        "You spend more time on architecture and design before any prompt is written",
                        "You write AGENTS.md and system files that constrain agent behaviour across every session",
                        "You review every diff before it merges — not occasionally, every time",
                        "You define what done means before the agent starts, not after it finishes",
                        "You break problems down into agent-sized tasks, not human-sized tasks"
                    ]
                },
                {
                    "type": "h2",
                    "text": "What Karpathy actually said"
                },
                {
                    "type": "p",
                    "text": "The quote that matters: more oversight, more scrutiny. Not less AI. More human judgment applied at the right moments. Karpathy was not saying AI coding is over. He was saying the naive version of it — prompt and ship, no system, no review — is over. The next level requires you to show up as an engineer, not just as a user."
                },
                {
                    "type": "p",
                    "text": "Same tools. Completely new mindset. The gap between a vibe coder and an agentic engineer is not the model they use or the IDE they open. It is the discipline they bring to the process."
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "The new job description: design the system, write the constraints, run the agents, review the output, test the result, ship the feature. You are not a coder anymore. You are an engineering director with an infinite AI workforce."
                }
            ]
        },
        {
            "id": "26",
            "slug": "the-agentic-workflow",
            "title": "26. The Agentic Workflow",
            "blocks": [
                {
                    "type": "p",
                    "text": "This is the workflow that replaced vibe coding for me. It is not slower. It is actually faster for anything beyond a prototype because you are not spending time undoing bad agent decisions or debugging invisible debt. Every step exists because skipping it has burned me."
                },
                {
                    "type": "h2",
                    "text": "The full loop"
                },
                {
                    "type": "ol",
                    "items": [
                        "Design first — before you open your editor, write down what you are building, what files it touches, and what it cannot touch. This becomes your prompt.",
                        "Scaffold with constraints — run the scaffold prompt against your AGENTS.md so the agent knows your stack, your conventions, and your rules from session one.",
                        "Build in small loops — one feature per prompt, one prompt at a time. Never give the agent more than it can hold in context.",
                        "Review every diff — open the changed files before you move to the next prompt. Catch mistakes while the context is fresh, not three sessions later.",
                        "Test the golden path — run the app after every feature. Click through the main flow manually. If it breaks, fix it now before the next prompt inherits the broken state.",
                        "Ship early — deploy on day one and keep deploying. Build against the live environment so production surprises surface during development, not at launch."
                    ]
                },
                {
                    "type": "h2",
                    "text": "The governor prompt pattern"
                },
                {
                    "type": "p",
                    "text": "Every prompt I write now follows the same structure. Task, files, constraints. What to build. Where to put it. What not to touch. This is the governor pattern — you are not just asking the agent to do something, you are defining the boundaries of what it is allowed to do."
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Governor prompt template: 'Build [feature]. Touch only [files]. Do not modify [files]. Use [specific patterns from AGENTS.md]. When done, output a summary of every file changed.' Copy this. Use it every session."
                },
                {
                    "type": "h2",
                    "text": "How this connects to everything else in this bible"
                },
                {
                    "type": "p",
                    "text": "The Vibe Coding Workflow section covers the build loop mechanics. The Scaffold Prompt section covers how to set up a new project correctly. The Mistakes I Made section is a list of what happens when you skip these steps. This section is the philosophy that ties all of it together."
                },
                {
                    "type": "p",
                    "text": "Agentic engineering is not a replacement for the lessons in this bible. It is the upgrade path. Start with the vibe coding workflow to build your instincts. Then apply the agentic mindset to build systems that actually scale."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "This is the next chapter. Not just for this bible but for the industry. The builders who figure out how to govern agents effectively are the ones who will ship the products that matter in the next three years. That is what you are learning to do."
                }
            ]
        },
        {
            "id": "27",
            "slug": "claude-opus-4-7",
            "title": "27. Claude Opus 4.7 — What Changed",
            "blocks": [
                {
                    "type": "p",
                    "text": "Anthropic released Claude Opus 4.7 alongside an update to Claude Code. This is not a minor patch. It is a meaningful jump for anyone building with AI agents. Here is what actually changed and what it means for your workflow."
                },
                {
                    "type": "h2",
                    "text": "The model upgrade"
                },
                {
                    "type": "p",
                    "text": "Opus 4.7 ships with extended thinking that runs up to 128K tokens internally before it responds. That matters because complex multi-file refactors and architecture decisions require more reasoning than a quick response allows. The model now thinks longer before acting, which means fewer broken implementations on the first pass."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "The tokenizer changed. Opus 4.7 uses a new tokenizer that produces different token counts than 4.6. Same prompt, different bill. Check your usage dashboards for the first week after switching."
                },
                {
                    "type": "p",
                    "text": "There is a new effort parameter that lets you control how hard the model works per request. Low effort for quick lookups and formatting. High or extra-high effort for complex reasoning, debugging, and architecture decisions. This is useful because not every prompt needs 128K tokens of internal reasoning — simple tasks should be fast and cheap."
                },
                {
                    "type": "h2",
                    "text": "File-system memory"
                },
                {
                    "type": "p",
                    "text": "Opus 4.7 is substantially better at file-system-based memory. It remembers important notes across long, multi-session work and uses them to move on to new tasks with less up-front context. If you are building agents that run for hours or across sessions, this is the unlock. Give the agent a scratchpad file, tell it to write notes as it works, and 4.7 will actually use them — something earlier models were inconsistent at."
                },
                {
                    "type": "h2",
                    "text": "Claude Code updates"
                },
                {
                    "type": "p",
                    "text": "Alongside the model release, Claude Code got two upgrades worth knowing about. There is a new /ultrareview command that runs a dedicated review session, reading through your changes and flagging what a careful reviewer would catch. Use it before committing anything non-trivial. Auto Mode — where Claude makes decisions without asking permission on each step — is now available for Max plan subscribers, not just Teams and Enterprise."
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "The migration playbook: switch your default model to Opus 4.7, set effort to high or xhigh, add /ultrareview to your commit workflow, and watch your token usage for the first week to catch the tokenizer bump. That is it."
                },
                {
                    "type": "h2",
                    "text": "When not to upgrade yet"
                },
                {
                    "type": "p",
                    "text": "If you have a heavily tuned prompt pipeline running on 4.6 in production and margins are tight, test 4.7 in staging first. The tokenizer change alone can push a barely-profitable workflow into unprofitable territory. Run a week of parallel traffic, measure actual token consumption, then decide. For everyone else — especially solo builders and agencies shipping client work — upgrade today."
                }
            ]
        }
    ]
};
