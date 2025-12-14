export interface TreatmentSectionItem {
    id: number;
    type: 'list' | 'icon_list' | 'cards';
    title: string;
    text: string; // HTML
    image: string | null;
    icon: string | null;
    price: string | null;
    full_width: boolean;
    order: number;
}