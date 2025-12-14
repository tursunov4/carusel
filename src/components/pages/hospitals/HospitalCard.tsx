// components/HospitalCard.tsx
import Link from "next/link";

interface HospitalCardProps {
  title: string;
  image: string;
  description: string;
  specializations: string[];
  rating: number;
  reviewsCount: number;
  link: string;
}

export default function HospitalCard({
  title,
  image,
  description,
  specializations,
  rating,
  reviewsCount,
  link,
}: HospitalCardProps) {
  // Выбираем смайлик по рейтингу
  const getRatingEmoji = () => {
    if (rating >= 4.5) return "😊";
    if (rating >= 4.0) return "🙂";
    if (rating >= 3.0) return "😐";
    if (rating >= 2.0) return "😟";
    if (rating >= 1.0) return "😡";
    return "";
  };

  return (
    <div className="group relative flex flex-col md:flex-row bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow hover:shadow-lg transition overflow-hidden h-auto md:h-[260px]">
      {/* Левая часть с изображением */}
      <div className="relative md:w-72 h-48 md:h-full shrink-0 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Правая часть с контентом */}
      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h2>

          <div className="flex items-center flex-wrap gap-2 mt-2">
            <span className="bg-green-500/90 text-white text-xs font-medium px-2 py-0.5 rounded-full">
              Общий профиль
            </span>
            {getRatingEmoji() && (
              <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm">
                {getRatingEmoji()} <span className="font-medium">{rating}</span>
                <span className="text-blue-600 dark:text-blue-400">Отзывы ({reviewsCount})</span>
              </div>
            )}
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 line-clamp-2">
            {description}
          </p>

          {specializations.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 max-h-16 overflow-y-auto pr-1">
              {specializations.map((spec, idx) => (
                <span
                  key={idx}
                  className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium px-2 py-0.5 rounded-full"
                >
                  {spec}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Кнопка под информацией */}
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
