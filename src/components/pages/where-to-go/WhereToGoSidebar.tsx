'use client';

import { useState } from "react";
import { FaArrowsRotate } from "react-icons/fa6";

export default function WhereToGoSidebar() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const resetFilters = () => {
    setSearch("");
    setType("");
    setPriceFrom("");
    setPriceTo("");
  };

  return (
    <aside className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-4 flex flex-col justify-between h-[260px]">
      {/* Поиск */}
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

      {/* Тип заведения */}
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
      >
        <option value="">Тип заведения...</option>
        <option value="Магазин">Магазин</option>
        <option value="Торговый центр">Торговый центр</option>
        {/* Добавь свои */}
      </select>

      {/* Цена */}
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="¥ Цена От"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
          className="w-1/2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
        />
        <input
          type="number"
          placeholder="¥ Цена До"
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value)}
          className="w-1/2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
        />
      </div>

      {/* Кнопка сброса */}
      <button
        onClick={resetFilters}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl px-4 py-2 transition flex items-center justify-center gap-1"
      >
        <FaArrowsRotate className="text-white" />
        Сбросить
      </button>
    </aside>
  );
}
