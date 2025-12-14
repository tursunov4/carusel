'use client'

import React, {useState} from "react";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import SinglePageHeaderBlock from "@/components/ui/single-page-sections/SinglePageTitleSection";
import SinglePageImagesBlock from "@/components/ui/single-page-sections/SinglePageImagesSection";
import SinglePageParentSection from "@/components/ui/single-page-sections/SinglePageParentSection";
import SinglePageFacilitiesSection from "@/components/ui/single-page-sections/SinglePageFacilitiesSection";
import LineImagesGallery from "@/components/ui/single-page-sections/LineImagesGallery";
import RelatedCardsList from "@/components/ui/single-page-sections/RelatedCardsList";
import Image from "next/image";
import locationIcon from "@/assets/img/icons/marker-pin-01-subheading.svg";
import arrowDown from "@/assets/img/icons/green-arrow-down.svg";
import arrowRightOrange from "@/assets/img/icons/arrow-right-orange.svg";
import SinglePageReviewsSection from "@/components/ui/single-page-sections/SinglePageReviewsSection";
import SinglePageSidebar from "@/components/ui/single-page-sections/sidebar/SinglePageSidebar";
import {Hotel} from "@/interfaces/Hotel";
import SinglePageNestedSection from "@/components/ui/single-page-sections/SinglePageNestedSection";
import {fakeHotelsReviews, fakeHotelsUploadedUsersImages} from "@/dummy-data/fakeHotelsReviews";
import SinglePageSidebarItem from "@/components/ui/single-page-sections/sidebar/SinglePageSidebarItem";
import BottomHeader from "@/components/includes/BottomHeader";
import MobileFloatingBookButton from "@/components/MobileFloatingBookButton";

const pageSections = [
    {
        name: 'Описание',
        url: `#description`,
    },
    {
        name: 'Правила объекта',
        url: `#terms`,
    },
    {
        name: 'Основные удобства',
        url: `#facilities`,
    },
    {
        name: 'Доступные номера',
        url: `#rooms`,
    },
    {
        name: 'Расположение',
        url: `#location`,
    },
    {
        name: 'Отзывы',
        url: `#reviews`,
    },
]

