"use client";

import OllamaChat from "@/components/OllamaChat";
import { useEffect } from "react";

export default function PlaygroundPage() {
    // Hide the parent scrollbar and search bar when playground is active
    useEffect(() => {
        const main = document.querySelector("main");
        if (main) {
            main.style.overflow = "hidden";
        }
        return () => {
            if (main) {
                main.style.overflow = "";
            }
        };
    }, []);

    return (
        <div className="absolute inset-0 z-20 flex bg-[var(--color-background)]">
            <OllamaChat />
        </div>
    );
}
