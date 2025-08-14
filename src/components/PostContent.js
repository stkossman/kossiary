export default function PostContent({ title, date, contentHtml }) {
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
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
    )
}