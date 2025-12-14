'use client'

import {ReactNode, useEffect, useRef} from "react";
import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

interface SliderProps {
    children: ReactNode[];
    maxSlides: number;
    autoplay?: boolean;
    showButtons?: boolean;
    loop?: boolean;
    manualOnly?: boolean;
}

export default function Slider(
    {children, maxSlides, autoplay = false, showButtons = true, loop = true, manualOnly = false,}: SliderProps) {
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        slides: {perView: maxSlides, spacing: 16},
        loop: loop,
        drag: !manualOnly,
        breakpoints: {
            "(max-width: 1536px)": {slides: {perView: Math.max(maxSlides - 1, 1), spacing: 16}},
            "(max-width: 1280px)": {slides: {perView: Math.max(maxSlides - 2, 1), spacing: 16}},
            "(max-width: 1024px)": {slides: {perView: Math.max(maxSlides - 3, 1), spacing: 16}},
            "(max-width: 768px)": {slides: {perView: Math.max(maxSlides - 3, 1), spacing: 16}},
            "(max-width: 640px)": {slides: {perView: 1, spacing: 16}},
        },
    });

    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!autoplay || !instanceRef.current) return;

        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 500000); // каждые 5 секунд

        autoplayRef.current = interval;

        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
            }
        };
    }, [autoplay, instanceRef]);

    return (
        <div className="relative">
            <div ref={sliderRef} className="keen-slider">
                {children.map((child, idx) => (
                    <div key={idx} className="keen-slider__slide flex">
                        {child}
                    </div>
                ))}
            </div>

            {showButtons && (
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        onClick={() => instanceRef.current?.prev()}
                        className="p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-full transition"
                    >
                        <AiOutlineLeft size={20}/>
                    </button>
                    <button
                        onClick={() => instanceRef.current?.next()}
                        className="p-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-full transition"
                    >
                        <AiOutlineRight size={20}/>
                    </button>
                </div>

            )}
        </div>
    );
}
