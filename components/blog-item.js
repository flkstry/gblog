import Image from "next/image";
import Link from "next/link";

export default function BlogItem({
    title,
    summary,
    to,
    imgSrc,
}) {
    return (
        <div className="flex flex-col w-full max-w-md">
            <div className="w-full h-48">
                {
                    imgSrc ? (
                        <Image
                            src={imgSrc}
                            alt={title}
                            layout='fill'
                            objectFit='contain'
                            className="rounded-md"
                        />
                    ) : (
                        <div
                            className="bg-gray-400 h-48 w-full rounded-md"
                        />
                    )
                }
            </div>
            <Link href={to}>
                <a className="mt-2 mb-4 w-fit text-2xl hover-underline-animation font-extrabold tracking-tight text-gray-700 dark:text-gray-200">
                    {title}
                </a>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                {summary}
            </p>
        </div>
    )
}