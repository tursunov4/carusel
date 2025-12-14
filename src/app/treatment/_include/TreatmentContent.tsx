"use client";

import React, { useState } from "react";
import { API_BASE_URL } from "@/services/apiFetch";
import Container from "@/components/Container";
import BottomHeader from "@/components/includes/BottomHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import SinglePageParentSection from "@/components/ui/single-page-sections/SinglePageParentSection";
import SinglePageSidebar from "@/components/ui/single-page-sections/sidebar/SinglePageSidebar";
import SinglePageSidebarItem from "@/components/ui/single-page-sections/sidebar/SinglePageSidebarItem";
import clockIcon from "@/assets/img/icons/clock-02.svg";
import tgIcon from "@/assets/img/icons/tg-icon.svg";
import vkIcon from "@/assets/img/icons/vk-icon.svg";
import maxIcon from "@/assets/img/icons/max-image.svg";
import Button from "@/components/elements/Button";
import { redirect, RedirectType } from "next/navigation";
import { Treatment } from "@/services/Treatment";
import { InfoBlock } from "@/interfaces/InfoBlock";
import BaseCard from "@/components/ui/cards/BaseCards/BaseCard";
import RelatedCardsList from "@/components/ui/single-page-sections/RelatedCardsList";
import { RelatedCardProps } from "@/components/ui/cards/Related/RelatedCardProps";
import BookTreatmentForm from "@/app/treatment/_include/BookTreatmentForm";
import Link from "next/link";
import SinglePageNestedSection from "@/components/ui/single-page-sections/SinglePageNestedSection";
import SplideGallery from "@/components/ui/SplideGallery";
import MobileFloatingBookButton from "@/components/MobileFloatingBookButton";

const pageSections = [
  {
    name: "Описание",
    url: `#description`,
  },
  {
    name: "Почему Хуньчунь?",
    url: `#about`,
  },
  {
    name: "Виды услуг",
    url: `#services`,
  },
  {
    name: "Дополнительно",
    url: `#includes`,
  },
  {
    name: "Выбор клиники",
    url: `#choose-hotel`,
  },
  {
    name: "Как проходит поездка",
    url: `#how-it-works`,
  },
];

const treatIncludes: InfoBlock[] = [
  {
    id: 1,
    title: "Выгодно",
    icon: "/images/dummy/treatment/coins-hand-01.svg",
    description: "Цены на лечение ниже в 2-3 раза, чем в России",
  },
  {
    id: 2,
    title: "Быстро",
    icon: "/images/dummy/treatment/shield-check.svg",
    description:
      "Протезы, коронки и импланты устанавливают всего за несколько дней благодаря близости фабрик по производству материалов",
  },
  {
    id: 3,
    title: "Опытные врачи",
    icon: "/images/dummy/treatment/shield-check-1.svg",
    description:
      "Ежедневно сюда приезжают сотни российских пациентов, и стоматологи накопили огромный практический опыт",
  },
  {
    id: 4,
    title: "Гарантия",
    icon: "/images/dummy/treatment/timer-01.svg",
    description: "Все клиники предоставляют обязательную гарантию до 3 лет",
  },
];

const toothVariants = [
  {
    price: "От 3 000 ¥",
    text: "Съёмные протезы",
  },
  {
    price: "От 350 ¥",
    text: "Коронки",
  },
  {
    price: "От 6 000 ¥",
    text: "Импланты",
  },
  {
    price: "От 8 000 ¥",
    text: "Виниры",
  },
];

// const relatedData = [
//     {
//         id: 1,
//         title: "Торговый центр «Оленья гора»",
//         pill: "шоппинг",
//         pillColor: "#B783F1",
//         image: "/images/dummy/related-cards-1.jpg"
//     },
//     {
//         id: 2,
//         title: "Торговый центр «Огненная лиса»",
//         pill: "шоппинг",
//         pillColor: "#B783F1",
//         image: "/images/dummy/related-cards-2.jpg"
//     },
//     {
//         id: 3,
//         title: "Банный комплекс «Золотая вода»",
//         pill: "бани",
//         pillColor: "#FDA369",
//         image: "/images/dummy/related-cards-3.jpg"
//     },
//     {
//         id: 4,
//         title: "Европейская улица",
//         pill: "путешествия",
//         pillColor: "#5BCC64",
//         image: "/images/dummy/related-cards-4.jpg"
//     },
//     {
//         id: 5,
//         title: "Торговый центр «Оленья гора»",
//         pill: "путешествия",
//         pillColor: "#5BCC64",
//         image: "/images/dummy/related-cards-5.jpg"
//     },
// ] as RelatedCardProps[];

