export function PriceCard({ title, price, desc }: { title: string; price: string; desc: string }) {
  return (
    <div className="bg-[#f9f9f9] dark:bg-[#1f1f1f] p-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
      <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">{title}</h3>
      <p className="text-orange-500 font-bold mb-1">{price}</p>
      <p className="text-sm text-[#171717] dark:text-neutral-200 leading-snug">{desc}</p>
    </div>
  );
}
