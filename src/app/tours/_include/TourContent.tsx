'use client'

import React, {useState} from "react";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import SinglePageHeaderBlock from "@/components/ui/single-page-sections/SinglePageTitleSection";
import SinglePageParentSection from "@/components/ui/single-page-sections/SinglePageParentSection";
import SinglePageImagesBlock from "@/components/ui/single-page-sections/SinglePageImagesSection";
import Image from "next/image";
import arrowDown from "@/assets/img/icons/green-arrow-down.svg";
import SinglePageReviewsSection from "@/components/ui/single-page-sections/SinglePageReviewsSection";
import Button from "@/components/elements/Button";
import SinglePageSidebar from "@/components/ui/single-page-sections/sidebar/SinglePageSidebar";
import SinglePageSidebarItem from "@/components/ui/single-page-sections/sidebar/SinglePageSidebarItem";
import {fakeExcursionsReviews, fakeExcursionsUploadedUsersImages} from "@/dummy-data/fakeExcursionsReviews";
import {Tour} from "@/interfaces/Tour";
import RelatedCardsList from "@/components/ui/single-page-sections/RelatedCardsList";
import {InfoBlock} from "@/interfaces/InfoBlock";
import BaseCard from "@/components/ui/cards/BaseCards/BaseCard";
import WhyMeSection from "@/app/tours/_include/WhyMeSection";
import BottomHeader from "@/components/includes/BottomHeader";
import SinglePageNestedSection from "@/components/ui/single-page-sections/SinglePageNestedSection";
import minusIcon from "@/assets/img/icons/minus-01.svg";
import plusIcon from "@/assets/img/icons/plus-01.svg";
import MobileFloatingBookButton from "@/components/MobileFloatingBookButton";

const pageSections = [
    {
        name: 'Описание',
        url: `#description`,
    },
    {
        name: 'Что входит в тур',
        url: `#what-is-included`,
    },
    {
        name: 'Почему мы?',
        url: `#why-us`,
    },
    {
        name: 'Контакты',
        url: `#contacts`,
    },
    {
        name: 'Наши экскурсии',
        url: `#our-excursions`,
    },
    {
        name: 'Отзывы',
        url: `#reviews`,
    },
]

