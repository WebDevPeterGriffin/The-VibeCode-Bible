import { Category } from '../types';

export const category: Category = {
    id: 'cat-10',
    slug: 'power-tools',
    title: 'Power Tools',
    sections: [
        {
            "id": "30",
            "slug": "antigravity-2-claude-code",
            "title": "30. Antigravity 2.0 + Claude Code",
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
                    "type": "ol",
                    "items": [
                        "Install the Antigravity CLI globally",
                        "Add the MCP bridge so Claude Code can talk to the Antigravity runtime",
                        "Install the Claude Code extension inside Antigravity",
                        "Initialize both systems in your project"
                    ]
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
                    "type": "p",
                    "text": "Once the bridge is live, Claude Code can see the Antigravity agent fleet. The pattern: give Claude Code the full task, it breaks it into sub-tasks and dispatches each one to the right specialist. You review output at each handoff. Nothing merges without your sign-off."
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
            "title": "31. Scrapling — Fast Python Web Scraping",
            "blocks": [
                {
                    "type": "p",
                    "text": "BeautifulSoup works on simple HTML pages. But modern websites have anti-bot protection, JavaScript rendering, and dynamic content that makes it fail immediately. Scrapling is a Python scraping library built for this reality. It handles stealth mode, async requests, auto-matching selectors, and proxy rotation out of the box. You write 20 lines and it handles what used to take a full Selenium or Playwright setup."
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
                    "text": "The Workflow — Scrape Any Website in Under 20 Lines"
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
            "title": "32. Browser Harness — AI Browser Automation",
            "blocks": [
                {
                    "type": "p",
                    "text": "Playwright is powerful but you have to write every action in code — navigate here, find this selector, click it, wait for the next state. Browser Harness flips that. You describe what you want the browser to do in plain English and it executes the actions. Connect it to Claude Code via MCP and you can automate any browser workflow just by describing it. Fill forms, extract data, navigate multi-step flows, handle authentication. No selectors by hand."
                },
                {
                    "type": "callout",
                    "variant": "fire",
                    "text": "This is the same pattern as the Higgsfield ad pipeline from the AI Ad Pipelines section — Claude controls a real browser and runs repetitive tasks without you touching the keyboard. Browser Harness makes that setup plug-and-play for any web application, not just one specific tool."
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
                    "text": "The Workflow — AI-Controlled Browser Automation"
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
        }
    ]
};
