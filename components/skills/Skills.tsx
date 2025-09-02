import SkillBadge from "./SkillBadge";
import type { SkillId } from "@/lib/skillIcons";

const SKILLS: Array<{ id: SkillId; label: string }> = [
    { id: "nextjs", label: "Next.js" },
    { id: "react", label: "React.js" },
    { id: "tailwindcss", label: "TailwindCSS" },
    { id: "js", label: "JavaScript" },
    { id: "ts", label: "TypeScript" },
    { id: "vue", label: "Vue.js" },
    { id: "express", label: "Express.js" },
    { id: "php", label: "PHP" },
    { id: "postgres", label: "PostgreSQL" },
    { id: "mysql", label: "MySQL" },
    { id: "mongodb", label: "MongoDB" },
    { id: "firebase", label: "Firebase" },
    { id: "supabase", label: "Supabase" },
    { id: "docker", label: "Docker" },
    { id: "npm", label: "NPM" },
    { id: "github", label: "GitHub" },
];

export default function Skills() {
    return (
        <section aria-labelledby="skills-heading" className="pt-8">
            <header className="mb-6 border-t border-neutral-800 pt-6">
                <h2 id="skills-heading" className="flex items-center  gap-2 text-xl font-semibold">
                    <span className="text-neutral-400">{"</>"}</span>Skills
                </h2>
                <p className="mt-1 text-sm text-neutral-400">My professional skills.</p>
            </header>

            <ul
                className="grid grid-cols-5 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10"
                role="list"
            >
                {SKILLS.map((s) => (
                    <li key={s.id} className="flex flex-col items-center gap-1">
                        <SkillBadge id={s.id} label={s.label} />
                        <span className="sr-only">{s.label}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
