import ToursIndexContent from "@/app/tours/_include/ToursIndexContent";
import {Tour} from "@/interfaces/Tour";
import {fakeToursList} from "@/dummy-data/fakeToursList";
import {fetchTours} from "@/services/toursService";

export default async function ToursIndexPage() {


    let data: Tour[] = [];

    try {
        // todo раскомментировать для прода
        // data = await fetchTours();
        data = fakeToursList;

    } catch (err) {
        console.error("Failed to load tours:", err);

    }


    const transformed: Tour[] = data.map((tour: Tour) => ({
        ...tour,
        description: tour.description.replace(/<[^>]*>/g, "").substring(0, 200) + "...",
        rawDescription: tour.description,
        rating: tour?.rating || 0,
        link: `/tours/${tour?.slug}`,
    }));


    return (
        <ToursIndexContent initialTours={transformed}/>
    );
}
