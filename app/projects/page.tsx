import type { Metadata } from "next";
import Image from 'next/image';
import DeckShowroom from '@/ui/ShowRoom';

export const metadata: Metadata = {
    title: "Projects | Western Rockies Construction",
    description: "Built to Last, Built to Perform",
};

export default function Page() {

    const flooring = (
        <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                <Image
                    src="/assets/projects/flooring/flooring.webp"
                    width={1022}
                    height={471}
                    className="h-80 object-cover w-full object-center"
                    alt='cloud one'
                />
                <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#4F714D]">Flooring</h3>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                        We understand that flooring is more than just a surface – it&apos;s the foundation upon which your space is built. Whether you&apos;re envisioning the warm embrace of hardwood in your custom Kalispell home, the durable practicality of tile in your commercial space, or the cozy comfort of carpet in your mountain retreat, our expert flooring installation services ensure a flawless and lasting finish.
                    </p>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
        </div>
    );

    const decks = (
        <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                <Image
                    src="/assets/projects/decks/decks.webp"
                    width={554}
                    height={255}
                    className="h-80 object-cover object-center w-full"
                    alt='cloud one'
                />
                <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#4F714D]">Decks</h3>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                        Outdoor spaces should be as inviting and functional as your indoor living areas. Serving Kalispell and the surrounding Western Rockies region, our expert team specializes in both the installation of stunning new decks and the repair and restoration of existing ones, helping you maximize your enjoyment of Montana&apos;s breathtaking scenery.
                    </p>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
        </div>
    );

    const fences = (
        <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                <Image
                    src="/assets/projects/fencing/fencing.webp"
                    width={500}
                    height={500}
                    className="h-80 object-cover object-center"
                    alt='cloud one'
                />
                <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#4F714D]">Fences</h3>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                        Well-built fence is more than just a property line – it&apos;s an essential element for security, privacy, safety, and enhancing the aesthetic appeal of your property. Whether you&apos;re looking to enclose your backyard, secure a commercial property, or add a decorative touch to your landscape, our expert fence installation services provide durable and attractive solutions tailored to the unique needs of the Western Rockies environment.
                    </p>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
        </div>
    );

    const framing = (
        <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                <Image
                    src="/assets/projects/framing/framing.webp"
                    width={500}
                    height={500}
                    className="h-80 object-cover object-center"
                    alt='cloud one'
                />
                <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#4F714D]">Framing</h3>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                        We understand that framing is the critical skeletal structure upon which every successful building project is built. It&apos;s the unseen framework that provides strength, stability, and the precise form for your residential or commercial vision. Our experienced team of skilled carpenters are masters of their craft, ensuring your project in the Western Rockies is built on a solid and dependable foundation.
                    </p>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
        </div>
    );

    const siding = (
        <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                <Image
                    src="/assets/projects/siding/siding.webp"
                    width={500}
                    height={500}
                    className="h-80 object-cover object-center"
                    alt='cloud one'
                />
                <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-[#4F714D]">Siding</h3>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                        Your home or business&apos;s siding is its first line of defense against the elements while also playing a crucial role in its overall aesthetic appeal. We offer expert siding installation services, providing durable, attractive, and long-lasting solutions tailored to withstand the unique challenges of the Western Rockies environment.
                    </p>
                </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
        </div>
    );

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

                <h2 className="text-base/7 font-semibold text-[#4F714D]">Projects</h2>
                <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                    Projects for your needs
                </p>
                <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
                    {flooring}
                    {decks}
                    {fences}
                    {framing}
                    {siding}
                </div>
            </div>
        </div>
    )
}
