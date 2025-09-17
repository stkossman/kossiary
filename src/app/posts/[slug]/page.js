import Link from 'next/link'
import { getAllPostSlugs, getPostsData } from '@/lib/posts'
import PostContent from '@/components/PostContent'

export async function generateStaticParams() {
    const slugs = getAllPostSlugs()
    return slugs.map(({slug}) => ({slug}))
}

export default async function PostPage({ params: {slug} }) {
    const post = await getPostsData(slug)

    return (
        <div className="pb-16">
            <Link
                href="/"
                className="inline-flex items-center text-gray-400 hover:text-gray-200 transition-colors mb-8"
            >
                <span className="mr-2">←</span> Back to Home
            </Link>

            <PostContent {...post} />
        </div>
    )
}