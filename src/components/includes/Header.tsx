'use client';

import {useState} from 'react';
import {FiChevronDown, FiChevronUp} from 'react-icons/fi';
import clsx from 'clsx';
import useOutsideClick from "@/hooks/useOutsideClick";
import Link from "next/link";
import Image from "next/image";
import logoImage from '@/assets/img/logo.svg';
import phoneImage from '@/assets/img/icons/phone-call-01-moderate-primary.svg';
import burgerMenuImage from '@/assets/img/icons/menu-02.svg';
import cloudImage from '@/assets/img/icons/cloud-sun-06.svg';
import flagImage from '@/assets/img/icons/flag-china.svg';
import {fakeMenuGroups} from "@/dummy-data/fakeHeaderMenuGroups";
import Container from "@/components/Container";


export default function Header() {
    const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openGroup, setOpenGroup] = useState<string | null>(null);

    const toggleGroup = (group: string) => {
        setOpenGroup(openGroup === group ? null : group);
    };

    const menuRef = useOutsideClick<HTMLElementTagNameMap['nav']>(
        !!openGroup,
        () => setOpenGroup(null)
    );

    const mobileMenuRef = useOutsideClick<HTMLDivElement>(
        mobileOpen,
        () => setMobileOpen(false)
    );

    const chevronColor = "#758282";

    return (

        <header className="header">
            <Container className="header-top-part">
                <Link className="logo" href="/"><Image src={logoImage} alt={`логотип сайта ${siteName}`}/></Link>

                {/* Desktop menu */}
                <nav ref={menuRef} className="hidden md:flex gap-6">
                    {/* todo временное фейк меню, заменить из БД и редизайн вид меню */}
                    {fakeMenuGroups.map((group) => {
                        if (group.items) {
                            return (
                                <div key={group.title} className="relative">
                                    <button onClick={() => toggleGroup(group.title)}
                                            className="flex items-center font-semibold cursor-pointer">
                                        {group.title} {openGroup === group.title
                                        ? <FiChevronUp className="ml-1" stroke={chevronColor}/>
                                        : <FiChevronDown className="ml-1" stroke={chevronColor}/>}
                                    </button>
                                    <div className={clsx(
                                        "dropdown absolute bg-white rounded shadow-lg mt-2 py-2 transition-all" +
                                        " duration-200" +
                                        " min-w-[14rem]",
                                        openGroup === group.title
                                            ? "opacity-100 visible"
                                            : "opacity-0 invisible"
                                    )}>
                                        {group.items?.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.url}
                                                className="dropdown-item block px-4 py-2 whitespace-nowrap"
                                                onClick={() => setOpenGroup(null)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>

                                </div>)
                        } else {
                            return (<Link key={group.title} href={group.url}
                                          className="font-semibold">{group.title}</Link>)
                        }
                    })}

                </nav>

                {/* todo получить курс валюты и погоду */}
                <div className="currency-block">
                    <div><Image src={cloudImage} alt="погода"/>+32</div>
                    <div><Image src={flagImage} alt="флаг"/>CNY 11.07 Р</div>
                </div>
                <div className="phone-block"><Image src={phoneImage} alt="телефон" width={16} height={17}/>+ 7 423
                    266-55-66
                </div>
                <div className="buttons">
                    <Link href="/login" className="btn btn-moderate btn-outline">Войти</Link>
                </div>

                {/* Mobile burger */}
                <button className="burger-button text-2xl"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Меню"><Image src={burgerMenuImage} alt="мобильное меню"/>
                </button>
            </Container>


            {/* Mobile menu */}
            <div ref={mobileMenuRef}
                 className={clsx(
                     "md:hidden overflow-hidden transition-all duration-300",
                     mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                 )}
            >
                <div className="flex flex-col px-4 py-2 space-y-2">
                    {fakeMenuGroups.map((group) => {
                        if (group?.items) {
                            return (
                                <div key={group.title}>
                                    <button
                                        onClick={() => toggleGroup(group.title)}
                                        className="flex justify-between items-center w-full py-1 font-semibold c-moderate-primary"
                                    >
                                        {group.title} <FiChevronDown
                                        className={clsx(
                                            "transition-transform",
                                            openGroup === group.title ? "rotate-180" : ""
                                        )}
                                    />
                                    </button>
                                    <div
                                        className={clsx(
                                            "flex flex-col ml-4 overflow-hidden transition-all duration-300",
                                            openGroup === group.title ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                                        )}
                                    >
                                        {group.items.map((item) => (
                                            <Link key={item.name} href={item.url}
                                                  className="py-1 text-sm hover:text-orange-200"
                                                  onClick={() => setMobileOpen(false)}>
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <Link key={group.title} href="#" className="py-1 font-semibold">{group.title}</Link>
                            )
                        }
                    })}
                    <div className="buttons">
                        <Link href="/login" className="btn btn-moderate btn-outline">Войти</Link>
                    </div>
                </div>
            </div>


        </header>


    );
}
