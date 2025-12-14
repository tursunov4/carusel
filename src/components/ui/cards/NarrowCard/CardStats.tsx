import { AiOutlineEye } from 'react-icons/ai';

interface CardStatsProps {
  views?: number;
}

export default function CardStats({ views }: CardStatsProps) {
  if (typeof views !== 'number') return null;

  return (
    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-1">
      <AiOutlineEye className="mr-1" />
      Количество просмотров: <span className="ml-1 font-semibold text-red-500">{views}</span>
    </div>
  );
}

