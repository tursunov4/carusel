'use client'

import Container from "@/components/Container";
import React, {useEffect, useState} from "react";
import WideCard from "@/components/ui/cards/HospitalsWideCard/WideCard";
import {fetchClinics} from "@/services/hospitalsService";
import Loading from "@/components/Loading";
import dynamic from "next/dynamic";
import Breadcrumbs from "@/components/Breadcrumbs";
import IndexPageContent from "@/components/ui/IndexPageContent";
import HospitalsSidebar from "@/app/hospitals/_include/HospitalsSidebar";
import {Clinic} from "@/services/Clinic";
import BookHospitalForm from "@/app/hospitals/_include/BookHospitalForm";
import {Facility} from "@/interfaces/Facility";
import {TransformedClinic} from "@/interfaces/TransformedClinic";
import {BaseImage} from "@/services/BaseImage";
import {fakeUnits} from "@/dummy-data/fakeUnits";
import {fakeHospitalsClinics} from "@/dummy-data/fakeHospitalsClinics";

// Динамически загружаем компонент для отображения HTML
const HtmlContent = dynamic(
    () => import('@/components/HtmlContent'), {
        loading: () => <p>Загрузка описания...</p>,
        ssr: false
    });

const fakeHospitalServices = [
    [
        "Иглонож",
        "Банки",
        "Капельницы с озоном",
        "Коррекция суставов",
        "Иглы против заболевания костей",
    ],
    [
        "Коронки из циркония",
        "Лечение зубов",
        "Штифт",
        "Бюгели на замках",
        "Виниры",
        "Световые пломбы",
        "Лечение зубов и дёсен",
        "Световые пломбы",
    ],
]

const fakeForUnitDescription = [
    '500 ¥ льготный комплекс для женщин',
    '1000 ¥ льготный комплекс для мужчин',
    '1500 ¥ льготный комплекс для пар',
    '2000 ¥ льготный комплекс для семьи',
];

const fakeFacilities: Facility[] =
    [
        {id: 1, name: "wifi", iconUrl: "/images/icons/facilities/wifi.svg"},
        {id: 2, name: "нагреватель", iconUrl: "/images/icons/facilities/hurricane-01.svg"},
        {id: 3, name: "завтрак", iconUrl: "/images/icons/facilities/egg-fried.svg"},
        {id: 4, name: "лифт", iconUrl: "/images/icons/facilities/building-03.svg"},
        {id: 5, name: "стиралка", iconUrl: "/images/icons/facilities/passport-02.svg"},
        {id: 6, name: "телек", iconUrl: "/images/icons/facilities/tv-01.svg"},
        {id: 8, name: "Холодильник", iconUrl: "/images/icons/facilities/phone-01.svg"}
    ]


