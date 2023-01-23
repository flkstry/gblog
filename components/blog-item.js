import Image from "next/image";
import Link from "next/link";

export default function BlogItem({
    title,
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
                <a className="my-2 w-fit text-xl font-bold tracking-tight text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white">
                    {title}
                </a>
            </Link>
        </div>
    )
}