interface CardTitleProps {
  title: string;
}

export default function CardTitle({ title }: CardTitleProps) {
  return (
    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2 truncate">
      {title}
    </h3>
  );
}
