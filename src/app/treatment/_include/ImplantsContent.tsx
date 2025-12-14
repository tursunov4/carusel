'use client'

import React, {useState} from "react";
import {API_BASE_URL} from "@/services/apiFetch";
import Container from "@/components/Container";
import BottomHeader from "@/components/includes/BottomHeader";
import Breadcrumbs from "@/components/Breadcrumbs";
import Image from "next/image";
import SinglePageParentSection from "@/components/ui/single-page-sections/SinglePageParentSection";
import SinglePageSidebar from "@/components/ui/single-page-sections/sidebar/SinglePageSidebar";
import SinglePageSidebarItem from "@/components/ui/single-page-sections/sidebar/SinglePageSidebarItem";
import clockIcon from "@/assets/img/icons/clock-02.svg";
import tgIcon from "@/assets/img/icons/tg-icon.svg";
import vkIcon from "@/assets/img/icons/vk-icon.svg";
import maxIcon from "@/assets/img/icons/max-image.svg";
import Button from "@/components/elements/Button";
import {redirect, RedirectType} from "next/navigation";
import {Treatment} from "@/services/Treatment";
import {InfoBlock} from "@/interfaces/InfoBlock";
import BookTreatmentForm from "@/app/treatment/_include/BookTreatmentForm";
import SplideGallery from "@/components/ui/SplideGallery";
import DoctorsSection from "@/app/hospitals/_include/DoctorsSection";
import ConsultationBanner from "@/components/ConsultationBanner";
import MobileFloatingBookButton from "@/components/MobileFloatingBookButton";

const pageSections = [
    {
        name: 'Описание',
        url: `#description`,
    },
    {
        name: 'Примеры работ',
        url: `#examples`,
    },

    {
        name: 'Консультация',
        url: `#consultation`,
    },

    {
        name: 'Наши врачи',
        url: `#doctors`,
    },
]

const treatIncludes: InfoBlock[] = [
    {
        id: 1,
        title: "Выгодно",
        icon: "/images/dummy/treatment/coins-hand-01.svg",
        description: "Цены на лечение ниже в 2-3 раза, чем в России"
    },
    {
        id: 2,
        title: "Быстро",
        icon: "/images/dummy/treatment/shield-check.svg",
        description: "Протезы, коронки и импланты устанавливают всего за несколько дней благодаря близости фабрик по производству материалов"
    },
    {
        id: 3,
        title: "Опытные врачи",
        icon: "/images/dummy/treatment/shield-check-1.svg",
        description: "Ежедневно сюда приезжают сотни российских пациентов, и стоматологи накопили огромный практический опыт"
    },
    {
        id: 4,
        title: "Гарантия",
        icon: "/images/dummy/treatment/timer-01.svg",
        description: "Все клиники предоставляют обязательную гарантию до 3 лет"
    },


];

const toothVariants = [
    {
        price: "От 3 000 ¥",
        text: "Съёмные протезы",
        link: "#",
    },
    {
        price: "От 350 ¥",
        text: "Коронки",
        link: "#",
    },
    {
        price: "От 6 000 ¥",
        text: "Импланты",
        link: "#",
    },
    {
        price: "От 8 000 ¥",
        text: "Виниры",
        link: "#",
    }

];

const cardsTooth = [
    {
        id: 1,
        title: "Съемные протезы",
        price: "От 3 000 ¥",
        buttonText: "Узнать больше",
        image: "/images/dummy/treatment/photo-1.jpg",
        text: "Зубные коронки могут не только восполнить недостающие зубы, но и значительно улучшить вид зубов"
    },
    {
        id: 2,
        title: "Коронки",
        price: "От 350 ¥",
        buttonText: "Узнать больше",
        image: "/images/dummy/treatment/photo-2.jpg",
        text: "Для людей с малым количеством зубов или их отсутствием. Либо, если у пациента слишком слабые кости в деснах"
    },
    {
        id: 3,
        title: "Импланты",
        price: "От 6000 ¥",
        buttonText: "Узнать больше",
        image: "/images/dummy/treatment/photo-3.jpg",
        text: "Зубные коронки могут не только восполнить недостающие зубы, но и значительно улучшить вид зубов"
    },
    {
        id: 4,
        title: "Виниры",
        price: "От 8000 ¥",
        buttonText: "Узнать больше",
        image: "/images/dummy/treatment/photo-4.jpg",
        text: "Зубные коронки могут не только восполнить недостающие зубы, но и значительно улучшить вид зубов"
    },
]

