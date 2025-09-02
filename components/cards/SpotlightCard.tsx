"use client";

import { useRef } from "react";

type Props = React.PropsWithChildren<{
    className?: string;
}>;

export default function SpotlightCard({ className, children }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className={[
                "group relative rounded-3xl cursor-pointer border border-white/10",
                "bg-neutral-900/70 backdrop-blur-sm",
                "transition-shadow duration-300 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]",
                "outline-none focus-visible:ring-2 focus-visible:ring-white/20",
                className || "",
            ].join(" ")}
        >

            <div
                className={[
                    "pointer-events-none absolute -inset-px rounded-3xl opacity-0",
                    "transition-opacity duration-200 group-hover:opacity-100",
                ].join(" ")}
                style={{
                    background:
                        `radial-gradient(680px circle at var(--x) var(--y),
               rgba(255,255,255,0.18),
               rgba(255,255,255,0.08) 35%,
               transparent 60%)`,
                    mask:
                        "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                    WebkitMask:
                        "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                    padding: "1px",
                }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
