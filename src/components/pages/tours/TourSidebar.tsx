'use client';

import { useState } from "react";
import { FaArrowsRotate } from "react-icons/fa6";

export default function ToursSidebar() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  return (
    <aside className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-4 space-y-4 h-[280px] flex flex-col justify-between">
      {/* Поле поиска */}
      <div>
        <input
          type="text"
          placeholder="Поиск..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
        />
      </div>

      {/* Категория тура */}
      <div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
        >
          <option value="">Выберите категорию</option>
          <option value="Экскурсионный">Экскурсионный</option>
          <option value="Медицинский">Медицинский</option>
          <option value="Оздоровительный">Оздоровительный</option>
        </select>
      </div>

      {/* Минимальный рейтинг */}
      <div>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
        >
          <option value="">⭐ Минимальный рейтинг</option>
          <option value="супер">😃 Супер</option>
          <option value="хорошо">🙂 Хорошо</option>
          <option value="нормально">😐 Нормально</option>
          <option value="плохо">😕 Плохо</option>
          <option value="ужасно">😡 Ужасно</option>
        </select>
      </div>

      {/* Цена От и До */}
      <div className="flex gap-2">
        <input
          type="number"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
          placeholder="¥ Цена от"
          className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm appearance-none text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
        />
        <input
          type="number"
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value)}
          placeholder="¥ Цена до"
          className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm appearance-none text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
        />
      </div>

      {/* Кнопка сброса */}
      <button
        onClick={() => {
          setSearch("");
          setCategory("");
          setRating("");
          setPriceFrom("");
          setPriceTo("");
        }}
        className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-xl py-2 text-sm font-medium transition"
      >
        <FaArrowsRotate className="mr-2" /> Сбросить
      </button>
    </aside>
  );
}
