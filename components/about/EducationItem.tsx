import Image from "next/image";

type Props = {
    logo: string;
    school: string;
    degree: string;
    meta?: string;
    period: string;
    location: string;
};

export default function EducationItem({ logo, school, degree, meta, period, location }: Props) {
    return (
        <article className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 p-4 md:p-5">
            <div className="flex items-start gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl ring-1 ring-white/10 bg-neutral-800">
                    <Image src={logo} alt="" fill className="object-contain p-1.5" unoptimized />
                </div>
                <div className="min-w-0">
                    <h3 className="text-base font-semibold">{school}</h3>
                    <p className="text-sm text-neutral-300">
                        {degree}
                        {meta ? <span className="text-neutral-400"> • {meta}</span> : null}
                    </p>
                    <p className="text-sm text-neutral-400">{period} • {location}</p>
                </div>
            </div>
        </article>
    );
}
