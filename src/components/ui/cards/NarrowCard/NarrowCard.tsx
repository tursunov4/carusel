import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardMeta from './CardMeta';
import CardStats from './CardStats';
import CardButton from './CardButton';
import {StaticImageData} from "next/image";
import {ReactNode} from "react";

export interface NarrowCardProps {
  image?: string | StaticImageData;
  label?: string;
  title?: string;
  author?: string;
  publishedAt?: string;
  views?: number;
  link?: string;
  buttonText?: string;
  children?: ReactNode;
}

export default function NarrowCard({
  image,
  label,
  title,
  author,
  publishedAt,
  views,
  link,
  buttonText = 'Посмотреть',
  children,
}: NarrowCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
      {image && <CardImage src={image} label={label} alt={title} />}
      <div className="flex flex-col flex-1 p-4">
        {title && <CardTitle title={title} />}
        <CardStats views={views} />
        <CardMeta author={author} publishedAt={publishedAt} />
        {children && (
          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4 mb-4">
            {children}
          </p>
        )}
        {link && <CardButton href={link} text={buttonText} />}
      </div>
    </div>
  );
}
