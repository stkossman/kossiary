import Link from 'next/link';
import PageTransition from '@/components/PageTransition';

export default function Layout({children}) {
    return (
        <div className="flex min-h-screen bg-[#1a1a1a]">
            <aside className="w-64 flex flex-col justify-center items-center px-8 py-12 fixed left-0 top-0 h-full bg-black">
                <nav className="space-y-8 text-left">

                    <div className="mb-12">
                        <h1 className="text-2xl font-bold tracking-tight mb-2">
                            <Link href="/" className="hover:text-gray-300 transition-colors">
                                Kossiary
                            </Link>
                        </h1>
                        <p className="text-gray-400 text-sm">
                            Thoughts & Notes
                        </p>
                    </div>

                    <div className="space-y-6">
                        <Link href="/" className="block text-gray-300 hover:text-white transition-colors font-medium">
                            Home
                        </Link>
                        <Link href="/theories" className="block text-gray-300 hover:text-white transition-colors font-medium">
                            Crazy Theories
                        </Link>
                        <Link href="/about" className="block text-gray-300 hover:text-white transition-colors font-medium">
                            About
                        </Link>

                        <div className="relative group">
                            <button className="text-gray-300 hover:text-white transition-colors font-medium">
                                Links
                            </button>
                            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-32 bg-neutral-900 rounded-lg border border-gray-700 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                                <div className="py-2">
                                    {[
                                        { href: "https://github.com/stkossman", text: "Github" },
                                        { href: "https://www.linkedin.com/in/andriistavskyi", text: "Linkedin" },
                                        { href: "https://www.npmjs.com/~kossman", text: "NPM" },
                                        { href: "https://kossman-portfolio.vercel.app", text: "Portfolio" }
                                    ].map(({ href, text }) => (
                                        <a
                                            key={text}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-neutral-800 transition-colors"
                                        >
                                            {text}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>


            <div className="bg-black flex-1 ml-64">
                <div className="max-w-6xl mx-auto px-8 py-12">
                    <PageTransition>
                        <main className={`flex-grow`}>{children}</main>
                    </PageTransition>
                </div>
            </div>
        </div>
    )
}