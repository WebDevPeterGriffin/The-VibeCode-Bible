"use client";

import { useState, useEffect } from 'react';
import { Section } from '@/data/content';
import { Play, Square, Pause } from 'lucide-react';

export default function ReadAloud({ section }: { section: Section }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [supported, setSupported] = useState(true);

    useEffect(() => {
        if (typeof window === 'undefined' || !window.speechSynthesis) {
            setSupported(false);
        }

        return () => {
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    const extractText = () => {
        let text = `${section.title.replace(/^\d+\.\s*/, '')}. `;
        for (const block of section.blocks) {
            if (block.type === 'code') continue;
            if (block.text) {
                // remove markdown links
                const clean = block.text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
                text += clean + '. ';
            }
            if (block.items) {
                const cleanItems = block.items.map(item => item.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1'));
                text += cleanItems.join('. ') + '. ';
            }
        }
        return text;
    };

    const handlePlay = () => {
        if (!supported) return;

        if (isPaused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
            setIsPlaying(true);
            return;
        }

        window.speechSynthesis.cancel(); // clear queue
        const text = extractText();
        const utterance = new SpeechSynthesisUtterance(text);

        utterance.onend = () => {
            setIsPlaying(false);
            setIsPaused(false);
        };

        utterance.onerror = () => {
            setIsPlaying(false);
            setIsPaused(false);
        };

        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
        setIsPaused(false);
    };

    const handlePause = () => {
        if (!supported) return;
        window.speechSynthesis.pause();
        setIsPaused(true);
        setIsPlaying(false);
    };

    const handleStop = () => {
        if (!supported) return;
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setIsPaused(false);
    };

    if (!supported) return null;

    return (
        <div className="flex items-center gap-2">
            {!isPlaying ? (
                <button
                    onClick={handlePlay}
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors bg-secondary/50 hover:bg-secondary px-3 py-1.5 rounded-md border border-border/50"
                    title={isPaused ? "Resume reading" : "Read aloud"}
                >
                    <Play className="w-4 h-4" />
                    <span>{isPaused ? 'Resume' : 'Read'}</span>
                </button>
            ) : (
                <button
                    onClick={handlePause}
                    className="flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors bg-secondary/50 hover:bg-secondary px-3 py-1.5 rounded-md border border-border/50"
                    title="Pause reading"
                >
                    <Pause className="w-4 h-4" />
                    <span>Pause</span>
                </button>
            )}

            {(isPlaying || isPaused) && (
                <button
                    onClick={handleStop}
                    className="p-1.5 text-foreground/50 hover:text-destructive transition-colors bg-secondary/50 hover:bg-secondary rounded-md border border-border/50"
                    title="Stop reading"
                >
                    <Square className="w-4 h-4" />
                </button>
            )}
        </div>
    );
}