export default function TourContent({tour}: { tour: Tour }) {
    const defaultDescriptionLen = 150;
    const [isExpanded, setIsExpanded] = useState(false);

    const descLengthMore = tour.description.length > defaultDescriptionLen;
    const displayText = isExpanded
        ? tour.description
        : `${tour.description.substring(0, defaultDescriptionLen)}${descLengthMore ? '...' : ''}`;


    const [guestCount, setGuestCount] = useState(1)
    const guestInc = () => {
        setGuestCount(prevState => prevState + 1);
    }
    const guestDec = () => {
        setGuestCount(prevState => Math.max(1, prevState - 1));
    }

    function openModalBookingForm() {
        console.log('open booking modal window')
    }

    function handleBookingform() {
        console.log('form submitted')
    }

    return (
        <div className="single-page">
            <BottomHeader menuItems={pageSections}/>
            {/* Header part */}
            <Container>
                {tour?.title && (<Breadcrumbs
                        links={[
                            {isLast: false, label: "Туры", href: "/tours"},
                            {isLast: true, label: tour.title},
                        ]}
                    />
                )}

                <SinglePageHeaderBlock title={tour.title} rating={tour.rating}
                                       reviewsCount={tour.reviewsCount}>
                    <h4 className="fnt-h4">{tour.price}</h4>
                    <div className="fnt-accent">
                        {/* todo брать данные из бд, добавить поле, если в базе нет */}
                        {tour.priceFor}
                    </div>

                </SinglePageHeaderBlock>
            </Container>

            {/* Sides */}
            <Container className="sides">
                <div className="left-side">
                    <SinglePageParentSection>
                        {tour.images && <SinglePageImagesBlock className="compact" images={tour.images.slice(0, 5)}/>}


                        {/* todo сделать компонент для description block */}
                        <SinglePageNestedSection id="description" sectionCssClass="description-block" title="Описание">
                            <div className="description">{displayText}</div>

                            {tour.description && descLengthMore && (
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

                    <SinglePageParentSection id="what-is-included" title="Что входит в тур">
                        <div className="includes-list">
                            {tour.includes && tour.includes.map((item: InfoBlock) => (
                                <BaseCard key={item.id} className="includes-item">
                                    <div className="icon">
                                        <img src={item.icon} alt="тур включает" width={24} height={24}/>
                                    </div>
                                    <div className="info">
                                        <div className="title fnt-accent">{item.title}</div>
                                        <div
                                            className="description fnt-notes c-black-subheading">{item.description}</div>
                                    </div>
                                </BaseCard>
                            ))}
                        </div>

                    </SinglePageParentSection>

                    <SinglePageParentSection id="why-us" title="Почему мы?">
                        <WhyMeSection items={tour.whyMe}/>
                    </SinglePageParentSection>

                    <SinglePageParentSection id="contacts" title="Контакты">
                        {/* todo сделать компонент контакты */}
                        {/* todo убрать стили в файл /assets/css/single-page/sections/_gray-cards.css */}
                        <div className="tour-section-contacts flex flex-col gap-20">
                            <div className="fnt-primary">Остались вопросы? Мы на связи! По статистике
                                онлайн-консультация не занимает больше 5
                                минут
                            </div>
                            <div className="flex flex-row flex-wrap gap-12 justify-between">
                                <div className="flex-1 flex flex-col gap-16">
                                    <div>
                                        <img src="/images/icons/tours/contacts/mail.svg" alt="в разделе контакты"/>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="fnt-accent">Адрес</div>
                                        <div className="fnt-notes">Приморский край, Владивосток</div>
                                    </div>
                                </div>
                                <div className="divider vertical"></div>
                                <div className="flex-1 flex flex-col gap-16">
                                    <div>
                                        <img src="/images/icons/tours/contacts/marker-pin-02.svg"
                                             alt="в разделе контакты"/>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="fnt-accent">Телефон</div>
                                        <div className="fnt-notes-accent c-moderate-primary">+7 924 730-34-02</div>
                                    </div>
                                </div>
                                <div className="divider vertical"></div>
                                <div className="flex-1 flex flex-col gap-16">
                                    <div>
                                        <img src="/images/icons/tours/contacts/phone-call-01.svg"
                                             alt="в разделе контакты"/>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="fnt-accent">E-mail</div>
                                        <div className="fnt-notes-accent c-moderate-primary">info@Hunchuntravel.ru</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SinglePageParentSection>

                    <SinglePageParentSection id="our-excursions" title="Наши экскурсии">
                        <RelatedCardsList items={tour.relatedData || []}/>
                    </SinglePageParentSection>

                    <SinglePageReviewsSection id="reviews" reviews={fakeExcursionsReviews}
                                              gallery={fakeExcursionsUploadedUsersImages}/>
                </div>

                <SinglePageSidebar expandedSidebar>

                    {/* todo добавить модальное окно забронировать экскурсию */}
                    <SinglePageSidebarItem title="Бронирование тура" onTop>
                        <form onSubmit={handleBookingform} className="flex flex-col gap-12">
                            <div className="inline-group flex flex-row flex-wrap gap-12 justify-between">
                                <div className="flex-1">
                                    <label htmlFor="">Дата заезда</label>
                                    <input type="date"/>
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="">Дата выезда</label>
                                    <input type="date"/>
                                </div>
                            </div>
                            <div className="flex flex-row flex-wrap gap-12 justify-between items-center">
                                <div>Количество гостей</div>
                                <div className="plus-minus">
                                    <div className="minus" onClick={guestDec}>
                                        <Image src={minusIcon} alt="добавить убавить" width={16} height={16}/>
                                    </div>

                                    <div className="counter">{guestCount}</div>

                                    <div className="plus" onClick={guestInc}>
                                        <Image src={plusIcon} alt="добавить убавить" width={16} height={16}/>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <label htmlFor="">Класс гостиницы</label>
                                <select name="" id="">
                                    <option value="">Стандарт 1 000 ¥/чел.</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="">Заезд в Китай</label>
                                <select name="" id="">
                                    <option value="">Ранний (с 8:30 до 10:00)</option>
                                </select>
                            </div>

                            <div className="info fnt-accent c-black-subheading">Итог посчитается после заполнения
                                полей
                            </div>
                            <div className="fnt-notes c-black-subheading">Что входить в стоимость тура i</div>

                            <Button fullWidth type="submit">Забронировать</Button>
                        </form>
                    </SinglePageSidebarItem>


                </SinglePageSidebar>
            </Container>

            <MobileFloatingBookButton page="Тур" buttonText="Забронировать" infoText={tour.title}/>
        </div>
    );
}

