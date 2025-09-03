export default function DownloadButtons() {
    return (
        <div className="flex flex-wrap gap-3">
            <a
                href="/portfolio.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm hover:bg-neutral-800"
            >
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
                Download Portfolio
            </a>
            <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-neutral-900/60 px-3 py-2 text-sm hover:bg-neutral-800"
            >
                <svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
                Download Resume
            </a>
        </div>
    );
}