export default function HotelContent({hotel}: { hotel: Hotel }) {
    const defaultDescriptionLen = 150;
    const [isExpanded, setIsExpanded] = useState(false);
    const displayText = isExpanded
        ? hotel.description
        : `${hotel.description
            .substring(0, defaultDescriptionLen)}${hotel.description.length > defaultDescriptionLen ? '...' : ''}`;

    return (
        <div className="single-page">
            <BottomHeader menuItems={pageSections}/>
            {/* Header part */}
            <Container>
                {hotel?.title && (<Breadcrumbs
                        links={[
                            {isLast: false, label: "Гостиницы", href: "/hotels"},
                            {isLast: true, label: "Гостиница " + hotel.title},
                        ]}
                    />
                )}

                <SinglePageHeaderBlock title={hotel.title} rating={hotel.rating} reviewsCount={hotel.reviewsCount}>
                    <h3 className="fnt-accent" style={{whiteSpace: "nowrap"}}>Класс гостиницы</h3>
                    <div className={`pill fnt-tags-small${hotel.pillColor ? ' ' + hotel.pillColor : ''}`}>
                        {hotel.hotelClass}
                    </div>
                    <div className="fnt-notes-accent c-orange-primary cursor-pointer flex flex-row gap-4 items-center"
                         style={{whiteSpace: "nowrap"}}>
                        <span>Смотреть цены</span>
                        <Image src={arrowRightOrange} alt="смотреть цены"/>
                    </div>
                </SinglePageHeaderBlock>
            </Container>

            {/* Sides */}
            <Container className="sides">
                <div className="left-side">
                    <SinglePageParentSection>
                        {hotel.images && <SinglePageImagesBlock images={hotel.images.slice(0, 5)}/>}

                        <SinglePageNestedSection id="description" sectionCssClass="description-block" title="Описание">
                            <div className="description">{displayText}</div>

                            {hotel.description && (
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

                    <SinglePageParentSection id="terms" title="Правила объекта размещения">
                        <SinglePageNestedSection borderBottom contentCssClass="checkin-out flex flex-row">
                            <div className="flex-1">
                                <div className="fnt-accent">Заезд</div>
                                с 12:00
                            </div>
                            <div className="flex-1">
                                <div className="fnt-accent">Выезд</div>
                                с 12:00
                            </div>
                        </SinglePageNestedSection>
                        <SinglePageNestedSection borderBottom contentCssClass="breakfast flex flex-row">
                            <div className="flex-1">
                                <div className="fnt-accent">Начало завтра</div>
                                с 12:00
                            </div>
                            <div className="flex-1">
                                <div className="fnt-accent">Конец завтрака</div>
                                до 10:00
                            </div>
                        </SinglePageNestedSection>

                        <SinglePageNestedSection contentCssClass="info">
                            <ul>
                                <li>Приветствуется размещение с детьми</li>
                                <li>При превышении стандартного количества гостей возможно предоставление
                                    дополнительных кроватей за доплату. Подробности уточняйте в отеле.
                                </li>
                                <li>Во всех типах номеров не предусмотрены дополнительные кровати и детские
                                    кроватки
                                </li>
                            </ul>
                        </SinglePageNestedSection>
                    </SinglePageParentSection>

                    <SinglePageParentSection id="facilities" title="Основные удобства">
                        <SinglePageFacilitiesSection facilities={hotel.facilities || []}/>
                    </SinglePageParentSection>

                    <SinglePageParentSection id="rooms" title="Доступные номера">
                        <SinglePageNestedSection title="Двухместный полулюкс" borderBottom>
                            <LineImagesGallery images={hotel.rooms}/>
                            <div className="fnt-notes c-black-subheading">
                                Площадь 33 м² . Ортопедический матрас
                            </div>
                            <div className="facilities">
                                <SinglePageFacilitiesSection facilities={hotel.facilities || []}/>
                            </div>
                        </SinglePageNestedSection>
                        <SinglePageNestedSection title="Трёхместный стандарт">
                            <LineImagesGallery images={hotel.rooms}/>
                            <div className="fnt-notes c-black-subheading">
                                Площадь 33 м² . Ортопедический матрас
                            </div>
                            <div className="facilities">
                                <SinglePageFacilitiesSection facilities={hotel.facilities || []}/>
                            </div>
                        </SinglePageNestedSection>
                    </SinglePageParentSection>

                    <SinglePageParentSection id="location" title="Расположение">
                        <SinglePageNestedSection>
                            <div className="flex flex-row gap-4">
                                <Image src={locationIcon} alt="местоположение" width={16} height={17}/>
                                <span className="fnt-primary c-black-subheading">
                                Западная Яньхэ ул., 1462, городской уезд Хуньчунь
                            </span>
                            </div>
                            <div>
                                <img src="/images/dummy/hotels/google-map-image.jpg"
                                     alt="карта гугл яндекс положения"
                                />
                            </div>
                        </SinglePageNestedSection>

                        <SinglePageNestedSection title="Что рядом">
                            <RelatedCardsList items={hotel.relatedData || []}/>
                        </SinglePageNestedSection>
                    </SinglePageParentSection>

                    <SinglePageReviewsSection id="reviews" reviews={fakeHotelsReviews}
                                              gallery={fakeHotelsUploadedUsersImages}/>
                </div>

                <SinglePageSidebar>
                    <SinglePageSidebarItem mainItem
                                           title="Видео о нас"
                                           image="/images/dummy/hotels/sp-hotel-sidebar-video-image.svg"/>


                </SinglePageSidebar>
            </Container>

            <MobileFloatingBookButton page="Гостиница" buttonText="Забронировать" infoText={hotel.title}/>
        </div>
    );
}
