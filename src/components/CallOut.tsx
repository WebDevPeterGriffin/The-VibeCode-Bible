"use client";

import { Zap, Lightbulb, Flame, Skull } from 'lucide-react';
import { motion } from 'framer-motion';

interface CallOutProps {
    variant: 'fire' | 'skull' | 'idea' | 'zap';
    text: string;
    index?: number;
}

export default function CallOut({ variant, text, index = 0 }: CallOutProps) {
    const config = {
        fire: {
            icon: Flame,
            title: 'This changed everything for me',
            borderColor: 'border-l-amber-500/60',
            bgColor: 'bg-amber-500/[0.04]',
            titleColor: 'text-amber-400/90',
            iconColor: 'text-amber-400/80',
        },
        skull: {
            icon: Skull,
            title: "Wasted weeks on this, don't",
            borderColor: 'border-l-red-500/60',
            bgColor: 'bg-red-500/[0.04]',
            titleColor: 'text-red-400/90',
            iconColor: 'text-red-400/80',
        },
        idea: {
            icon: Lightbulb,
            title: 'My opinion',
            borderColor: 'border-l-blue-500/60',
            bgColor: 'bg-blue-500/[0.04]',
            titleColor: 'text-blue-400/90',
            iconColor: 'text-blue-400/80',
        },
        zap: {
            icon: Zap,
            title: 'Pro tip',
            borderColor: 'border-l-violet-500/60',
            bgColor: 'bg-violet-500/[0.04]',
            titleColor: 'text-violet-400/90',
            iconColor: 'text-violet-400/80',
        },
    };

    const { icon: Icon, title, borderColor, bgColor, titleColor, iconColor } = config[variant];

    return (
        <motion.div
            className={`my-8 flex flex-col gap-2.5 rounded-lg border-l-2 ${borderColor} border border-white/[0.04] ${bgColor} p-5`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.15), ease: "easeOut" }}
        >
            <div className={`flex items-center gap-2 font-semibold uppercase tracking-[0.12em] text-[11px] ${titleColor}`}>
                <Icon size={15} className={`${iconColor} ${variant === 'skull' ? 'animate-subtle-pulse' : ''}`} />
                {title}
            </div>
            <div className="text-foreground/60 leading-relaxed text-[15px]">
                {text}
            </div>
        </motion.div>
    );
}
