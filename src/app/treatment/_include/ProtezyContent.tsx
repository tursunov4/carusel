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
import ProtezyCard, {ProtezyCardProps} from "@/components/ui/cards/Treatment/Protezy/ProtezyCard";
import ConsultationBanner from "@/components/ConsultationBanner";
import MobileFloatingBookButton from "@/components/MobileFloatingBookButton";

const pageSections = [
    {
        name: 'Описание',
        url: `#description`,
    },
    {
        name: 'Варианты протезов',
        url: `#variants`,
    },
    {
        name: 'Виды и материалы',
        url: `#materials`,
    },
    {
        name: 'Примеры работ',
        url: `#examples`,
    },
    {
        name: 'Съемные протезы',
        url: `#protezy`, // не сделано
    },
    {
        name: 'Бигельный замок',
        url: `#bugel`,
    },
    {
        name: 'Консультация',
        url: `#consultation`,
    },
    {
        name: 'Другие',
        url: `#others`,
    }
]

const cards: ProtezyCardProps[] = [
    {
        id: 1,
        title: "Полностью съемные зубные протезы",
        image: "/images/dummy/treatment/protezy/protezy-1.jpg",
        description: "Для людей с малым количеством зубов или их отсутствием. Либо, если у пациента слишком слабые кости в деснах",
    },

    {
        id: 2,
        title: "Протезы с бюгельным замком (скрытый замок)",
        image: "/images/dummy/treatment/protezy/protezy-2.jpg",
        description: "Бюгельный протез крепится к своим зубам с помощью скрытого соединения.",
    },
    {
        id: 3,
        title: "Протезы с кольцами, крючками фиксации",
        image: "/images/dummy/treatment/protezy/protezy-3.jpg",
        description: "Этот вид протеза фиксируется к своим зубам с помощью крючков.",
    }
    ,
    {
        id: 4,
        title: "ПШП протез",
        image: "/images/dummy/treatment/protezy/protezy-4.jpg",
        description: "Это новая технология, благодаря которой производят очень легкие и крепкие зубные протезы, они легче чем съемные или частично съемные протезы.",
    }
]


