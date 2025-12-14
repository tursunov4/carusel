import {Tour} from "@/interfaces/Tour";
import {RelatedCardProps} from "@/components/ui/cards/Related/RelatedCardProps";
import {InfoBlock} from "@/interfaces/InfoBlock";


const related = [
    {
        id: 1,
        title: "Экскурсия в Буддийский храм Дуньхуа",
        pill: "шоппинг",
        pillColor: "#B783F1",
        image: "/images/dummy/related-cards-1.jpg"
    },
    {
        id: 2,
        title: "Парк «Бохай» Хуньчунь",
        pill: "шоппинг",
        pillColor: "#B783F1",
        image: "/images/dummy/related-cards-2.jpg"
    },
    {
        id: 3,
        title: "Экскурсия «Вечерний Хуньчунь»",
        pill: "бани",
        pillColor: "#FDA369",
        image: "/images/dummy/related-cards-3.jpg"
    },
    {
        id: 4,
        title: "Парк аттракционов «Веселый остров восток» в Хуньчуне",
        pill: "путешествия",
        pillColor: "#5BCC64",
        image: "/images/dummy/related-cards-4.jpg"
    },
] as RelatedCardProps[];
const includes: InfoBlock[] = [
    {
        id: 1,
        title: "Услуги гида и переводчик",
        icon: "/images/icons/tours/tour-included-icons/christmas-gingerbread-house.svg",
        description: "Во время вашего пребывания в Китае с вами всегда будет русскоязычный гид и переводчик"
    },
    {
        id: 2,
        title: "Экскурсии",
        icon: "/images/icons/tours/tour-included-icons/egg-fried.svg",
        description: "Бесплатные экскурсии: чайный дон, шёлковая фабрика"
    },
    {
        id: 3,
        title: "Медицинская страховка",
        icon: "/images/icons/tours/tour-included-icons/file-empty.svg",
        description: "При путешествии в составе туристической группы, вы застрахованы на время всего путешествия"
    },
    {
        id: 4,
        title: "Завтрак",
        icon: "/images/icons/tours/tour-included-icons/flight-land.svg",
        description: "В каждой гостинице имеется завтрак по системе «шведский стол»"
    },
    {
        id: 5,
        title: "Билеты в обе стороны",
        icon: "/images/icons/tours/tour-included-icons/message-circle-user.svg",
        description: "Включён путь до автовокзала в Китае и обратный билет до автовокзала во Владивостоке"
    },
    {
        id: 6,
        title: "Проживание в гостинице на выбор",
        icon: "/images/icons/tours/tour-included-icons/route-01.svg",
        description: "С полным списком гостиниц вы можете ознакомиться на странице гостиницы в Хуньчуне"
    },
];
const whyMe: InfoBlock[] = [
    {
        id: 1,
        icon: "/images/icons/tours/why-me/star-04.svg",
        title: 'Ранние заезды в Китай на рейсовых автобусах',
        description: 'Мы не стоим на границе, проходим только на рейсовых автобусах по расписанию (прибытие в Китай 9:30 — 11:00)'
    },
    {
        id: 2,
        icon: "/images/icons/tours/why-me/star-04.svg",
        title: 'Вы сами создаёте свои путешествия',
        description: 'Мы предлагаем туристам уникальные варианты размещения: от комфортабельных гостиниц до уютных апартаментов. Также организуем групповые визы, позволяя путешествовать в составе своей компании без необходимости присоединяться к другим туристическим группам'
    },
    {
        id: 3,
        icon: "/images/icons/tours/why-me/star-04.svg",
        title: 'Индивидуальный подход в экскурсиях',
        description: 'Наши опытные гиды-переводчики, проживающие в Китае, готовы воплотить в жизнь ваши самые смелые идеи и организовать незабываемые экскурсии, полностью соответствующие вашим пожеланиям'
    },

];

