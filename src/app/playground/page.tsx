export default function PlaygroundPage() {
    return (
        <div className="w-full h-full min-h-[80vh] flex flex-col items-center justify-center p-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="w-20 h-20 mb-8 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_40px_-10px_rgba(var(--primary),0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-4 text-center">Interactive AI Playground</h1>
            <p className="text-foreground/60 leading-relaxed max-w-lg text-center mb-8">
                The ultimate test environment is currently under construction. Soon, you&apos;ll be able to run AI skills side-by-side, compare outputs, and feel the difference instantly.
            </p>
            <div className="px-6 py-3 rounded-full border border-border bg-muted/50 text-sm font-mono text-foreground/70 shadow-inner">
                Status: Coming Soon 🚀
            </div>
        </div>
    );
}
