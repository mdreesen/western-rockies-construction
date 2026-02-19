import Link from 'next/link';
import Map from './Map';

export default function Contact() {

    return (
        <div className="relative isolate bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 p-1.75">
                <div className="h-full items-center relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48 flex justify-center">
                    <div className="max-w-full flex flex-col items-center">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900">Get in touch</h2>
                        {/* Left Column: Contact Form */}
                        <div className="bg-white max-w-full text-gray-700 p-8 rounded-lg shadow-lg">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                            <form action={`https://formspree.io/f/${process.env.FORM_SPREE_KEY}`} method="POST">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lego-blue" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lego-blue" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                                    <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lego-blue" required></textarea>
                                </div>

                                <div className="flex gap-1 mb-4">
                                    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="sms-consent"
                                                    name="sms-consent"
                                                    type="checkbox"
                                                    required
                                                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="sms-consent" className="font-medium text-gray-700">
                                                    I agree to receive SMS messages from Western Rockies Construction
                                                </label>
                                                <p className="text-gray-500 mt-1 leading-relaxed">
                                                    By checking this box, you agree to receive recurring text messages regarding project updates and service inquiries. Message and data rates may apply. Reply STOP to opt-out or HELP for help. View our
                                                    <Link href="/privacy-policy" className="text-blue-600 underline hover:text-blue-800">Privacy Policy</Link>.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#4F714D] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                                >
                                    Submit Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='p-2 content-center'>
                    <Map />
                </div>
            </div>
        </div>
    )
}