export const fakeToursList: Tour[] = [
    {
        id: 1,
        title: "Экскурсионные туры в Хуньчунь",
        image: "/images/dummy/tours-images/photo-4.jpg",
        images: [
            "/images/dummy/tours-images/photo-2.jpg",
            "/images/dummy/tours-images/photo-1.jpg",
            "/images/dummy/tours-images/photo-3.jpg",
            "/images/dummy/tours-images/photo-5.jpg",
            "/images/dummy/tours-images/photo-4.jpg",
        ],
        description:
            "Откройте для себя чудеса Хуньчуня: Вкусная еда, массажи и Корейские бани, Большой выбор экскурсионных программ, шопинг.",
        category: {name: "Экскурсионный", color: '#0000ff'},
        rating: 5.0,
        reviewsCount: 12,
        link: "/tours/hunchun",
        slug: "hunchun",
        duration: {
            min_duration: 7,
            max_duration: 21
        },
        price: "7800 ¥",
        priceFor: "за 5-15 дней/чел.",
        relatedData: related,
        includes: includes,
        whyMe: whyMe,
    },
    {
        id: 2,
        title: "Стоматологический тур в Хуньчунь",
        image: "/images/dummy/tours-images/photo-2.jpg",
        images: [
            "/images/dummy/tours-images/photo-1.jpg",
            "/images/dummy/tours-images/photo-2.jpg",
            "/images/dummy/tours-images/photo-4.jpg",
            "/images/dummy/tours-images/photo-5.jpg",
            "/images/dummy/tours-images/photo-3.jpg",
            "/images/dummy/tours-images/photo-4.jpg",
        ],
        description:
            "Возможность совместить лечение зубов с путешествием по культурным и природным местам Китая.",
        category: {name: "Медицинский", color: '#990000'},
        rating: 4.8,
        reviewsCount: 22,
        link: "/tours/dantist",
        slug: "dantist",
        duration: {
            min_duration: 3,
            max_duration: 7
        },
        price: "5900 ¥",
        priceFor: "за 7-9 дней/чел.",
        relatedData: related,
        includes: includes,
        whyMe: whyMe,
    },
    {
        id: 3,
        title: "Лечебный тур в Китай, Хуньчунь",
        image: "/images/dummy/tours-images/photo-3.jpg",
        images: [
            "/images/dummy/tours-images/photo-1.jpg",
            "/images/dummy/tours-images/photo-4.jpg",
            "/images/dummy/tours-images/photo-5.jpg",
            "/images/dummy/tours-images/photo-3.jpg",
            "/images/dummy/tours-images/photo-4.jpg",
        ],
        description:
            "Оздоровительные программы с посещением лучших клиник и центров, спа и традиционной медицины.",
        category: {name: "Оздоровительный", color: '#009900'},
        rating: 5.0,
        reviewsCount: 8,
        link: "/tours/treatment",
        slug: "treatment",
        duration: {
            min_duration: 1,
            max_duration: 5
        },
        price: "4600 ¥",
        priceFor: "за 5 дней/чел.",
        relatedData: related,
        includes: includes,
        whyMe: whyMe,
    },
    {
        id: 4,
        title: "SPA-тур в Хуньчунь",
        image: "/images/dummy/tours-images/photo-4.jpg",
        images: [
            "/images/dummy/tours-images/photo-1.jpg",
            "/images/dummy/tours-images/photo-3.jpg",
            "/images/dummy/tours-images/photo-5.jpg",
            "/images/dummy/tours-images/photo-3.jpg",
            "/images/dummy/tours-images/photo-4.jpg",
        ],
        description:
            "Насладитесь лучшими spa-процедурами, горячими источниками и массажами в лучших отелях города.",
        category: {name: "Оздоровительный", color: '#009900'},
        rating: 4.9,
        reviewsCount: 15,
        link: "/tours/spa",
        slug: "spa",
        duration: {
            min_duration: 7,
            max_duration: 14
        },
        price: "9650 ¥",
        priceFor: "за 15 дней/чел.",
        relatedData: related,
        includes: includes,
        whyMe: whyMe,
    },
];