import Link from 'next/link'
import { getAllTheorySlugs, getTheoryData } from '@/lib/theories'
import TheoryContent from '@/components/TheoryContent'

export async function generateStaticParams() {
    const slugs = getAllTheorySlugs()
    return slugs.map(({slug}) => ({slug}))
}

export default async function TheoryPage({ params: {slug} }) {
    const theory = await getTheoryData(slug)

    return (
        <div className="pb-16">
            <Link
                href="/theories"
                className="inline-flex items-center text-gray-400 hover:text-gray-200 transition-colors mb-8"
            >
                <span className="mr-2">←</span> Back to Theories
            </Link>

            <TheoryContent {...theory} />
        </div>
    )
}