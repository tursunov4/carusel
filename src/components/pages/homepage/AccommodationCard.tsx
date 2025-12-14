'use client';

import {AiFillStar} from 'react-icons/ai';
import Link from 'next/link';
import "../../../assets/css/cards/accomodation-card.css";
import {ReactNode} from "react";

interface AccommodationCardProps {
    imageSrc?: string;
    rating?: number;
    reviewsCount?: number;
    title: string;
    link: string;
    buttonText?: string;
    children?: ReactNode;
}

export default function AccommodationCard(
    {
        imageSrc,
        rating,
        reviewsCount = 0,
        title,
        link,
        buttonText = 'Посмотреть',
        children,
    }: AccommodationCardProps) {
    const renderRatingText = () => {
        if (rating === undefined) return '(нет рейтинга)';
        if (reviewsCount === 0) return '(нет отзывов)';
        return `${rating} (${reviewsCount} отзыв${reviewsCount === 1 ? '' : reviewsCount < 5 ? 'а' : 'ов'})`;
    };

    return (
        <div className="accommodation-card">
            {imageSrc && (
                <div className="relative" style={{height: "100%"}}>
                    <img
                        src={imageSrc}
                        alt={title}
                        style={{objectFit: "cover", height: "100%", maxHeight: 225, width: "100%"}}
                    />
                </div>
            )}

            <div className="flex flex-col justify-between p-4 w-full">
                <div>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-300 mb-1">
                        <AiFillStar className="text-yellow-400 mr-1"/>
                        {renderRatingText()}
                    </div>

                    <h3 className="text-lg font-semibold leading-tight line-clamp-2 mb-2 text-gray-900 dark:text-white">
                        {title}
                    </h3>

                    <div className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed line-clamp-[8]">
                        {children}
                    </div>
                </div>

                <div className="mt-4">
                    <Link href={link} className="btn btn-orange btn-primary">{buttonText} →</Link>
                </div>
            </div>
        </div>
    );
}
