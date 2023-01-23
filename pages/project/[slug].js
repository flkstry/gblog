import clsx from 'clsx';
import LayoutModule from '@components/layout';
import Seo from '@components/seo';
import { getFromSlug, projectsPath, getSlug } from '@hooks/article-path';
import rehypeSlug from 'rehype-slug'
import { MDXRemote } from 'next-mdx-remote'
import rehypeHighlight from 'rehype-highlight'
import rehypeCodeTitles from 'rehype-code-titles'
import { serialize } from 'next-mdx-remote/serialize'
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import Head from 'next/head';

export default function ProjectPage({ post: { source, frontmatter } }) {
  console.log(source, frontmatter)
  return (
    <>
      <Head>
        <title>{frontmatter.title} | My blog</title>
      </Head>
      <Seo />
      <LayoutModule>
        <section
          aria-label='hero section'
          className="max-w-screen-lg w-full mx-auto p-4 my-4"
        >
          <article className="prose text-gray-800 dark:text-gray-100">
            <h1 className='text-gray-700 dark:text-gray-100'>{frontmatter.title}</h1>
            <MDXRemote {...source} components={<article />} />
          </article>
        </section>
      </LayoutModule>
    </>
  )
}

// dynamically generate the slugs for each article(s)
export async function getStaticPaths() {
  // getting all paths of each article as an array of
  // objects with their unique slugs
  const paths = (await getSlug(projectsPath)).map((slug) => ({ params: { slug } }))
  return {
    paths,
    // in situations where you try to access a path
    // that does not exist. it'll return a 404 page
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { content, frontmatter } = await getFromSlug(projectsPath, slug)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] },
          },
          { behaviour: 'wrap' },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  })

  return {
    props: {
      post: {
        source: mdxSource,
        frontmatter,
      },
    },
  }
}
