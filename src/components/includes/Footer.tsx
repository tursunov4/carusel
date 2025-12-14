'use client';

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import mailImage from '@/assets/img/icons/mail.svg';
import phoneCallImage from '@/assets/img/icons/phone-call-01.svg';
import arrowSmRightImage from '@/assets/img/icons/arrow-small-right.svg';
import pinLocationImage from '@/assets/img/icons/marker-pin-01.svg';
import footerLogoImage from '@/assets/img/icons/footer-small-logo.svg';
import dummyOperatorImage from '@/assets/img/dummy/co-placeholder.jpg';
import tgImage from '@/assets/img/icons/tg-icon.svg';
import vkImage from '@/assets/img/icons/vk-icon.svg';
import maxImage from '@/assets/img/icons/max-image.svg';
import dzenImage from '@/assets/img/icons/dzen-icon.svg';
import Link from "next/link";
import {API_BASE_URL} from "@/services/apiFetch";
import {jsonContacts} from "@/dummy-data/fakeContacts";

//const CONTACT_ORDER = ['address', 'phone', 'whatsapp', 'telegram', 'email'];

type Contact = {
    id: number;
    type: 'address' | 'phone' | 'whatsapp' | 'telegram' | 'whatsapp_callback' | string;
    value: string;
    type_display: string;
};

