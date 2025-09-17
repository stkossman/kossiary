import Link from 'next/link'

export default function PostCard({ slug, title, date, description, tags }) {
    const postDate = new Date(date);
    const monthNames = [
        'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
        'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];

    const month = monthNames[postDate.getMonth()];
    const year = postDate.getFullYear();

    const displayTags = tags && tags.length > 0 ? tags.slice(0, 3) : [];

    return (
        <article className="group relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300">
            <div className="p-8 h-full flex flex-col">
                <span className="text-gray-500 text-xs uppercase mb-4">{month} {year}</span>

                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors">
                    <Link href={`/posts/${slug}`} className="hover:text-gray-200">
                        {title}
                    </Link>
                </h3>

                <p className="text-gray-300 text-sm mb-6 flex-grow">
                    {description}
                </p>

                {displayTags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                        {displayTags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-block bg-neutral-800 text-gray-200 text-xs px-2 py-1 rounded-full border border-neutral-700"
                            >
                        {tag}
                    </span>
                        ))}
                    </div>
                )}

                <div className="flex justify-end">
                    <Link
                        href={`/posts/${slug}`}
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white transition-all duration-200 group-hover:scale-110"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}