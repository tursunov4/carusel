import {Research} from "@/interfaces/Research";

export interface ResearchCategory {
    id: number;
    name: string;
    price: number;
    researches: Research[];
}