import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import PostCard from '@/components/PostCard'

const POSTS_PER_PAGE = 6

export default async function Home({ searchParams }) {
    const allPosts = getSortedPostsData()
    const currentPage = Number(searchParams?.page) || 1
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)

    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    const posts = allPosts.slice(startIndex, endIndex)

    return (
        <div>
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">Latest Posts</h2>
                <p className="text-gray-400">Discover my thoughts and insights</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {posts.map((post) => (
                    <PostCard key={post.slug} {...post} />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4">
                    {currentPage > 1 ? (
                        <Link
                            href={currentPage > 2 ? `/?page=${currentPage - 1}` : '/'}
                            className="px-4 py-2 text-gray-300 hover:text-white transition-colors border border-gray-600/30 rounded-lg hover:border-gray-500/50"
                        >
                            Previous
                        </Link>
                    ) : (
                        <span className="px-4 py-2 text-gray-600 border border-gray-700/30 rounded-lg cursor-not-allowed">
                            Previous
                        </span>
                    )}

                    <div className="flex space-x-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                            <Link
                                key={pageNum}
                                href={pageNum === 1 ? '/' : `/?page=${pageNum}`}
                                className={`px-3 py-2 rounded-lg transition-colors ${
                                    pageNum === currentPage
                                        ? 'bg-gray-700 text-white border border-gray-500'
                                        : 'text-gray-300 hover:text-white border border-gray-600/30 hover:border-gray-500/50'
                                }`}
                            >
                                {pageNum}
                            </Link>
                        ))}
                    </div>

                    {currentPage < totalPages ? (
                        <Link
                            href={`/?page=${currentPage + 1}`}
                            className="px-4 py-2 text-gray-300 hover:text-white transition-colors border border-gray-600/30 rounded-lg hover:border-gray-500/50"
                        >
                            Next
                        </Link>
                    ) : (
                        <span className="px-4 py-2 text-gray-600 border border-gray-700/30 rounded-lg cursor-not-allowed">
                            Next
                        </span>
                    )}
                </div>
            )}

            <div className="text-center mt-6 text-sm text-gray-500">
                Showing {startIndex + 1}-{Math.min(endIndex, allPosts.length)} of {allPosts.length} posts
            </div>
        </div>
    )
}
