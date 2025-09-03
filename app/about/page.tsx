import SectionHeader from "@/components/SectionHeader";
import CareerItem from "@/components/about/CareerItem";
import DownloadButtons from "@/components/about/DownloadButtons";
import EducationItem from "@/components/about/EducationItem";

import Image from "next/image";


export const metadata = {
    title: "About • Lukáš Čeč",
};

export default function AboutPage() {
    return (
        <div className="space-y-10">

            <SectionHeader title="About" subtitle="A brief introduction to who I am." />
            <div className="space-y-5">
                <p className="text-neutral-300">
                    Hello there! Thanks for visiting my personal website. I’m Lukáš Čeč, a passionate web developer.
                    I love building modern, accessible, and performant products with Next.js, TypeScript and Tailwind CSS.
                    On the backend, I enjoy Go/Node.js; for mobile, I explore Kotlin. I like solving complex problems
                    collaboratively and bringing clarity to every layer of an application.
                </p>
                <p className="text-neutral-300">
                    I believe great communication and team synergy are keys to success. I’m always excited to learn from others,
                    share knowledge, and contribute to impactful projects.
                </p>
                <p className="text-neutral-300">Best regards,</p>
                <Image src="/signature.png" height="50" width="100" alt="Signature" className="h-12 w-auto" />
            </div>

            {/* === Career === */}
            <SectionHeader title="Career" subtitle="My professional journey." className="pt-2" />
            <div className="space-y-4">
                <CareerItem
                    logo="/about/company-1.png"
                    role="Backend Golang Developer"
                    company="Some Company s.r.o."
                    location="Košice, Slovakia"
                    period="Jul 2025 – Sep 2025"
                    duration="2 Months"
                    type="Internship"
                    onsite="Onsite"
                    responsibilities={[
                        "Designed REST APIs and optimized DB queries.",
                        "Implemented background workers with queue.",
                        "Collaborated with frontend to ship features weekly.",
                    ]}
                />
                <CareerItem
                    logo="/about/company-2.png"
                    role="Frontend Web Developer"
                    company="Another Company a.s."
                    location="Bratislava, Slovakia"
                    period="May 2025 – Nov 2025"
                    duration="5 Months"
                    type="Internship"
                    onsite="Remote"
                    responsibilities={[
                        "Built UI with Next.js + Tailwind; improved accessibility.",
                        "Set up CI for lint/test; cut PR cycle time by 30%.",
                    ]}
                />
                <CareerItem
                    logo="/about/org-1.png"
                    role="Head of Technology"
                    company="Student Organization"
                    location="Košice, Slovakia"
                    period="Dec 2024 – Present"
                    duration="9 Months"
                    type="Part-time"
                    onsite="Onsite"
                />
            </div>

            {/* === Education === */}
            <SectionHeader title="Education" subtitle="My educational journey." />
            <div className="flex flex-wrap items-center justify-between gap-4">
                <DownloadButtons />
            </div>

            <div className="mt-4 space-y-4">
                <EducationItem
                    logo="/about/university.png"
                    school="Technical University of Košice"
                    degree="Bachelor’s degree"
                    meta="Information Systems"
                    period="2022 – 2026"
                    location="Košice, Slovakia"
                />
            </div>
        </div>
    );
}
