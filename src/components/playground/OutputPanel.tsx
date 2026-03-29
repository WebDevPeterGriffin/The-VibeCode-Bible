import StreamingOutput from './StreamingOutput';

interface Props {
    rawContent: string;
    skillContent: string;
    isStreaming: boolean;
    hasStarted: boolean;
    errorRaw?: string;
    errorSkill?: string;
}

export default function OutputPanel({ rawContent, skillContent, isStreaming, hasStarted, errorRaw, errorSkill }: Props) {
    return (
        <div className="flex-1 flex flex-col md:flex-row gap-4 p-4 md:p-6 bg-black/40 h-full overflow-hidden">
            <div className="flex-1 h-full min-h-[400px]">
                <StreamingOutput
                    title="Vanilla AI Response"
                    description="Standard System Prompt"
                    content={rawContent}
                    isStreaming={isStreaming && !errorRaw}
                    hasStarted={hasStarted}
                    error={errorRaw}
                    icon="terminal"
                />
            </div>

            <div className="flex-1 h-full min-h-[400px]">
                <StreamingOutput
                    title="Agent System Payload"
                    description="Vibe Denoising Applied"
                    content={skillContent}
                    isStreaming={isStreaming && !errorSkill}
                    hasStarted={hasStarted}
                    error={errorSkill}
                    icon="code"
                />
            </div>
        </div>
    );
}
