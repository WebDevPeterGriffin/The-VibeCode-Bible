"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const isDismissed = localStorage.getItem("announcement-bar-dismissed");
        if (!isDismissed) {
            setIsVisible(true);
        }
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        localStorage.setItem("announcement-bar-dismissed", "true");
    };

    if (!mounted) {
        return null;
    }

    return (
        <div
            className={`w-full bg-white/[0.02] backdrop-blur-xl border-b flex-shrink-0 transition-all duration-300 ease-in-out relative z-50 flex items-center justify-center overflow-hidden ${isVisible ? "h-[36px] opacity-100 border-white/[0.04]" : "h-0 opacity-0 border-transparent"
                }`}
        >
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
                <button
                    onClick={handleDismiss}
                    className="absolute right-4 sm:right-6 md:right-10 text-foreground/20 hover:text-foreground/50 transition-colors duration-200 flex-shrink-0 focus:outline-none z-10 h-full flex items-center cursor-pointer"
                    aria-label="Dismiss announcement"
                >
                    <X size={14} />
                </button>
            </div>
        </div>
    );
}
