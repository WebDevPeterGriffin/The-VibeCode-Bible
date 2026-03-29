"use client";

import { Beaker } from 'lucide-react';

export default function PlaygroundPage() {
    return (
        <div className="w-full h-full min-h-[80vh] flex flex-col items-center justify-center py-12 px-6 animate-in fade-in zoom-in-95 duration-700">
            <div className="bg-purple-500/10 border border-purple-500/20 p-6 rounded-full mb-6 shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <Beaker className="w-12 h-12 text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-4 text-center">Interactive AI Playground</h1>
            <p className="text-foreground/60 leading-relaxed max-w-lg text-center mb-8">
                The ultimate test environment is currently under construction. Soon, you'll be able to write workflows, invoke specific skills directly in the browser, and watch the exact logical execution steps of your agents in real time.
            </p>
            <div className="px-6 py-3 rounded-full border border-border bg-muted/50 text-sm font-mono text-foreground/70 shadow-inner">
                Status: In Development 🚀
            </div>
        </div>
    );
}
