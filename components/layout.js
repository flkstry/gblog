import clsx from "clsx";
import Link from "next/link";
import { Navigation } from '@config/navigation';
import { Root, Thumb } from "@radix-ui/react-switch";

export default function LayoutModule({ children }) {
    return (
        <main className="w-screen min-h-screen">
            <header className="max-w-screen-lg w-full mx-auto p-4 flex gap-x-12 items-baseline">
                <Link href="/">
                    <a>
                        <h1 className={clsx(
                            "text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br",
                            // light color
                            "from-sky-700 to-pink-500",
                            // dark color
                            "dark:from-pink-300 dark:to-sky-100",
                        )}>.dev</h1>
                    </a>
                </Link>
                {/* menu lists */}
                <ul className="w-full flex items-center gap-x-8">
                    {Navigation.map(item => <li key={item.to}>
                        <Link href={item.to}>
                            <a className="text-base font-semibold tracking-wide hover-underline-animation">{item.label}</a>
                        </Link>
                    </li>)}
                </ul>
                <div className="flex items-center flex-shrink-0">
                    <Root
                        className="switch-dark-mode"
                        id="dark-mode-trigger"
                    >
                        <Thumb className="switch-dark-mode-thumb" />
                    </Root>
                </div>
            </header>
            {children}
            <footer></footer>
        </main>
    )
}