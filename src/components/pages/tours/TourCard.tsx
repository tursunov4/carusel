import Link from "next/link";
import React from "react";

interface TourCardProps {
  title: string;
  image: string;
  description: string;
  category: string;
  rating: number;
  reviewsCount: number;
  link: string;
}

export default function TourCard({
  title,
  image,
  description,
  category,
  rating,
  reviewsCount,
  link
}: TourCardProps) {

  const getRatingEmoji = () => {
    if (rating >= 4.5) return "😊";
    if (rating >= 4.0) return "🙂";
    if (rating >= 3.0) return "😐";
    if (rating >= 2.0) return "😟";
    if (rating >= 1.0) return "😡";
    return "";
  };

  return (
    <div className="group relative flex flex-col md:flex-row bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow hover:shadow-lg transition overflow-hidden h-auto md:h-[280px]">
      {/* Левая часть с изображением */}
      <div className="relative md:w-72 h-48 md:h-full shrink-0 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

      {/* Правая часть */}
      <div className="flex flex-col flex-1 p-4 space-y-2">
        {/* Заголовок */}
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h2>

        {/* Рейтинг */}
        <div className="flex items-center flex-wrap gap-2 mt-2">
            <span className="bg-green-500/90 text-white text-xs font-medium px-2 py-0.5 rounded-full">
              {category}
            </span>
            {getRatingEmoji() && (
              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm">
                {getRatingEmoji()} <span className="font-medium">{rating}</span>
                <span className="text-blue-600 dark:text-blue-400">Отзывы ({reviewsCount})</span>
              </div>
            )}
          </div>

        {/* Описание */}
        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-6">{description}</p>

        {/* Кнопка */}
        <div className="mt-auto">
          <Link
            href={link}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1.5 rounded-xl transition"
          >
            Перейти →
          </Link>
        </div>
      </div>
    </div>
  );
}
