import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/20/solid'

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'
import ButtonGoTo from '@/components/buttons/ButtonGoTo';
import ButtonGoToArrow from '@/components/buttons/ButtonGoToArrow';

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
const tiers = [
  {
    name: 'Freelancer',
    id: 'tier-freelancer',
    href: '#',
    priceMonthly: '$19',
    description: 'The essentials to provide your best work for clients.',
    features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
    mostPopular: false,
  },
  {
    name: 'Startup',
    id: 'tier-startup',
    href: '#',
    priceMonthly: '$49',
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$99',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
    ],
    mostPopular: false,
  },
]
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
      "Yes, Wester Rockies Construction is fully licensed and insured to operate as a construction company in the state of Montana. We maintain all necessary licenses and carry comprehensive insurance coverage to protect our clients and our team. We are happy to provide you with proof of our credentials upon request.",
  },
];

export default function Page() {

  return (
    <div className="bg-white">

      <main className="isolate">
        {/* Hero section */}
        <div className="relative pt-14">
          <Image
            src="/assets/landing4.webp"
            width={500}
            height={500}
            className="absolute inset-0 -z-10 size-full object-cover brightness-85"
            alt='company logo'
          />
          <div className="py-8 sm:py-20 lg:pb-40">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-2xl text-center">
                <div className='h-full w-full py-4 flex justify-center' aria-hidden="true">
                  <Image
                    src="/assets/logo_transparent.webp"
                    width={500}
                    height={500}
                    className="rounded-full object-cover"
                    alt='company logo'
                  />
                </div>
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-4xl">
                  Built to Last, Built to Perform
                </h1>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <ButtonGoToArrow path="/about" title="Learn more" />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[white] to-[#4F714D] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>

        {/* Feature section */}
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

        {/* Testimonial section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"
              className="absolute inset-0 size-full object-cover brightness-150 saturate-0"
            />
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
            <div aria-hidden="true" className="absolute -left-80 -top-56 transform-gpu blur-3xl">
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"
              />
            </div>
            <div
              aria-hidden="true"
              className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
            >
              <div
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"
              />
            </div>
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-white.svg"
                className="h-12 w-auto"
              />
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl/8">
                  <p>
                    “Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare
                    arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam
                    ultricies habitant malesuada lorem ac.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white">
                  <div className="font-semibold">Judith Black</div>
                  <div className="mt-1">CEO of Tuple</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mx-auto max-w-2xl px-6 py-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <dl className="mt-20 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base/7 font-semibold text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  )
}
