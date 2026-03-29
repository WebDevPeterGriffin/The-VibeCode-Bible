import { Eye, EyeOff, Play, ShieldAlert } from 'lucide-react';
import { useState } from 'react';
import { SkillEntry } from './SkillBrowser';

interface Props {
    selectedSkill: SkillEntry | null;
    task: string;
    setTask: (v: string) => void;
    apiKey: string;
    setApiKey: (v: string) => void;
    onRun: () => void;
    isStreaming: boolean;
}

export default function TaskInput({ selectedSkill, task, setTask, apiKey, setApiKey, onRun, isStreaming }: Props) {
    const [showKey, setShowKey] = useState(false);

    const isReady = selectedSkill && task.trim().length > 0 && apiKey.trim().startsWith('sk-');

    return (
        <div className="flex flex-col h-full bg-background/50 p-6 md:p-8">
            <div className="mb-8">
                <h2 className="text-lg font-medium mb-1 flex items-center gap-2">
                    Active Agent:
                    <span className="font-mono text-sm px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        {selectedSkill ? selectedSkill.name : 'None Selected'}
                    </span>
                </h2>
                <p className="text-sm text-foreground/50 line-clamp-2">
                    {selectedSkill ? selectedSkill.description : 'Select an agent or workflow from the sidebar to inject its system knowledge.'}
                </p>
            </div>

            <div className="flex flex-col flex-1 gap-6">
                <div className="flex flex-col flex-1 gap-2">
                    <label className="text-sm font-medium text-foreground/80">Task Description</label>
                    <textarea
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        placeholder="e.g. Build an aesthetic landing page component with a gradient hero text and animated glassmorphism cards."
                        className="w-full flex-1 bg-black/40 border border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-foreground/30"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-foreground/80 flex items-center justify-between">
                        Anthropic API Key
                        <div className="flex items-center gap-1.5 text-xs text-green-500/80 font-normal">
                            <ShieldAlert className="w-3.5 h-3.5" /> Client-side only
                        </div>
                    </label>
                    <div className="relative">
                        <input
                            type={showKey ? "text" : "password"}
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="sk-ant-api03-..."
                            className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-primary/50 transition-colors font-mono"
                        />
                        <button
                            type="button"
                            onClick={() => setShowKey(!showKey)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground/80 transition-colors p-1"
                        >
                            {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                    </div>
                </div>

                <div className="pt-2">
                    <button
                        onClick={onRun}
                        disabled={!isReady || isStreaming}
                        className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 shadow-lg shadow-primary/20"
                    >
                        {isStreaming ? (
                            <>Processing <span className="animate-pulse">...</span></>
                        ) : (
                            <><Play className="w-4 h-4 fill-current" /> Run Simulation</>
                        )}
                    </button>
                    <p className="text-center text-xs text-foreground/40 mt-3 flex items-center justify-center gap-1.5">
                        Your key is never stored by our servers. Key validates on Anthropic only.
                    </p>
                </div>
            </div>
        </div>
    );
}
