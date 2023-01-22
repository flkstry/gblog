import clsx from 'clsx';
import LayoutModule from '@components/layout';
import Seo from '@components/seo';

export default function Home() {
  return (
    <>
      <Seo />
      <LayoutModule>
        <section
          aria-label='hero section'
          className="max-w-screen-lg w-full mx-auto p-4 my-4 h-96 flex flex-col sm:items-center items-start justify-center"
        >
          <h2 className={clsx(
              "text-6xl font-bold",
              // light mode
              "text-gray-700",
              // dark mode
              "dark:text-gray-100",)}
          >
            I'm{" "}
            <span className="font-extrabold">
              Yasuo,
            </span>
          </h2>
          <p className={clsx(
              "text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-br mt-2",
              // light color
              "from-purple-800 to-fuchsia-800",
              // dark color
              "dark:from-fuchsia-100 dark:to-purple-100",
            )}
          >
            An adventurer who switches career to software engineer.
          </p>
          <button className={clsx(
            "px-5 py-2 mt-10 rounded-md text-base font-bold tracking-wide text-white bg-gradient-to-br",
            // light color
            "from-purple-800 to-fuchsia-800",
            // hover
            "hover:bg-blue-800",
            // focus
            "focus:ring-2 focus:ring-blue-400",
          )}>Get In Touch</button>
        </section>
      </LayoutModule>
    </>
  )
}
