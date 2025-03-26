const values = [
    {
        name: 'Quality Craftsmanship',
        description:
            'We are committed to delivering exceptional workmanship in every project, using high-quality materials and proven techniques to ensure lasting value and durability. We take pride in the details and strive for excellence in all aspects of our construction.',
    },
    {
        name: 'Integrity and Trust',
        description:
            'We operate with honesty, transparency, and ethical principles in all our interactions with clients, partners, subcontractors, and our team. We believe in building strong, trustworthy relationships based on open communication and accountability.',
    },
    {
        name: 'Safety First',
        description:
            'The safety and well-being of our team, clients, and the community is our top priority. We maintain a rigorous safety culture, adhering to the highest safety standards and providing ongoing training to prevent accidents and ensure a safe working environment.',
    },
    {
        name: 'Respect for the Environment',
        description:
            'We are mindful of the unique natural beauty of the Western Rockies and are committed to sustainable construction practices. We strive to minimize our environmental impact through responsible material sourcing, waste management, and consideration of the surrounding ecosystem.',
    },
    {
        name: 'Local Expertise',
        description:
            'As a locally owned and operated company in the Western Rockies, we possess a deep understanding of the regional landscape, climate, and building requirements. We leverage this knowledge to provide tailored solutions that are well-suited to the specific challenges and opportunities of our area.',
    },
    {
        name: 'Teamwork and Collaboration',
        description:
            'We foster a collaborative and supportive work environment where every team member is valued and empowered to contribute their best. We believe that strong teamwork, both internally and with our partners, is essential for project success.',
    },

    {
        name: 'Community Engagement',
        description:
            'We are proud to be a part of the Western Rockies community and are committed to contributing to its growth and well-being. We actively seek opportunities to support local initiatives and build strong relationships within our community.',
    },
    {
        name: 'Reliability and Dependability',
        description:
            'Clients can count on us to deliver on our promises and complete projects on time, without compromising quality. We are a dependable partner you can trust to get the job done right.',
    },
]

export default function Values() {

    return (
        <div className="mx-auto mt-32 pb-20 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our values</h2>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {values.map((value) => (
                    <div key={value.name}>
                        <dt className="font-semibold text-gray-900">{value.name}</dt>
                        <dd className="mt-1 text-gray-600">{value.description}</dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
