export type SkillId =
    | "html" | "css" | "bootstrap" | "tailwindcss" | "js" | "ts"
    | "vue" | "react" | "nextjs" | "redux" | "astro" | "vite"
    | "nodejs" | "express" | "go" | "php" | "laravel"
    | "postgres" | "mysql" | "mongodb" | "firebase" | "docker"
    | "npm" | "yarn" | "bun" | "github" | "kotlin" | "prisma" | "supabase";

export function skillIconUrl(
    id: SkillId,
    opts?: { theme?: "dark" | "light"; provider?: "skillicons" | "go" }
) {
    const theme = opts?.theme ?? "dark";
    const base =
        opts?.provider === "go"
            ? "https://go-skill-icons.vercel.app/api/icons"
            : "https://skillicons.dev/icons";
    return `${base}?i=${id}&theme=${theme}`;
}
