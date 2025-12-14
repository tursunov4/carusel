import {CategoryTypes} from "@/interfaces/CategoryTypes";
import {Facility} from "@/interfaces/Facility";

export interface WideCardProps {
    height?: number;
    title: string;
    image?: string;
    category?: CategoryTypes;
    rating?: number;
    facilities?: Facility[];
    reviewsCount?: number;
    pillColor?: string;
    hotelClass?: string;
    description?: string;
    features?: { id: number, name: string }[] | string[];
    price?: string;
    priceFor?: string;
    showModalFunc?: () => void;
    link: string;
    services?: string[];
}