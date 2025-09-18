export default function TheoryContent({ title, date, contentHtml, tags, madnessLevel }) {
    return (
        <article className="prose prose-invert max-w-none">
            <div className="flex justify-between items-start mb-2">
                <h1>{title}</h1>
                {madnessLevel && (
                    <span className="text-sm px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full border border-yellow-500/30">
                        Madness Level: {madnessLevel}/10
                    </span>
                )}
            </div>

            <time className="text-gray-500 text-sm block mb-6">
                {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </time>

            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-block bg-neutral-800 text-gray-200 text-xs font-medium px-3 py-1 rounded-full border border-neutral-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            <div
                className="theory-content"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </article>
    )
}