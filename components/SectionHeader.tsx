type Props = {
    title: string;
    subtitle?: string;
    className?: string
};

export default function SectionHeader({ title, subtitle, className }: Props) {
    return (
        <header className={["mb-6", className].filter(Boolean).join(" ")}>
            <h2 className="text-xl font-semibold">{title}</h2>
            {subtitle && <p className="text-sm text-neutral-400 mt-1">{subtitle}</p>}
            <hr className="mt-4 border-neutral-800" />
        </header>
    );
}
