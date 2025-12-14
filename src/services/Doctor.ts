import {CategoryTypes} from "@/interfaces/CategoryTypes";
import {BaseImage} from "@/services/BaseImage";

export interface Doctor {
    id: number;
    name: string;
    years: number;
    image: BaseImage;
    specialties: string[];
    category: CategoryTypes[];
}