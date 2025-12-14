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
import BookTreatmentForm from "@/app/treatment/_include/BookTreatmentForm";
import SplideGallery from "@/components/ui/SplideGallery";
import CrownCard, {CrownCardProps} from "@/components/ui/cards/Treatment/Crowns/CrownCard";
import ConsultationBanner from "@/components/ConsultationBanner";
import MobileFloatingBookButton from "@/components/MobileFloatingBookButton";

const pageSections = [
    {
        name: 'Описание',
        url: `#description`,
    },
    {
        name: 'Виды коронок',
        url: `#vidy-koronok`,
    },
    {
        name: 'Металлокерамика',
        url: `#metallokeramika`,
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
        name: 'Циркон',
        url: `#cirkon`,
    },
    {
        name: 'Срок службы',
        url: `#duration`,
    }
]

const crownCards: CrownCardProps[] = [
    {
        id: 1,
        title: "Металл",
        image: "/images/dummy/treatment/crowns/metall.jpg",
        price: "от 350 ¥",
        durations: "изготовление и установка занимают 3-4 дня.",
        fits: "пациентам, у которых сохранились зубы для крепления."
    },

    {
        id: 2,
        title: "Цирконий",
        image: "/images/dummy/treatment/crowns/cirkon.jpg",
        price: "от 350 ¥",
        durations: "изготовление и установка занимают 3-4 дня.",
        fits: "пациентам, у которых сохранились зубы для крепления."
    }
]


export default function CrownsContent({data}: { data: Treatment }) {

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

    if (!data.header_image) {
        data.header_image = "/images/dummy/treatment/crowns/crown-cover.jpg"
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
                            <img src={data.header_image} alt="коронки" width="100%" height="100%"
                                 style={{objectFit: "cover", height: "100%", width: "100%"}}/>
                        </div>

                        <div className="flex flex-col gap-12 justify-between"
                             style={{position: "relative", zIndex: 2, color: 'white', padding: 60}}>
                            <div className="flex flex-col gap-12" style={{color: 'white'}}>
                                <div className="fnt-h2" style={{color: 'white'}}>{data.title}</div>
                                <div>{data.header_title}</div>
                                <Button style={{width: 'fit-content', marginTop: 30}}>Узнать стоимость</Button>
                            </div>

                        </div>

                    </div>

                    <SinglePageParentSection id="description">
                        {data.content ?? data.header_title}

                        <h4 className="fnt-h4 mgb-4" id="vidy-koronok">Виды коронок</h4>

                        <div className="flex flex-row flex-wrap gap-12 mb-3">
                            {crownCards && crownCards.map(item => (
                                <CrownCard key={item.id} item={item}/>
                            ))}
                        </div>

                        <p>В целом, выбор между этими типами коронок зависит от индивидуальной ситуации пациента, его
                            предпочтений и бюджета. Врач стоматолог сможет оценить состояние зуба и предложить наиболее
                            подходящий вариант.</p>
                    </SinglePageParentSection>

                    <SinglePageParentSection id="metallokeramika">
                        <div className="crown-card-2">
                            <div className="flex flex-row flex-wrap gap-12">
                                <div style={{flex: "1.3"}}>
                                    <h4 className="fnt-h4 mb-3">Металлокерамические коронки</h4>
                                    <div className="fnt-notes flex flex-col gap-12">
                                        <p>Металлокерамическая коронка состоит из прочного металлического каркаса и
                                            керамического покрытия, имитирующего эмаль зуба. </p>
                                        <p>Каркас изготавливают из сплавов никеля, кобальта, хрома или титана, что
                                            обеспечивает надёжность и долговечность. </p>
                                        <p>Сверху наносится керамика, которая выглядит натурально, не вызывает
                                            раздражения и хорошо совместима с тканями полости рта.</p>
                                    </div>

                                </div>
                                <div>
                                    <img src="/images/dummy/treatment/crowns/хуньчунь металлокерамики за 4 дня 1.jpg"
                                         alt=""/>
                                </div>
                            </div>
                            <div>
                                <div className="pills-block mb-4">
                                    <span className="pill l-blue">преймущества</span>
                                </div>
                            </div>
                            <div className="mb-4 flex flex-row gap-12 flex-wrap fnt-notes">
                                <ul className="flex-1">
                                    <li>Доступная цена и хорошее качество.</li>
                                    <li>Защита зуба от разрушения.</li>
                                    <li>Натуральный цвет и эстетичный вид.</li>
                                </ul>
                                <ul className="flex-1">
                                    <li>Нет чувствительности к горячему и холодному.</li>
                                    <li>Прочность и долговечность.</li>
                                </ul>

                            </div>
                            <Button>Онлайн консультация</Button>
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

                    <SinglePageParentSection id="cirkon">
                        <div className="crown-card-2">
                            <div className="flex flex-row flex-wrap gap-12">
                                <div style={{flex: "1.3"}}>
                                    <h4 className="fnt-h4 mb-3">Циркониевые коронки</h4>
                                    <div className="fnt-notes flex flex-col gap-12">
                                        <p>Циркониевые коронки — современный метод восстановления зубов, сочетающий
                                            прочность и эстетику.</p>
                                        <p>Материал отличается высокой плотностью, долговечностью и натуральным
                                            полупрозрачным цветом, практически неотличимым от настоящи</p>

                                    </div>

                                </div>
                                <div>
                                    <img src="/images/dummy/treatment/crowns/cirkon2.jpg"
                                         alt=""/>
                                </div>
                            </div>
                            <div>
                                <div className="pills-block mb-4">
                                    <span className="pill l-blue">особенности</span>
                                </div>
                            </div>
                            <div className="mb-4 flex flex-row gap-12 flex-wrap fnt-notes">
                                <ul className="flex-1">
                                    <li>Идеально прилегают к дёснам, не вызывают воспалений.</li>
                                    <li>Отличная биосовместимость: не вызывают аллергий и раздражений, в отличие от
                                        металлических сплавов.
                                    </li>

                                </ul>
                                <ul className="flex-1">
                                    <li>Пропускают рентген-лучи, поэтому коронки не мешают обследованиям (МРТ, КТ)</li>
                                    <li>Долговечность выше, чем у других видов коронок.</li>
                                </ul>

                            </div>
                            <Button>Онлайн консультация</Button>
                        </div>
                    </SinglePageParentSection>

                    <SinglePageParentSection  title="Видео">
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


                    <div id="duration" style={{padding: 60}} className="flex flex-col gap-20 justify-center items-center">
                        <h4 className="fnt-h4">Срок службы Циркониевых коронок</h4>
                        <p style={{textAlign: "center"}}>При правильном уходе служат десятилетиями. В редких случаях возможное осложнение - отслоение
                            коронки, которое легко устраняется у стоматолога повторным закреплением.</p>

                        <Button className="small-width">Запись на консультацию</Button>
                    </div>


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
                    <SinglePageSidebarItem title="Видео о нас" mainItem
                                           image="/images/dummy/treatment/veneers-sidebar/photo-1.jpg"/>



                </SinglePageSidebar>

                <BookTreatmentForm tourId={selectedTourId} closeModal={closeModal} submitModal={submitModal}/>
            </Container>

            <MobileFloatingBookButton page="Коронки" buttonText="Консультация" infoText={data.title}/>
        </div>
    );
}

