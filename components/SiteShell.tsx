"use client";

import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";

function MobileTopbar({ onOpen }: { onOpen: () => void }) {
    return (
        <header className="md:hidden sticky top-0 z-40 flex items-center gap-3 border-b border-neutral-800 bg-neutral-950/80 px-4 py-3 backdrop-blur">
            <div className="flex items-center gap-2">
                <div className="size-8 rounded-full bg-neutral-800" />
                <span className="font-medium">Lukáš Čeč</span>
            </div>
            <button
                onClick={onOpen}
                aria-label="Open menu"
                className="ml-auto grid size-10 place-items-center rounded-xl hover:bg-white/5"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" className="opacity-90">
                    <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
        </header>
    );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);


    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);


    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (

        <div className="grid h-screen grid-cols-1 md:grid-cols-[18rem_1fr]">

            <Sidebar variant="desktop" />


            <div className="flex min-h-0 flex-col">
                <MobileTopbar onOpen={() => setOpen(true)} />

                <main className="min-h-0 flex-1 overflow-y-auto">
                    <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>
                </main>
            </div>


            <div className={["md:hidden fixed inset-0 z-50", open ? "" : "pointer-events-none"].join(" ")}>

                <div
                    onClick={() => setOpen(false)}
                    className={["absolute inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300",
                        open ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                />

                <div
                    className={[
                        "absolute inset-y-0 left-0 w-[92%] max-w-sm",
                        "transition-transform duration-300",
                        open ? "translate-x-0" : "-translate-x-full",
                    ].join(" ")}
                    aria-modal={open}
                    role="dialog"
                >
                    <Sidebar variant="mobile" onClose={() => setOpen(false)} />
                </div>
            </div>
        </div>
    );
}
