import {TreatmentSectionImage} from "@/services/hospitalsService";
import {TreatmentSectionItem} from "@/services/TreatmentSectionItem";

export interface TreatmentSection {
    id: number;
    title: string;
    subtitle: string | null;
    text: string; // HTML
    order: number;
    images: TreatmentSectionImage[];
    items: TreatmentSectionItem[];
}