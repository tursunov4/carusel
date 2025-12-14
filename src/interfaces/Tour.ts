import {TourCategory} from "@/interfaces/TourCategory";
import {Currency} from "@/interfaces/Currency";
import {RelatedCardProps} from "@/components/ui/cards/Related/RelatedCardProps";
import {InfoBlock} from "@/interfaces/InfoBlock";

export interface Tour {
    id: number;
    title: string;
    image: string;
    images: string[];
    subtitle?: string;
    slug: string;
    description: string; // "text" field name on backend
    rawDescription?: string;
    //duration?: Duration;
    currency?: Currency;
    price: string;
    priceFor: string;
    category: TourCategory;
    rating: number;
    reviewsCount: number;
    link: string;
    duration: {
        min_duration: number;
        max_duration: number;
    },
    relatedData: RelatedCardProps[];
    includes: InfoBlock[];
    whyMe: InfoBlock[];
}