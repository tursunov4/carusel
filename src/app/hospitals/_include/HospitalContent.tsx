'use client'

import React, {Fragment, useState} from "react";
import {Clinic} from "@/services/Clinic";
import {API_BASE_URL} from "@/services/apiFetch";
import Container from "@/components/Container";
import BottomHeader from "@/components/includes/BottomHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import SinglePageHeaderBlock from "@/components/ui/single-page-sections/SinglePageTitleSection";
import Image from "next/image";
import arrowRightOrange from "@/assets/img/icons/arrow-right-orange.svg";
import SinglePageParentSection from "@/components/ui/single-page-sections/SinglePageParentSection";
import SinglePageNestedSection from "@/components/ui/single-page-sections/SinglePageNestedSection";
import arrowDown from "@/assets/img/icons/green-arrow-down.svg";
import SinglePageIncludesPillsSection from "@/components/ui/single-page-sections/SinglePageIncludesPillsSection";
import SinglePageReviewsSection from "@/components/ui/single-page-sections/SinglePageReviewsSection";
import {fakeExcursionsReviews, fakeExcursionsUploadedUsersImages} from "@/dummy-data/fakeExcursionsReviews";
import SinglePageSidebar from "@/components/ui/single-page-sections/sidebar/SinglePageSidebar";
import SinglePageSidebarItem from "@/components/ui/single-page-sections/sidebar/SinglePageSidebarItem";
import clockIcon from "@/assets/img/icons/clock-02.svg";
import tgIcon from "@/assets/img/icons/tg-icon.svg";
import vkIcon from "@/assets/img/icons/vk-icon.svg";
import maxIcon from "@/assets/img/icons/max-image.svg";
import checkIcon from "@/assets/img/icons/check-02.svg";
import Button from "@/components/elements/Button";
import {redirect, RedirectType} from "next/navigation";
import SinglePageEquipmentsSection from "@/components/ui/single-page-sections/SinglePageEquipmentSection";
import {Equipment} from "@/interfaces/Equipment";
import {ResearchCategory} from "@/interfaces/ResearchCategory";
import DoctorsSection from "@/app/hospitals/_include/DoctorsSection";
import {fakeUnits} from "@/dummy-data/fakeUnits";
import HospitalsSinglePageImagesSection from "@/app/hospitals/_include/HospitalsSinglePageImagesSection";
import MobileFloatingBookButton from "@/components/MobileFloatingBookButton";

const pageSections = [
    {
        name: 'Описание',
        url: `#description`,
    },
    {
        name: 'Отделения',
        url: `#departments`,
    },
    {
        name: 'Услуги',
        url: `#services`,
    },
    {
        name: 'Сервис в клинике',
        url: `#clinic-services`,
    },
    {
        name: 'Стоимость услуг',
        url: `#prices`,
    },
    {
        name: 'Наши врачи',
        url: `#doctors`,
    },
    {
        name: 'Отзывы',
        url: `#reviews`,
    },
]

