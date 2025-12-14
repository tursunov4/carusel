import Link from "next/link";
import { FaWifi, FaUtensils, FaTv, FaSnowflake, FaSwimmingPool, FaDumbbell, FaConciergeBell } from 'react-icons/fa';

interface HotelCardProps {
  title: string;
  image: string;
  description: string;
  nearby: string[];
  rating: number;
  reviewsCount: number;
  link: string;
}

export default function HotelCard({
  title,
  image,
  description,
  nearby,
  rating,
  reviewsCount,
  link,
}: HotelCardProps) {
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
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h2>

          <div className="flex items-center flex-wrap gap-2 mt-2">
            {getRatingEmoji() && (
              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm">
                {getRatingEmoji()} <span className="font-medium">{rating}</span>
                <span className="text-blue-600 dark:text-blue-400">Отзывы ({reviewsCount})</span>
              </div>
            )}
          </div>

          {/* Что рядом */}
          {nearby.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 max-h-16 overflow-y-auto pr-1">
              {nearby.map((place, idx) => (
                <span
                  key={idx}
                  className="bg-pink-200 dark:bg-pink-900 text-pink-800 dark:text-pink-100 text-xs font-medium px-2 py-0.5 rounded-full"
                >
                  {place}
                </span>
              ))}
            </div>
          )}

          {/* Краткое описание */}
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">
            {description}
          </p>

          {/* Иконки услуг */}
          <div className="flex gap-2 text-orange-500 text-lg mt-3">
            <FaWifi title="Wi-Fi" />
            <FaUtensils title="Завтрак" />
            <FaTv title="Телевизор" />
            <FaSnowflake title="Кондиционер" />
            <FaSwimmingPool title="Бассейн" />
            <FaDumbbell title="Тренажёрный зал" />
            <FaConciergeBell title="Обслуживание" />
          </div>
        </div>

        {/* Кнопка перехода */}
        <div className="mt-4">
          <Link
            href={link}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold rounded-full px-4 py-2 transition"
          >
            Перейти →
          </Link>
        </div>
      </div>
    </div>
  );
}
