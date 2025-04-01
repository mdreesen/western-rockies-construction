import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import {
    MinusSmallIcon,
    PlusSmallIcon,
} from '@heroicons/react/24/outline';


const faqs = [
    {
        id: 1,
        question: "What types of construction projects do you typically handle in the Western Rockies area?",
        answer:
            "Western Rockies Construction has extensive experience with a wide range of projects. This includes custom residential homes, renovations and additions, commercial buildings (retail, office, hospitality), light industrial facilities, agricultural buildings (barns, shops), and mountain-specific construction projects that require expertise in challenging terrain and weather conditions common in areas like Kalispell and the surrounding mountains. We pride ourselves on our versatility and ability to adapt to the unique needs of each project and client in this region.",
    },
    {
        id: 2,
        question: "What is your service area within the region? Do you work in specific towns or counties around Kalispell?",
        answer:
            "Our primary service area encompasses the Flathead Valley. This includes Kalispell, Whitefish, Columbia Falls, Bigfork, Lakeside, Polson, and surrounding areas within a reasonable travel distance. We are familiar with local building codes, permitting processes, and the specific challenges and opportunities presented by building in this unique environment. Please contact us with your project location to confirm if it falls within our current service radius.",
    },
    {
        id: 3,
        question: "Can you provide a general estimate for the cost of my construction project? What factors influence the final price?",
        answer:
            "Providing a precise estimate without detailed plans is challenging, but we can offer a general ballpark figure based on the scope and type of your project and current market conditions in the Western Rockies. Factors that significantly influence the final price include the size and complexity of the project, the quality of materials selected, site conditions (slope, access, soil), local labor costs, permitting fees, and any custom design elements. We prioritize transparency and will work with you to develop a detailed and accurate estimate once we have a better understanding of your specific needs and plans.",
    },
    {
        id: 4,
        question: "What is your process for providing a detailed construction bid or proposal?",
        answer:
            "Our process for providing a detailed bid typically involves an initial consultation to understand your project goals and requirements. Following this, we review any existing plans or work with you to develop preliminary designs. We then conduct a thorough analysis of the project, including material takeoffs, labor estimates, subcontractor bids (if necessary), and all associated costs. Our detailed proposal will clearly outline the scope of work, materials to be used, estimated timeline, and a comprehensive breakdown of costs. We are happy to walk you through the proposal and answer any questions you may have.",
    },
    {
        id: 5,
        question: "Are you licensed and insured to operate as a construction company in Montana? Can you provide proof of this?",
        answer:
            "Yes, Western Rockies Construction is fully licensed and insured to operate as a construction company in the state of Montana. We maintain all necessary licenses and carry comprehensive insurance coverage to protect our clients and our team. We are happy to provide you with proof of our credentials upon request.",
    },
];

export default function FAQ() {

    return (
        <div className="mx-auto mt-22 pb-20 max-w-7xl px-6 sm:mt-26 lg:px-8">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                    Frequently asked questions
                </h2>
                <dl className="mt-16 divide-y divide-gray-900/10">
                    {faqs.map((faq) => (
                        <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                            <dt>
                                <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                    <span className="text-base/7 font-semibold">{faq.question}</span>
                                    <span className="ml-6 flex h-7 items-center">
                                        <PlusSmallIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                        <MinusSmallIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                                    </span>
                                </DisclosureButton>
                            </dt>
                            <DisclosurePanel as="dd" className="mt-2 pr-12">
                                <p className="text-base/7 text-gray-600">{faq.answer}</p>
                            </DisclosurePanel>
                        </Disclosure>
                    ))}
                </dl>
            </div>
        </div>
    )
}
