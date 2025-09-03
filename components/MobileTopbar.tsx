"use client";

export default function MobileTopbar({ onOpen }: { onOpen: () => void }) {
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
