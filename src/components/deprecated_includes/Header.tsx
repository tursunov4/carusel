import React from 'react';
import s from './Header.module.scss';
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.top}>
        <div className={s.brand}>Хуньчунь Инфо</div>

        <nav className={s.topNav} aria-label="Primary">
          <Link href="#med">Медицина <i className={s.chev} /></Link>
          <Link href="#tour">Туризм <i className={s.chev} /></Link>
          <Link href="#info">Информация <i className={s.chev} /></Link>
        </nav>

        <div className={s.meta}>
          <span>☁︎ 32°</span>
          <span className={s.dot} />
          <span>CNY 11,07 ₽</span>
        </div>

        <a className={s.phone} href="tel:+74232665566" aria-label="+7 423 266-55-66">
          <i className={s.icon} />
          <span>+7 423 266-55-66</span>
        </a>

        <div className={s.login}>
          <button className="button button--outline-teal btn">Войти</button>
        </div>
      </div>

      <nav className={s.bottom} aria-label="Secondary">
        <Link href="#desc">Описание</Link>
        <Link href="#services">Услуги</Link>
        <Link href="#clinic">Сервис в клинике</Link>
        <Link href="#pricing">Стоимость услуг</Link>
        <Link href="#work">Наши работы</Link>
        <Link href="#reviews">Отзывы</Link>
      </nav>
    </header>
  );
};

export default Header;
