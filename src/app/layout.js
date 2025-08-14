import "./globals.css";
import Layout from '@/components/Layout'

export const metadata = {
  title: "Kossiary - Kossman's Diary",
  description: "My diary, my thoughts, my life.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
        <body className="bg-[#1a1a1a] text-gray-100 antialiased">
        <Layout>{children}</Layout>
        </body>
        </html>
    );
}
