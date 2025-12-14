import lightenHex from "@/helpers/lightenHex";
import {CategoryTypes} from "@/interfaces/CategoryTypes";
import {CSSProperties} from "react";



interface PropsTypes {
    category?: CategoryTypes
    features?: {id: number, name: string}[]
}

const WideCardFeatures = ({features, category}: PropsTypes) => {

    /* const getProperColor = (color: string) => {
        const colorCode = color[0] !== "#" ? color : color.slice(1)
        return `#66${colorCode}`
    } */

    interface CustomCSSProperties extends CSSProperties {
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
        <>
            {features && features?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3 max-h-12 overflow-y-auto pr-1">
                    {features?.map((feature, idx) => (
                        <span
                            style={(category?.color ? {
                                '--bg-light': lightenHex(category.color, 0.15),
                                '--bg-dark': category.color,
                                '--text-light': category.color,
                                '--text-dark': lightenHex(category.color, 0.15),
                            } : defaultStyles) as CustomCSSProperties}
                            key={idx}
                            className="bg-[var(--bg-light)] dark:bg-[var(--bg-dark)] text-[var(--text-light)] dark:text-[var(--text-dark)] text-xs font-medium px-2 py-0.5 rounded-full"
                        >
                  {feature.name}
                </span>
                    ))}
                </div>
            )}
        </>
    );
};

export default WideCardFeatures;