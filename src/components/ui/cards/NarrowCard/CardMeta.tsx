interface CardMetaProps {
  author?: string;
  publishedAt?: string;
}

export default function CardMeta({ author, publishedAt }: CardMetaProps) {
  if (!author && !publishedAt) return null;

  return (
    <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
      {author && <div>Автор: {author}</div>}
      {publishedAt && <div>Время опубликования: {publishedAt}</div>}
    </div>
  );
}
