import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

export default function Layout({children}) {
    return (
        <div className="flex min-h-screen bg-[#1a1a1a]">
            <aside className="w-64 flex flex-col justify-center items-center px-8 py-12 fixed left-0 top-0 h-full">
                <nav className="space-y-8 text-left">

                    {/* title */}
                    <div className="mb-12">
                        <h1 className="text-2xl font-bold tracking-tight mb-2">
                            <Link href="/" className="hover:text-rose-200 transition-colors">
                                Kossiary
                            </Link>
                        </h1>
                        <p className="text-gray-400 text-sm">
                            Thoughts & Notes
                        </p>
                    </div>

                    {/* nav links */}
                    <div className="space-y-6">
                        <Link
                        href="/"
                        className="block text-gray-300 hover:text-rose-200 transition-colors font-medium">
                            Home
                        </Link>
                        <Link
                        href="/about"
                        className="block text-gray-300 hover:text-rose-200 transition-colors font-medium"
                        >
                            About
                        </Link>
                        <div className="relative group">
                            <button className="text-gray-300 hover:text-white transition-colors font-medium">
                                Links
                            </button>

                            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-32 bg-[#2a2a2a] rounded-lg border border-gray-600/30 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                                <div className="py-2">
                                    <a
                                        href="https://github.com/stkossman"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
                                    >
                                        Github
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/andriistavskyi"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
                                    >
                                        Linkedin
                                    </a>
                                    <a
                                        href="https://www.npmjs.com/~kossman"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
                                    >
                                        NPM
                                    </a>
                                    <a
                                        href="https://kossman-portfolio.vercel.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 transition-colors"
                                    >
                                        Portfolio
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>

            <div className="flex-1 ml-64">
                <div className="max-w-6xl mx-auto px-8 py-12">
                    <PageTransition>
                        <main className={`flex-grow`}>{children}</main>
                    </PageTransition>
                </div>
            </div>
        </div>
    )
}