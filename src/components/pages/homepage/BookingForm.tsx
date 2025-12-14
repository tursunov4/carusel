"use client";


export default function BookingForm() {
  return (
    <form className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold mb-2">Забронируйте тур</h2>
      <input type="text" placeholder="Как вас зовут" className="border rounded px-3 py-2" />
      <input type="tel" placeholder="Телефон для связи" className="border rounded px-3 py-2" />
      <input type="number" placeholder="Количество человек" className="border rounded px-3 py-2" />
      <input type="text" placeholder="Выберите даты" className="border rounded px-3 py-2" />
      <label className="flex items-center gap-2">
        <input type="checkbox" />
        <span>Лечебный/Стоматологический тур</span>
      </label>
      <div className="text-gray-500 text-sm">Стоимость: <span className="font-semibold">0 рублей</span></div>

      <button type="button" className="btn btn-orange btn-primary">Забронировать</button>
      <button type="button" className="btn btn-orange btn-outline">Онлайн консультация</button>
    </form>
  );
}
