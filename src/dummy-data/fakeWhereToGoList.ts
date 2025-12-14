import {WhereToGo} from "@/interfaces/WhereToGo";
import {excursionsPaidServices} from "@/dummy-data/fakeExcursionsList";

export const fakeWhereToGoList: WhereToGo[] = [
    {
        id: 1,
        title: "Магазин фирменной обуви и одежды WAN",
        image: "/images/dummy/where-to-go/image-1.jpg",
        images: [
            "/images/dummy/where-to-go/image-1.jpg",
            "/images/dummy/where-to-go/image-2.jpg",
            "/images/dummy/where-to-go/image-3.jpg",

        ],
        description:
            "Добро пожаловать в магазин фирменной обуви и одежды WAN в Хуньчуне — удивительный мир стиля и комфорта, где представлены лучшие бренды в мире моды.",
        category: {name: "Шоппинг", color: "orange"},
        included: ["Adidas", "Nike", "Puma", "FILA"],
        rating: 4.6,
        reviewsCount: 12,
        link: "/where-to-go/wan-shop",
        slug: "wan-shop",
        facilities:
            [
                {id: 1, name: "Входной билет", iconUrl: "/images/icons/facilities/wifi.svg"},
                {id: 2, name: "Обед", iconUrl: "/images/icons/facilities/hurricane-01.svg"},
            ],
        price: "190 ¥",
        priceFor: "при посещении внутренних помещений",
        paidServices: excursionsPaidServices,
    },
    {
        id: 2,
        title: "Торговый центр «Оя» Хуньчунь",
        image: "/images/dummy/where-to-go/image-2.jpg",
        images: [
            "/images/dummy/where-to-go/image-1.jpg",
            "/images/dummy/where-to-go/image-2.jpg",
            "/images/dummy/where-to-go/image-3.jpg",

        ],
        description:
            "Торговый центр 'Европейский' в Хуньчуне — идеальное место для шопинга. На первом этаже вас ждет широкий ассортимент парфюмерии, сумок и аксессуаров.",
        category: {name: "Торговый центр", color: "blue"},
        included: ["SEMIR", "Adidas", "Nike", "Puma", "FILA", "BalaBala", "SKECHERS"],
        rating: undefined,
        reviewsCount: 0,
        link: "/where-to-go/ouya-mall",
        slug: "ouya-mall",
        facilities:
            [
                {id: 1, name: "Обед", iconUrl: "/images/icons/facilities/wifi.svg"},
            ],
        price: "380 ¥",
        priceFor: "дополнительно за места"
    },
    {
        id: 3,
        title: "Магазин брендовой одежды “S-TOP”",
        image: "/images/dummy/where-to-go/image-3.jpg",
        images: [
            "/images/dummy/where-to-go/image-1.jpg",
            "/images/dummy/where-to-go/image-2.jpg",
            "/images/dummy/where-to-go/image-3.jpg",

        ],
        description:
            "Ваш источник стильной брендовой одежды, обуви и аксессуаров в Хуньчуне. Постоянно обновляющийся ассортимент и фирменные коллекции.",
        category: {name: "Шоппинг", color: "lightgray"},
        included: ["THE NORTH FACE", "GUCCI", "ARMANI", "FILA", "STONE ISLAND", "BURBERRY"],
        rating: 4.7,
        reviewsCount: 8,
        link: "/where-to-go/s-top",
        slug: "s-top",
        facilities: [],
        price: "580 ¥",
        priceFor: "за вход",
        paidServices: excursionsPaidServices,
    },
    {
        id: 4,
        title: "Магазин брендовой одежды “S-TOP”",
        image: "/images/dummy/where-to-go/image-3.jpg",
        images: [
            "/images/dummy/where-to-go/image-1.jpg",
            "/images/dummy/where-to-go/image-2.jpg",
            "/images/dummy/where-to-go/image-3.jpg",

        ],
        description:
            "Ваш источник стильной брендовой одежды, обуви и аксессуаров в Хуньчуне. Постоянно обновляющийся ассортимент и фирменные коллекции.",
        category: {name: "Шоппинг", color: "lightgray"},
        included: ["THE NORTH FACE", "GUCCI", "ARMANI", "FILA", "STONE ISLAND", "BURBERRY"],
        rating: 4.7,
        reviewsCount: 8,
        link: "/where-to-go/s-top",
        slug: "s-top",
        facilities: [],
        price: "580 ¥",
        priceFor: "за вход",
        paidServices: excursionsPaidServices,
    },
    {
        id: 5,
        title: "Магазин брендовой одежды “S-TOP”",
        image: "/images/dummy/where-to-go/image-3.jpg",
        images: [
            "/images/dummy/where-to-go/image-1.jpg",
            "/images/dummy/where-to-go/image-2.jpg",
            "/images/dummy/where-to-go/image-3.jpg",

        ],
        description:
            "Ваш источник стильной брендовой одежды, обуви и аксессуаров в Хуньчуне. Постоянно обновляющийся ассортимент и фирменные коллекции.",
        category: {name: "Шоппинг", color: "lightgray"},
        included: ["THE NORTH FACE", "GUCCI", "ARMANI", "FILA", "STONE ISLAND", "BURBERRY"],
        rating: 4.7,
        reviewsCount: 8,
        link: "/where-to-go/s-top",
        slug: "s-top",
        facilities: [],
        price: "580 ¥",
        priceFor: "за вход",
        paidServices: excursionsPaidServices,
    },
];