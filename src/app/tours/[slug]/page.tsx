import {fakeToursList as tours} from "@/dummy-data/fakeToursList";
import {notFound} from "next/navigation";
import {Tour} from "@/interfaces/Tour";
import TourContent from "@/app/tours/_include/TourContent";

export default async function ToursSinglePage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    const tour = tours.find((value: Tour) => value.slug == slug);

    if (!tour) {
        notFound();
    }

    return <TourContent tour={tour}/>;
}

