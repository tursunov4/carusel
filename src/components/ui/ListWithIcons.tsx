export function ListWithIcons({ items, numbered = false }: { items: string[]; numbered?: boolean }) {
  return (
    <ul className="space-y-2 pl-4 mt-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <span className="text-orange-500 font-bold min-w-[1.5em]">
            {numbered ? `${idx + 1}.` : '•'}
          </span>
          <span className="text-[#171717] dark:text-neutral-200">{item}</span>
        </li>
      ))}
    </ul>
  );
}
