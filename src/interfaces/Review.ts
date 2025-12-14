export interface Review {
    //todo обновить изменить поля для отзывов с бекенда
    id: number;
    text: string;
    author?: string;
    user?: number;
    rating: number;
    avatarImage?: string;
    date: Date;
    visitDate: Date;
    uploadedImages?: string[];
}