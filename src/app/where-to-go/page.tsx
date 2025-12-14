import Container from "@/components/Container";
import React from "react";
import WideCard from "@/components/ui/cards/PoisWideCard/WideCard";
import {fakeWhereToGoList} from "@/dummy-data/fakeWhereToGoList";
import Breadcrumbs from "@/components/Breadcrumbs";
import IndexPageContent from "@/components/ui/IndexPageContent";
import WhereToGoIndexSidebar from "@/app/where-to-go/_include/WhereToGoIndexSidebar";


export default function WhereToGoIndexPage() {

    // todo fetch data
    return (
        <Container>
            <Breadcrumbs links={[{label: "Куда сходить", isLast: true}]}/>

            {/* todo получить данные раздела и БД */}
            <IndexPageContent title="Куда сходить в Хуньчуне"
                              description="Откройте для себя волшебный Хуньчунь: лучшие места для посещения, удивительные достопримечательности и яркие впечатления. Планируйте свое приключение прямо сейчас и окунитесь в неповторимую атмосферу этого удивительного города!"
                              searchInputName="poi"
                              searchInputPlaceholder="Введите название места"

            />

            <div className="sides">
                {/* todo получить фильтры из бд */}
                <WhereToGoIndexSidebar/>

                {/* todo передать нужные данные с бекенда */}
                <main className="flex-1 space-y-4">
                    {fakeWhereToGoList.map((poi) => (
                        <WideCard
                            key={poi.id}
                            features={poi.included}
                            link={poi.link}
                            title={poi.title}
                            reviewsCount={poi.reviewsCount}
                            rating={poi.rating}
                            description={poi.description}
                            image={poi.image}
                            height={280}
                            facilities={poi.facilities}
                            category={{name: poi.category.name, color: poi.category.color}}
                        />
                    ))}

                </main>
            </div>
        </Container>
    );
}
