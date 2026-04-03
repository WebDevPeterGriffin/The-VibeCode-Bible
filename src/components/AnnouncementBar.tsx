export default function AnnouncementBar() {
    return (
        <div className="w-full h-[36px] bg-white/[0.02] backdrop-blur-xl border-b border-white/[0.04] flex-shrink-0 relative z-50 flex items-center justify-center overflow-hidden">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-center relative h-full">
                <div className="flex-1 flex justify-center text-xs text-foreground/40">
                    <span className="hidden sm:inline">
                        If this helped you ship faster, consider{" "}
                        <a
                            href="https://webdevpeter.net/pages/the-vibecode-bible"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/60 font-medium hover:text-primary hover:underline underline-offset-2 transition-colors duration-200 relative z-10"
                        >
                            buying me a coffee
                        </a>
                    </span>
                    <span className="sm:hidden">
                        Enjoying this?{" "}
                        <a
                            href="https://webdevpeter.net/pages/the-vibecode-bible"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground/60 font-medium hover:text-primary hover:underline underline-offset-2 transition-colors duration-200 relative z-10"
                        >
                            Buy me a coffee
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}
