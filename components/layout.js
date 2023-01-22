import clsx from "clsx";
import Link from "next/link";
import { Navigation } from '@config/navigation';
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IconBrightnessDown, IconMoon } from "@tabler/icons";

export default function LayoutModule({ children }) {
    const {systemTheme , theme, setTheme} = useTheme ();
    const [mounted, setMounted] = useState(false);

    useEffect(() =>{
        setMounted(true);
    },[])

    const renderThemeChanger= () => {
        if(!mounted) return null;
        const currentTheme = theme === "system" ? systemTheme : theme ;
        if(currentTheme ==="dark"){
            return (
                <button
                    type="button"
                    onClick={() => setTheme("light")}
                    className={clsx(
                        "rounded-full p-1.5 text-center inline-flex items-center",
                        "hover:bg-gray-200",
                        "focus:ring-4 focus:outline-none focus:ring-gray-300",
                        "dark:hover:bg-gray-700 dark:focus:ring-gray-500"
                    )}
                >
                    <IconMoon />
                </button>
            )
        }

        else {
            return (
                <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    className={clsx(
                        "rounded-full p-1.5 text-center inline-flex items-center",
                        "hover:bg-gray-200",
                        "focus:ring-4 focus:outline-none focus:ring-gray-300",
                        "dark:hover:bg-gray-700 dark:focus:ring-gray-500"
                    )}
                >
                    <IconBrightnessDown />
                </button>
            )
        }
    };
    return (
        <main className="w-full min-h-screen">
            <header className="max-w-screen-lg w-full mx-auto p-4 flex gap-x-6 sm:gap-x-12 items-center">
                <Link href="/">
                    <a className="flex-shrink-0">
                        <h1 className={clsx(
                            "text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-br",
                            // light color
                            "from-purple-800 to-fuchsia-800",
                            // dark color
                            "dark:from-fuchsia-100 dark:to-purple-100",
                        )}>0 10 0</h1>
                    </a>
                </Link>
                {/* menu lists */}
                <ul className="w-full flex items-center gap-x-4 sm:gap-x-8 justify-end xs:justify-start">
                    {Navigation.map(item => <li key={item.to}>
                        <Link href={item.to}>
                            <a className="uppercase text-sm font-bold tracking-wide hover-underline-animation">{item.label}</a>
                        </Link>
                    </li>)}
                </ul>
                <div className="xs:block hidden">
                    {renderThemeChanger()}
                </div>
            </header>
            {children}
            <footer></footer>
        </main>
    )
}