import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { sync } from 'glob'

export const articlesPath = path.join(process.cwd(), 'data/blog')
export const projectsPath = path.join(process.cwd(), 'data/project')

export async function getSlug(_path) {
  const paths = sync(path.join(_path, `*.mdx`).replace(/\\/g, '/'))

  return paths.map((p) => {
    // holds the paths to the directory of the article
    const pathContent = p.split('/')
    const fileName = pathContent[pathContent.length - 1]
    const [slug, _extension] = fileName.split('.')

    return slug
  })
}

export async function getFromSlug(_path, slug) {
  const dir = path.join(_path, `${slug}.mdx`)
  const source = fs.readFileSync(dir)
  const { content, data } = matter(source)

  return {
    content,
    frontmatter: {
      slug,
      excerpt: data.excerpt,
      title: data.title,
      publishedAt: data.publishedAt,
      readingTime: readingTime(source).text,
      ...data,
    },
  }
}

export async function getAll(_path) {
  const res = fs.readdirSync(_path)

  return res.reduce((allResult, slugResult) => {
    // get parsed data from mdx files in the "articles" dir
    const source = fs.readFileSync(
      path.join(_path, slugResult),
      'utf-8'
    )
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: slugResult.replace('.mdx', ''),
        readingTime: readingTime(source).text,
      },
      ...allResult,
    ]
  }, [])
}