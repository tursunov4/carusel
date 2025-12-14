'use client'

import {Excursion} from "@/interfaces/Excursion";
import React, {useState} from "react";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import SinglePageHeaderBlock from "@/components/ui/single-page-sections/SinglePageTitleSection";
import SinglePageParentSection from "@/components/ui/single-page-sections/SinglePageParentSection";
import SinglePageImagesBlock from "@/components/ui/single-page-sections/SinglePageImagesSection";
import Image from "next/image";
import arrowDown from "@/assets/img/icons/green-arrow-down.svg";
import clockIcon from "@/assets/img/icons/clock-02.svg";
import clockIcon2 from "@/assets/img/icons/clock-01.svg";
import tgIcon from "@/assets/img/icons/tg-icon.svg";
import vkIcon from "@/assets/img/icons/vk-icon.svg";
import maxIcon from "@/assets/img/icons/max-image.svg";
import SinglePageNestedSection from "@/components/ui/single-page-sections/SinglePageNestedSection";
import SinglePageReviewsSection from "@/components/ui/single-page-sections/SinglePageReviewsSection";
import arrowRightOrange from "@/assets/img/icons/arrow-right-orange.svg";
import PaidServicesSection from "@/app/excursions/_include/PaidServicesSection";
import Button from "@/components/elements/Button";
import SinglePageSidebar from "@/components/ui/single-page-sections/sidebar/SinglePageSidebar";
import SinglePageSidebarItem from "@/components/ui/single-page-sections/sidebar/SinglePageSidebarItem";
import {fakeExcursionsReviews, fakeExcursionsUploadedUsersImages} from "@/dummy-data/fakeExcursionsReviews";
import SinglePageIncludesPillsSection from "@/components/ui/single-page-sections/SinglePageIncludesPillsSection";
import BottomHeader from "@/components/includes/BottomHeader";
import BookExcursionForm from "@/app/excursions/_include/BookExcursionForm";
import MobileFloatingBookButton from "@/components/MobileFloatingBookButton";

const pageSections = [
    {
        name: 'Описание',
        url: `#description`,
    },
    {
        name: 'План экскурсии',
        url: `#plan`,
    },
    {
        name: 'Что включено',
        url: `#includes`,
    },
    {
        name: 'Платные услуги',
        url: `#paid-services`,
    },
    {
        name: 'Отзывы',
        url: `#reviews`,
    }
]


