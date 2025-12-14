import {FaConciergeBell, FaDumbbell, FaSnowflake, FaSwimmingPool, FaTv, FaUtensils, FaWifi} from "react-icons/fa";
import lightenHex from "@/helpers/lightenHex";
import {CategoryTypes} from "@/interfaces/CategoryTypes";
import {Fragment} from "react";


interface PropsTypes {
    rating?: number
    category?: CategoryTypes
    reviewsCount?: number
    facilities?: string[]
}

const WideCardCategoryRatingFacilities = ({rating, category, reviewsCount, facilities}: PropsTypes) => {
    const getRatingEmoji = () => {
        if (rating && rating >= 4.5) return "😊";
        if (rating && rating >= 4.0) return "🙂";
        if (rating && rating >= 3.0) return "😐";
        if (rating && rating >= 2.0) return "😟";
        if (rating && rating >= 1.0) return "😡";
        return "";
    };

    const getFacilityIcon = (facility: string) => {
        if (facility === 'Wi-Fi') return <FaWifi title="Wi-Fi"/>;
        if (facility === 'Завтрак') return <FaUtensils title="Завтрак"/>;
        if (facility === 'Телевизор') return <FaTv title="Телевизор"/>;
        if (facility === 'Кондиционер') return <FaSnowflake title="Кондиционер"/>;
        if (facility === 'Бассейн') return <FaSwimmingPool title="Бассейн"/>;
        if (facility === 'Тренажёрный зал') return <FaDumbbell title="Тренажёрный зал"/>;
        if (facility === 'Обслуживание') return <FaConciergeBell title="Обслуживание"/>;
        return "";
    };

    interface CustomCSSProperties extends React.CSSProperties {
        '--bg-light'?: string;
        '--bg-dark'?: string;
        '--text-light'?: string;
        '--text-dark'?: string;
    }

    // Дефолтные цвета (если category.color не указан)
    const defaultStyles: CustomCSSProperties = {
        '--bg-light': '#E5F7E5', // light green-100
        '--bg-dark': '#14532d',  // dark green-900
        '--text-light': '#166534', // green-800
        '--text-dark': '#bbf7d0'  // light green-200
    };

    return (
        <div className="flex items-center flex-wrap gap-2 mt-2 w-100">
            {category?.name && (
                <span
                    style={(category?.color ? {
                        '--bg-light': lightenHex(category.color, 0.15),
                        '--bg-dark': category.color,
                        '--text-light': category.color,
                        '--text-dark': lightenHex(category.color, 0.15),
                    } : defaultStyles) as CustomCSSProperties}
                    className="bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] text-[var(--text-light)] dark:text-[var(--text-dark)] text-xs font-medium px-2 py-0.5 rounded-full"
                >
                    {category.name}
                </span>
            )}

            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 text-sm">
                {getRatingEmoji() && (<>{getRatingEmoji()} <span className="font-medium">{rating}</span></>)}
                {reviewsCount && <span className="text-blue-600 dark:text-blue-400">Отзывы ({reviewsCount})</span>}
            </div>

            {facilities?.length && (
                <div className="flex gap-2 text-orange-500 text-lg">
                    {facilities?.map((facility, index) => (
                        <Fragment key={index}>
                            {getFacilityIcon(facility)}
                        </Fragment>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WideCardCategoryRatingFacilities;