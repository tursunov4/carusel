'use client';

import Link from "next/link";

interface ReviewCardProps {
    avatar?: string;
    firstName: string;
    lastName?: string;
    title?: string;
    text?: string;
    link: string;
    buttonText: string;
}

export default function ReviewCard(
    {
        avatar, firstName, lastName, title, text, link, buttonText,
    }: ReviewCardProps) {
    const initials = firstName[0] + (lastName?.[0] ?? '');
    const displayName = `${firstName}${lastName ? ' ' + lastName : ''}`;

    return (
        <div className="flex flex-col h-full max-w-sm px-4 py-6">
            <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 shrink-0">
                    <div
                        className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-orange-500 border-2 border-white z-10"/>
                    {avatar ? (
                        <img src={avatar}
                             alt={displayName}
                             className="rounded-full object-cover"
                        />
                    ) : (
                        <div
                            className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-lg font-bold text-orange-700 border">
                            {initials}
                        </div>
                    )}
                </div>
                <span className="font-medium text-lg">{displayName}</span>
            </div>

            {title ? <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3> : '...'}
            {text ? <p className="text-gray-700 text-base mb-4 leading-relaxed line-clamp-4">{text}</p> : '...'}

            {/* <Link href={link} className="btn btn-orange btn-primary">{buttonText}{' '} →</Link> */}
        </div>
    );
}
