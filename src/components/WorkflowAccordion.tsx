"use client";

import { useState } from "react";
import { WorkflowItem } from "@/data/types";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Zap, Target } from "lucide-react";

export default function WorkflowAccordion({ workflows, index }: { workflows: WorkflowItem[], index: number }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <motion.div
            className="my-12 space-y-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2), ease: "easeOut" }}
        >
            {workflows.map((workflow, idx) => {
                const isOpen = openIndex === idx;
                return (
                    <div
                        key={idx}
                        className="rounded-xl border border-white/[0.08] bg-black/40 overflow-hidden text-left"
                    >
                        <button
                            onClick={() => toggleOpen(idx)}
                            className="w-full p-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors focus:outline-none"
                            aria-expanded={isOpen}
                        >
                            <span className="font-semibold text-lg text-foreground/90 tracking-tight">
                                {workflow.title}
                            </span>
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <ChevronDown className="w-5 h-5 text-foreground/50" />
                            </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-2 border-t border-white/[0.04] bg-white/[0.01]">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            {/* What it does */}
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-primary/80 font-medium text-sm tracking-wide uppercase">
                                                    <Zap className="w-4 h-4" />
                                                    What it does
                                                </div>
                                                <p className="text-foreground/70 text-[15px] leading-relaxed">
                                                    {workflow.whatItDoes}
                                                </p>
                                            </div>
                                            {/* Why it's important */}
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-emerald-400/80 font-medium text-sm tracking-wide uppercase">
                                                    <Target className="w-4 h-4" />
                                                    Why it matters
                                                </div>
                                                <p className="text-foreground/70 text-[15px] leading-relaxed">
                                                    {workflow.whyImportant}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Details */}
                                        {workflow.details && workflow.details.length > 0 && (
                                            <div className="bg-black/50 rounded-lg p-4 border border-white/[0.04]">
                                                <ul className="space-y-2">
                                                    {workflow.details.map((detail, dIdx) => (
                                                        <li key={dIdx} className="flex gap-2.5 text-[14px] text-foreground/60 leading-relaxed">
                                                            <span className="text-primary/40 mt-1 mt-1 text-[10px]">■</span>
                                                            <span dangerouslySetInnerHTML={{ __html: detail }} />
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </motion.div>
    );
}
