import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

import Map from './Map';

export default function Contact() {

    return (
        <div className="relative isolate bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 p-[7px]">
                <div className="h-[100%] items-center relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48 flex justify-center">
                    <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                        <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href="tel:+1 (555) 234-5678" className="hover:text-gray-900">
                                        +1 (406) 871-8101
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                                </dt>
                                <dd>
                                    <a href="mailto:josiah@westernrockiesconstruction.com" className="hover:text-gray-900">
                                        josiah@westernrockiesconstruction.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className='p-2 content-center'>
                    <Map />
                </div>
            </div>
        </div>
    )
}