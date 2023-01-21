import clsx from 'clsx';
import LayoutModule from '@components/layout';
import Seo from '@components/seo';

export default function ProjectPage() {
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
                "from-sky-700 to-pink-500",
                // dark color
                "dark:from-pink-400 dark:to-sky-400")}
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
      </LayoutModule>
    </>
  )
}
