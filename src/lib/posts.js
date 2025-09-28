import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'src', 'posts')

function getAllMarkdownFiles(dir) {
    let files = []
    const items = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const item of items) {
        const fullPath = path.join(dir, item.name)
        if (item.isDirectory()) {
            files = files.concat(getAllMarkdownFiles(fullPath))
        } else if (item.name.endsWith('.md')) {
            files.push(fullPath)
        }
    }
    
    return files
}

export function getSortedPostsData() {
    const allFiles = getAllMarkdownFiles(postsDirectory)
    
    const allPostsData = allFiles.map((filePath) => {
        const fileName = path.basename(filePath)
        const slug = fileName.replace(/\.md$/, '')

        const relativePath = path.relative(postsDirectory, filePath)
        const category = path.dirname(relativePath)
        
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const matterResult = matter(fileContents)
        
        return {
            slug,
            category: category === '.' ? 'general' : category,
            filePath,
            ...(matterResult.data),
        }
    })
    
    return allPostsData.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })
}

export function getAllPostSlugs() {
    const allFiles = getAllMarkdownFiles(postsDirectory)
    
    return allFiles.map((filePath) => {
        const fileName = path.basename(filePath)
        return {
            slug: fileName.replace(/\.md$/, ''),
        }
    })
}

export async function getPostsData(slug) {
    const allFiles = getAllMarkdownFiles(postsDirectory)
    const matchingFile = allFiles.find(filePath => {
        const fileName = path.basename(filePath)
        return fileName.replace(/\.md$/, '') === slug
    })
    
    if (!matchingFile) {
        throw new Error(`Post with slug "${slug}" not found`)
    }
    
    const fileContents = fs.readFileSync(matchingFile, 'utf8')
    const matterResult = matter(fileContents)

    const relativePath = path.relative(postsDirectory, matchingFile)
    const category = path.dirname(relativePath)
    
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()
    
    return {
        slug,
        category: category === '.' ? 'general' : category,
        contentHtml,
        ...(matterResult.data),
    }
}
