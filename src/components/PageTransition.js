"use client"

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }) {
    const [isLoading, setIsLoading] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsLoading(true)

        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 300)

        return () => clearTimeout(timer)
    }, [pathname])

    return (
        <div className="relative">
            <div
                className={`fixed inset-0 bg-[#1a1a1a] transition-opacity duration-300 z-50 pointer-events-none ${
                    isLoading ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="flex items-center justify-center h-full">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="relative">
                            <div className="w-8 h-8 border-2 border-gray-600 border-t-gray-300 rounded-full animate-spin"></div>
                        </div>
                        <div className="text-gray-400 text-sm">Loading...</div>
                    </div>
                </div>
            </div>

            <div
                className={`transition-all duration-500 ${
                    isLoading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
            >
                {children}
            </div>
        </div>
    )
}