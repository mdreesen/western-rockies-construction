import ShowRoom from "@/ui/ShowRoom";

export default function Page() {
    return (
        // <div className="bg-white py-24 sm:py-32">
        //     <ShowRoom/>
        // </div>

        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

            <h2 className="text-base/7 font-semibold text-[#4F714D]">Customize your deck</h2>
            <p className="mt-2 max-w-lg text-pretty text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                Deck Show Room
            </p>
            <div className="mt-10">
                 <ShowRoom/>

            </div>
        </div>
    </div>
    )
}