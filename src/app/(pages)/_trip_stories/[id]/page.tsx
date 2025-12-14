// app/stories/[hospital_slug]/page.tsx
'use client'

import Image from 'next/image'

export default function StoryPage() {
  return (
    <main className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="flex items-center gap-3">
        <Image src="/avatar.jpg" alt="Автор" width={50} height={50} className="rounded-full" />
        <div className="text-gray-800 dark:text-gray-100 font-semibold">Имя автора</div>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Название истории</h1>
      <div className="text-gray-600 dark:text-gray-300">⭐ 4.5</div>

      <Image src="/story.jpg" alt="История" width={800} height={400} className="rounded-2xl shadow object-cover" />

      <div className="space-y-2">
        <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-100">Что понравилось</h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200">
          <li>Красивые виды</li>
          <li>Дружелюбные люди</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-100">Что не понравилось</h2>
        <ul className="list-disc pl-5 text-gray-700 dark:text-gray-200">
          <li>Долгая дорога</li>
        </ul>
      </div>

      <p className="text-gray-700 dark:text-gray-200">Основной текст истории... впечатления, эмоции и т.д.</p>

      <div>
        <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-2">Места, где побывал(а)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 border rounded-2xl p-3 shadow-sm">
            <Image src="/place.jpg" alt="Место" width={60} height={60} className="rounded" />
            <div>
              <div className="font-medium text-gray-800 dark:text-gray-100">Название места</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">⭐ 4.8</div>
            </div>
          </div>
          {/* Добавь еще места */}
        </div>
      </div>
    </main>
  )
}