export default function HospitalsPage() {
    const [hospitals, setHospitals] = useState<TransformedClinic[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFilters] = useState({
        search: "",
        category: "",
        rating: 0,
        // priceFrom: null as number | null,
        // priceTo: null as number | null,
        services: [] as string[],
    });

    const [selectedTourId, setSelectedTourId] = useState<number | null>(null);

    const openModal = (id: number) => setSelectedTourId(id);
    const closeModal = () => setSelectedTourId(null);

    function submitModal() {
        // todo send fetch to backend
        // ...

        console.log('submit modal form', selectedTourId);
        setSelectedTourId(null);

    }

    useEffect(() => {
        const loadHospitals = async () => {
            try {
                setLoading(true);
                // let data = await fetchClinics();
                let data = fakeHospitalsClinics;

                data = data.sort((a, b) => {
                    const aHasImage = a.gallery && a.gallery.length > 0;
                    const bHasImage = b.gallery && b.gallery.length > 0;

                    if (aHasImage && !bHasImage) return -1;
                    if (!aHasImage && bHasImage) return 1;

                    return 0;
                });


                const transformed: TransformedClinic[] = data.map((clinic: Clinic) => {
                    const from = Math.floor(Math.random() * 3000);
                    const to = from + Math.floor(Math.random() * 2000) + 500;

                    return {

                        id: clinic.id,
                        name: clinic.name,
                        main_image: clinic.main_image,
                        image:
                            clinic.gallery && clinic.gallery.length > 0
                                ? clinic.gallery[0]
                                : {image: "/images/dummy/blogs/blog-3.jpg"} as BaseImage,
                        gallery: clinic.gallery,
                        description:
                            clinic.description.replace(/<[^>]*>/g, "").substring(0, 200) +
                            "...",
                        rawDescription: clinic.description,
                        category: clinic.category || {
                            name: "Общий профиль",
                            color: "#0000ff",
                        },
                        procedures: clinic.procedures,
                        rating: clinic.rating || 0,
                        reviewsCount: clinic.reviews.length,
                        link: `/hospitals/${clinic?.slug}`,

                        video: clinic.video,

                        // todo обновить dummy данные реальными
                        services: fakeHospitalServices[Math.floor(Math.random() * fakeHospitalServices.length)],
                        equipment: clinic.equipment,
                        research_categories: clinic.research_categories,

                        //todo обновить поле цены в базе данных и подключить данные
                        //price: hospital.price,
                        price: `От ${Math.floor((Math.floor(Math.random() * 800) + 200) / 10) * 10} ¥`,
                        // priceRange: {
                        //   from,
                        //   to,
                        // },

                        //todo удалить фейковые данные
                        //forUnit: hospital.forUnit,
                        //forUnitDescription: hospital.forUnitDescription,
                        forUnit: fakeUnits[Math.floor(Math.random() * fakeUnits.length)],
                        forUnitDescription: fakeForUnitDescription[Math.floor(Math.random() * fakeForUnitDescription.length)],

                        //facilities: hospital.facilities,
                        facilities: [...fakeFacilities]
                            .sort(() => 0.5 - Math.random())
                            .slice(0, Math.floor(Math.random() * 3) + 1),

                    } as TransformedClinic;
                });


                setHospitals(transformed);
            } catch (err) {
                console.error("Failed to load hospitals:", err);
                setError("Не удалось загрузить данные. Пожалуйста, попробуйте позже.");
            } finally {
                setLoading(false);
            }
        };

        void loadHospitals();
    }, []);

    const filteredHospitals = React.useMemo(() => {
        return hospitals.filter((hospital) => {
            if (
                filters.search &&
                !hospital.name.toLowerCase().includes(filters.search.toLowerCase()) &&
                !hospital.description
                    .toLowerCase()
                    .includes(filters.search.toLowerCase())
            ) {
                return false;
            }

            if (filters.category && hospital.category.name !== filters.category) {
                return false;
            }

            if (filters.rating > 0 && hospital.rating < filters.rating) {
                return false;
            }

            if (
                filters.services.length > 0 &&
                !filters.services.some((service) =>
                    hospital.procedures.some((pr) => pr.name === service)
                )
            ) {
                return false;
            }

            // if (hospital.priceRange) {
            //   if (filters.priceFrom && hospital.priceRange.to < filters.priceFrom) {
            //     return false;
            //   }
            //   if (filters.priceTo && hospital.priceRange.from > filters.priceTo) {
            //     return false;
            //   }
            // }

            return true;
        });
    }, [hospitals, filters]);

    const allSpecializations = React.useMemo(() => {
        const names = hospitals
            .flatMap((h) => h.procedures.map((p) => p.name))
            .filter(Boolean);
        return Array.from(new Set(names));
    }, [hospitals]);

    const allCategories = React.useMemo(() => {
        const names = hospitals.map((h) => h.category?.name).filter(Boolean);
        return Array.from(new Set(names));
    }, [hospitals]);

    const handleFilterChange = (newFilters: Partial<typeof filters>) => {
        setFilters((prev) => ({...prev, ...newFilters}));
    };

    if (loading) {
        return (
            <div className="flex justify-center aligned min-h-screen">
                <Loading/>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p className="text-red-500 text-lg">{error}</p>
            </div>
        );
    }

    return (
        <Container>
            <Breadcrumbs links={[{label: "Клиники", isLast: true}]}/>

            {/* todo получить данные раздела и БД */}
            <IndexPageContent title="Клиники в Китае, Хуньчунь, Янцзы "
                              description="В этом разделе вы можете подобрать клинику, ознакомиться с категориями услуг и записаться на консультацию"
                              searchInputName="hospitals"
                              searchInputPlaceholder="Введите название клиники"

            />

            <div className="sides">
                <HospitalsSidebar/>
                <main className="wide-cards">
                    {filteredHospitals.length > 0 ? (
                        filteredHospitals.map((hospital) => (
                            <div key={hospital.id}>
                                <WideCard
                                    buttonText="Написать"
                                    noArrowRight
                                    link={hospital?.link}
                                    name={hospital?.name}
                                    category={hospital?.category}
                                    reviewsCount={hospital?.reviewsCount}
                                    rating={hospital?.rating}
                                    services={hospital?.services}
                                    image={hospital?.main_image}
                                    features={hospital?.procedures}
                                    height={260}
                                    price={hospital.price}
                                    facilities={hospital.facilities}
                                    //category={{name: hospital.category.name, color: hospital.category.color}}
                                    showModalFunc={() => openModal(hospital.id)}
                                    forUnit={hospital.forUnit}
                                    forUnitDescription={hospital.forUnitDescription}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10">
                            <p className="text-gray-500">
                                Ничего не найдено. Попробуйте изменить параметры поиска.
                            </p>
                        </div>
                    )}
                    <BookHospitalForm tourId={selectedTourId} closeModal={closeModal} submitModal={submitModal}/>
                </main>
            </div>
        </Container>

    );
}
