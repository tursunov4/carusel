import {Facility} from "@/interfaces/Facility";
import {CategoryTypes} from "@/interfaces/CategoryTypes";
import {PaidService} from "@/interfaces/PaidService";
import {BaseImage} from "@/services/BaseImage";

export interface Excursion {
    id: number;
    slug:string;
    title: string;
    image: string;
    images: string[];
    includes: string[];
    description: string;
    rating: number;
    reviewsCount: number;
    features: string[];
    link: string;
    price: string;
    priceFor?:string;
    category: CategoryTypes;
    facilities: Facility[];
    paidServices: PaidService[];
}