"use client";

import { skillIconUrl, type SkillId } from "@/lib/skillIcons";

export default function SkillBadge({
                                       id,
                                       label,
                                   }: { id: SkillId; label: string }) {
    return (
        <div
            className="relative h-16 w-16 select-none transition-transform duration-200 hover:-translate-y-0.5"
            title={label}
        >
            <div className="absolute inset-0 translate-y-1 rounded-2xl bg-black/30 blur-[6px]" />

                <div className="h-16 w-16 rounded-2xl flex items-center justify-center bg-neutral-900/80 border border-white/10">
                    <img
                        src={`https://skillicons.dev/icons?i=${id}&theme=dark`}
                        alt={label}
                        className="h-10 w-10"
                    />
                </div>
            </div>
    );
}
