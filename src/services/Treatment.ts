import {TreatmentSection} from "@/services/TreatmentSection";
import {Doctor} from "@/services/Doctor";

export interface Treatment {
    id: number;
    title: string;
    header_title: string;
    header_image: string | undefined;

    main_image?: string;
    gallery: string[];
    content: string;
    footer_text: string;
    footer_image: string | null;
    sections: TreatmentSection[];
    doctors?: Doctor[];
}