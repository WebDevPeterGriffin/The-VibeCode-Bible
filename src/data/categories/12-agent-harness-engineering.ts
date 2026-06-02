import { Category } from '../types';

export const category: Category = {
    id: 'cat-12',
    slug: 'agent-harness-engineering',
    title: 'Agent Harness Engineering',
    sections: [
        {
            "id": "40",
            "slug": "anatomy-of-a-harness",
            "title": "40. The Anatomy of a Harness",
            "blocks": [
                {
                    "type": "p",
                    "text": "Most developers think an AI agent is just a model with a big system prompt. It is not. A harness is the infrastructure that wraps the model — the code that decides what the model reads, what it is allowed to do, and what happens after it responds. Understanding the three layers of a harness is the difference between building agents that fail silently and agents that you can actually debug and trust."
                },
                {
                    "type": "h2",
                    "text": "Layer 1 — Context"
                },
                {
                    "type": "p",
                    "text": "Context is everything the model sees when it processes a request. That includes your system prompt, the conversation history, any documents you injected, and the results of previous tool calls. A naive harness dumps everything in and hopes the model figures it out. A well-engineered harness is deliberate: it trims stale history, injects only the files relevant to the current task, and structures the context so the most important instructions appear at positions the model actually attends to."
                },
                {
                    "type": "ul",
                    "items": [
                        "System prompt — defines the agent's role, constraints, output format, and rules. This is your governor layer.",
                        "Message history — the record of what has been said and done. Grows every turn. Must be actively managed or it will fill the context window and degrade output quality.",
                        "Injected documents — files, search results, database rows, or any external data you pull in before the model runs.",
                        "Tool results — the output of previous tool calls, formatted and returned as part of the message thread."
                    ]
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Context debt is real. Every turn the model carries more history. By turn 20 of a complex task, a harness with no memory management is feeding the model a wall of irrelevant prior steps. Output quality drops. Costs spike. The agent starts contradicting itself."
                },
                {
                    "type": "h2",
                    "text": "Layer 2 — Tools"
                },
                {
                    "type": "p",
                    "text": "Tools are the actions the model can take beyond generating text. Each tool is a function you define — read a file, search the web, write to a database, call an API, run a shell command. You describe the tool in JSON schema format and the model decides when and how to call it. The harness intercepts that call, executes the real function, and returns the result."
                },
                {
                    "type": "p",
                    "text": "Tool design is one of the highest-leverage skills in harness engineering. A poorly designed tool forces the model to make too many decisions or pass arguments it cannot reliably infer. A well-designed tool has a single clear purpose, minimal required parameters, and returns structured output that is easy for the model to reason about in the next turn."
                },
                {
                    "type": "code",
                    "language": "json",
                    "code": "{\n  \"name\": \"read_file\",\n  \"description\": \"Read the contents of a file at the given path. Use this when you need to inspect existing code before making changes.\",\n  \"input_schema\": {\n    \"type\": \"object\",\n    \"properties\": {\n      \"path\": {\n        \"type\": \"string\",\n        \"description\": \"Absolute path to the file\"\n      }\n    },\n    \"required\": [\"path\"]\n  }\n}"
                },
                {
                    "type": "h2",
                    "text": "Layer 3 — Loop Logic"
                },
                {
                    "type": "p",
                    "text": "The loop is what makes an agent an agent instead of a single API call. After the model responds, the harness checks: did the model use a tool? If yes, execute the tool, append the result to the message history, and call the model again. Did the model declare it is done? Stop. Did the model exceed the turn limit or produce an error? Handle it. This cycle — model responds, harness acts, model continues — is the agentic loop."
                },
                {
                    "type": "ul",
                    "items": [
                        "Continue — model called a tool, harness runs it and loops back",
                        "Stop — model signalled completion or produced a final answer with no tool calls",
                        "Retry — model output was malformed, tool call failed, or a recoverable error occurred",
                        "Abort — turn limit exceeded, cost threshold hit, or a non-recoverable error — harness exits and returns partial results"
                    ]
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "A harness without an abort condition will run forever on a stuck model. Always set a max turns limit. 20 is a reasonable default for most tasks. Complex research agents may need 50. Never leave it unbounded in production."
                }
            ]
        },
        {
            "id": "41",
            "slug": "building-your-first-harness",
            "title": "41. Building Your First Harness",
            "blocks": [
                {
                    "type": "p",
                    "text": "The fastest way to understand harness engineering is to build one from scratch — not with a framework, not with LangChain or CrewAI, but with raw API calls and a loop you write yourself. Once you have done it once you will understand exactly what every framework is abstracting. Then you can use those frameworks without being confused by what they are doing under the hood."
                },
                {
                    "type": "h2",
                    "text": "The minimal harness pattern"
                },
                {
                    "type": "p",
                    "text": "A working harness in its simplest form is under 60 lines of code. It needs four things: a system prompt, a tools array, a messages array that grows each turn, and a while loop that checks whether to continue. Everything else is optimization."
                },
                {
                    "type": "code",
                    "language": "python",
                    "code": "import anthropic, json\n\nclient = anthropic.Anthropic()\n\n# Layer 1: context\nsystem = \"You are a coding agent. Complete the task using the tools available. When done, respond with your final answer and no tool calls.\"\ntools = [\n    {\n        \"name\": \"read_file\",\n        \"description\": \"Read a file from disk\",\n        \"input_schema\": {\n            \"type\": \"object\",\n            \"properties\": {\"path\": {\"type\": \"string\"}},\n            \"required\": [\"path\"]\n        }\n    }\n]\nmessages = [{\"role\": \"user\", \"content\": \"Read main.py and summarise what it does.\"}]\n\n# Layer 3: loop logic\nmax_turns = 20\nturn = 0\n\nwhile turn < max_turns:\n    turn += 1\n    response = client.messages.create(\n        model=\"claude-opus-4-8\",\n        max_tokens=4096,\n        system=system,\n        tools=tools,     # Layer 2: tools\n        messages=messages\n    )\n\n    # append the assistant turn\n    messages.append({\"role\": \"assistant\", \"content\": response.content})\n\n    # check stop condition\n    if response.stop_reason == \"end_turn\":\n        print(response.content[-1].text)\n        break\n\n    # execute tool calls\n    tool_results = []\n    for block in response.content:\n        if block.type == \"tool_use\":\n            if block.name == \"read_file\":\n                with open(block.input[\"path\"]) as f:\n                    result = f.read()\n            tool_results.append({\n                \"type\": \"tool_result\",\n                \"tool_use_id\": block.id,\n                \"content\": result\n            })\n\n    messages.append({\"role\": \"user\", \"content\": tool_results})"
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "This pattern handles 80% of real agent tasks. Research agents, code review agents, file processing agents — they all reduce to this loop. The only thing that changes is the tools array and the system prompt."
                },
                {
                    "type": "h2",
                    "text": "System prompt engineering for harnesses"
                },
                {
                    "type": "p",
                    "text": "The system prompt in a harness is not a casual description of what you want. It is the governing document for the agent's entire session. It needs to do four things: define the agent's role precisely, enumerate what it is allowed and not allowed to do, specify the output format for the final answer, and tell the model explicitly when to stop."
                },
                {
                    "type": "ul",
                    "items": [
                        "Role — 'You are a code review agent operating on a Python codebase.' Not 'You are a helpful assistant.'",
                        "Constraints — 'Do not modify files outside the /src directory. Do not call external APIs. Do not create new files unless explicitly asked.'",
                        "Output format — 'Your final response must be a JSON object with keys: summary, issues_found, files_changed.'",
                        "Stop signal — 'When you have completed the task, respond with your final answer and make no further tool calls.'"
                    ]
                },
                {
                    "type": "h2",
                    "text": "Retry logic and error handling"
                },
                {
                    "type": "p",
                    "text": "Production harnesses need retry logic at two levels. The first is API-level retries — network timeouts, rate limits, and server errors that have nothing to do with your logic. Use exponential backoff and a max retry count. The second is semantic retries — cases where the model output is structurally valid but wrong. For example, the model returns malformed JSON when you expected structured output. In this case you feed the error back into the message thread and let the model correct itself."
                },
                {
                    "type": "code",
                    "language": "python",
                    "code": "# Semantic retry: feed the parse error back to the model\ntry:\n    result = json.loads(response_text)\nexcept json.JSONDecodeError as e:\n    messages.append({\n        \"role\": \"user\",\n        \"content\": f\"Your last response was not valid JSON. Error: {e}. Please respond again with only a valid JSON object.\"\n    })\n    # loop continues, model self-corrects"
                },
                {
                    "type": "callout",
                    "variant": "skull",
                    "text": "Never retry blindly. Log every retry with the reason. If the same error triggers more than three consecutive retries, abort. An infinite retry loop on a broken prompt will drain your API credits and never recover on its own."
                }
            ]
        },
        {
            "id": "42",
            "slug": "harness-engineering-in-production",
            "title": "42. Harness Engineering in Production",
            "blocks": [
                {
                    "type": "p",
                    "text": "A harness that works in a notebook is not the same thing as a harness that works in production. Production means concurrent users, variable input quality, unexpected model behaviour, rising costs, and zero tolerance for silent failures. The gap between a demo harness and a production harness is mostly invisible until something goes wrong. These are the patterns that close that gap."
                },
                {
                    "type": "h2",
                    "text": "Observability: know what your agent is doing"
                },
                {
                    "type": "p",
                    "text": "The most dangerous property of an agentic system is opacity. A model calling tools in a loop can take dozens of actions before you see any output. Without logging you have no idea what happened, why it happened, or how to reproduce it. At minimum, every production harness should emit a structured log entry for every turn: the turn number, which tools were called, the input to each tool, and the output."
                },
                {
                    "type": "code",
                    "language": "python",
                    "code": "import structlog\nlog = structlog.get_logger()\n\n# Inside your harness loop\nfor block in response.content:\n    if block.type == \"tool_use\":\n        log.info(\n            \"tool_call\",\n            turn=turn,\n            tool=block.name,\n            input=block.input,\n            session_id=session_id\n        )\n    elif block.type == \"tool_result\":\n        log.info(\n            \"tool_result\",\n            turn=turn,\n            tool_use_id=block.tool_use_id,\n            content_length=len(str(block.content)),\n            session_id=session_id\n        )"
                },
                {
                    "type": "callout",
                    "variant": "idea",
                    "text": "Structured logs (JSON lines, not print statements) let you query across thousands of sessions. You can answer 'how often does my agent use the search tool on turn 3 or later?' and trace exactly which inputs trigger unexpected behaviour."
                },
                {
                    "type": "h2",
                    "text": "Cost control: tokens are money"
                },
                {
                    "type": "p",
                    "text": "Agentic systems are expensive in ways that single API calls are not. Every turn sends the full message history to the model. By turn 15, you are paying for 14 previous turns of context on every single request. A task that costs $0.02 at turn 1 may cost $0.40 by turn 20 — not because the model is doing more work, but because the context grew. Three patterns keep this manageable."
                },
                {
                    "type": "ul",
                    "items": [
                        "Context summarisation — after every N turns, call the model once to summarise the conversation so far, then replace the full history with the summary. You lose exact detail but preserve intent.",
                        "Tool result truncation — tool outputs can be massive. Truncate file reads to the first 2000 tokens unless the task explicitly requires the full content. Return counts and summaries instead of raw data where possible.",
                        "Prompt caching — use Anthropic's prompt caching on your system prompt and any large static documents injected at the start. Cache hits cost 10x less than full reads. On a multi-turn session with a large system prompt this can cut costs by 60% or more."
                    ]
                },
                {
                    "type": "h2",
                    "text": "Why this is becoming a required skill"
                },
                {
                    "type": "p",
                    "text": "In 2024, AI engineering job listings asked for prompt writing and LangChain experience. In 2025, the listings that pay the most are asking for harness engineering, agent reliability, and production observability. The pattern is consistent: every time AI tooling matures, the skill that was exotic becomes mandatory. Harness engineering is at that inflection point right now."
                },
                {
                    "type": "p",
                    "text": "The developers who understand the loop — not just how to prompt a model but how to build the infrastructure that governs it across many turns — are the ones getting hired to build the systems that matter. Most developers still think of AI integration as calling an API and displaying the result. That is the 2023 version of the skill. The 2026 version is building harnesses that are observable, cost-controlled, and reliable under real production load."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "You do not need a framework to get started. You need to understand the three layers — context, tools, loop logic — and build one yourself. Once you have, every framework becomes transparent. You will know exactly what it is doing and exactly when to skip it."
                },
                {
                    "type": "h2",
                    "text": "The production readiness checklist"
                },
                {
                    "type": "ul",
                    "items": [
                        "Max turns limit set and enforced — no unbounded loops",
                        "Structured logging on every tool call and result",
                        "Cost tracking per session with alerting on outliers",
                        "Prompt caching enabled on system prompt and static documents",
                        "Retry logic with a cap and abort on repeated failures",
                        "Tool outputs truncated to a safe maximum before being appended to history",
                        "Semantic error recovery — malformed outputs fed back to the model for self-correction",
                        "Session IDs on every log entry so you can reconstruct any run"
                    ]
                }
            ]
        }
    ]
};
