"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    variant?: "desktop" | "mobile";
    onClose?: () => void;
};

const NAV = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Achievements", href: "/achievements" },
    { label: "Projects", href: "/projects" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Chat Room", href: "/chat" },   // zmeň na /chat-room ak máš inú route
    { label: "Contact", href: "/contact" },
];

export default function Sidebar({ variant = "desktop", onClose }: Props) {
    const isMobile = variant === "mobile";
    const pathname = usePathname();

    const isActive = (href: string) =>
        href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(href + "/");

    return (
        <aside
            className={[
                isMobile ? "w-full bg-[#171717] h-full flex flex-col" : "hidden md:flex md:w-72 md:h-screen flex-col",
                "flex-shrink-0 bg-[#171717] border-r border-neutral-800 text-neutral-100",
            ].join(" ")}
        >
            <div className="p-4 md:p-6 flex items-center gap-3 border-b border-neutral-800">
                <div className="relative size-12 overflow-hidden rounded-full ring-1 ring-white/10">
                    <Image
                        src="/me.jpeg"
                        alt="Lukáš Čeč"
                        fill
                        sizes="48px"
                        className="object-cover object-top"
                        priority={isMobile}
                    />
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
                    {NAV.map(({ label, href }) => {
                        const active = isActive(href);
                        return (
                            <li key={href} className="list-none">
                                <Link
                                    href={href}
                                    aria-current={active ? "page" : undefined}
                                    onClick={isMobile ? onClose : undefined}
                                    className={[
                                        "flex items-center justify-between px-3 py-2 rounded-lg text-sm duration-200",
                                        "hover:bg-neutral-800/80 hover:scale-[1.07]",
                                        active ? "bg-neutral-800/70 text-white ring-1 ring-white/10" : "text-neutral-200",
                                    ].join(" ")}
                                >
                                    <span>{label}</span>
                                    <span className="text-neutral-500">→</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="mt-auto p-3">
                <Link
                    href="/smart-talk"
                    className="block w-full text-center rounded-xl border border-emerald-700 bg-emerald-900/30 px-4 py-2 text-sm"
                    onClick={isMobile ? onClose : undefined}
                >
                    Smart Talk
                </Link>
            </div>

            <footer className="p-3 text-xs text-neutral-500 border-t border-neutral-800">
                COPYRIGHT © {new Date().getFullYear()} <br /> Lukáš Čeč. All rights reserved.
            </footer>
        </aside>
    );
}
