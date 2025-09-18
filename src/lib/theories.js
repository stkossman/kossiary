import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const theoriesDirectory = path.join(process.cwd(), 'src', 'theories')

export function getSortedTheoriesData() {
    const fileNames = fs.readdirSync(theoriesDirectory)

    const allTheoriesData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(theoriesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
            slug,
            ...matterResult.data
        }
    })

    return allTheoriesData.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })
}

export function getAllTheorySlugs() {
    const fileNames = fs.readdirSync(theoriesDirectory)
    return fileNames.map((fileName) => ({
        slug: fileName.replace(/\.md$/, ''),
    }))
}

export async function getTheoryData(slug) {
    const fullPath = path.join(theoriesDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        slug,
        contentHtml,
        ...matterResult.data,
    }
}