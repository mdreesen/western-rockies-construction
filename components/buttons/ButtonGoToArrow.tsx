import Link from 'next/link';

export default async function ButtonGoTo({ path, title }: any) {

    return (
        <Link href={path}>
            <button
                type="button"
                className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
                {title} <span aria-hidden="true">→</span>
            </button>
        </Link>
    )
}
