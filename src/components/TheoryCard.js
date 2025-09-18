import Link from 'next/link'

export default function TheoryCard({ slug, title, date, description, tags, madnessLevel }) {
    const postDate = new Date(date);
    const monthNames = [
        'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
        'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
    ];

    const month = monthNames[postDate.getMonth()];
    const year = postDate.getFullYear();

    const displayTags = tags && tags.length > 0 ? tags.slice(0, 3) : [];

    return (
        <article className="group relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 w-full mb-6">
            <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                    <span className="text-gray-500 text-xs uppercase">{month} {year}</span>
                    {madnessLevel && (
                        <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30">
                            Madness: {madnessLevel}/10
                        </span>
                    )}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors">
                    <Link href={`/theories/${slug}`} className="hover:text-gray-200">
                        {title}
                    </Link>
                </h3>

                <p className="text-gray-300 text-base mb-6 flex-grow">
                    {description}
                </p>

                {displayTags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
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
                        href={`/theories/${slug}`}
                        className="inline-flex items-center px-4 py-2 rounded-full border border-gray-600 text-gray-400 hover:border-gray-400 hover:text-white transition-all duration-200"
                    >
                        Read Theory
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    )
}