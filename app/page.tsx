import Skills from "@/components/skills/Skills";
import Image from "next/image";


export default function Page() {
  return (
      <section>
        <h1 className="text-4xl font-bold">Hi, I&apos;m Lukáš Čeč</h1>
        <p className="mt-3 text-[16px] text-neutral-400">
            Born in 2003
            in Slovakia.
            Passionate web developer,
            constantly exploring
            new technologies
            and digital horizons.
            Driven by curiosity
            and the joy of learning,
            I seek creative ways
            to build, experiment,
            and push boundaries
            in web development.
        </p>

          <Skills />

        <div className="h-[1200px]" />
      </section>
  );
}