import { Zap, Lightbulb, Flame, Skull } from 'lucide-react';

export default function CallOut({ variant, text }: { variant: 'fire' | 'skull' | 'idea' | 'zap', text: string }) {
    const config = {
        fire: { icon: Flame, title: 'This changed everything for me', className: 'border-[#ef4444] text-[#ef4444] bg-[#ef4444]/5' },
        skull: { icon: Skull, title: 'Wasted weeks on this, don\'t', className: 'border-[#a8a29e] text-[#a8a29e] bg-[#a8a29e]/5' },
        idea: { icon: Lightbulb, title: 'My opinion', className: 'border-[#fbbf24] text-[#fbbf24] bg-[#fbbf24]/5' },
        zap: { icon: Zap, title: 'Pro tip', className: 'border-[#a855f7] text-[#a855f7] bg-[#a855f7]/5' },
    };

    const { icon: Icon, title, className } = config[variant];
    return (
        <div className={`my-6 flex flex-col gap-2 rounded-lg border p-4 ${className}`}>
            <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-sm opacity-90">
                <Icon size={18} />
                {title}
            </div>
            <div className="text-foreground leading-relaxed opacity-90">
                {text}
            </div>
        </div>
    );
}
