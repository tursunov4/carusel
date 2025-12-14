import {Facility} from "@/interfaces/Facility";
import {RelatedCardProps} from "@/components/ui/cards/Related/RelatedCardProps";
import {Hotel} from "@/interfaces/Hotel";

export const hotels: Hotel[] = [
    {
        id: 1,
        title: "CHEERMAY, Хуньчунь",
        category: "Отель",
        image: "/images/dummy/hotels/photo.jpg", // укажи свой путь
        images: [
            "/images/dummy/hotels/images-top/photo-1.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
            "/images/dummy/hotels/images-top/photo-3.jpg",
            "/images/dummy/hotels/images-top/photo-4.jpg",
            "/images/dummy/hotels/images-top/photo-5.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
            "/images/dummy/hotels/images-top/photo-3.jpg",
            "/images/dummy/hotels/images-top/photo-1.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
        ],
        description: "Отель Чиермэй открылся в 2025 году. Новый, с удобным расположением в самом центре. Отель" +
            " Чиермэй открылся в 2025 году. Новый, с удобным расположением в самом центре. Отель Чиермэй открылся в" +
            " 2025 году. Новый, с удобным расположением в самом центре. Отель Чиермэй открылся в 2025 году. Новый, с удобным расположением в самом центре.",
        rating: 5.0,
        reviewsCount: 2,
        pillColor: "gold",
        hotelClass: "премиум",
        link: "/hotels/cheermay",
        slug: "cheermay",
        nearby: [
            "Торговый центр",
            "Магазин детской одежды",
            "Магазин брендовой одежды",
            "Европейская улица",
            "Детская комната ТЦ",
            "Баня «Термальный комплекс»"
        ],
        facilities:
            [
                {id: 1, name: "wifi", iconUrl: "/images/icons/facilities/wifi.svg"},
                {id: 2, name: "нагреватель", iconUrl: "/images/icons/facilities/hurricane-01.svg"},
                {id: 3, name: "завтрак", iconUrl: "/images/icons/facilities/egg-fried.svg"},
                {id: 4, name: "лифт", iconUrl: "/images/icons/facilities/building-03.svg"},
                {id: 5, name: "стиралка", iconUrl: "/images/icons/facilities/passport-02.svg"},
                {id: 6, name: "телек", iconUrl: "/images/icons/facilities/tv-01.svg"},
                {id: 8, name: "Холодильник", iconUrl: "/images/icons/facilities/phone-01.svg"}
            ] as Facility[],
        rooms: [
            "/images/dummy/hotels/rooms/hotel-rooms-1.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-2.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-3.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-4.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-5.jpg",
        ],
        relatedData: [
            {
                id: 1,
                title: "Торговый центр «Оленья гора»",
                pill: "шоппинг",
                pillColor: "#B783F1",
                image: "/images/dummy/related-cards-1.jpg"
            },
            {
                id: 2,
                title: "Торговый центр «Огненная лиса»",
                pill: "шоппинг",
                pillColor: "#B783F1",
                image: "/images/dummy/related-cards-2.jpg"
            },
            {
                id: 3,
                title: "Банный комплекс «Золотая вода»",
                pill: "бани",
                pillColor: "#FDA369",
                image: "/images/dummy/related-cards-3.jpg"
            },
            {
                id: 4,
                title: "Европейская улица",
                pill: "путешествия",
                pillColor: "#5BCC64",
                image: "/images/dummy/related-cards-4.jpg"
            },
            {
                id: 5,
                title: "Торговый центр «Оленья гора»",
                pill: "путешествия",
                pillColor: "#5BCC64",
                image: "/images/dummy/related-cards-5.jpg"
            },
        ] as RelatedCardProps[],
    },
    {
        id: 2,
        title: "И Дзинь» Хуньчунь",
        category: "Гостиница",
        image: "/images/dummy/hotels/photo-1.jpg", // укажи свой путь
        images: [
            "/images/dummy/hotels/images-top/photo-1.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
            "/images/dummy/hotels/images-top/photo-3.jpg",
            "/images/dummy/hotels/images-top/photo-4.jpg",
            "/images/dummy/hotels/images-top/photo-5.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
            "/images/dummy/hotels/images-top/photo-3.jpg",
            "/images/dummy/hotels/images-top/photo-1.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
        ],
        description: "Новая гостиница в центре Хуньчуня, открылась в марте 2025 года и с радостью принимает гостей.",
        rating: 4.5,
        reviewsCount: 9,
        pillColor: "blue",
        hotelClass: "эконом",
        link: "/hotels/yijin",
        slug: "yijin",
        nearby: [
            "Пельменная возле отеля"
        ],
        facilities: [
            {id: 1, name: "wifi", iconUrl: "/images/icons/facilities/wifi.svg"},
            {id: 2, name: "нагреватель", iconUrl: "/images/icons/facilities/hurricane-01.svg"},
            {id: 4, name: "лифт", iconUrl: "/images/icons/facilities/building-03.svg"},
            {id: 5, name: "стиралка", iconUrl: "/images/icons/facilities/passport-02.svg"},
            {id: 6, name: "телек", iconUrl: "/images/icons/facilities/tv-01.svg"},
            {id: 7, name: "кондей", iconUrl: "/images/icons/facilities/snowflake-02.svg"},
            {id: 8, name: "Холодильник", iconUrl: "/images/icons/facilities/phone-01.svg"}
        ],
        rooms: [
            "/images/dummy/hotels/rooms/hotel-rooms-1.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-2.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-3.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-4.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-5.jpg",
        ],
        relatedData: [
            {
                id: 1,
                title: "Торговый центр «Оленья гора»",
                pill: "шоппинг",
                pillColor: "#B783F1",
                image: "/images/dummy/related-cards-1.jpg"
            },
            {
                id: 2,
                title: "Торговый центр «Огненная лиса»",
                pill: "шоппинг",
                pillColor: "#B783F1",
                image: "/images/dummy/related-cards-2.jpg"
            },
            {
                id: 3,
                title: "Банный комплекс «Золотая вода»",
                pill: "бани",
                pillColor: "#FDA369",
                image: "/images/dummy/related-cards-3.jpg"
            },
            {
                id: 4,
                title: "Европейская улица",
                pill: "путешествия",
                pillColor: "#5BCC64",
                image: "/images/dummy/related-cards-4.jpg"
            },
            {
                id: 5,
                title: "Торговый центр «Оленья гора»",
                pill: "путешествия",
                pillColor: "#5BCC64",
                image: "/images/dummy/related-cards-5.jpg"
            },
        ] as RelatedCardProps[],
    },
    {
        id: 3,
        title: "И Дзинь» Хуньчунь",
        category: "Гостиница",
        image: "/images/dummy/hotels/photo-1.jpg", // укажи свой путь
        images: [
            "/images/dummy/hotels/images-top/photo-1.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
            "/images/dummy/hotels/images-top/photo-3.jpg",
            "/images/dummy/hotels/images-top/photo-4.jpg",
            "/images/dummy/hotels/images-top/photo-5.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
            "/images/dummy/hotels/images-top/photo-3.jpg",
            "/images/dummy/hotels/images-top/photo-1.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
        ],
        description: "Новая гостиница в центре Хуньчуня, открылась в марте 2025 года и с радостью принимает гостей.",
        rating: 4.5,
        reviewsCount: 9,
        pillColor: "blue",
        hotelClass: "эконом",
        link: "/hotels/yijin",
        slug: "yijin",
        nearby: [
            "Пельменная возле отеля"
        ],
        facilities: [
            {id: 1, name: "wifi", iconUrl: "/images/icons/facilities/wifi.svg"},
            {id: 2, name: "нагреватель", iconUrl: "/images/icons/facilities/hurricane-01.svg"},
            {id: 4, name: "лифт", iconUrl: "/images/icons/facilities/building-03.svg"},
            {id: 5, name: "стиралка", iconUrl: "/images/icons/facilities/passport-02.svg"},
            {id: 6, name: "телек", iconUrl: "/images/icons/facilities/tv-01.svg"},
            {id: 7, name: "кондей", iconUrl: "/images/icons/facilities/snowflake-02.svg"},
            {id: 8, name: "Холодильник", iconUrl: "/images/icons/facilities/phone-01.svg"}
        ],
        rooms: [
            "/images/dummy/hotels/rooms/hotel-rooms-1.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-2.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-3.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-4.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-5.jpg",
        ],
        relatedData: [
            {
                id: 1,
                title: "Торговый центр «Оленья гора»",
                pill: "шоппинг",
                pillColor: "#B783F1",
                image: "/images/dummy/related-cards-1.jpg"
            },
            {
                id: 2,
                title: "Торговый центр «Огненная лиса»",
                pill: "шоппинг",
                pillColor: "#B783F1",
                image: "/images/dummy/related-cards-2.jpg"
            },
            {
                id: 3,
                title: "Банный комплекс «Золотая вода»",
                pill: "бани",
                pillColor: "#FDA369",
                image: "/images/dummy/related-cards-3.jpg"
            },
            {
                id: 4,
                title: "Европейская улица",
                pill: "путешествия",
                pillColor: "#5BCC64",
                image: "/images/dummy/related-cards-4.jpg"
            },
            {
                id: 5,
                title: "Торговый центр «Оленья гора»",
                pill: "путешествия",
                pillColor: "#5BCC64",
                image: "/images/dummy/related-cards-5.jpg"
            },
        ] as RelatedCardProps[],
    },
    {
        id: 4,
        title: "И Дзинь» Хуньчунь",
        category: "Гостиница",
        image: "/images/dummy/hotels/photo-1.jpg", // укажи свой путь
        images: [
            "/images/dummy/hotels/images-top/photo-1.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
            "/images/dummy/hotels/images-top/photo-3.jpg",
            "/images/dummy/hotels/images-top/photo-4.jpg",
            "/images/dummy/hotels/images-top/photo-5.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
            "/images/dummy/hotels/images-top/photo-3.jpg",
            "/images/dummy/hotels/images-top/photo-1.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
        ],
        description: "Новая гостиница в центре Хуньчуня, открылась в марте 2025 года и с радостью принимает гостей.",
        rating: 4.5,
        reviewsCount: 9,
        pillColor: "blue",
        hotelClass: "эконом",
        link: "/hotels/yijin",
        slug: "yijin",
        nearby: [
            "Пельменная возле отеля"
        ],
        facilities: [
            {id: 1, name: "wifi", iconUrl: "/images/icons/facilities/wifi.svg"},
            {id: 2, name: "нагреватель", iconUrl: "/images/icons/facilities/hurricane-01.svg"},
            {id: 4, name: "лифт", iconUrl: "/images/icons/facilities/building-03.svg"},
            {id: 5, name: "стиралка", iconUrl: "/images/icons/facilities/passport-02.svg"},
            {id: 6, name: "телек", iconUrl: "/images/icons/facilities/tv-01.svg"},
            {id: 7, name: "кондей", iconUrl: "/images/icons/facilities/snowflake-02.svg"},
            {id: 8, name: "Холодильник", iconUrl: "/images/icons/facilities/phone-01.svg"}
        ],
        rooms: [
            "/images/dummy/hotels/rooms/hotel-rooms-1.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-2.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-3.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-4.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-5.jpg",
        ],
        relatedData: [
            {
                id: 1,
                title: "Торговый центр «Оленья гора»",
                pill: "шоппинг",
                pillColor: "#B783F1",
                image: "/images/dummy/related-cards-1.jpg"
            },
            {
                id: 2,
                title: "Торговый центр «Огненная лиса»",
                pill: "шоппинг",
                pillColor: "#B783F1",
                image: "/images/dummy/related-cards-2.jpg"
            },
            {
                id: 3,
                title: "Банный комплекс «Золотая вода»",
                pill: "бани",
                pillColor: "#FDA369",
                image: "/images/dummy/related-cards-3.jpg"
            },
            {
                id: 4,
                title: "Европейская улица",
                pill: "путешествия",
                pillColor: "#5BCC64",
                image: "/images/dummy/related-cards-4.jpg"
            },
            {
                id: 5,
                title: "Торговый центр «Оленья гора»",
                pill: "путешествия",
                pillColor: "#5BCC64",
                image: "/images/dummy/related-cards-5.jpg"
            },
        ] as RelatedCardProps[],
    },
    {
        id: 5,
        title: "И Дзинь» Хуньчунь",
        category: "Гостиница",
        image: "/images/dummy/hotels/photo-1.jpg", // укажи свой путь
        images: [
            "/images/dummy/hotels/images-top/photo-1.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
            "/images/dummy/hotels/images-top/photo-3.jpg",
            "/images/dummy/hotels/images-top/photo-4.jpg",
            "/images/dummy/hotels/images-top/photo-5.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
            "/images/dummy/hotels/images-top/photo-3.jpg",
            "/images/dummy/hotels/images-top/photo-1.jpg",
            "/images/dummy/hotels/images-top/photo-2.jpg",
        ],
        description: "Новая гостиница в центре Хуньчуня, открылась в марте 2025 года и с радостью принимает гостей.",
        rating: 4.5,
        reviewsCount: 9,
        pillColor: "blue",
        hotelClass: "эконом",
        link: "/hotels/yijin",
        slug: "yijin",
        nearby: [
            "Пельменная возле отеля"
        ],
        facilities: [
            {id: 1, name: "wifi", iconUrl: "/images/icons/facilities/wifi.svg"},
            {id: 2, name: "нагреватель", iconUrl: "/images/icons/facilities/hurricane-01.svg"},
            {id: 4, name: "лифт", iconUrl: "/images/icons/facilities/building-03.svg"},
            {id: 5, name: "стиралка", iconUrl: "/images/icons/facilities/passport-02.svg"},
            {id: 6, name: "телек", iconUrl: "/images/icons/facilities/tv-01.svg"},
            {id: 7, name: "кондей", iconUrl: "/images/icons/facilities/snowflake-02.svg"},
            {id: 8, name: "Холодильник", iconUrl: "/images/icons/facilities/phone-01.svg"}
        ],
        rooms: [
            "/images/dummy/hotels/rooms/hotel-rooms-1.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-2.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-3.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-4.jpg",
            "/images/dummy/hotels/rooms/hotel-rooms-5.jpg",
        ],
        relatedData: [
            {
                id: 1,
                title: "Торговый центр «Оленья гора»",
                pill: "шоппинг",
                pillColor: "#B783F1",
                image: "/images/dummy/related-cards-1.jpg"
            },
            {
                id: 2,
                title: "Торговый центр «Огненная лиса»",
                pill: "шоппинг",
                pillColor: "#B783F1",
                image: "/images/dummy/related-cards-2.jpg"
            },
            {
                id: 3,
                title: "Банный комплекс «Золотая вода»",
                pill: "бани",
                pillColor: "#FDA369",
                image: "/images/dummy/related-cards-3.jpg"
            },
            {
                id: 4,
                title: "Европейская улица",
                pill: "путешествия",
                pillColor: "#5BCC64",
                image: "/images/dummy/related-cards-4.jpg"
            },
            {
                id: 5,
                title: "Торговый центр «Оленья гора»",
                pill: "путешествия",
                pillColor: "#5BCC64",
                image: "/images/dummy/related-cards-5.jpg"
            },
        ] as RelatedCardProps[],
    },


];
export const serviceOptions = ["Wi-Fi", "Водонагреватель", "Завтрак", "Кондиционер", "Лифт", "Стиральная машина", "Телевизор"];