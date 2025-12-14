import {Treatment} from "@/services/Treatment";
import {Clinic} from "@/services/Clinic";
import {API_BASE_URL} from "@/services/apiFetch";
import {notFound} from "next/navigation";

if (!API_BASE_URL) {
    throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined in environment variables');
}

if (!API_BASE_URL) throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");

export interface HospitalCategory {
    id: number;
    name: string;
    color?: string;
}


export interface TreatmentSectionImage {
    id: number;
    image: string;
    is_main: boolean;
}


export const fetchClinics = async (): Promise<Clinic[]> => {
    const response = await fetch(`${API_BASE_URL}/api/clinics/`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
};


export const fetchTreatmentPage = async (slug: string): Promise<Treatment> => {
    const response = await fetch(`${API_BASE_URL}/api/treatment/${slug}/`);
    if (!response.ok) {
        if (response.status === 404) {
            throw notFound();
        }
        throw new Error(`Failed to fetch treatment page: ${response.status}`);
    }

    return await response.json();
};

