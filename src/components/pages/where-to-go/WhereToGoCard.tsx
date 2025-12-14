import Link from "next/link";
import React from "react";

interface PoiCardProps {
    title: string;
    image: string;
    description: string;
    category: string;
    included: string[];
    rating?: number;
    reviewsCount?: number;
    link: string;
}

export default function WhereToGoCard(
    {
        title, image, description, category, included, rating, reviewsCount, link
    }: PoiCardProps) {
    const getRatingEmoji = () => {
        if (!rating) return "";
        if (rating >= 4.5) return "😊 (супер)";
        if (rating >= 4.0) return "🙂 (хорошо)";
        if (rating >= 3.0) return "😐 (средне)";
        if (rating >= 2.0) return "😟 (плохо)";
        if (rating >= 1.0) return "😡 (ужасно)";
        return "";
    };

    return (
        <div
            className="group relative flex flex-col md:flex-row bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow hover:shadow-lg transition overflow-hidden h-auto md:h-[260px]">
            {/* Левая часть */}
            <div className="relative md:w-72 h-48 md:h-full shrink-0 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Правая часть */}
            <div className="flex-1 flex flex-col justify-between p-4">
                <div>
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 line-clamp-1">
                        {title}
                    </h2>

                    <div className="flex items-center flex-wrap gap-2 mt-2">
            <span className="bg-pink-700/90 text-white text-xs font-medium px-2 py-0.5 rounded-full">
              {category}
            </span>
                        {rating !== undefined && (
                            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-xs">
                                {getRatingEmoji()}
                                <span>Отзывы {reviewsCount ?? 0}</span>
                            </div>
                        )}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">
                        {description}
                    </p>

                    {included.length > 0 && (
                        <div className="mt-3">
                            <div className="text-gray-700 dark:text-gray-300 text-xs mb-1">Что включено</div>
                            <div className="flex flex-wrap gap-2 max-h-12 overflow-y-auto pr-1">
                                {included.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium px-2 py-0.5 rounded-full"
                                    >
                    {item}
                  </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Перенос кнопки вниз */}
                <div className="mt-2">
                    <Link
                        href={link}
                        className="mt-auto inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition text-center"
                    >
                        Перейти →
                    </Link>
                </div>
            </div>
        </div>
    );
}
