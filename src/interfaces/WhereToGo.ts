import {CategoryTypes} from "@/interfaces/CategoryTypes";
import {Facility} from "@/interfaces/Facility";
import {PaidService} from "@/interfaces/PaidService";

export interface WhereToGo {
    id: number;
    title: string;
    image: string;
    images?: string[];
    description: string;
    category: CategoryTypes
    included: string[];
    rating?: number;
    reviewsCount: number;
    link: string;
    slug: string;
    facilities: Facility[];
    price?: string;
    priceFor?: string;
    paidServices?: PaidService[];
}