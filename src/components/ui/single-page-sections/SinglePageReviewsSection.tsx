import SinglePageNestedSection from "@/components/ui/single-page-sections/SinglePageNestedSection";
import SinglePageParentSection from "@/components/ui/single-page-sections/SinglePageParentSection";
import Image from "next/image";
import starIconYellow from "@/assets/img/icons/star-01-yellow.svg";
import starIconGray from "@/assets/img/icons/star-01-gray.svg";
import calendarIcon from "@/assets/img/icons/calendar-01.svg";
import Select from "@/components/elements/Select";
import {Review} from "@/interfaces/Review";
import {useState} from "react";
import Button from "@/components/elements/Button";
import useFancybox from "@/hooks/useFancybox";

export default function SinglePageReviewsSection({reviews, gallery, id}: {
    reviews: Review[],
    gallery: string[],
    id?: string
}) {
    const [showElseReviewsCount, setShowElseReviewsCount] = useState<number | undefined>(7);
    const imageRef = useFancybox({})
    const imageRef2 = useFancybox({})
    return (
        <SinglePageParentSection className="reviews" {...(id && {id})}>
            <h4 className="section-header fnt-h4">Отзывы</h4>
            {/* Фото и видео гостей */}
            <SinglePageNestedSection title="Фото и видео гостей">
                {gallery &&
                    <div ref={imageRef} className="review-images-line flex flex-row flex-wrap gap-8">
                        {gallery.slice(0, 8).map((image, index) => (
                            // todo последняя картинка со ссылкой на галерю
                            <a data-fancybox="gallery" key={`${image}-${index}`} href={image}>
                                <img src={image} alt={`изображение ${index + 1}`}/>
                            </a>
                        ))}
                    </div>}
            </SinglePageNestedSection>

            {/* Сортировка */}
            <SinglePageNestedSection>
                <Select label={{text: "Сортировка", props: {htmlFor: "sort-reviews"}}}
                        selectProps={{id: "sort-reviews",}}
                        fitContent
                        options={[
                            {value: "newest", text: "Сначала новые"},
                            {value: "oldest", text: "Сначала старые"},
                            {value: "highest", text: "Сначала с наивысшей рейтингом"},
                            {value: "lowest", text: "Сначала с наименьшей рейтингом"},
                        ]}/>
            </SinglePageNestedSection>

            {/* Отзывы */}
            <SinglePageNestedSection>
                <div ref={imageRef2}>
                    {reviews && reviews.map((review, index) => (
                        // Одиночный отзыв
                        // todo убрать borderBottom i
                        <SinglePageNestedSection key={review.id} borderBottom={index != (reviews.length - 1)}>

                            {/* todo сделать сингл ревью компонент */}
                            <div className="single-review flex flex-col gap-12">
                                <div className="meta flex flex-row gap-12 items-end">
                                    <div className="author-image">
                                        <img src={review.avatarImage} alt="автор отзыва"/>
                                    </div>
                                    <div className="name-block flex-1 flex flex-col gap-4">
                                        <div className="author-name fnt-accent">{review.author}</div>
                                        <div className="flex flex-row gap-4 items-center">
                                            <Image src={calendarIcon} alt="дата посещения"/>
                                            <span
                                                className="visit-date fnt-notes c-black-placeholder">Дата посещения: {review.visitDate.toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    <div className="rating-block flex flex-col gap-4 items-end">
                                        <div className="rating-stars flex items-center gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Image
                                                    key={star}
                                                    src={star <= Math.floor(review.rating + 0.5) ? starIconYellow : starIconGray}
                                                    alt="рейтинг отзыва звёзда"
                                                    width={16}
                                                    height={16}
                                                />
                                            ))}
                                            {/* <span className="ml-1 text-sm">{review.rating}</span> */}
                                        </div>
                                        <div
                                            className="fnt-notes c-black-placeholder">{review.date.toLocaleDateString()}</div>
                                    </div>
                                </div>

                                <div className="message">{review.text}</div>

                                {review.uploadedImages &&
                                    <div className="review-images-line flex flex-row flex-wrap gap-8">
                                        {review.uploadedImages.slice(0, 8).map((image, index) => (
                                            // todo последняя картинка со ссылкой на галерею
                                            <a data-fancybox="gallery" key={`${image}-${index}`} href={image}>
                                                <img src={image} alt={`изображение ${index + 1}`}/>
                                            </a>
                                        ))}
                                    </div>}
                            </div>
                        </SinglePageNestedSection>
                    ))}
                </div>

            </SinglePageNestedSection>

            {/* Показать ещё кнопка */}
            <SinglePageNestedSection>
                {showElseReviewsCount && showElseReviewsCount > 0 &&
                    <Button buttonColor={"moderate-green"} buttonStyle={"outline"}>Показать
                        ещё {showElseReviewsCount} отзывов</Button>
                }
            </SinglePageNestedSection>

        </SinglePageParentSection>
    );
}