export default function ExcursionContent({excursion}: { excursion: Excursion }) {
    const defaultDescriptionLen = 150;
    const [isExpanded, setIsExpanded] = useState(false);

    const descLengthMore = excursion.description.length > defaultDescriptionLen;
    const displayText = isExpanded
        ? excursion.description
        : `${excursion.description.substring(0, defaultDescriptionLen)}${descLengthMore ? '...' : ''}`;

    const [selectedTourId, setSelectedTourId] = useState<number | null>(null);
    const openModal = (id: number) => setSelectedTourId(id);
    const closeModal = () => setSelectedTourId(null);

    function submitModal() {
        // todo send fetch to backend
        // ...

        console.log('submit modal form', selectedTourId);
        setSelectedTourId(null);

    }

    return (
        <div className="single-page">
            <BottomHeader menuItems={pageSections}/>
            {/* Header part */}
            <Container>
                {excursion?.title && (<Breadcrumbs
                        links={[
                            {isLast: false, label: "Экскурсии", href: "/excursions"},
                            {isLast: true, label: "Экскурсия " + excursion.title},
                        ]}
                    />
                )}

                <SinglePageHeaderBlock title={excursion.title} rating={excursion.rating}
                                       reviewsCount={excursion.reviewsCount}>
                    <h3 className="fnt-h4">{excursion.price}</h3>
                    <div className="fnt-accent">
                        {/* todo брать данные из бд, добавить поле, если в базе нет */}
                        {excursion.priceFor}
                    </div>
                    <div className="fnt-notes-accent c-orange-primary cursor-pointer flex flex-row gap-4">
                        <span style={{whiteSpace: "nowrap"}}>Смотреть план</span>
                        <Image src={arrowRightOrange} alt="смотреть план"/>
                    </div>
                </SinglePageHeaderBlock>
            </Container>

            {/* Sides */}
            <Container className="sides">
                <div className="left-side">
                    <SinglePageParentSection>
                        {excursion.images && <SinglePageImagesBlock images={excursion.images.slice(0, 5)}/>}

                        <SinglePageNestedSection id="description" sectionCssClass="description-block" title="Описание">
                            <div className="description">{displayText}</div>

                            {excursion.description && descLengthMore && (
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
                    <SinglePageParentSection id="plan" title="План экскурсии">
                        <SinglePageNestedSection>
                            <div className="flex flex-row gap-4">
                                <Image src={clockIcon2} alt="продолжительность"/>
                                Продолжительность экскурсии: 3 часа
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
                                    <li>Узнаете, почему Болотный остров стал Золотым, как стрелка превратилась в модный
                                        арт-кластер, а также какие тайны хранят здания бывшего фабричного комплекса;
                                    </li>
                                    <li>Экскурсия по музею «Роза Эйнема». Продолжительность прогулки — 45 минут;</li>
                                    <li>Кондитерский мастер-класс по приготовлению дубайского шоколада: вы создадите
                                        собственную плитку знаменитого дубайского шоколада своими руками из фирменного
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
                                    <li>Клиенту рекомендуется сообщить об отмене или переносе записи не менее чем за 12
                                        часов.
                                    </li>

                                </ul>
                            </div>
                        </div>


                    </SinglePageParentSection>

                    <SinglePageParentSection id="includes" title="Что включено">
                        <SinglePageIncludesPillsSection includes={excursion.includes || []}/>
                    </SinglePageParentSection>


                    <SinglePageParentSection id="paid-services" title="Платные услуги">
                        <PaidServicesSection items={excursion.paidServices}/>
                    </SinglePageParentSection>

                    <SinglePageReviewsSection id="reviews" reviews={fakeExcursionsReviews}
                                              gallery={fakeExcursionsUploadedUsersImages}/>
                </div>

                <SinglePageSidebar>

                    {/* todo добавить модальное окно забронировать экскурсию */}
                    <SinglePageSidebarItem mainItem title="Бронирование" hideOnMobile onTop>
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-row gap-4">
                                <Image src={clockIcon} alt="сколько занимает времени" width={16} height={16}/>
                                <span className="fnt-primary c-black-subheading">Занимает не больше 5 минут</span>
                            </div>
                            <div className="flex flex-col gap-8">
                                <div>Свяжитесь с нами удобным способом</div>
                                <div className="social-icons-row flex flex-row flex-wrap gap-12">
                                    <div>
                                        <a href="#tg_link" target="_blank" rel="noopener noreferrer nofollow">
                                            <Image src={tgIcon} alt="телеграм" width={32}
                                                   height={33}/>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#vkIcon" target="_blank" rel="noopener noreferrer nofollow">
                                            <Image src={vkIcon} alt="вконтакте" width={32}
                                                   height={33}/>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#maxIcon" target="_blank" rel="noopener noreferrer nofollow">
                                            <Image src={maxIcon} alt="max" width={32} height={33}/>
                                        </a>
                                    </div>
                                </div>
                                <div>Или заполните форму</div>
                                <Button onClick={() => openModal(1)} fullWidth>Забронировать</Button>

                            </div>

                        </div>
                    </SinglePageSidebarItem>

                    {/* todo передавать данные из бд */}
                    <SinglePageSidebarItem title="Видео о нас"
                                           mainItem
                                           image="/images/dummy/excursions/sp-excursion-sidebar-video-image.jpg"/>



                </SinglePageSidebar>
                <BookExcursionForm tourId={selectedTourId} closeModal={closeModal} submitModal={submitModal}/>
            </Container>

            <MobileFloatingBookButton page="Экскурсия" buttonText="Забронировать" infoText={`${excursion.title}`}/>
        </div>
    );
}