export default function HospitalContent({clinic, callbackNum}: { clinic: Clinic, callbackNum?: string }) {

    const [loading, setLoading] = useState(false)
    // // const [sliderRef, slider] = useKeenSlider({loop: true}, [])
    // const [currentSlide, setCurrentSlide] = useState(0)
    // const [fullscreenImage, setFullscreenImage] = useState(null)
    // const [openId, setOpenId] = useState(null);
    // const [callbackNumber, setCallbackNumber] = useState('79778108080'); // fallback по умолчанию


    const defaultDescriptionLen = 150;
    const [isExpanded, setIsExpanded] = useState(false);

    const descLengthMore = clinic.description.length > defaultDescriptionLen;
    const displayText = isExpanded
        ? clinic.description
        : `${clinic.description.substring(0, defaultDescriptionLen)}${descLengthMore ? '...' : ''}`;

    function openModalBookingForm() {
        console.log('open booking modal window')
    }

    // const toggle = (id) => {
    //     setOpenId(openId === id ? null : id);
    // };
    //
    // const [sliderRef, slider] = useKeenSlider({
    //     loop: true,
    //     slideChanged(s) {
    //         setCurrentSlide(s.track.details.rel)
    //     },
    // })

    // const imageHeight = 'h-[500px]' // единая высота
    // const aspectClass = 'aspect-[3/2]'


    if (!API_BASE_URL) {
        throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined in environment variables');
    }


    if (loading) {
        return (
            <Container>
                <div className="py-20 text-center text-xl text-gray-700 dark:text-gray-200">Загрузка...</div>
            </Container>
        )
    }

    if (!clinic) {
        redirect('/hospitals', RedirectType.replace)
    }

    // todo удалить фейковые данные для продакшна 1
    if (!clinic.price) {
        clinic.price = `От ${Math.floor((Math.floor(Math.random() * 800) + 200) / 10) * 10} ¥`;
    }
    // todo удалить фейковые данные для продакшна 2
    if (!clinic.priceFor) {
        clinic.priceFor = fakeUnits[Math.floor(Math.random() * fakeUnits.length)];
    }
    // todo удалить фейковые данные для продакшна 3
    if (!clinic.equipment.length) {
        clinic.equipment = [
            {id: 1, name: "Ежедневный трансфер на процедуры", image: "/images/icons/facilities/wifi.svg"},
            {id: 2, name: "Переводчик с русского языка", image: "/images/icons/facilities/hurricane-01.svg"},
            {id: 3, name: "Гостиница", image: "/images/icons/facilities/egg-fried.svg"},
            {id: 4, name: "Перевод документов", image: "/images/icons/facilities/building-03.svg"},
            {id: 5, name: "Чай/кофе", image: "/images/icons/facilities/passport-02.svg"},
            {id: 6, name: "Онлайн-консультация", image: "/images/icons/facilities/tv-01.svg"},
            {id: 8, name: "Wi-Fi", image: "/images/icons/facilities/phone-01.svg"}
        ] as Equipment[];
    }
    // todo удалить фейковые данные для продакшна 4
    if (!clinic.research_categories || !clinic.research_categories.length) {
        clinic.research_categories = [
            {
                id: 1,
                name: "Первый комплекс",
                price: 400,
                researches: [
                    {id: 1, name: "ЭКГ", price: 60, researchCategoryId: 1},
                    {id: 2, name: "Общий анализ крови", price: 150, researchCategoryId: 1},
                    {id: 3, name: "Анализ крови на функцию почек и печени", price: 150, researchCategoryId: 1},
                    {id: 4, name: "Общий анализ мочи", price: 100, researchCategoryId: 1},
                    {id: 5, name: "УЗИ органов пищеварения", price: 100, researchCategoryId: 1},
                    {id: 6, name: "УЗИ щитовидной железы", price: 200, researchCategoryId: 1},
                    {id: 7, name: "УЗИ мочевыделительной системы", price: 200, researchCategoryId: 1},
                    {id: 8, name: "Доплер сосудов головного мозга", price: 350, researchCategoryId: 1},
                ]
            },
            {
                id: 2,
                name: "Второй льготный комплекс",
                price: 500,
                researches: [
                    {id: 9, name: "ЭКГ", price: 60, researchCategoryId: 2},
                    {id: 10, name: "Общий анализ крови", price: 150, researchCategoryId: 2},
                    {id: 11, name: "Анализ крови на функцию почек и печени", price: 150, researchCategoryId: 2},
                    {id: 12, name: "Общий анализ мочи", price: 100, researchCategoryId: 2},
                    {id: 13, name: "УЗИ органов пищеварения", price: 100, researchCategoryId: 2},
                    {id: 14, name: "УЗИ щитовидной железы", price: 200, researchCategoryId: 2},
                    {id: 15, name: "УЗИ мочевыделительной системы", price: 200, researchCategoryId: 2},
                    {id: 16, name: "Доплер сосудов головного мозга", price: 350, researchCategoryId: 2},
                ]
            },
        ] as ResearchCategory[];
    }
    // todo удалить фейковые данные для продакшна 5
    if (!clinic.includes) {
        clinic.includes = [
            "Автодром",
            "Аттракцион прыгающая лягушка",
            "Аттракцион самолеты",
            "Двухъярусная карусель",
            "Качели на высоте",
            "Колесо обозрения",
            "Пиратский корабль",
        ];
    }
    // todo удалить фейковые данные для продакшна 6
    if (!clinic.doctors) {
        clinic.doctors = [
            {
                id: 1, name: "Ли Кван Хён", years: 12,
                image: {image: "/images/dummy/doctors/photo-1.jpg", id: 1, is_main: true},
                category: [
                    {name: "ортопедия", color: "lightgray"},
                ],
                specialties: [
                    "Директор Больницы Университета Ханянг",
                    "Доктор медицинских наук Университета Ханянг",
                    "Академические премии за лучшую научную публикацию от Корейской ассоциации хирургии кисти",
                ]
            },
            {
                id: 2, name: "Бэ Санг Чул", years: 23,
                image: {image: "/images/dummy/doctors/photo-2.jpg", id: 2, is_main: false},
                category: [
                    {name: "ревматология", color: "lightblue"},
                ],
                specialties: [
                    "Директор Ревматологической больницы Университета Ханянг",
                    "Выпускник медицинского института Университета Ханянг",
                    "Стажировка и степень магистра Здравоохранения в женской больнице «Бригама» при Гарвардском Университете, США",
                ]
            },
            {
                id: 3, name: "Вика Боя", years: 34,
                image: {image: "/images/dummy/doctors/photo-3.jpg", id: 3, is_main: false},
                category: [
                    {name: "ортопедия", color: "lightgreen"},
                ],
                specialties: [
                    "Доктор медицинских наук Университета Ханянг",
                    "Академические премии от Корейской ассоциации микрохирургии",
                ]
            },

        ];
    }

    /* function AccordionItem({rc, isOpen, toggle}) {
        const contentRef = useRef(null);
        const [maxHeight, setMaxHeight] = useState("0px");

        useEffect(() => {
            if (isOpen && contentRef.current) {
                setMaxHeight(`${contentRef.current.scrollHeight}px`);
            } else {
                setMaxHeight("0px");
            }
        }, [isOpen]);

        return (
            <div className="py-2">
                <button
                    onClick={toggle}
                    className="w-full flex justify-between items-center text-left text-lg text-gray-900 dark:text-white font-medium focus:outline-none"
                >
                    <span>{rc.name} – {rc.price} ¥</span>
                    {isOpen ? (
                        <HiChevronUp className="w-5 h-5"/>
                    ) : (
                        <HiChevronDown className="w-5 h-5"/>
                    )}
                </button>

                <div
                    ref={contentRef}
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{maxHeight}}
                >
                    <div className="mt-2 space-y-1 pl-4 border-l transition-all border-gray-300 dark:border-gray-600">
                        {rc.researches.map((res) => (
                            <div key={res.id} className="text-gray-700 dark:text-gray-300">
                                {res.name} – {res.price ?? '—'} ¥
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    } */
    return (
        <div className="single-page">
            <BottomHeader menuItems={pageSections}/>
            {/* Header part */}
            <Container>
                {clinic?.name && (<Breadcrumbs
                        links={[
                            {isLast: false, label: "Клиники", href: "/hospitals"},
                            {isLast: true, label: clinic.name},
                        ]}
                    />
                )}

                <SinglePageHeaderBlock title={clinic.name} rating={clinic.rating}
                                       reviewsCount={clinic.reviewsCount}>
                    <h3 className="fnt-h4">{clinic.price}</h3>
                    <div className="fnt-accent">
                        {/* todo брать данные из бд, добавить поле, если в базе нет */}
                        {clinic.priceFor}
                    </div>
                    <div className="fnt-notes-accent c-orange-primary cursor-pointer flex flex-row gap-4">
                        <span style={{whiteSpace: "nowrap"}}>Смотреть цены</span>
                        <Image src={arrowRightOrange} alt="смотреть план"/>
                    </div>
                </SinglePageHeaderBlock>
            </Container>

            {/* Sides */}
            <Container className="sides">
                <div className="left-side">
                    <SinglePageParentSection>
                        {clinic.gallery && <HospitalsSinglePageImagesSection images={clinic.gallery.slice(0, 5)}/>}

                        <SinglePageNestedSection id="description" sectionCssClass="description-block" title="Описание">
                            <div className="description"
                                 dangerouslySetInnerHTML={{__html: displayText || ''}}/>

                            {clinic.description && descLengthMore && (
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
                    <SinglePageParentSection id="departments" title="Отделения">
                        <ul className="flex flex-col gap-8">
                            <li>Кардиология</li>
                            <hr className="small-space-1"/>
                            <li>Урология</li>
                            <hr className="small-space-1"/>
                            <li>Онкология</li>
                            <hr className="small-space-1"/>
                            <li>Ортопедия</li>
                            <hr className="small-space-1"/>
                            <li>Офтальмология</li>
                        </ul>

                    </SinglePageParentSection>

                    <SinglePageParentSection id="includes" title="Услуги">
                        <SinglePageIncludesPillsSection includes={clinic.includes || []}/>
                    </SinglePageParentSection>

                    <SinglePageParentSection id="clinic-services" title="Бесплатный сервис в клинике">
                        <SinglePageEquipmentsSection equipment={clinic.equipment || []}/>
                    </SinglePageParentSection>

                    <SinglePageParentSection id="prices" title="Стоимость комплексного обследования">
                        {/* todo сделать мобильную вёрстку */}
                        {clinic.research_categories && clinic.research_categories.map(cat => (
                            <SinglePageNestedSection key={cat.id} sectionCssClass="mb-4">
                                <div className="summary flex flex-row justify-between flex-wrap mb-4">
                                    <div className="headline">{cat.name}</div>
                                    <div className="headline" style={{flexBasis: 270}}>{cat.price} ¥</div>
                                </div>

                                <div className="flex flex-col gap-8">
                                    {cat.researches && cat.researches.map(el => (
                                        <Fragment key={el.id}>
                                            <div className="item flex flex-row flex-wrap justify-between">
                                                <div className="flex flex-row gap-4">
                                                    <Image src={checkIcon} alt="обследование" width={16} height={16}/>
                                                    <div className="fnt-primary">{el.name}</div>
                                                </div>
                                                <div className="fnt-accent" style={{flexBasis: 270}}>{el.price} ¥</div>
                                            </div>
                                            <hr className="hr small-space-1"/>
                                        </Fragment>

                                    ))}
                                </div>

                            </SinglePageNestedSection>
                        ))}


                        <Button buttonColor="moderate-green" buttonStyle="outline">Показать ещё 2 комплекса</Button>

                    </SinglePageParentSection>

                    <SinglePageParentSection id="doctors" className="doctors" title="Наши врачи">
                        <DoctorsSection items={clinic.doctors}/>
                    </SinglePageParentSection>

                    <SinglePageReviewsSection id="reviews" reviews={fakeExcursionsReviews}
                                              gallery={fakeExcursionsUploadedUsersImages}/>
                </div>

                <SinglePageSidebar>

                    {/* todo добавить модальное окно забронировать экскурсию */}
                    <SinglePageSidebarItem mainItem title="Консультация" onTop hideOnMobile>
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
                                <Button onClick={openModalBookingForm} fullWidth>Получить консультацию</Button>

                            </div>

                        </div>
                    </SinglePageSidebarItem>

                    {/* todo передавать данные из бд */}
                    <SinglePageSidebarItem title="Видео о нас" mainItem
                                           image="/images/dummy/excursions/sp-excursion-sidebar-video-image.jpg"/>


                </SinglePageSidebar>
            </Container>

            <MobileFloatingBookButton page="Клиника" buttonText="Консультация" infoText={clinic.name}/>
        </div>
    );
}

