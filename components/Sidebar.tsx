"use client";

import Image from "next/image";

type Props = {
    variant?: "desktop" | "mobile";
    onClose?: () => void;
};

const LINKS = ["Home", "About", "Achievements", "Projects", "Dashboard", "Chat Room", "Contact"];

export default function Sidebar({ variant = "desktop", onClose }: Props) {
    const isMobile = variant === "mobile";

    return (
        <aside
            className={[
                isMobile
                    ? "w-full bg-[#171717] h-full flex flex-col"
                    : "hidden md:flex md:w-72 md:h-screen flex-col",
                "flex-shrink-0 bg-[#171717] border-r border-neutral-800 text-neutral-100 flex flex-col",
            ].join(" ")}
        >
            <div className="p-4 md:p-6 flex items-center gap-3 border-b border-neutral-800">
                <div className="relative size-12 overflow-hidden rounded-full ring-1 ring-white/10">
                    <Image src="/me.jpeg" alt="Lukáš Čeč" fill sizes="48px" className="object-cover object-top" priority={isMobile}/>
                </div>
                <div className="flex flex-col">
                    <span className="font-semibold">Lukáš Čeč</span>
                    <span className="text-xs text-neutral-400">@lukas_c_e_c</span>
                </div>
                {isMobile && (
                    <button
                        onClick={onClose}
                        aria-label="Close menu"
                        className="ml-auto grid size-9 place-items-center rounded-full hover:bg-white/5"
                    >
                        <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-80">
                            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                )}
            </div>

            <nav className="p-3">
                <ul className="space-y-1">
                    {LINKS.map((item) => (
                        <li className="list-none hover:scale-[107%] duration-200" key={item}>
                            <a className="flex items-center justify-between px-3 py-2 rounded-lg text-sm duration-200 hover:bg-neutral-800/80" href="#">
                                <span>{item}</span>
                                <span className="text-neutral-500">→</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="mt-auto p-3">
                <button className="w-full rounded-xl border border-emerald-700 bg-emerald-900/30 px-4 py-2 text-sm">Smart Talk</button>
            </div>

            <footer className="p-3 text-xs text-neutral-500 border-t border-neutral-800">
                COPYRIGHT © {new Date().getFullYear()} <br /> Lukáš Čeč. All rights reserved.
            </footer>
        </aside>
    );
}
