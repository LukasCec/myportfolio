"use client";

import { useRef } from "react";
import DraggablePhoto from "@/components/ui/DraggablePhoto";

export default function AboutPhotoStack() {
    const zoneRef = useRef<HTMLDivElement>(null);

    return (

        <div ref={zoneRef}>
            <DraggablePhoto
                src="/me.jpeg"
                rotate={-6}
                size="w-24 sm:w-28"
                constraintsRef={zoneRef}
                initialXY={{ x: -50, y: -10 }}
            />
            <DraggablePhoto
                src="/me.jpeg"
                rotate={3}
                size="w-24 sm:w-28"
                constraintsRef={zoneRef}
                initialXY={{ x: 10, y: 0 }}
            />
            <DraggablePhoto
                src="/me.jpeg"
                rotate={-2}
                size="w-24 sm:w-28"
                constraintsRef={zoneRef}
                initialXY={{ x: 70, y: 10 }}
            />
        </div>
    );
}