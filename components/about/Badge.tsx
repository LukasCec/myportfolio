export default function Badge({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-md border border-white/10 bg-neutral-900/60 px-2.5 py-1 text-xs text-neutral-300">
      {children}
    </span>
    );
}
