import { useState, useEffect } from 'react';
import { Search, Loader2, Workflow, Code } from 'lucide-react';

export interface SkillEntry {
    name: string;
    slug: string;
    description: string;
    content: string;
    type: 'skill' | 'workflow';
}

interface Props {
    selectedSkill: SkillEntry | null;
    onSelect: (skill: SkillEntry) => void;
}

export default function SkillBrowser({ selectedSkill, onSelect }: Props) {
    const [skills, setSkills] = useState<SkillEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('/api/playground/skills')
            .then(res => res.json())
            .then(data => {
                setSkills(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    const filtered = skills.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-full md:w-[280px] shrink-0 border-r border-white/10 flex flex-col h-full bg-white/[0.02]">
            <div className="p-4 border-b border-white/10">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
                    <input
                        type="text"
                        placeholder="Search 1,178 agents..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-black/40 border border-white/10 rounded-md py-2 pl-9 pr-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-2 scrollbar-thin">
                {loading ? (
                    <div className="flex items-center justify-center h-32 text-foreground/50">
                        <Loader2 className="w-5 h-5 animate-spin" />
                    </div>
                ) : (
                    <div className="space-y-1">
                        {filtered.map(skill => {
                            const isSelected = selectedSkill?.slug === skill.slug;
                            return (
                                <button
                                    key={skill.slug}
                                    onClick={() => onSelect(skill)}
                                    className={`w-full text-left p-3 rounded-md transition-all border ${isSelected ? 'border-primary/50 bg-primary/10' : 'border-transparent hover:bg-white/5'} flex flex-col gap-1.5`}
                                >
                                    <div className="flex items-center gap-2">
                                        {skill.type === 'workflow' ?
                                            <Workflow className="w-3.5 h-3.5 text-indigo-400 shrink-0" /> :
                                            <Code className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                                        }
                                        <span className={`font-mono text-xs truncate ${isSelected ? 'text-primary' : 'text-foreground/80'}`}>
                                            {skill.name}
                                        </span>
                                    </div>
                                    <p className="text-xs text-foreground/50 line-clamp-2 leading-relaxed">
                                        {skill.description}
                                    </p>
                                </button>
                            );
                        })}
                        {filtered.length === 0 && (
                            <div className="text-center py-8 text-sm text-foreground/40">
                                No skills found.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
