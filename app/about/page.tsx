import type { Metadata } from "next";
import Image from 'next/image';
import HeroAbout from '@/ui/hero/HeroAbout';
import Mission from '@/ui/Mission';
import Values from "@/ui/Values";

export const metadata: Metadata = {
    title: "About | Western Rockies Construction",
    description: "Built to Last, Built to Perform",
};


export default function Page() {

    return (
        <div className="bg-white">

            <main className="isolate">
                {/* Hero section */}
                <HeroAbout />

                {/* Content section */}
                <Mission />

                {/* Image section */}
                <div className="relative h-[12rem] bg-fixed bg-no-repeat bg-cover bg-center mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8" style={{ backgroundImage: "url('/assets/about.webp')" }}>
                    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                        <span>
                            Locally &<br />Veteran Owned
                        </span>
                    </div>
                </div>

                {/* Values section */}
                <Values />
            </main>
        </div>
    )
}
