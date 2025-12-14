import React from 'react';
import s from './Footer.module.scss';
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.section}>
        <div className={s.left}>
          <h3>Консультация специалиста</h3>
          <div className={s.card}>
            <div className={s.avatar} aria-hidden="true" />
            <div>
              <div className={s.name}>Мин Су Ким</div>
              <div className={s.role}>Доктор медицинских наук, Республика Корея</div>
              <div className={s.cta}>
                <input placeholder="Получить консультацию" aria-label="Получить консультацию" />
                <button aria-label="Отправить">→</button>
              </div>
            </div>
          </div>

          <div className={s.divider} />

          <div className={s.brand}>Хуньчунь Инфо</div>
          <div className={s.tagline}>Любим то, чем занимаемся ❤️ поэтому мы — лучшие!</div>
        </div>

        <nav className={s.navCol} aria-label="Навигация">
          <div className={s.title}>НАВИГАЦИЯ:</div>
          <ul>
            <li><Link href="#">Лечение</Link></li>
            <li><Link href="#">Стоматология</Link></li>
            <li><Link href="#">Клиники</Link></li>
            <li><Link href="#">Туры</Link></li>
            <li><Link href="#">Гостиницы</Link></li>
            <li><Link href="#">Истории людей</Link></li>
            <li><Link href="#">Блог про Китай</Link></li>
          </ul>
        </nav>

        <div className={s.contacts}>
          <ul>
            <li><a href="mailto:info@hunchuntravel.ru">info@Hunchuntravel.ru</a></li>
            <li><a href="tel:+74232665566">+7 423 266-55-66</a>  <a href="tel:+79247303402">+7 924 730-34-02</a></li>
            <li><a href="tel:+79024805566">+7 902 480-55-66</a>  <a href="tel:+79241322992">+7 924 132-29-92</a></li>
            <li className={s.muted}>Ежедневно 24/7</li>
          </ul>
          <div className={s.social} aria-label="Социальные сети">
            <span className={s.badge}>TG</span>
            <span className={s.badge}>VK</span>
            <span className={s.badge}>OK</span>
            <span className={s.badge}>D</span>
          </div>
        </div>
      </div>

      <div className={s.bottom}>
        <span>© Офис № 223, 2-й этаж, гостиница «Хуэйцюань», улица Цзинэх, город Хуньчунь</span>
      </div>
    </footer>
  );
};

export default Footer;
