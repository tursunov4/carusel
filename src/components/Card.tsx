import Link from "next/link";
import Image, {StaticImageData} from "next/image";

interface CardProps {
    image: string | StaticImageData;
    label: string;
    title?: string;
    buttonText: string;
    link: string;
    children: React.ReactNode;
}

export default function Card({image, label, title, buttonText, link, children}: CardProps) {
    return (
        <div
            className="group rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
            <div className="relative w-full h-56 overflow-hidden">
                <div className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105">
                    <Image
                        src={typeof image === 'string' ? image : image.src}
                        alt={title || 'Изображение карточки'}
                        fill
                        className="object-cover"
                    />
                </div>
                <div
                    className="absolute bottom-0 left-0 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-tr-2xl">
                    {label}
                </div>
            </div>
            <div className="flex flex-col flex-1 p-4">
                {title && (
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2 truncate">
                        {title}
                    </h3>
                )}
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-5 mb-4">
                    {children}
                </p>
                <Link
                    href={link}
                    className="mt-auto inline-block bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-xl text-center transition-colors duration-200"
                >
                    {buttonText} →
                </Link>
            </div>
        </div>
    );
}
