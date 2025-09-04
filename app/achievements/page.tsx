
import Image from "next/image";
import {ReactNode} from "react";
import {
    DraggableCardContainer,
    DraggableCardBody,
} from "@/components/ui/draggable-card";


export const metadata = {
    title: "Achievements • Lukáš Čeč",
};



export default function AchievementsPage() {
    return (
        <div>
            <section className="space-y-6">
                <h1 className="text-2xl font-semibold">Draggable demo</h1>

                <DraggableCardContainer className="mx-auto">
                    <DraggableCardBody className="w-20 min-h-20">
                        <div className="h-40 grid place-items-center">
                            <span className="text-lg font-medium">Chyť a potiahni ma ✋</span>
                        </div>
                    </DraggableCardBody>
                </DraggableCardContainer>
            </section>

        </div>



    );
}