export default function ProtezyContent({data}: { data: Treatment }) {

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

                        <h4 className="fnt-h4 mgb-4" id="variants">Основные варианты съемных протезов</h4>

                        <div className="flex flex-row flex-wrap gap-12 mb-3">
                            {cards && cards.map(item => (
                                <ProtezyCard key={item.id} item={item}/>
                            ))}
                        </div>

                        <p>В Китае съёмные протезы изготавливают быстро — всего за несколько дней. Они просты в уходе,
                            легко снимаются и устанавливаются, обеспечивая комфорт в повседневном использовании.
                            Благодаря удобству и оперативным срокам изготовления этот вариант остается одним из самых
                            востребованных среди пациентов.</p>
                    </SinglePageParentSection>


                    <SinglePageParentSection id="materials">
                        <div className="crown-card-2">
                            <div className="flex flex-row flex-wrap gap-12">
                                <div style={{flex: "1.3"}}>
                                    <h4 className="fnt-h4 mb-3">Съемные протезы Хуньчуне: виды, материалы изготовления,
                                        особенности выбора</h4>

                                    <div className="pills-block mb-4">
                                        <span className="pill l-blue">особенности выбора</span>
                                    </div>

                                    <div className="fnt-notes flex flex-col gap-12">
                                        <p><span className="c-moderate-primary">Кому подходит:</span> при полном
                                            отсутствии зубов или слабых костях челюсти.</p>
                                        <p><span className="c-moderate-primary">Противопоказания:</span> аллергия на
                                            металл — в этом cлучае cтавят протезы без
                                            металлической сеткию.
                                        </p>
                                        <ul>
                                            <li className="flex flex-row gap-8"><img
                                                src="/images/dummy/treatment/protezy/protez-icons/Group 18.svg"
                                                alt=""/>Сроки: изготовление и установка занимают 3-4 дня.
                                            </li>
                                            <li className="flex flex-row gap-8"><img
                                                src="/images/dummy/treatment/protezy/protez-icons/Vector.svg"
                                                alt=""/>Дополнительно: может потребоваться удаление шатающихся зубов или
                                                установка штифтов.
                                            </li>
                                            <li className="flex flex-row gap-8"><img
                                                src="/images/dummy/treatment/protezy/protez-icons/Vector-1.svg"
                                                alt=""/>Стоимость от 3000 юаней.
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div>
                                    <img src="/images/dummy/treatment/protezy/Бюгельный протез китай 1.jpg"
                                         alt=""/>
                                </div>
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
                    <div style={{padding: 60}}
                         className="flex flex-col gap-20 justify-center items-center">
                        <h4 className="fnt-h4">Срок службы Циркониевых коронок</h4>
                        <p style={{textAlign: "center"}}>При правильном уходе служат десятилетиями. В редких случаях
                            возможное осложнение - отслоение
                            коронки, которое легко устраняется у стоматолога повторным закреплением.</p>

                        <Button className="small-width" onClick={() => openModal(1)}>Онлайн консультация</Button>
                    </div>


                    <SinglePageParentSection id="protezy">
                        <div className="crown-card-2">
                            <div className="flex flex-row flex-wrap gap-12">
                                <div style={{flex: "1.3"}}>
                                    <h4 className="fnt-h4 mb-3">Частично съемные протезы в Хуньчуне</h4>

                                    <div className="pills-block mb-4">
                                        <span className="pill l-blue">особенности выбора</span>
                                    </div>

                                    <div className="fnt-notes flex flex-col gap-12">
                                        <p><span className="c-moderate-primary">Кому подходят</span>: при большом количестве промежутков между зубами, когда мосты поставить нельзя, а импланты слишком дорогие.</p>
                                        <p><span className="c-moderate-primary">Противопоказания:</span> аллергия на металл — тогда применяются протезы без металлических элементов.</p>
                                        <ul>
                                            <li className="flex flex-row gap-8"><img
                                                src="/images/dummy/treatment/protezy/protez-icons/Group 18.svg"
                                                alt=""/>Сроки: изготовление и установка занимают 3-4 дня.
                                            </li>

                                            <li className="flex flex-row gap-8"><img
                                                src="/images/dummy/treatment/protezy/protez-icons/Vector-1.svg"
                                                alt=""/>Стоимость от 3000 юаней.
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                <div>
                                    <img src="/images/dummy/treatment/protezy/Бюгельный протез китай 1.jpg"
                                         alt=""/>
                                </div>
                            </div>


                        </div>
                    </SinglePageParentSection>
                    <SinglePageParentSection title="Примеры работ">
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
                    <div style={{padding: 60}}
                         className="flex flex-col gap-20 justify-center items-center">
                        <h4 className="fnt-h4">Срок службы Циркониевых коронок</h4>
                        <p style={{textAlign: "center"}}>При правильном уходе служат десятилетиями. В редких случаях
                            возможное осложнение - отслоение
                            коронки, которое легко устраняется у стоматолога повторным закреплением.</p>

                        <Button className="small-width" onClick={() => openModal(1)}>Онлайн консультация</Button>
                    </div>


                    <SinglePageParentSection id="bugel">
                        <div className="crown-card-2">
                            <div className="flex flex-row flex-wrap gap-12">
                                <div style={{flex: "1.3"}}>
                                    <h4 className="fnt-h4 mb-3">Протез с бюгельным замком</h4>
                                    <div className="fnt-notes flex flex-col gap-12">
                                        <p>Бюгельный протез крепится к своим зубам с помощью скрытого соединения.</p>
                                        <p>Он практически незаметен, не вызывает дискомфорта, восстанавливает
                                            равномерное 4.1 распределение нагрузки при жевании и сохраняет эстетику</p>
                                    </div>

                                </div>
                                <div>
                                    <img src="/images/dummy/treatment/protezy/Бюгельный протез китай 1.jpg"
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
                                    <li>Можно не снимать - допускается ношение даже ночью.</li>
                                    <li>Комфорт - не ощущается как «инородное тело».</li>
                                    <li>Надёжная фиксация - прецизионные замки обеспечивают стабильность и плотное
                                        прилегание.
                                    </li>

                                </ul>
                                <ul className="flex-1">
                                    <li>Универсальность — подходит при отсутствии нескольких зубов на небольшом
                                        участке.
                                    </li>
                                    <li>Эстетика - минимум металлических элементов, протез остаётся.</li>
                                    <li>Удобство — отсутствие зазоров повышает силу крепления и исключает выпадение
                                        протеза.
                                    </li>
                                </ul>

                            </div>
                            <Button onClick={() => openModal(1)}>Записаться на консультацию</Button>
                        </div>
                    </SinglePageParentSection>

                    <ConsultationBanner onButtonFunc={() => openModal(1)}/>

                    <SinglePageParentSection id="others">
                        <div className="crown-card-2">
                            <div className="flex flex-row flex-wrap gap-12">
                                <div style={{flex: "1.3"}}>
                                    <h4 className="fnt-h4 mb-3">Частично съёмный протез с крепёжными кольцами</h4>
                                    <div className="fnt-notes flex flex-col gap-12">
                                        <p>Этот вид протеза фиксируется к своим зубам с помощью крючков. Его применяют,
                                            если у пациента сохранились зубы, на которые можно установить
                                            крепления. </p>
                                        <p>По цене он доступнее бюгельных протезов, но чуть заметнее,
                                            особенно в зоне улыбки. При этом конструкция не вызывает дискомфорта,
                                            равномерно
                                            распределяет нагрузку при жевании и сохраняет эстетику.</p>
                                    </div>

                                </div>
                                <div>
                                    <img src="/images/dummy/treatment/protezy/Зубной протез 1.jpg"
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
                                    <li>Надёжная фиксация - прочные крепёжные элементы обеспечивают устойчивость.</li>
                                    <li>Комфорт - удобны в ношении, без выраженного чувства «инородного тела».</li>
                                    <li>Эстетика - современные материалы делают крючки менее заметными.</li>

                                </ul>
                                <ul className="flex-1">
                                    <li>Универсальность — подходят при отсутствии нескольких зубов на небольших</li>
                                    <li>Записаться на консультацию</li>
                                    <li>Практичность — просты в уходе и при необходимости легко</li>
                                </ul>

                            </div>
                            <Button onClick={() => openModal(1)}>Записаться на консультацию</Button>
                        </div>
                    </SinglePageParentSection>
                    <SinglePageParentSection>
                        <div className="crown-card-2">
                            <div className="flex flex-row flex-wrap gap-12">
                                <div style={{flex: "1.3"}}>
                                    <h4 className="fnt-h4 mb-3">Полностью съемный зубной протез НРР материала</h4>
                                    <div className="fnt-notes flex flex-col gap-12">
                                        <p>Это новая технология, благодаря которой производят очень легкие и крепкие
                                            зубные протезы, они легче чем съемные или частично съемные протезы. </p>
                                        <p>Такие зубные протезы идеально подходят людям с аллергией, материал не
                                            вступает в реакцию с организмом человека.</p>
                                        <p>Высокопрочный и эластичный материал не подверженный стиранию, во время
                                            использования у пациента не возникает ощущения инородности</p>
                                    </div>

                                </div>
                                <div>
                                    <img src="/images/dummy/treatment/protezy/IMG-20231025-WA0043 1.jpg"
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
                                    <li>Прочность: повышенная износостойкость.</li>
                                    <li>Подходит людям с аллергией.</li>

                                </ul>
                                <ul className="flex-1">
                                    <li>Легкость: изготавливаются из легчайших материалов.</li>
                                    <li>Эстетичность: незаметные, создают ощущение собственных зубов.</li>
                                </ul>

                            </div>
                            <Button onClick={() => openModal(1)}>Записаться на консультацию</Button>
                        </div>
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

            <MobileFloatingBookButton page="Протезы" buttonText="Консультация" infoText={data.title}/>
        </div>
    );
}

