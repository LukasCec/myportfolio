import SectionHeader from "@/components/SectionHeader";
import CareerItem from "@/components/about/CareerItem";
import DownloadButtons from "@/components/about/DownloadButtons";
import EducationItem from "@/components/about/EducationItem";
import AboutPhotoStack from "@/components/cards/AboutPhotoStack";
import Image from "next/image";
import {ReactNode} from "react";


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
                    I love building modern, accessible, and performant applications with Next.js, TypeScript and Tailwind CSS.
                    I am also making games in Unity with C#. Right now, I’m working as Game Design lector at Algorithmics s.r.o.
                    As child I attended audio-visual courses, which sparked my interest in technology and creativity.

                </p>
                <p className="text-neutral-300">
                    I believe great communication and team synergy are keys to success. I’m always excited to learn from others,
                    and share knowledge.
                </p>
                <p className="text-neutral-300">Best regards,</p>
                <Image src="/signature.png" height="50" width="100" alt="Signature" className="h-12 w-auto" />
            </div>



            <SectionHeader title="Career" subtitle="My professional journey." className="pt-2" />
            <div className="space-y-4">
                <CareerItem
                    logo="/job1.png"
                    role="Programming Lector"
                    company="Algorithmics s.r.o."
                    location="Košice, Slovakia"
                    period="Sep 2021 – Present"
                    duration="4 Years"
                    type="Part-time"
                    onsite="Remote"
                    responsibilities={[
                        "Teach Game Design in Unity with C# to kids 14-17 years old.",
                        "Teach Web development (HTML, CSS and JS) to kids 7-14 years old.",
                        "Participate on programming Summer Camps.",
                    ]}
                />

                <CareerItem
                    logo="job2.png"
                    role="Freelance Web Developer"
                    company="Self-employed"
                    location="Košice, Slovakia"
                    period="Dec 2021 – Present"
                    duration="4 Years"
                    type="Freelance"
                    onsite="Remote"
                />
            </div>

            {/* === Education === */}
            <SectionHeader title="Education" subtitle="My educational journey." />
            <div className="flex flex-wrap items-center justify-between gap-4">
                <DownloadButtons />
            </div>

            <div className="mt-4 space-y-4">
                <EducationItem
                    logo="university.svg"
                    school="Technical University of Košice"
                    degree="Bachelor’s degree"
                    meta="Informatics"
                    period="2022 – 2025"
                    location="Košice, Slovakia"
                />

                <EducationItem
                    logo="school.jpg"
                    school="Stredná priemyselná škola technická"
                    degree="Graduate"
                    meta="Informačné a sieťové technológie"
                    period="2018 – 2022"
                    location="Spišská Nová Ves, Slovakia"
                />
            </div>


        </div>
    );
}
