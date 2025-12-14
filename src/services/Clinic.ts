import {HospitalCategory} from "@/services/hospitalsService";
import {Procedure} from "@/app/hospitals/[hospital_slug]/page";
import {Review} from "@/interfaces/Review";
import {Currency} from "@/interfaces/Currency";
import {BaseImage} from "@/services/BaseImage";
import {Location} from "@/interfaces/Location";
import {Equipment} from "@/interfaces/Equipment";
import {ResearchCategory} from "@/interfaces/ResearchCategory";
import {Doctor} from "@/services/Doctor";

export interface Clinic {
    id: number;
    name: string;
    slug?: string;
    category: HospitalCategory | null;
    rating: number | undefined;
    address: string;
    location: Location;
    description: string;
    procedures: Procedure[];
    gallery?: BaseImage[];
    main_image: BaseImage;
    video: string | null;
    research_categories: ResearchCategory[];
    reviews: Review[];
    reviewsCount: number;
    currency?: Currency;
    price: string;
    priceFor: string;
    includes: string[];
    services?: string[];
    equipment: Equipment[];
    deep_procedures: {
        id: number;
        name: string;
        slug: string;
        image: string;
        description?: string;
    }[];
    doctors: Doctor[];
}


