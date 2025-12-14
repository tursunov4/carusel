import {Review} from "@/interfaces/Review";

export const fakeExcursionsUploadedUsersImages: string[] = [
    "/images/dummy/reviews/excursion-reviews-images/photo-1.jpg",
    "/images/dummy/reviews/excursion-reviews-images/photo-2.jpg",
    "/images/dummy/reviews/excursion-reviews-images/photo-3.jpg",
    "/images/dummy/reviews/excursion-reviews-images/photo-4.jpg",
    "/images/dummy/reviews/excursion-reviews-images/photo-5.jpg",
    "/images/dummy/reviews/excursion-reviews-images/photo-6.jpg",
    "/images/dummy/reviews/excursion-reviews-images/photo-7.jpg",

]

export const fakeExcursionsReviews: Review[] = [
    {
        id: 1,
        text: "Красиво, когда запускают горки - то один билет действует на все.",
        author: "Анна Петрова",
        avatarImage: "/images/dummy/reviews/authors-avatars/author-image.jpg",
        rating: 5,
        date: new Date(2025, 6, 2, 12, 15, 0),
        visitDate: new Date(2024, 12, 3),
        uploadedImages: [
            "/images/dummy/reviews/excursion-reviews-images/photo-1.jpg",
            "/images/dummy/reviews/excursion-reviews-images/photo-2.jpg",
            "/images/dummy/reviews/excursion-reviews-images/photo-3.jpg",
            "/images/dummy/reviews/excursion-reviews-images/photo-4.jpg",
            "/images/dummy/reviews/excursion-reviews-images/photo-5.jpg",
            "/images/dummy/reviews/excursion-reviews-images/photo-6.jpg",
            "/images/dummy/reviews/excursion-reviews-images/photo-7.jpg",
        ]
    },
    {
        id: 2,
        text: "Были в мае, парк работал только до 6 вечера! Нам понравилось! Ни на что нет очередей — главное, чтобы ты сам не боялся кататься. На колесо обозрения нужно успеть до 17.20, всё остальное работало по «народу» есть люди - они включают, нет людей - не включают. Лучше приходить днем, после обеда, когда людей больше",
        author: "Иван Смирнов",
        avatarImage: "/images/dummy/reviews/authors-avatars/author-letter-1.jpg",
        rating: 4,
        date: new Date(2025, 6, 23, 8, 15, 0),
        visitDate: new Date(2024, 12, 3),
    },
    {
        id: 3,
        text: "Шикарный парк, не хуже чем в Янцзы и всего в 10 минутах на такси",
        author: "Елена Козлова",
        avatarImage: "/images/dummy/reviews/authors-avatars/author-letter-2.jpg",
        rating: 3,
        date: new Date(2025, 6, 12, 15, 30, 0),
        visitDate: new Date(2024, 12, 3),
        uploadedImages: [
            "/images/dummy/reviews/excursion-reviews-images/photo-1.jpg",
            "/images/dummy/reviews/excursion-reviews-images/photo-3.jpg",
            "/images/dummy/reviews/excursion-reviews-images/photo-4.jpg",
        ]
    },
    {
        id: 4,
        text: "С самого утра американские горки и колесо обозрения всё время находились на ремонте, висит табличка - не работаем . Горки потом открылись. После обеда набежала толпа китайских туристов",
        author: "Дмитрий Иванов",
        avatarImage: "/images/dummy/reviews/authors-avatars/author-letter-3.jpg",
        rating: 3,
        date: new Date(2025, 5, 25, 12, 26, 13),
        visitDate: new Date(2025, 1, 13),
        uploadedImages: [
            "/images/dummy/reviews/excursion-reviews-images/photo-1.jpg",
            "/images/dummy/reviews/excursion-reviews-images/photo-6.jpg",

        ]
    },
    {
        id: 5,
        text: "За свои деньги норм",
        author: "Ольга Соколова",
        avatarImage: "/images/dummy/reviews/authors-avatars/author-letter-4.jpg",
        rating: 3,
        date: new Date(2025, 6, 12, 19, 46, 27),
        visitDate: new Date(2025, 3, 24),
    }
]