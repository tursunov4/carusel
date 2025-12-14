import {Review} from "@/interfaces/Review";

export const fakeHotelsUploadedUsersImages: string[] = [
    "/images/dummy/reviews/hotels-authors-images/photo.jpg",
    "/images/dummy/reviews/hotels-authors-images/photo-1.jpg",
    "/images/dummy/reviews/hotels-authors-images/photo-2.jpg",
    "/images/dummy/reviews/hotels-authors-images/photo-3.jpg",
    "/images/dummy/reviews/hotels-authors-images/photo-4.jpg",
    "/images/dummy/reviews/hotels-authors-images/photo-5.jpg",
    "/images/dummy/reviews/hotels-authors-images/photo-2.jpg",
    "/images/dummy/reviews/hotels-authors-images/photo-6.jpg",
]

export const fakeHotelsReviews: Review[] = [
    {
        id: 1,
        text: "Отличный отель с прекрасным видом из окна. Персонал вежливый и отзывчивый. Номера чистые и уютные. Рекомендую всем, кто планирует посетить этот город.",
        author: "Анна Петрова",
        avatarImage: "/images/dummy/reviews/authors-avatars/author-image.jpg",
        rating: 5,
        date: new Date(2025, 6, 2, 12, 15, 0),
        visitDate: new Date(2024, 12, 3),
        uploadedImages: [
            "/images/dummy/reviews/hotels-authors-images/photo-1.jpg",
            "/images/dummy/reviews/hotels-authors-images/photo.jpg",
            "/images/dummy/reviews/hotels-authors-images/photo-3.jpg",
            "/images/dummy/reviews/hotels-authors-images/photo-5.jpg",
            "/images/dummy/reviews/hotels-authors-images/photo-4.jpg",
            "/images/dummy/reviews/hotels-authors-images/photo-2.jpg",
            "/images/dummy/reviews/hotels-authors-images/photo-3.jpg",
            "/images/dummy/reviews/hotels-authors-images/photo-6.jpg",
        ]
    },
    {
        id: 2,
        text: "Остались довольны отдыхом. Хорошее расположение, рядом с центром. Завтраки разнообразные и вкусные. Единственное, в номере был небольшой шум с улицы.",
        author: "Иван Смирнов",
        avatarImage: "/images/dummy/reviews/authors-avatars/author-letter-1.jpg",
        rating: 4,
        date: new Date(2025, 6, 23, 8, 15, 0),
        visitDate: new Date(2024, 12, 3),
    },
    {
        id: 3,
        text: "Прекрасное место для семейного отдыха. Детям очень понравился бассейн. Персонал внимательный, всегда готов помочь. Обязательно вернёмся снова летом.",
        author: "Елена Козлова",
        avatarImage: "/images/dummy/reviews/authors-avatars/author-letter-2.jpg",
        rating: 3,
        date: new Date(2025, 6, 12, 15, 30, 0),
        visitDate: new Date(2024, 12, 3),
        uploadedImages: [
            "/images/dummy/reviews/hotels-authors-images/photo.jpg",
            "/images/dummy/reviews/hotels-authors-images/photo-2.jpg",
        ]
    },
    {
        id: 4,
        text: "Останавливались проездом на одну ночь. Всё чисто, аккуратно, но без изысков. Соотношение цена-качество на уровне. Wi-Fi работал стабильно.",
        author: "Дмитрий Иванов",
        avatarImage: "/images/dummy/reviews/authors-avatars/author-letter-3.jpg",
        rating: 3,
        date: new Date(2025, 5, 25, 12, 26, 13),
        visitDate: new Date(2025, 1, 13),
        uploadedImages: [
            "/images/dummy/reviews/hotels-authors-images/photo-1.jpg",
            "/images/dummy/reviews/hotels-authors-images/photo-4.jpg",
            "/images/dummy/reviews/hotels-authors-images/photo-5.jpg",
        ]
    },
    {
        id: 5,
        text: "В целом неплохо, но есть куда расти. Номер чистый, но мебель немного устаревшая. Вид из окна на парковку. На ресепшене приветливые сотрудники, помогли с экскурсией.",
        author: "Ольга Соколова",
        avatarImage: "/images/dummy/reviews/authors-avatars/author-letter-4.jpg",
        rating: 3,
        date: new Date(2025, 6, 12, 19, 46, 27),
        visitDate: new Date(2025, 3, 24),
    }
]