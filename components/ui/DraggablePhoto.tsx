"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type React from "react";

type Props = {
    src: string;
    alt?: string;
    size?: string;
    rotate?: number;
    className?: string;
    constraintsRef?: React.RefObject<HTMLElement | null>; // dôležité
    initialXY?: { x?: number; y?: number };
};

export default function DraggablePhoto({
                                           src,
                                           alt = "",
                                           size = "w-28",
                                           rotate = 0,
                                           className,
                                           constraintsRef,
                                           initialXY,
                                       }: Props) {
    return (
        <motion.div
            className={[
                "absolute rounded-2xl ring-1 ring-white/10 bg-neutral-900/60 overflow-hidden",
                "aspect-square cursor-grab active:cursor-grabbing select-none",
                size,
                className || "",
            ].join(" ")}
            style={{ rotate }}
            drag
            dragElastic={0.25}
            dragMomentum={false}
            dragConstraints={constraintsRef ?? { left: -200, right: 200, top: -120, bottom: 120 }}
            dragTransition={{ power: 0.2, timeConstant: 300 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            initial={{ x: initialXY?.x ?? 0, y: initialXY?.y ?? 0 }}
        >
            <Image
                src={src}
                alt={alt}
                fill
                className="object-cover z-10 pointer-events-none"
                draggable={false}

            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl [box-shadow:inset_0_1px_0_rgba(255,255,255,.12)]" />
            <div className="pointer-events-none absolute -inset-px rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,.35)]" />
        </motion.div>
    );
}
