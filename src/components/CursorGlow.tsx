"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (glowRef.current) {
                glowRef.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={glowRef}
            className="pointer-events-none fixed w-[600px] h-[600px] rounded-full opacity-[0.06] z-[1] hidden md:block"
            style={{
                background: "radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, transparent 70%)",
                willChange: "transform",
            }}
            aria-hidden="true"
        />
    );
}
