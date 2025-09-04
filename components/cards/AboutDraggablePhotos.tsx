"use client";

import Image from "next/image";
import {
    DraggableCardContainer,
    DraggableCardBody,
} from "@/components/ui/draggable-card";

export default function AboutDraggablePhotos() {
    return (
        <DraggableCardContainer className="mt-4">
            <div className="flex items-center justify-center gap-3 sm:gap-4">
                {/* 1 */}
                <DraggableCardBody className="w-28 aspect-square p-0 !bg-transparent !shadow-none ring-0">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/60">
                        <Image src="/me.jpeg" alt="Me 1" fill className="object-cover" />
                    </div>
                </DraggableCardBody>

                {/* 2 */}
                <DraggableCardBody className="w-28 aspect-square p-0 !bg-transparent !shadow-none ring-0 rotate-3">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/60">
                        <Image src="/me.jpeg" alt="Me 2" fill className="object-cover" />
                    </div>
                </DraggableCardBody>

                {/* 3 */}
                <DraggableCardBody className="w-28 aspect-square p-0 !bg-transparent !shadow-none ring-0 -rotate-2">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/60">
                        <Image src="/me.jpeg" alt="Me 3" fill className="object-cover" />
                    </div>
                </DraggableCardBody>
            </div>
        </DraggableCardContainer>
    );
}
