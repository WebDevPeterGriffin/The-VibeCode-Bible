import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export const runtime = 'edge';

export async function POST(req: Request) {
    try {
        const { task, skillContent, apiKey } = await req.json();

        if (!task || !apiKey) {
            return NextResponse.json({ error: 'Task and API Key are required.' }, { status: 400 });
        }

        const anthropic = new Anthropic({ apiKey });

        const encoder = new TextEncoder();

        const stream = new ReadableStream({
            async start(controller) {
                // We run both requests concurrently
                const rawPromise = anthropic.messages.create({
                    model: 'claude-3-5-sonnet-latest',
                    max_tokens: 1500,
                    system: "You are a helpful programming assistant. Provide a direct, concise answer.",
                    messages: [{ role: 'user', content: task }],
                    stream: true,
                });

                const skillPromise = anthropic.messages.create({
                    model: 'claude-3-5-sonnet-latest',
                    max_tokens: 1500,
                    system: skillContent || "You are a helpful assistant.",
                    messages: [{ role: 'user', content: task }],
                    stream: true,
                });

                // Function to handle a single stream
                async function processStream(
                    streamSource: Promise<AsyncIterable<unknown>>,
                    type: 'raw' | 'skill'
                ) {
                    try {
                        const iterable = await streamSource;
                        for await (const chunk of iterable) {
                            const event = chunk as { type: string, delta?: { type: string, text?: string } };
                            if (event.type === 'content_block_delta' && event.delta?.type === 'text_delta') {
                                const payload = JSON.stringify({ type, text: event.delta.text });
                                controller.enqueue(encoder.encode(`data: ${payload}\n\n`));
                            }
                        }
                    } catch (err: unknown) {
                        const message = err instanceof Error ? err.message : 'Unknown error';
                        const errorPayload = JSON.stringify({ type: 'error', stream: type, message });
                        controller.enqueue(encoder.encode(`data: ${errorPayload}\n\n`));
                    }
                }

                // Wait for both to finish
                try {
                    await Promise.all([
                        processStream(rawPromise, 'raw'),
                        processStream(skillPromise, 'skill')
                    ]);
                } finally {
                    controller.enqueue(encoder.encode('data: [DONE]\n\n'));
                    controller.close();
                }
            }
        });

        return new Response(stream, {
            headers: {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
            },
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : 'Server Error';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
