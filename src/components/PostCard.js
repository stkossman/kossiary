import Link from 'next/link'

export default function PostCard({ slug, title, date, description }) {
    const postDate = new Date(date);
    const monthNames = [
        'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
        'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];

    const month = monthNames[postDate.getMonth()];
    const year = postDate.getFullYear();

    return (
        <article className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/30 via-gray-700/20 to-gray-600/10 border border-gray-600/30 hover:border-gray-500/50 transition-all duration-300">
            <div className="p-8 h-full flex flex-col">
                <div className="mb-4">
                    <span className="text-gray-400 text-xs font-semibold tracking-wide uppercase">
                        {month} {year}
                    </span>
                </div>

                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-rose-200 transition-colors line-clamp-3">
                    <Link href={`/posts/${slug}`} className="hover:text-rose-200">
                        {title}
                    </Link>
                </h3>

                <p className="text-gray-300 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed">
                    {description}
                </p>

                <div className="flex justify-end">
                    <Link
                        href={`/posts/${slug}`}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-rose-400/40 text-rose-400 hover:border-rose-300 hover:text-rose-300 transition-all duration-200 group-hover:scale-110"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}