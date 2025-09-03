"use client";

import Image from "next/image";
import { useState } from "react";
import Badge from "./Badge";

type Props = {
    logo: string;                    // /public/about/parto.png
    role: string;                    // Backend Golang Developer
    company: string;                 // Pt. Affan Technology Indonesia (Parto.id)
    location: string;                // Jambi, Indonesia
    period: string;                  // Jul 2025 – Sep 2025
    duration: string;                // 2 Months
    type: string;                    // Internship
    onsite: "Onsite" | "Remote" | "Hybrid";
    responsibilities?: string[];     // rozkliknuté odrážky
};

export default function CareerItem(props: Props) {
    const [open, setOpen] = useState(false);

    return (
        <article className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-4 md:p-5">
            <div className="flex items-start gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl ring-1 ring-white/10 bg-neutral-800">
                    <Image src={props.logo} alt="" fill className="object-contain p-1.5" unoptimized />
                </div>

                <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold">{props.role}</h3>
                    <p className="text-sm text-neutral-400">
                        {props.company} • {props.location}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-2 text-xs text-neutral-400">
                        <span>{props.period}</span>
                        <span>•</span>
                        <span>{props.duration}</span>
                        <span>•</span>
                        <Badge>{props.type}</Badge>
                        <Badge>{props.onsite}</Badge>
                    </div>

                    {props.responsibilities && props.responsibilities.length > 0 && (
                        <button
                            onClick={() => setOpen((v) => !v)}
                            className="mt-3 inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" className={open ? "rotate-90 transition" : "transition"}>
                                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                            </svg>
                            {open ? "Hide responsibilities" : "Show responsibilities"}
                        </button>
                    )}

                    {open && (
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-300">
                            {props.responsibilities!.map((li, i) => (
                                <li key={i}>{li}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </article>
    );
}