const cardsTooth = [
  {
    id: 1,
    title: "Съемные протезы",
    price: "От 3 000 ¥",
    buttonText: "Узнать больше",
    image: "/images/dummy/treatment/photo-1.jpg",
    text: "Зубные коронки могут не только восполнить недостающие зубы, но и значительно улучшить вид зубов",
  },
  {
    id: 2,
    title: "Коронки",
    price: "От 350 ¥",
    buttonText: "Узнать больше",
    image: "/images/dummy/treatment/photo-2.jpg",
    text: "Для людей с малым количеством зубов или их отсутствием. Либо, если у пациента слишком слабые кости в деснах",
  },
  {
    id: 3,
    title: "Импланты",
    price: "От 6000 ¥",
    buttonText: "Узнать больше",
    image: "/images/dummy/treatment/photo-3.jpg",
    text: "Зубные коронки могут не только восполнить недостающие зубы, но и значительно улучшить вид зубов",
  },
  {
    id: 4,
    title: "Виниры",
    price: "От 8000 ¥",
    buttonText: "Узнать больше",
    image: "/images/dummy/treatment/photo-4.jpg",
    text: "Зубные коронки могут не только восполнить недостающие зубы, но и значительно улучшить вид зубов",
  },
];

export default function TreatmentContent({ data }: { data: Treatment }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // // const [sliderRef, slider] = useKeenSlider({loop: true}, [])
  // const [currentSlide, setCurrentSlide] = useState(0)
  // const [fullscreenImage, setFullscreenImage] = useState(null)
  // const [openId, setOpenId] = useState(null);
  // const [callbackNumber, setCallbackNumber] = useState('79778108080'); // fallback по умолчанию

  const [selectedTourId, setSelectedTourId] = useState<number | null>(null);
  const openModal = (id: number) => setSelectedTourId(id);
  const closeModal = () => setSelectedTourId(null);

  function submitModal() {
    // todo send fetch to backend
    // ...

    console.log("submit modal form", selectedTourId);
    setSelectedTourId(null);
  }

  const defaultDescriptionLen = 150;
  const [isExpanded, setIsExpanded] = useState(false);

  const descLengthMore =
    data.content && data.content.length > defaultDescriptionLen;
  const displayText = isExpanded
    ? data.content
    : `${data.content?.substring(0, defaultDescriptionLen)}${
        descLengthMore ? "..." : ""
      }`;

  function openModalBookingForm() {
    console.log("open booking modal window");
    setSelectedTourId(null);
  }

  // const toggle = (id) => {
  //     setOpenId(openId === id ? null : id);
  // };
  //
  // const [sliderRef, slider] = useKeenSlider({
  //     loop: true,
  //     slideChanged(s) {
  //         setCurrentSlide(s.track.details.rel)
  //     },
  // })

  // const imageHeight = 'h-[500px]' // единая высота
  // const aspectClass = 'aspect-[3/2]'

  if (!API_BASE_URL) {
    throw new Error(
      "NEXT_PUBLIC_API_BASE_URL is not defined in environment variables"
    );
  }

  if (loading) {
    return (
      <Container>
        <div className="py-20 text-center text-xl text-gray-700 dark:text-gray-200">
          Загрузка...
        </div>
      </Container>
    );
  }

  if (!data) {
    redirect("/", RedirectType.replace);
  }

  return (
    <div className="single-page treatment">
      <BottomHeader menuItems={pageSections} />
      {/* Header part */}
      <Container>
        {data?.title && (
          <Breadcrumbs links={[{ isLast: true, label: data.title }]} />
        )}
      </Container>

      {/* Sides */}
      <Container className="sides">
        <div id="description" className="left-side">
          <div
            style={{
              position: "relative",
              display: "flex",
              height: "100%",
              width: "100%",
              minHeight: 500,
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            >
              <img
                src="/images/dummy/Cover.jpg"
                alt="стоматология"
                width="100%"
                height="100%"
                style={{ objectFit: "cover", height: "100%", width: "100%" }}
              />
            </div>

            <div
              className="flex flex-col gap-12 justify-between"
              style={{
                position: "relative",
                zIndex: 2,
                color: "white",
                padding: 60,
              }}
            >
              <div className="flex flex-col gap-12" style={{ color: "white" }}>
                <div className="fnt-h2" style={{ color: "white" }}>
                  Лечение и протезирование зубов в Хуньчуне
                </div>
                <div>
                  Совместите лечение зубов с путешествием во время
                  стоматологического тура в Хуньчунь
                </div>
                <Button style={{ width: "fit-content", marginTop: 30 }}>
                  Узнать стоимость тура
                </Button>
              </div>
              <div
                className="flex flex-row gap-24"
                style={{ justifyContent: "space-evenly" }}
              >
                {toothVariants &&
                  toothVariants.map((item) => (
                    <div key={item.text} className="header-card">
                      <Link href="#">
                        <span className="price headline">{item.price}</span>
                        <div className="text fnt-notes c-black-subheading">
                          {item.text}
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <SinglePageParentSection>
            <p>
              Здоровые зубы — залог комфорта и правильной работы всего
              организма. Но если возникают проблемы, часто приходится прибегать
              к протезированию, имплантации или установке коронок.
            </p>
            <p>
              Сегодня многие россияне выбирают стоматологические туры в Китай,
              особенно в приграничный город Хуньчунь. Здесь стоматология
              совмещается с путешествием: за 4-5 дней можно восстановить зубы,
              отдохнуть, познакомиться с другой культурой и попробовать местную
              кухню.
            </p>
          </SinglePageParentSection>

          <SinglePageParentSection
            id="about"
            title="Почему Хуньчунь так популярен у россиян?"
          >
            <div className="includes-list col w-100">
              {treatIncludes &&
                treatIncludes.map((item: InfoBlock, index) => (
                  <BaseCard key={item.id} className="includes-item">
                    <div className="icon">
                      <img
                        src={item.icon}
                        alt="тур включает"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="info">
                      <div className="title fnt-accent">{item.title}</div>
                      <div className="description fnt-notes c-black-subheading">
                        {item.description}
                      </div>
                    </div>
                    {index !== treatIncludes.length - 1 && (
                      <hr className="hr" style={{ maxWidth: 200 }} />
                    )}
                  </BaseCard>
                ))}
            </div>
          </SinglePageParentSection>

          <div id="services" className="flex flex-col gap-12">
            <h2 className="fnt-h2">Виды услуг</h2>
            <p>
              Главное отличие лечения зубов в Хуньчуне — цена и скорость. За 4-5
              дней можно пройти все процедуры и одновременно насладиться
              поездкой: познакомиться с культурой, попробовать кухню и
              совместить лечение с отдыхом
            </p>

            <div className="cards flex flex-col gap-24">
              {cardsTooth &&
                cardsTooth.map((item) => (
                  <div key={item.id} className="uslugi">
                    <div className="usluga flex flex-row gap-2">
                      <BaseCard className="flex-1 flex flex-col gap-24 justify-center">
                        <div className="fnt-h4">{item.title}</div>
                        <div className="fnt-notes c-black-subheading">
                          {item.price}
                        </div>
                        <div className="fnt-accent">{item.text}</div>

                        <Button>Узнать больше</Button>
                      </BaseCard>
                      <div style={{ flex: 2 }}>
                        <img src={item.image} alt="виды услуг" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* <SinglePageParentSection id="includes" title="Дополнительные преимущества">
                        <RelatedCardsList items={relatedData || []}/>
                    </SinglePageParentSection> */}

          <SinglePageParentSection id="choose-hotel">
            <div className="flex flex-row justify-between mb-4">
              <h3 className="fnt-h4">Как выбрать клинику?</h3>
              <Link
                href="/media/hospitals"
                className="btn btn-orange btn-primary"
              >
                Перейти к клиникам
              </Link>
            </div>
            <p className="mb-3">
              Нажав на кнопку, вы сможете увидеть полный список клиник в
              Хуньчуне. При выборе медицинского учреждения обратите внимание на:
            </p>
            <ul>
              <li>
                Отзывы — ищите разные источники, а не только положительные
                комментарии;
              </li>
              <li>
                Консультацию с организаторами тура — их опыт и рекомендации
                помогут подобрать оптимальный вариант;
              </li>
              <li>
                Личный опыт знакомых. По статистике 23% россиян выбирают Китай,
                возможно, кто-то из ваших друзей уже проходил там лечение
              </li>
            </ul>
          </SinglePageParentSection>
          <SinglePageParentSection
            id="how-it-works"
            title="Как проходит поездка?"
          >
            <SinglePageNestedSection borderBottom>
              <div className="pill l-blue mb-2">День 1</div>
              <ul>
                <li>Первый прием у врача, осмотр, снимок по необходимости;</li>
                <li>Подготовка и обточка зубов;</li>
                <li>Снятие слепков;</li>
                <li>Подбор цвета новых зубов;</li>
                <li>Надевают временные зубы</li>
              </ul>
            </SinglePageNestedSection>

            <SinglePageNestedSection borderBottom>
              <div className="pill l-blue mb-2">День 2</div>
              <ul>
                <li>
                  Если у человека перед поездкой подготовлена ротовая полость и
                  отсутствует необходимость лечения, второй день пациент может
                  проводить по своему усмотрению — прогулки, магазины, кафе,
                  экскурсии
                </li>
              </ul>
            </SinglePageNestedSection>

            <SinglePageNestedSection borderBottom>
              <div className="pill l-blue mb-2">День 3</div>
              <ul>
                <li>Примерка новых зубов, фиксация на временный клей;</li>
                <li>
                  Пациенту дают время, чтобы он мог походить и проверить, как
                  зафиксированы новые зубы;
                </li>
                <li>
                  Если нет дискомфорта, ничего не мешает и не трёт, зубы
                  фиксируют на постоянный клей
                </li>
              </ul>
            </SinglePageNestedSection>

            <SinglePageNestedSection>
              <div className="pill l-blue mb-2">День 4</div>
              <ul>
                <li>
                  Если на 4 день у пациента не появились жалобы, то мы
                  возвращаемся домой. Выезд из Китая в 10:30, время прибытия во
                  Владивосток 20:00;
                </li>
                <li>
                  Если имеются жалобы, то мы идём в клинику в 8 утра и
                  исправляем недочёты. Выезд из Китая в 12:30, время прибытия во
                  Владивосток в 21:30
                </li>
              </ul>
            </SinglePageNestedSection>
          </SinglePageParentSection>
          <SinglePageParentSection title="Видео">
            <SplideGallery
              images={[
                { link: "#", image: "/images/dummy/gallery/photo-1.jpg" },
                { link: "#", image: "/images/dummy/gallery/photo-2.jpg" },
                { link: "#", image: "/images/dummy/gallery/photo-3.jpg" },
                { link: "#", image: "/images/dummy/gallery/photo-4.jpg" },
                { link: "#", image: "/images/dummy/gallery/photo-5.jpg" },
                { link: "#", image: "/images/dummy/gallery/photo-6.jpg" },
                { link: "#", image: "/images/dummy/gallery/photo-7.jpg" },
                { link: "#", image: "/images/dummy/gallery/photo-8.jpg" },
              ]}
            />
          </SinglePageParentSection>
          <SinglePageParentSection>
            <img src="/images/dummy/treatment/Group 21.jpg" alt="" />
          </SinglePageParentSection>
        </div>

        <SinglePageSidebar>
          {/* todo добавить модальное окно забронировать экскурсию */}
          <SinglePageSidebarItem title="Консультация" onTop hideOnMobile>
            <div className="flex flex-col gap-8">
              <div className="flex flex-row gap-4">
                <Image
                  src={clockIcon}
                  alt="сколько занимает времени"
                  width={16}
                  height={16}
                />
                <span className="fnt-primary c-black-subheading">
                  Занимает не больше 5 минут
                </span>
              </div>
              <div className="flex flex-col gap-8">
                <div>Свяжитесь с нами удобным способом</div>
                <div className="social-icons-row flex flex-row flex-wrap gap-12">
                  <div>
                    <a
                      href="#tg_link"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <Image
                        src={tgIcon}
                        alt="телеграм"
                        width={32}
                        height={33}
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      href="#vkIcon"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <Image
                        src={vkIcon}
                        alt="вконтакте"
                        width={32}
                        height={33}
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      href="#maxIcon"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <Image src={maxIcon} alt="max" width={32} height={33} />
                    </a>
                  </div>
                </div>
                <div>Или заполните форму</div>
                <Button onClick={() => openModal(1)} fullWidth>
                  Получить консультацию
                </Button>
              </div>
            </div>
          </SinglePageSidebarItem>

          {/* todo передавать данные из бд */}
          <SinglePageSidebarItem
            title="Видео о нас"
            mainItem
            image="/images/dummy/excursions/sp-excursion-sidebar-video-image.jpg"
          />
        </SinglePageSidebar>
        <BookTreatmentForm
          tourId={selectedTourId}
          closeModal={closeModal}
          submitModal={submitModal}
        />
      </Container>

      <MobileFloatingBookButton
        page="Лечение"
        buttonText="Консультация"
        infoText={data.title}
      />
    </div>
  );
}
