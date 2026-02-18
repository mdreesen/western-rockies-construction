import Image from "next/image";
// This component features a sleek, modern design with a dark theme and Tailwind CSS.
// It uses inline SVG icons to ensure no external dependencies are required for compilation.

export default function TrexPro() {
    return (
        <section className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 font-['Inter'] text-gray-900">
            <div className="max-w-4xl mx-auto text-center">
                {/* Main Heading */}
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                    {/* <div className='h-[200] w-full flex justify-center' aria-hidden="true">
                        <Image
                            src="/assets/affiliates/trex_logo.webp"
                            width={500}
                            height={500}
                            priority
                            className="rounded-full object-cover"
                            alt='company logo'
                        />
                    </div> */}
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-green-400 to-emerald-500">
                        TrexPro®
                    </span>{" "}
                    Affiliated and Certified
                </h2>
                {/* Sub-heading and descriptive text */}
                <p className="text-lg max-w-2xl mx-auto leading-relaxed">
                    As an officially TrexPro® affiliated contractor, we've demonstrated a mastery of Trex deck design and installation, ensuring every project meets the highest standards of quality and durability.
                </p>

                {/* Logo and Benefits Section */}
                <div className="mt-16 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12">
                    {/* Benefits List */}
                    <div className="lg:w-2/3 text-left space-y-6 mt-10 lg:mt-0">
                        <h3 className="text-2xl font-semibold">
                            Why Partner with a TrexPro®?
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                {/* Inline SVG for Check Circle */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="shrink-0 mt-1 h-6 w-6 text-emerald-500 mr-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>
                                    <strong>Certified Expertise:</strong> Our team is professionally trained, ensuring your deck is built to the highest Trex standards.
                                </span>
                            </li>
                            <li className="flex items-start">
                                {/* Inline SVG for Check Circle */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-shrink-0 mt-1 h-6 w-6 text-emerald-500 mr-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>
                                    <strong>Seamless Process:</strong> From design to completion, we streamline the process for a hassle-free experience.
                                </span>
                            </li>
                            <li className="flex items-start">
                                {/* Inline SVG for Check Circle */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="shrink-0 mt-1 h-6 w-6 text-emerald-500 mr-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>
                                    <strong>Full Warranty Protection:</strong> Our certified installation protects your Trex decking warranty, giving you peace of mind for years to come.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action Button */}
                <div className="mt-16">
                    <a
                        href="https://www.trex.com/find-a-builder/details/?PRO=001RN00000OwDU2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-10 py-5 border border-transparent text-lg font-bold rounded-full shadow-lg bg-[#4F714D] hover:bg-green-700 text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Explore TrexPro® on Trex.com
                        {/* Inline SVG for External Link */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ml-3 -mr-1 h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};