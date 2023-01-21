import clsx from 'clsx';
import LayoutModule from '@components/layout';
import Seo from '@components/seo';
import BlogItem from '@components/blog-item';

export default function BlogsPage() {
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
                "from-emerald-700 to-yellow-500",
                // dark color
                "dark:from-yellow-400 dark:to-emerald-400")}
            >Blogs</h2>
            <p className={clsx(
                "text-lg font-medium leading-8 tracking-wide",
                // light mode
                "text-gray-600",
                // dark mode
                "dark:text-gray-400",)}
            >
                Mostly from my journey to learn something new.
                <br />
                More to personal notes so I don't forget.
            </p>
        </section>
        <section
          aria-label='article lists section'
          className="max-w-screen-lg w-full mx-auto p-4 my-4"
        >
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              [0, 0, 0, 0, 0].map(i => (
                <li className='my-6'>
                  <BlogItem
                    title="Article Title"
                    summary="Empower Developers, IT Ops, and business teams to collaborate at high velocity."
                    to="/"
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
