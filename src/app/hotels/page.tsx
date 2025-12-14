import Container from "@/components/Container";
import React from "react";
import WideCard from "@/components/ui/cards/HotelsWideCard/WideCard";
import HotelsSidebar from "@/app/hotels/_include/HotelsSidebar";
import IndexPageContent from "@/components/ui/IndexPageContent";
import {hotels} from "@/dummy-data/fakeHotelsList";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function HotelsIndexPage() {
    // todo fetch data
    return (
        <Container>
            <Breadcrumbs links={[{label: "Гостиницы", isLast: true}]}/>

            {/* todo получить данные раздела и БД */}
            <IndexPageContent title="Гостиницы в Хуньчунь"
                              description="Планируйте свое пребывание в Китае с нашим разнообразным выбором гостиниц, отелей и апартаментов. Комфорт, стиль и неповторимый опыт проживания ждут вас. Бронируйте прямо сейчас для незабываемого пребывания!"
                              searchInputName="hotels"
                              searchInputPlaceholder="Введите название гостиницы"

            />

            <div className="sides">
                <HotelsSidebar/>

                <main className="wide-cards">
                    {hotels.map(hotel => (
                        <WideCard
                            category={{name: hotel.category}}
                            facilities={hotel.facilities}
                            features={hotel.nearby}
                            key={hotel.id}
                            link={hotel.link}
                            title={hotel.title}
                            reviewsCount={hotel.reviewsCount}
                            rating={hotel.rating}
                            description={hotel.description}
                            image={hotel.image}
                            height={280}
                            pillColor={hotel.pillColor}
                            hotelClass={hotel.hotelClass}
                        />
                    ))}
                </main>

            </div>
        </Container>

    );
}
