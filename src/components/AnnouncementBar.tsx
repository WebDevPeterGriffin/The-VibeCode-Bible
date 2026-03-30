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
            className={`w-full bg-zinc-900 border-b flex-shrink-0 transition-all duration-300 ease-in-out relative z-50 flex items-center justify-center overflow-hidden ${isVisible ? "h-[40px] opacity-100 border-white/10" : "h-0 opacity-0 border-transparent"
                }`}
        >
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-center relative h-full">
                <div className="flex-1 flex justify-center text-sm text-white/70">
                    <span className="hidden sm:inline">
                        If this helped you ship faster, consider{" "}
                        <a
                            href="https://webdevpeter.net/pages/the-vibecode-bible"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-medium hover:text-white/80 hover:underline hover:underline-offset-2 transition-colors relative z-10"
                        >
                            buying me a coffee ☕
                        </a>
                    </span>
                    <span className="sm:hidden">
                        Enjoying this?{" "}
                        <a
                            href="https://webdevpeter.net/pages/the-vibecode-bible"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-medium hover:text-white/80 hover:underline hover:underline-offset-2 transition-colors relative z-10"
                        >
                            Buy me a coffee ☕
                        </a>
                    </span>
                </div>
                <button
                    onClick={handleDismiss}
                    className="absolute right-4 sm:right-6 md:right-10 text-white/40 hover:text-white/70 transition-colors flex-shrink-0 focus:outline-none z-10 h-full flex items-center"
                    aria-label="Dismiss announcement"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
}
