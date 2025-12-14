'use client'

import Container from "@/components/Container";
import WideCard from "@/components/ui/cards/ExcursionsWideCard/WideCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import IndexPageContent from "@/components/ui/IndexPageContent";
import ExcursionsSidebar from "@/app/excursions/_include/ExcursionsSidebar";
import {excursions} from "@/dummy-data/fakeExcursionsList";
import BookExcursionForm from "@/app/excursions/_include/BookExcursionForm";
import {useState} from "react";


export default function ExcursionsIndexPage() {
    const [selectedTourId, setSelectedTourId] = useState<number | null>(null);

    const openModal = (id: number) => setSelectedTourId(id);
    const closeModal = () => setSelectedTourId(null);

    function submitModal() {
        // todo send fetch to backend
        // ...

        console.log('submit modal form', selectedTourId);
        setSelectedTourId(null);
    }

    // todo fetch data
    return (
        <Container>
            <Breadcrumbs links={[{label: "Экскурсии", isLast: true}]}/>

            {/* todo получить данные раздела и БД */}
            <IndexPageContent title="Экскурсии в Хуньчуне"
                              description="Знакомство с живописными местами, список всех экскурсий в Хуньчуне, с фото, ценами и отзывами людей. Исследуйте Китай с нашими увлекательными экскурсиями"
                              searchInputName="excursions"
                              searchInputPlaceholder="Введите название экскурсии"

            />

            <div className="sides">
                <ExcursionsSidebar isCollapsed/>

                <main className="wide-cards">
                    {excursions.map((excursion) => (
                        <WideCard
                            price={excursion.price}
                            features={excursion.features}
                            key={excursion.id}
                            link={excursion.link}
                            title={excursion.title}
                            reviewsCount={excursion.reviewsCount}
                            rating={excursion.rating}
                            description={excursion.description}
                            image={excursion.image}
                            height={280}
                            facilities={excursion.facilities}
                            category={{name: excursion.category.name, color: excursion.category.color}}
                            showModalFunc={() => openModal(excursion.id)}
                        />
                    ))}
                    <BookExcursionForm tourId={selectedTourId} closeModal={closeModal} submitModal={submitModal}/>
                </main>


            </div>


        </Container>

    );
}
