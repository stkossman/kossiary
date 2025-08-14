import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src', 'posts')

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)

    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')

        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)

        return {
            slug,
            ...(matterResult.data),
        }
    })

    return allPostsData.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })
}

export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map((fileName) => ({
        slug: fileName.replace(/\.md$/, ''),
    }))
}

export async function getPostsData(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        slug,
        contentHtml,
        ...(matterResult.data),
    }
}