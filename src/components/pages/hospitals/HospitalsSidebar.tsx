'use client';

import { useState } from "react";

export default function HospitalsSidebar() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [services, setServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <aside className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-4 space-y-5 md:h-[260px]">
      {/* Категория клиники */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Категория клиники
        </label>
        <select
          className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Все категории</option>
          <option value="Китайская медицина">Китайская медицина</option>
          {/* Добавь другие категории */}
        </select>
      </div>

      {/* Название клиники */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Название клиники
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Поиск..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 pr-9 text-sm text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none">
            🔍
          </span>
        </div>
      </div>

      {/* Категории услуг */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Категории услуг
        </label>
        <div className="flex flex-col gap-2">
          <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-gray-700 dark:text-gray-200">
            <input
              type="checkbox"
              checked={services.includes("Китайская медицина")}
              onChange={() => toggleService("Китайская медицина")}
              className="rounded border-gray-300 dark:border-gray-600/50 focus:ring-orange-400"
            />
            Китайская медицина
          </label>
          {/* Добавь другие категории услуг аналогично */}
        </div>
      </div>
    </aside>
  );
}