export default function Footer() {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/contacts/`)
            .then(res => res.json())
            .then(data => setContacts(data))
            .catch(err => {
                console.error('Ошибка загрузки контактов:', err);
                setContacts(jsonContacts);
            });
    }, []);


    const filteredContacts = contacts.filter(
        c => c.type !== 'whatsapp_callback'
    );

    const getFirstByType = (type: string) =>
        filteredContacts.find(c => c.type === type);

    const getAllByType = (type: string) =>
        filteredContacts.filter(c => c.type === type);

    const renderContactIcon = (type: string) => {
        switch (type) {
            case 'phone':
                return phoneCallImage;
            case 'email':
                return mailImage;
            //case 'whatsapp':
            //    return <SiWhatsapp className="mr-2"/>;
            //case 'telegram':
            //    return <SiTelegram className="mr-2"/>;
            //case 'address':
            //    return <FiMapPin className="mr-2"/>;
            default:
                return '';
        }
    };

    const formatLink = (type: string, value: string): string => {
        switch (type) {
            case 'phone':
                return `tel:${value.replace(/[^+\d]/g, '')}`;
            case 'whatsapp':
                return `https://wa.me/${value.replace(/[^+\d]/g, '')}`;
            case 'telegram':
                return `https://t.me/${value.replace('@', '')}`;
            case 'email':
                return `mailto:${value}`;
            case 'address':
                return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`;
            default:
                return '#';
        }
    };

    //const address = getFirstByType('address');
    const phones = getAllByType('phone');
    const whatsapp = getAllByType('whatsapp');
    const telegram = getAllByType('telegram');
    const email = getFirstByType('email');

    const handleSubmitConsult = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('submit form consulting')
    };
    return (
        <footer>
            <div className="container f-content top-content">
                <div className="fw-widget consulting-part">
                    <h4 className="title">Консультация специалиста</h4>
                    <p className="consult-image">
                        <Image src={dummyOperatorImage} alt="фото оператора консультанта"/>
                    </p>
                    <p className="consult-name">Мин Су Ким</p>
                    <p className="consult-description">Доктор медицинских наук, Республика Корея</p>

                    <form className="send-consult">
                        <div className="relative" style={{maxWidth: "90%"}}>
                            <input placeholder="Получить консультацию" type="email" name="email" id="email"/>
                            <button className="btn btn-orange btn-primary small" type="button"
                                    onClick={handleSubmitConsult}>
                                <Image src={arrowSmRightImage} alt="кнопка отрпавить форму" width={24} height={25}/>
                            </button>
                        </div>
                    </form>
                </div>

                <div className="fw-widget navigation">
                    <h3 className="fw-title">Навигация</h3>
                    <ul>
                        <li><Link href="/healthcare_in_china">Лечение</Link></li>
                        <li><Link href="/treatment/stomatology_in_china">Стоматология</Link></li>
                        <li><Link href="/media/hospitals">Клиники</Link></li>
                        <li><Link href="/tours">Туры</Link></li>
                        <li><Link href="/hotels">Гостиницы</Link></li>
                        <li><Link href="/trip_stories">Истории людей</Link></li>
                        <li><Link href="/blog">Блог про Китай</Link></li>
                    </ul>
                </div>

                <div className="fw-widget contacts">
                    {/* <h3 className="font-semibold mb-2">Контакты</h3> */}
                    <div className="flex flex-col gap-8 flex-wrap justify-end items-end">
                        {email && (
                            <div className="flex flex-wrap gap-8 justify-end">
                                <Image src={renderContactIcon("email")} alt="" width={16} height={16}/>
                                <a href={formatLink("email", email.value)}>
                                    {email.value}
                                </a>
                            </div>
                        )}

                        {/* {address && (
                            <li className="flex items-center">
                                {renderContactIcon(address.type)}
                                <Link href={formatLink(address.type, address.value)} target="_blank"
                                   rel="noopener noreferrer" >
                                    {address.value}
                                </Link>
                            </li>
                        )} */}

                        {phones.length > 0 && phones.map((phone, index) => (
                            index % 2 === 0 ? (
                                <div key={phone.id} className="flex flex-wrap gap-8 justify-end">
                                    {index == 0 &&
                                        <Image src={renderContactIcon("phone")} alt="" width={16} height={16}/>}
                                    <a href={formatLink("phone", phone.value)}>{phone.value}</a>
                                    {phones[index + 1] && (
                                        <a href={formatLink("phone", phones[index + 1].value)}>
                                            {phones[index + 1].value}
                                        </a>
                                    )}
                                </div>
                            ) : null
                        ))}

                        {whatsapp.map(w => (
                            <div key={w.id}>
                                {renderContactIcon("whatsapp")}
                                <a href={formatLink("whatsapp", w.value)}
                                   target="_blank" rel="noopener noreferrer">
                                    {w.value}
                                </a>
                            </div>
                        ))}

                        {telegram.map(t => (
                            <div key={t.id}>
                                {renderContactIcon("telegram")}
                                <a href={formatLink("telegram", t.value)}
                                   target="_blank" rel="noopener noreferrer">
                                    {t.value}
                                </a>
                            </div>
                        ))}

                        <div className="work-time justify-end items-end">Ежедневно 24/7</div>


                    </div>

                    {/* todo ссылки сделать на живые объекты соц сетей */}
                    <div className="social-icons">
                        <div>
                            <a target="_blank" rel="nofollow" href="#">
                                <Image src={tgImage} alt="мы в телеграм" width={32} height={33}/>
                            </a>
                        </div>
                        <div>
                            <a target="_blank" rel="nofollow" href="#">
                                <Image src={vkImage} alt="социальная сеть вконтакте" width={32} height={33}/>
                            </a>
                        </div>
                        <div>
                            <a target="_blank" rel="nofollow" href="#">
                                <Image src={maxImage} alt="мы в мессенджере max" width={32} height={32}/>
                            </a>
                        </div>
                        <div>
                            <a target="_blank" rel="nofollow" href="#">
                                <Image src={dzenImage} alt="мы в дзене" width={32} height={33}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <hr/>
            </div>

            <div className="container f-content bottom-content">
                <p><Image src={footerLogoImage} alt="лого сайта в подвале"/></p>
                <div className="office-line">
                    <div>Любим то, чем занимаемся ❤️ поэтому мы — лучшие!</div>
                    <div className="address">
                        <Image src={pinLocationImage} alt="офис местоположение" width={16} height={17}/>
                        Офис № 223, 2-й этаж, гостиница «Хуэйцюань», улица Цзинхэ, город Хуньчунь
                    </div>
                </div>
            </div>

        </footer>
    );
}
