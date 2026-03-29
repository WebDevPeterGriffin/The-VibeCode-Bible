"use client";

import { useEffect } from 'react';

export default function ProgressUpdater({ slug }: { slug: string }) {
    useEffect(() => {
        const saved = localStorage.getItem('vibe-progress');
        const progress = saved ? JSON.parse(saved) : [];
        if (!progress.includes(slug)) {
            localStorage.setItem('vibe-progress', JSON.stringify([...progress, slug]));
        }
    }, [slug]);

    return null;
}