export default function ImplantsContent({data}: { data: Treatment }) {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    // // const [sliderRef, slider] = useKeenSlider({loop: true}, [])
    // const [currentSlide, setCurrentSlide] = useState(0)
    // const [fullscreenImage, setFullscreenImage] = useState(null)
    // const [openId, setOpenId] = useState(null);
    // const [callbackNumber, setCallbackNumber] = useState('79778108080'); // fallback по умолчанию

    const [selectedTourId, setSelectedTourId] = useState<number | null>(null);
    const openModal = (id: number) => setSelectedTourId(id);
    const closeModal = () => setSelectedTourId(null);

    function submitModal() {
        // todo send fetch to backend
        // ...

        console.log('submit modal form', selectedTourId);
        setSelectedTourId(null);

    }

    const defaultDescriptionLen = 150;
    const [isExpanded, setIsExpanded] = useState(false);

    const descLengthMore = data.content && data.content.length > defaultDescriptionLen;
    const displayText = isExpanded
        ? data.content
        : `${data.content?.substring(0, defaultDescriptionLen)}${descLengthMore ? '...' : ''}`;

    function openModalBookingForm() {
        console.log('open booking modal window')
        setSelectedTourId(null)
    }


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

    if (!data) {
        redirect('/', RedirectType.replace)
    }

    // todo удалить фейк данные
    if (!data.doctors) {
        data.doctors = [
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

    if (!data.header_image) {
        data.header_image = "/images/dummy/treatment/veneers-cover.jpg"
    }

    return (
        <div className="single-page treatment">
            <BottomHeader menuItems={pageSections}/>
            {/* Header part */}
            <Container>
                {data?.title && (<Breadcrumbs
                        links={[
                            {isLast: false, label: "Стоматология", href: '/treatment/stomatology_in_china'},
                            {isLast: true, label: data.title},
                        ]}
                    />
                )}
            </Container>

            {/* Sides */}
            <Container className="sides">
                <div className="left-side">
                    <div style={{
                        position: "relative",
                        display: "flex",
                        height: "100%",
                        width: "100%",
                        minHeight: 500,
                    }}>
                        <div style={{
                            position: "absolute", width: "100%", height: "100%", zIndex: 1, borderRadius: 8,
                            overflow: 'hidden',
                        }}>
                            <img src={data.header_image} alt="виниры" width="100%" height="100%"
                                 style={{objectFit: "cover", height: "100%", width: "100%"}}/>
                        </div>

                        <div className="flex flex-col gap-12 justify-between"
                             style={{position: "relative", zIndex: 2, color: 'white', padding: 60}}>
                            <div className="flex flex-col gap-12" style={{color: 'white'}}>
                                <div className="fnt-h2" style={{color: 'white'}}>{data.title}</div>
                                <div>{data.header_title}</div>
                                <Button style={{width: 'fit-content', marginTop: 30}}>Узнать стоимость тура</Button>
                            </div>

                        </div>

                    </div>

                    <SinglePageParentSection id="description">
                        {data.content ?? data.header_title}
                    </SinglePageParentSection>

                    <SinglePageParentSection onClick={() => openModal(1)}>
                        <div className="flex flex-row gap-12 flex-wrap">
                            <div className="flex flex-col gap-12 flex-1 justify-between">
                                <div>
                                    <h4 className="fnt-h4">Вторичная имплантация: даём второй шанс </h4>
                                </div>
                                <div className="fnt-notes">
                                    <p>Не каждая клиника готова качественно справиться с полной реконструкцией зубного
                                        ряда. Это сложная операция, требующая системного подхода. </p>
                                    <p>В нашей клинике используется цифровая система планирования, что позволяет точно
                                        спланировать место установки каждого импланта, минимизировать хирургическое
                                        вмешательство и сразу же установить индивидуальные протезы.</p>
                                </div>
                                <Button>Запись на консультацию</Button>
                            </div>
                            <div className="flex-1">
                                <img src="/images/dummy/treatment/implants-section/Group 16 (2) 1.jpg" alt=""/>
                            </div>
                        </div>
                    </SinglePageParentSection>

                    <SinglePageParentSection onClick={() => openModal(1)}>
                        <div className="flex flex-row gap-12 flex-wrap">
                            <div className="flex flex-col gap-12 flex-1 justify-between">
                                <div>
                                    <h4 className="fnt-h4">Сложные случаи: полная имплантация </h4>
                                </div>
                                <div className="fnt-notes">
                                    <p>Donec aliquam felis et libero scelerisque, at imperdiet justo sagittis. Donec
                                        accumsan convallis lorem, vel feugiat tellus eleifend sed. Duis non porttitor
                                        mauris, a suscipit odio.</p>
                                    <p>Donec accumsan convallis lorem, vel feugiat tellus eleifend sed. Duis non
                                        porttitor mauris, a suscipit odio. </p>
                                </div>
                                <Button>Запись на консультацию</Button>
                            </div>
                            <div className="flex-1">
                                <img src="/images/dummy/treatment/implants-section/Group 16 (3) 1.jpg" alt=""/>
                            </div>
                        </div>
                    </SinglePageParentSection>

                    <SinglePageParentSection id="examples" title="Примеры работ">
                        <SplideGallery images={[
                            {link: "#", image: "/images/dummy/gallery/photo-1.jpg"},
                            {link: "#", image: "/images/dummy/gallery/photo-2.jpg"},
                            {link: "#", image: "/images/dummy/gallery/photo-3.jpg"},
                            {link: "#", image: "/images/dummy/gallery/photo-4.jpg"},
                            {link: "#", image: "/images/dummy/gallery/photo-5.jpg"},
                            {link: "#", image: "/images/dummy/gallery/photo-6.jpg"},
                            {link: "#", image: "/images/dummy/gallery/photo-7.jpg"},
                            {link: "#", image: "/images/dummy/gallery/photo-8.jpg"},
                        ]}/>
                    </SinglePageParentSection>

                    <ConsultationBanner onButtonFunc={() => openModal(1)}/>

                    <SinglePageParentSection id="doctors" className="doctors" title="Наши врачи">
                        <DoctorsSection items={data.doctors}/>
                    </SinglePageParentSection>


                </div>

                <SinglePageSidebar>

                    {/* todo добавить модальное окно забронировать экскурсию */}
                    <SinglePageSidebarItem title="Консультация" onTop hideOnMobile>
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
                                <Button onClick={() => openModal(1)} fullWidth>Получить консультацию</Button>

                            </div>

                        </div>
                    </SinglePageSidebarItem>

                    {/* todo передавать данные из бд */}
                    <SinglePageSidebarItem title="Видео о нас"
                                           mainItem
                                           image="/images/dummy/treatment/veneers-sidebar/photo-1.jpg"/>




                </SinglePageSidebar>

                <BookTreatmentForm tourId={selectedTourId} closeModal={closeModal} submitModal={submitModal}/>
            </Container>

            <MobileFloatingBookButton page="Импланты" buttonText="Консультация" infoText={data.title}/>
        </div>
    );
}

