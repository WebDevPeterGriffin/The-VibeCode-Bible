import { Category } from '../types';

export const category: Category = {
    id: 'cat-9',
    slug: 'ai-ad-pipelines',
    title: 'AI Ad Pipelines',
    sections: [
        {
            "id": "27",
            "slug": "the-ad-production-problem",
            "title": "27. The Ad Production Problem",
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
            "title": "28. The Claude + Higgsfield Pipeline",
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
            "title": "29. Scaling Unlimited Ads",
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
                        "2-second hook framework — every prompt has the hook structure built in. The first two seconds of the video are designed to stop the scroll. This is not an afterthought, it is baked into the generation instruction.",
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
                    "type": "h2",
                    "text": "Where to go from here"
                },
                {
                    "type": "p",
                    "text": "This pipeline is one instance of a bigger pattern: using Claude plus a browser automation tool to replace any repetitive web workflow. The same approach works for scraping competitor ads, posting content across platforms, monitoring analytics dashboards, and any other workflow that lives inside a browser."
                },
                {
                    "type": "callout",
                    "variant": "zap",
                    "text": "Once you have Playwright MCP set up, look at every browser task you do repeatedly and ask: could Claude run this? The answer is almost always yes."
                }
            ]
        }
    ]
};
