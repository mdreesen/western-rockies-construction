import Link from 'next/link';

export default async function ButtonGoTo({ path, title }: any) {

    return (
        <Link href={path}>
            <button
                type="button"
                className="text-sm/6 font-semibold text-white"
            >
                {title} <span aria-hidden="true">→</span>
            </button>
        </Link>
    )
}
