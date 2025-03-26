import Image from 'next/image';
import HeroAbout from '@/ui/hero/HeroAbout';
import Mission from '@/ui/Mission';
import Values from "@/ui/Values";


export default function Page() {

    return (
        <div className="bg-white">

            <main className="isolate">
                {/* Hero section */}
                <HeroAbout />

                {/* Content section */}
                <Mission />

                {/* Image section */}
                <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <Image
                        src="/assets/landing.webp"
                        width={500}
                        height={500}
                        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
                        alt='company logo'
                    />
                </div>

                {/* Values section */}
                <Values />
            </main>
        </div>
    )
}
