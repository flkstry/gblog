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
          className="max-w-screen-lg w-full mx-auto p-4 my-4 h-96 flex flex-col items-center justify-center"
        >
          <h2 className={clsx(
              "text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br",
              // light mode
              "text-gray-600",
              // dark mode
              "dark:text-gray-300",)}
          >
            I'm{" "}
            <span className="font-extrabold">
              Uzumaki Saburo,
            </span>
          </h2>
          <p className={clsx(
              "text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-br mt-2",
              // light color
              "from-sky-500 to-pink-500",
              // dark color
              "dark:from-pink-100 dark:to-sky-100",)}
          >
            a Sofware Engineer.
          </p>
          <button className={clsx(
            "px-5 py-2 mt-10 rounded-md text-base font-bold tracking-wide bg-pink-900 text-white",
            // hover
            "hover:bg-pink-800",
            // focus
            "focus:ring-2 focus:ring-pink-400",
          )}>Get In Touch</button>
        </section>
      </LayoutModule>
    </>
  )
}
