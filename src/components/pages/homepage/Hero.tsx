"use client";

import bg from "@/assets/img/photo_2023-12-27_20-38-17.jpg"

export default function Hero() {
  return (
    <section className="w-full bg-cover bg-center bg-no-repeat relative"
             style={{ backgroundImage: `url('${bg.src}')`, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className="w-full bg-cover bg-center bg-no-repeat relative"
             style={{backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
        <div className="max-w-screen-xl mx-auto px-4 py-12 flex items-center justify-between">
        <div className="text-white max-w-xl mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Все про лечебные туры, лечение зубов и путешествия в Хуньчунь
          </h1>
          <p className="text-base md:text-lg text-gray-200">
            Мы стараемся каждый день, чтобы вам было легче путешествовать. На нашем портале вы найдете все от подробных гидов и секретных мест в Хуньчуне до советов по планированию поездки в Китай, поможем вам выбрать отель, подобрать экскурсию и многое другое.
          </p>
          <button className="btn btn-orange btn-primary">
            ПОСМОТРЕТЬ ТУРЫ →
          </button>
        </div>
            {/* <div className="w-full max-w-md  bg-white dark:bg-gray-800 bg-opacity-95 rounded-xl shadow p-6"> */}
            {/*   <BookingForm /> */}
            {/* </div> */}
      </div>
      </div>
    </section>
  );
}
