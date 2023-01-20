import LayoutModule from "@components/layout";
import Seo from "@components/seo";
import Link from "next/link";

export default function NotFoundPage() {
    return (
        <>
            <Seo title="Page Not Found" />
            <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-pink-800 dark:text-pink-400">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Page Not Found.</p>
                    <p className="mb-4 text-lg font-light text-gray-600 dark:text-gray-300">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link href="/">
                        <a className="inline-flex text-white bg-pink-900 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-semibold rounded-lg text-base px-5 py-2.5 text-center dark:focus:ring-pink-900 my-4">
                            Back to Homepage
                        </a>
                    </Link>
                </div>   
            </section>
        </>
    )
}