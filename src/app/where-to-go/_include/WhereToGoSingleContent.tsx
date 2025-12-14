'use client'
import {useState} from "react";
import Container from "@/components/Container";
import {WhereToGo} from "@/interfaces/WhereToGo";
import Breadcrumbs from "@/components/Breadcrumbs";
import SinglePageHeaderBlock from "@/components/ui/single-page-sections/SinglePageTitleSection";
import Image from "next/image";
import SinglePageParentSection from "@/components/ui/single-page-sections/SinglePageParentSection";
import SinglePageImagesBlock from "@/components/ui/single-page-sections/SinglePageImagesSection";
import SinglePageNestedSection from "@/components/ui/single-page-sections/SinglePageNestedSection";
import clockIcon2 from "@/assets/img/icons/clock-01.svg";
import PaidServicesSection from "@/app/excursions/_include/PaidServicesSection";
import SinglePageReviewsSection from "@/components/ui/single-page-sections/SinglePageReviewsSection";
import SinglePageSidebar from "@/components/ui/single-page-sections/sidebar/SinglePageSidebar";
import SinglePageSidebarItem from "@/components/ui/single-page-sections/sidebar/SinglePageSidebarItem";
import arrowRightOrange from "@/assets/img/icons/arrow-right-orange.svg";
import arrowDown from "@/assets/img/icons/green-arrow-down.svg";
import {fakeExcursionsReviews, fakeExcursionsUploadedUsersImages} from "@/dummy-data/fakeExcursionsReviews";
import BottomHeader from "@/components/includes/BottomHeader";

const pageSections = [
    {
        name: 'Описание',
        url: '#description',
    },
    {
        name: 'Информация о месте',
        url: '#information',
    },
    {
        name: 'Платные услуги',
        url: '#paid-services',
    },
    {
        name: 'Отзывы',
        url: '#reviews',
    },
]

export default function WhereToGoSingleContent({whereToGo}: { whereToGo: WhereToGo }) {
    const defaultDescriptionLen = 150;
    const [isExpanded, setIsExpanded] = useState(false);

    const descLengthMore = whereToGo.description.length > defaultDescriptionLen;
    const displayText = isExpanded
        ? whereToGo.description
        : `${whereToGo.description.substring(0, defaultDescriptionLen)}${descLengthMore ? '...' : ''}`;

    return (
        <div className="single-page">
            <BottomHeader menuItems={pageSections}/>
            {/* Header part */}
            <Container>
                {whereToGo?.title && (<Breadcrumbs
                        links={[
                            {isLast: false, label: "Куда сходить", href: "/where-to-go"},
                            {isLast: true, label: whereToGo.title},
                        ]}
                    />
                )}

                <SinglePageHeaderBlock title={whereToGo.title} rating={whereToGo.rating}
                                       reviewsCount={whereToGo.reviewsCount}>
                    <h3 className="fnt-h4">{whereToGo.price}</h3>
                    <div className="fnt-accent">
                        {/* todo брать данные из бд, добавить поле, если в базе нет */}
                        {whereToGo.priceFor}
                    </div>
                    <div className="fnt-notes-accent c-orange-primary cursor-pointer flex flex-row gap-4">
                        Как добраться
                        <Image src={arrowRightOrange} alt="смотреть план"/>
                    </div>
                </SinglePageHeaderBlock>
            </Container>

            {/* Sides */}
            <Container className="sides">
                <div className="left-side">
                    <SinglePageParentSection>
                        {whereToGo.images && <SinglePageImagesBlock images={whereToGo.images.slice(0, 5)}/>}

                        <SinglePageNestedSection id="description" sectionCssClass="description-block" title="Описание">
                            <div className="description">
                                {displayText}
                            </div>

                            {whereToGo.description && descLengthMore && (
                                <div
                                    className="more fnt-accent c-moderate-primary flex flex-nowrap gap-4 cursor-pointer"
                                    onClick={() => setIsExpanded(prev => !prev)}
                                >
                                    {isExpanded ? 'Свернуть' : 'Читать больше'}
                                    <Image
                                        src={arrowDown}
                                        alt={isExpanded ? 'стрелка свернуть описание' : 'стрелка развернуть описание'}
                                        width={16}
                                        height={16}
                                        className={isExpanded ? 'transform rotate-180' : ''}
                                    />
                                </div>
                            )}
                        </SinglePageNestedSection>
                    </SinglePageParentSection>


                    {/* todo изменить базовый контент */}
                    <SinglePageParentSection id="information" title="Информация о месте">
                        <SinglePageNestedSection>
                            <div className="flex flex-row gap-4">
                                <Image src={clockIcon2} alt="продолжительность"/>
                                Продолжительность поездки: 3 часа
                            </div>
                        </SinglePageNestedSection>

                        <div className="flex flex-col gap-12">
                            <div>
                                <div className="fnt-accent">Расписание</div>
                                <ul>

                                    <li>Вт: 19:00</li>
                                    <li>Cр: 16:00</li>
                                    <li>Чт: 19:00</li>
                                    <li>Сб: 18:00</li>
                                </ul>
                            </div>
                            <div>
                                <div className="fnt-accent">Программа</div>
                                <ul>
                                    <li>Пешеходная экскурсия по стрелке и территории парка;</li>
                                    <li>Узнаете, почему Болотный остров стал Золотым, как стрелка превратилась в
                                        модный
                                        арт-кластер, а также какие тайны хранят здания бывшего фабричного комплекса;
                                    </li>
                                    <li>Экскурсия по музею «Роза Эйнема». Продолжительность прогулки — 45 минут;
                                    </li>
                                    <li>Кондитерский мастер-класс по приготовлению дубайского шоколада: вы создадите
                                        собственную плитку знаменитого дубайского шоколада своими руками из
                                        фирменного
                                        шоколада фабрики;
                                    </li>
                                    <li>Во время этого творческого процесса вдоволь наедитесь и напьетесь свежего
                                        горячего
                                        шоколада.
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <div className="fnt-accent">Прочие условия</div>
                                <ul>
                                    <li>Количество участников: до 20 человек;</li>
                                    <li>Возраст участников: 8+;</li>
                                    <li>Дети до 16 лет только в сопровождении родителей;</li>
                                    <li>Экскурсия проходит с радиогидами;</li>
                                    <li>Клиенту рекомендуется сообщить об отмене или переносе записи не менее чем за
                                        12
                                        часов.
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </SinglePageParentSection>

                    <SinglePageParentSection id="paid-services" title="Платные услуги">
                        <PaidServicesSection items={whereToGo.paidServices ?? []}/>
                    </SinglePageParentSection>

                    <SinglePageReviewsSection id="reviews" reviews={fakeExcursionsReviews}
                                              gallery={fakeExcursionsUploadedUsersImages}/>
                </div>

                <SinglePageSidebar>

                    {/* todo добавить модальное окно забронировать экскурсию */}


                    {/* todo передавать данные из бд */}
                    <SinglePageSidebarItem title="Видео о нас"
                                           mainItem
                                           image="/images/dummy/excursions/sp-excursion-sidebar-video-image.jpg"/>


                </SinglePageSidebar>
            </Container>
        </div>
    );
}

