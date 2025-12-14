import {BaseImage} from "@/services/BaseImage";
import {Facility} from "@/interfaces/Facility";
import {CategoryTypes} from "@/interfaces/CategoryTypes";
import {Equipment} from "@/interfaces/Equipment";
import {ResearchCategory} from "@/interfaces/ResearchCategory";

export interface TransformedClinic {
    id: number;
    name: string;
    main_image: BaseImage;
    image: BaseImage;
    gallery?: BaseImage[];
    description: string;
    rawDescription: string;
    category: CategoryTypes;
    procedures: { id: number; name: string }[];
    rating: number;
    reviewsCount: number;
    link: string;
    video: string | null;
    price: string;
    forUnit?: string;
    forUnitDescription?: string;
    facilities: Facility[];
    services: string[];
    equipment: Equipment[];
    research_categories: ResearchCategory[];
    // priceRange?: {
    //   from: number | null;
    //   to: number | null;
    // };
}