import {hotels} from "@/dummy-data/fakeHotelsList";
import {notFound} from "next/navigation";
import HotelContent from "../_include/HotelContent";

export default async function HotelsSinglePage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    const hotel = hotels.find((value) => value.slug === slug);

    if (!hotel) {
        notFound();
    }

    return <HotelContent hotel={hotel}/>;
}

