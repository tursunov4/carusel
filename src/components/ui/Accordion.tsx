'use client'

import {ReactNode, useState} from 'react';

interface Item {
  title: string;
  content: ReactNode;
}

export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="border rounded-2xl overflow-hidden dark:border-gray-600">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-gray-700 text-left text-gray-800 dark:text-gray-100 font-semibold"
          >
            {item.title}
            <span>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div className="px-4 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
