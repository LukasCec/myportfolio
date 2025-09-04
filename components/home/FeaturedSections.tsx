import SpotlightCard from "../cards/SpotlightCard";
import AboutDraggablePhotos from "../cards/AboutDraggablePhotos";
import AboutPhotoStack from "../cards/AboutPhotoStack";

const cards = [
    {
        title: "Projects Showcase",
        desc: "A selection of real apps built to solve real problems.",
        icon: "📁",
        span: "md:col-span-2", // prvá karta širšia na md+
    },
    {
        title: "About Me",
        desc: "Who I am and what I do.",
        icon: "👤",
    },
    {
        title: "Skills & Tools",
        desc: "Covering web, mobile, AI, and UI/UX.",
        icon: "🧰",
    },
    {
        title: "Achievements",
        desc: "Milestones from programs, projects, communities.",
        icon: "📝",
    },
    {
        title: "Chat Room",
        desc: "Open space to talk and collaborate.",
        icon: "💬",
    },
    {
        title: "Services",
        desc: "End-to-end solutions in web, mobile, AI, and design.",
        icon: "🧩",
        span: "md:col-span-2", // posledná tiež širšia
    },
];

export default function FeaturedSections() {
    return (
        <section aria-labelledby="featured-heading" className="pt-8">
            <header className="mb-6">
                <h2
                    id="featured-heading"
                    className="flex items-center gap-2 text-xl font-semibold"
                >
                    <span className="text-neutral-400">◇</span> Featured Sections
                </h2>
                <p className="mt-1 text-sm text-neutral-400">
                    Explore everything I’ve crafted, contributed, and accomplished.
                </p>
            </header>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {cards.map((c) => (
                    <SpotlightCard
                        key={c.title}
                        className={["p-5", "min-h-[220px]", c.span ?? "", "flex flex-col"].join(" ")}
                    >
                        {/* Head */}
                        <div className="flex items-center gap-3">
                            <div className="grid size-10 place-items-center rounded-xl bg-neutral-800/80 ring-1 ring-white/10">
                                <span className="text-lg">{c.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-base z-20 font-semibold">{c.title}</h3>
                                <p className="text-sm z-20 text-neutral-400">{c.desc}</p>
                            </div>
                        </div>

                        {/* Body */}
                        {c.title === "About Me" ? (
                            <AboutPhotoStack />
                        ) : (
                            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                                <div className="h-20 rounded-xl bg-neutral-800/60 ring-1 ring-white/10" />
                                <div className="h-20 rounded-xl bg-neutral-800/60 ring-1 ring-white/10" />
                                <div className="h-20 rounded-xl bg-neutral-800/60 ring-1 ring-white/10" />
                            </div>
                        )}

                        {/* Footer */}
                        <div className="mt-auto pt-4">
                            <div className="inline-flex z-20 items-center gap-2 rounded-lg border border-white/10 bg-neutral-800/60 px-3 py-1.5 text-xs text-neutral-300">
                                <span>Open</span>
                                <span className="opacity-60">→</span>
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
                <AboutPhotoStack />
            </div>
        </section>
    );
}
