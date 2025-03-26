import { CheckIcon } from '@heroicons/react/20/solid';
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    LockClosedIcon,
} from '@heroicons/react/24/outline';


const features = [
    {
        name: 'End-to-End Solutions',
        description:
            'We manage every phase of your project, from pre-construction planning and design to final build and renovation.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Diverse Expertise',
        description:
            'Our team includes experts in various construction fields, ensuring top-notch results for any project type, including industrial and residential.',
        icon: LockClosedIcon,
    },
    {
        name: 'Project Management',
        description:
            'We take the stress out of construction by handling all the logistics, scheduling, and coordination.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Quality and Reliability',
        description:
            'We\'re committed to delivering high-quality workmanship and reliable service, ensuring your project is built to last.',
        icon: FingerPrintIcon,
    },
]

export default function Feature() {

    return (
        <div className="mx-auto mt-22 max-w-7xl px-6 sm:mt-26 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base/7 font-semibold text-[#4F714D]">Got you covered</h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
                    Everything you need
                </p>
                <p className="mt-6 text-pretty text-lg/8 text-gray-600">
                    Western Rockies Construction is your single-source solution for all your construction needs, offering a wide range of services to take your project from initial concept to successful completion. We handle every aspect of the construction process, ensuring quality, efficiency, and seamless coordination.
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-16">
                            <dt className="text-base/7 font-semibold text-gray-900">
                                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg">
                                    <CheckIcon aria-hidden="true" className="absolute left-0 top-1 h-5 w-5 text-[#4F714D]" />
                                </div>
                                {feature.name}
                            </dt>
                            <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    )
}
