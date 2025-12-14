'use client'

import React, {useCallback, useEffect, useState} from "react";
import {Tour} from "@/interfaces/Tour";
import Loading from "@/components/Loading";
import Container from "@/components/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import IndexPageContent from "@/components/ui/IndexPageContent";
import ToursSidebar from "@/app/tours/_include/ToursSidebar";
import WideCard from "@/components/ui/cards/ToursWideCard/WideCard";
import BookTourForm from "@/app/tours/_include/BookTourForm";
import {fetchTours} from "@/services/toursService";

export default function ToursIndexContent({initialTours}: { initialTours: Tour[] }) {
    const [tours, setTours] = useState<Tour[]>(initialTours);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedTourId, setSelectedTourId] = useState<number | null>(null);


    const openModal = (id: number) => setSelectedTourId(id);
    const closeModal = () => setSelectedTourId(null);

    function submitModal() {
        // todo send fetch to backend
        console.log('submit modal form', selectedTourId);
        setSelectedTourId(null);
    }

    const fetchData = useCallback(fetchTours, []);


    useEffect(() => {
        const loadTours = async () => {
            try {
                if (initialTours && initialTours.length > 0) return;
                setLoading(true);
                const data = await fetchData();
                // const data = fakeToursList;

                const transformed: Tour[] = data.map((tour: Tour) => ({
                    ...tour,
                    description: tour.description.replace(/<[^>]*>/g, "").substring(0, 200) + "...",
                    rawDescription: tour.description,
                    rating: tour?.rating || 0,
                    link: `/tours/${tour?.slug}`,
                }));

                setTours(transformed);
                setError(null);
            } catch (err) {
                console.error("Failed to load tours:", err);
                setError("Не удалось загрузить данные. Пожалуйста, попробуйте позже.");
            } finally {
                setLoading(false);
            }
        };
        void loadTours();
    }, [initialTours, fetchData]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Loading/>
            </div>
        );
    }

    if (error) {
        return (
            <Container>
                <div className="py-20 text-center text-red-600">
                    {error}
                </div>
            </Container>
        );
    }


    return (
        <Container>
            <Breadcrumbs links={[{label: "Туры", isLast: true}]}/>

            {/* todo получить данные раздела и БД */}
            <IndexPageContent title="Экскурсионные туры в Хуньчунь"
                              description="Туры разные в Хуньчун..."
                              searchInputName="tours"
                              searchInputPlaceholder="Введите название тура"

            />

            <div className="sides">
                <ToursSidebar/>
                <main className="wide-cards">
                    {tours.map((tour) => (
                        <WideCard
                            price={tour.price}
                            priceFor={tour.priceFor}
                            key={tour.title}
                            link={tour.link}
                            title={tour.title}
                            reviewsCount={tour.reviewsCount}
                            rating={tour.rating}
                            description={tour.description}
                            image={tour.image}
                            height={280}
                            category={{name: tour.category.name, color: tour.category.color}}
                            showModalFunc={() => openModal(tour.id)}
                        />
                    ))}
                    <BookTourForm tourId={selectedTourId} closeModal={closeModal} submitModal={submitModal}/>
                </main>
            </div>
        </Container>
    );
}

