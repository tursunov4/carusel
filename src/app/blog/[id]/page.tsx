'use client'
export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-8">
      <div className="text-sm text-gray-500 dark:text-gray-400">12 июня 2025</div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">Заголовок статьи</h1>
      <article className="space-y-6 text-gray-700 dark:text-gray-200">
        <p>Текст абзаца...</p>
        <img src="/images/sample.jpg" className="rounded-2xl shadow" />
        <p>Следующий абзац...</p>
      </article>
    </div>
  )
}
