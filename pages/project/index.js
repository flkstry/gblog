import clsx from 'clsx';
import LayoutModule from '@components/layout';
import Seo from '@components/seo';
import { getAll, projectsPath } from '@hooks/article-path';
import BlogItem from '@components/blog-item';

export default function ProjectsPage({ projects }) {
  return (
    <>
      <Seo />
      <LayoutModule>
        <section
          aria-label='hero section'
          className="max-w-screen-lg w-full mx-auto p-4 my-4"
        >
            <h2 className={clsx(
                "text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br leading-relaxed",
                // light color
                "from-stone-700 to-purple-500",
                // dark color
                "dark:from-purple-400 dark:to-stone-400")}
            >Projects</h2>
            <p className={clsx(
                "text-lg font-medium leading-8 tracking-wide",
                // light mode
                "text-gray-600",
                // dark mode
                "dark:text-gray-400",)}
            >
                This is a list of all completed and incomplete projects I've worked on.
                <br />
                Also i put all things in the process when learning something new.
            </p>
        </section>
        <section
          aria-label='projects lists section'
          className="max-w-screen-lg w-full mx-auto p-4 my-4"
        >
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              (projects || []).map(i => (
                <li className='my-6' key={i.slug}>
                  <BlogItem
                    title={i.title}
                    to={`/project/${i.slug}`}
                  />
                </li>
              ))
            }
          </ul>
        </section>
      </LayoutModule>
    </>
  )
}

export async function getStaticProps() {
  const res = await getAll(projectsPath)

  if (!res || res.length === 0) return { props: { projects: [] } }

  res
    .map((i) => i.data)
    .sort((a, b) => {
      if (a.data.publishedAt > b.data.publishedAt) return 1
      if (a.data.publishedAt < b.data.publishedAt) return -1

      return 0
    })

  return {
    props: {
      projects: res.reverse(),
    },
  }
}