'use client';

import { useState } from "react";

export default function HotelsSidebar() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [facilities, setFacilities] = useState<string[]>([]);

  const toggleFacility = (facility: string) => {
    setFacilities((prev) =>
      prev.includes(facility)
        ? prev.filter((f) => f !== facility)
        : [...prev, facility]
    );
  };

  return (
    <aside className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-4 space-y-5 md:h-[280px] overflow-auto">
      {/* Категория отеля */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Категория отеля
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
        >
          <option value="">Все категории</option>
          <option value="Бизнес-отель">Бизнес-отель</option>
          <option value="Спа-отель">Спа-отель</option>
          <option value="Апарт-отель">Апарт-отель</option>
          {/* Добавь другие категории */}
        </select>
      </div>

      {/* Название отеля */}
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Название отеля
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

      {/* Что есть в гостинице (аккордеон-имитация) */}
      <details className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl">
        <summary className="px-3 py-2 cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-200 select-none">
          Что есть в гостинице
        </summary>
        <div className="flex flex-col gap-2 px-3 pb-3 mt-2">
          {["Wi-Fi", "Бассейн", "Завтрак", "Тренажёрный зал", "Кондиционер", "Парковка", "Ресторан"].map((facility) => (
            <label
              key={facility}
              className="inline-flex items-center gap-2 cursor-pointer text-sm text-gray-700 dark:text-gray-200"
            >
              <input
                type="checkbox"
                checked={facilities.includes(facility)}
                onChange={() => toggleFacility(facility)}
                className="rounded border-gray-300 dark:border-gray-600/50 focus:ring-orange-400"
              />
              {facility}
            </label>
          ))}
        </div>
      </details>
    </aside>
  );
}
