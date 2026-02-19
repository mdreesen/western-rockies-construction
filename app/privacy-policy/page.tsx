import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Western Rockies Construction",
    description: "Built to Last, Built to Perform",
};

export default function Page() {
    return (
        <div className="bg-white text-gray-700 flex flex-col py-15 px-10 gap-4">

            <h1 className="font-bold text-center">Privacy Policy for Western Rockies Construction</h1>
            <p>Effective Date: February 19, 2026</p>
            <p>At Western Rockies Construction, we value the trust you place in us to build and improve your property. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services or visit our website.</p>

            <h2>1. Information We Collect To provide accurate estimates and high-quality craftsmanship, we may collect the following:</h2>
            <div className="pl-4">
                <p> • Contact Information: Name, phone number, email address, and physical mailing address.</p>
                <p> • Project Details: Property blueprints, site photos, permit information, and specific renovation requirements.</p>
                <p> • Financial Data: Billing addresses and payment details for processing deposits and final invoices.</p>
                <p> • Communication History: Emails, texts, and notes from site visits.</p>
            </div>

            <h2>2. How We Use Your Information We don’t sell your data to third parties. We use your information strictly to:</h2>
            <div className="pl-4">
                <p> • Provide quotes and fulfill contract obligations.</p>
                <p> • Coordinate with subcontractors and suppliers (e.g., getting materials delivered to your site).</p>
                <p> • Obtain necessary building permits from local authorities.</p>
                <p> • Send project updates and occasional promotional offers (which you can opt out of at any time).</p>
            </div>

            <h2>3. Data Sharing and Security We only share your information with third parties when necessary to complete your project, such as:</h2>
            <div className="pl-4">
                <p> • Subcontractors: Specialized trades (plumbers, electricians) who need your address and project scope.</p>
                <p> • Legal Compliance: When required by law or to protect our legal rights.</p>
                <p> • We implement industry-standard security measures to protect your data from unauthorized access, both digitally and in our physical files.</p>
            </div>

            <h2>4. Your Rights Depending on your location, you may have the right to:</h2>
            <div className="pl-4">
                <p> • Request a copy of the personal data we hold about you.</p>
                <p> • Request that we correct or delete your information (subject to legal and record-keeping requirements).</p>
                <p> • Withdraw consent for marketing communications.</p>
            </div>

            <h2>5. Contact Us If you have questions regarding this policy or how your data is handled, please reach out to us:</h2>
            <div className="pl-4">
                <p> • Western Rockies Construction Email: josiah@westernrockiesconstruction.com</p>
                <p> • Phone: +1 (406) 871-8101</p>
                {/* <p> • Address: [Insert Business Address]</p> */}
            </div>
        </div>
    )
}