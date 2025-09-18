import { getSortedTheoriesData } from '@/lib/theories'
import TheoryCard from '@/components/TheoryCard'

export default function TheoriesPage() {
    const theories = getSortedTheoriesData()

    return (
        <div>
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-2">Crazy Theories</h2>
                <p className="text-gray-400">My wild ideas</p>
            </div>

            <div className="space-y-8">
                {theories.map((theory) => (
                    <TheoryCard key={theory.slug} {...theory} />
                ))}
            </div>

            {theories.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-400">No theories yet.</p>
                </div>
            )}
        </div>
    )
}