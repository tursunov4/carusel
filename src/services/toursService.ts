import {API_BASE_URL} from "@/services/apiFetch";
import {Tour} from "@/interfaces/Tour";

export const fetchTours = async () => {
    if (!API_BASE_URL) {
        throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined in environment variables');
    }

    const response = await fetch(`${API_BASE_URL}/api/tours/`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json() as Tour[];
};