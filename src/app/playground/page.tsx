"use client";

import { useState } from 'react';
import SkillBrowser, { SkillEntry } from '@/components/playground/SkillBrowser';
import TaskInput from '@/components/playground/TaskInput';
import OutputPanel from '@/components/playground/OutputPanel';

export default function PlaygroundPage() {
    const [selectedSkill, setSelectedSkill] = useState<SkillEntry | null>(null);
    const [task, setTask] = useState('');
    const [apiKey, setApiKey] = useState('');

    const [rawContent, setRawContent] = useState('');
    const [skillContent, setSkillContent] = useState('');
    const [errorRaw, setErrorRaw] = useState('');
    const [errorSkill, setErrorSkill] = useState('');

    const [isStreaming, setIsStreaming] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    const handleRun = async () => {
        if (!selectedSkill || !task || !apiKey) return;

        setIsStreaming(true);
        setHasStarted(true);
        setRawContent('');
        setSkillContent('');
        setErrorRaw('');
        setErrorSkill('');

        try {
            const res = await fetch('/api/playground/run', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    task,
                    skillContent: selectedSkill.content,
                    apiKey
                })
            });

            if (!res.ok) {
                const errorData = await res.json();
                setErrorRaw(errorData.error || 'Server error');
                setErrorSkill(errorData.error || 'Server error');
                setIsStreaming(false);
                return;
            }

            const reader = res.body?.getReader();
            const decoder = new TextDecoder();

            if (!reader) {
                throw new Error('No streaming response');
            }

            let buffer = '';
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n\n');

                buffer = lines.pop() || '';

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const dataStr = line.replace('data: ', '').trim();
                        if (dataStr === '[DONE]') {
                            setIsStreaming(false);
                            break;
                        }

                        try {
                            const payload = JSON.parse(dataStr);
                            if (payload.type === 'error') {
                                if (payload.stream === 'raw') setErrorRaw(payload.message);
                                if (payload.stream === 'skill') setErrorSkill(payload.message);
                            } else if (payload.type === 'raw') {
                                setRawContent(prev => prev + payload.text);
                            } else if (payload.type === 'skill') {
                                setSkillContent(prev => prev + payload.text);
                            }
                        } catch (e) {
                            console.error('Error parsing SSE:', e, dataStr);
                        }
                    }
                }
            }
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            setErrorRaw(message);
            setErrorSkill(message);
        } finally {
            setIsStreaming(false);
        }
    };

    return (
        <div className="flex flex-col h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] w-full bg-background overflow-hidden animate-in fade-in duration-500">
            {/* Header */}
            <header className="shrink-0 h-16 border-b border-white/10 flex items-center px-6 justify-between bg-black/20">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 text-primary font-bold shadow-inner">
                        V
                    </div>
                    <h1 className="font-semibold tracking-tight text-foreground/90">VibeCode Playground</h1>
                </div>
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-foreground/60 font-medium tracking-wide shadow-sm">
                    Claude 3.5 Sonnet / Multi-stream Enabled
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
                {/* Left Panel: Skill Browser */}
                <SkillBrowser
                    selectedSkill={selectedSkill}
                    onSelect={setSelectedSkill}
                />

                {/* Center & Right Panels */}
                <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
                    {/* Center: Input */}
                    <div className="w-full lg:w-[400px] xl:w-[480px] shrink-0 border-b lg:border-b-0 lg:border-r border-white/10 overflow-y-auto shadow-[4px_0_24px_-12px_rgba(0,0,0,0.5)] z-10">
                        <TaskInput
                            selectedSkill={selectedSkill}
                            task={task}
                            setTask={setTask}
                            apiKey={apiKey}
                            setApiKey={setApiKey}
                            onRun={handleRun}
                            isStreaming={isStreaming}
                        />
                    </div>

                    {/* Right: Output */}
                    <div className="flex-1 overflow-y-auto lg:overflow-hidden bg-black/20">
                        <OutputPanel
                            rawContent={rawContent}
                            skillContent={skillContent}
                            isStreaming={isStreaming}
                            hasStarted={hasStarted}
                            errorRaw={errorRaw}
                            errorSkill={errorSkill}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
