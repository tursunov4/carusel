import {Facility} from "@/interfaces/Facility";
import {RelatedCardProps} from "@/components/ui/cards/Related/RelatedCardProps";

export interface Hotel {
    id: number;
    title: string;
    category: string;
    image: string;
    images: string[];
    description: string;
    rating: number;
    reviewsCount: number;
    pillColor: string;
    hotelClass: string;
    link: string;
    slug: string;
    nearby: string[];
    facilities: Facility[];
    rooms: string[];
    relatedData: RelatedCardProps[];
}