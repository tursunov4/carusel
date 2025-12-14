import Hero from "@/components/pages/homepage/Hero";
import Container from "@/components/Container";
import WideBanner from "@/components/WideBanner";
import FeaturesSection from "@/components/pages/homepage/FeaturesSection";

import Slider from "@/components/Slider";
import ReviewCard from "@/components/pages/homepage/ReviewCard";
import AccommodationCard from "@/components/pages/homepage/AccommodationCard";
import NarrowCard from "@/components/ui/cards/NarrowCard/NarrowCard";

import banner from "@/assets/img/mmexport1703742740820.jpg"
import featureImage from "@/assets/img/dalle-wQPhVHJTnG.jpg"
import {fakeWhereToGoList} from "@/dummy-data/fakeWhereToGoList";
import {excursions} from "@/dummy-data/fakeExcursionsList";
import SinglePageParentSection from "@/components/ui/single-page-sections/SinglePageParentSection";
import Link from "next/link";
import {fakeToursList} from "@/dummy-data/fakeToursList";
import {hotels} from "@/dummy-data/fakeHotelsList";
import {fakeWhatToDo} from "@/dummy-data/fakeWhatToDo";
import {fakeReviewCards} from "@/dummy-data/fakeReviewCards";
import {fakeFeaturesList} from "@/dummy-data/fakeFeaturesList";


export default function HomePage() {

    return (
        <>
            <Container className="flex flex-col gap-24 mb-5">
                <Hero/>
                <SinglePageParentSection title="Туры в Хуньчунь">
                    <p>Лечебные, стоматологические и экскурсионные туры в Хуньчунь — комфортное путешествие для
                        здоровья, красоты и новых впечатлений с русскоязычным сопровождением.</p>
                    <Slider maxSlides={3}>
                        {fakeToursList.slice(0, 3).map(card => (
                            <NarrowCard key={card.id} image={card.image} label={card.price}
                                        link={card.link}
                                        title={card.title}>{card.description}</NarrowCard>
                        ))}
                    </Slider>
                </SinglePageParentSection>

                <SinglePageParentSection title="Гостиницы в Хуньчуне">
                    <p>Здесь вы найдёте комфортные гостиницы рядом с клиниками, торговыми центрами и банями. Варианты
                        размещения — от бюджетных до отелей премиум с уровнем 4–5★. Многие отели говорят по-русски,
                        предлагают трансфер и завтраки. Мы подобрали для вас лучшие гостиницы Хуньчуня по соотношению
                        цена/качество — бронируйте заранее и отдыхайте с комфортом после процедур или во время
                        шопинга.</p>
                    <Slider maxSlides={4} autoplay={true} showButtons={false}>
                        {hotels.slice(0, 4).map(card => (
                            <AccommodationCard key={card.slug} link={card.link} title={card.title} rating={card.rating}
                                               imageSrc={card.image} reviewsCount={card.reviewsCount}/>
                        ))}
                    </Slider>
                </SinglePageParentSection>

                <SinglePageParentSection title="Экскурсии в Хуньчуне">
                    <p>Экскурсии в Хуньчуне — отличное дополнение к лечению и шопингу. Популярны поездки к границе с
                        КНДР, горячие источники, гора чанбайшань, храмы и стеклянный мост. Есть русскоязычные гиды и
                        индивидуальные маршруты. Программы занимают от пары часов до дня — подберём под ваш интерес.</p>
                    <Slider maxSlides={4} autoplay={true} showButtons={false}>
                        {excursions.slice(0, 4).map(card => (
                            <AccommodationCard key={card.id} link={card.link} title={card.title} rating={card.rating}
                                               imageSrc={card.image} reviewsCount={card.reviewsCount}/>
                        ))}
                    </Slider>
                </SinglePageParentSection>

                <SinglePageParentSection title="Куда сходить в Хуньчуне">
                    <p>Экскурсии в Хуньчуне — отличное дополнение к лечению и шопингу. Популярны поездки к границе с
                        КНДР, горячие источники, гора чанбайшань, храмы и стеклянный мост. Есть русскоязычные гиды и
                        индивидуальные маршруты. Программы занимают от пары часов до дня — подберём под ваш интерес.</p>
                    <Slider maxSlides={4} autoplay={true} showButtons={false}>
                        {fakeWhereToGoList.slice(0, 4).map((card, index) => (
                            <AccommodationCard key={index} link={card.link} title={card.title} rating={card.rating}
                                               imageSrc={card.image} reviewsCount={card.reviewsCount}/>
                        ))}
                    </Slider>
                </SinglePageParentSection>

                <SinglePageParentSection title="Чем заняться в Хуньчуне">
                    <Slider maxSlides={3}>
                        {fakeWhatToDo.slice(0, 3).map((card, index) => (
                            <NarrowCard key={index} image={card.img} label={card.label} buttonText={card.button}
                                        link={card.link}>{card.text}</NarrowCard>
                        ))}
                    </Slider>
                </SinglePageParentSection>

                <SinglePageParentSection title="Реальные отзывы и истории людей о путешествиях в Китай">
                    <Slider maxSlides={3} autoplay={true} showButtons={false}>
                        {fakeReviewCards.map((card, index) => (
                            <ReviewCard key={index} firstName={card.firstName} lastName={card.lastName}
                                        avatar={card.avatar}
                                        buttonText={card.buttonText} link={card.link} title={card.title}
                                        text={card.text}/>
                        ))}
                    </Slider>
                    <div className="flex flex-row justify-center">
                        <Link href="#" className="btn btn-orange btn-primary">Смотреть все →</Link>
                    </div>
                </SinglePageParentSection>

                <FeaturesSection image={featureImage.src} features={fakeFeaturesList}/>
            </Container>
            <WideBanner image={banner.src}>
                Погрузитесь в удивительный мир Китая вместе с нами
            </WideBanner>
        </>
    )
}
