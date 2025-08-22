export default function PostContent({ title, date, contentHtml, tags }) {
    return (
        <article className="prose dark:prose-invert max-w-none">
            <h1 className="mb-2">{title}</h1>
            <time className="text-gray-500 text-sm block mb-6">
                {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </time>
            {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map((tag) => (
                        <span
                        key={tag}
                        className="inline-block bg-rose-400/20 text-rose-300 text-xs font-medoum px-2 py-1 rounded-full border border-rose-400/30"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
    )
}