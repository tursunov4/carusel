'use client'

import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import HtmlContent from '@/components/HtmlContent'
import {useState, useRef} from 'react'
import {TreatmentSection} from "@/services/TreatmentSection";
import {TreatmentSectionImage} from "@/services/hospitalsService";

interface Props {
    section: TreatmentSection
}

export default function SectionMain({section}: Props) {
    const hasText = Boolean(section.text)
    const hasImages = section.images.length > 0
    const [currentSlide, setCurrentSlide] = useState(0)
    // const sliderRef = useRef(null)
    const [fullscreenImage, setFullscreenImage] = useState<string|null>(null)

    const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 1,
            spacing: 0,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
    })

    const aspectClass = 'aspect-[16/9]'
    const imageHeight = 'max-h-[500px]'

    if (!hasText && !hasImages) return null

    return (
        <div className="w-full flex flex-col lg:flex-row gap-6">
            {/*Проверка наличия изображений*/}
            {hasImages && (

                <div className="flex-1 max-h-[500px] rounded-2xl overflow-hidden shadow-md">
                    <div className="relative">
                        <div
                            ref={sliderRef}
                            className={`keen-slider rounded-2xl overflow-hidden shadow-md ${aspectClass} ${imageHeight}`}
                        >
                            {section.images.map((img, idx) => (
                                <div key={img.id} className="keen-slider__slide cursor-pointer">
                                    <img
                                        src={img.image}
                                        alt="Фото клиники"
                                        // width={600}
                                        // height={500}
                                        className={`w-full h-full object-cover`}
                                        onClick={() => setFullscreenImage(img.image)}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Стрелки управления */}
                        {section.images.length > 1 && (
                            <>
                                <button
                                    onClick={() => slider.current?.prev()}
                                    className="absolute top-1/2 left-2 -translate-y-1/2 z-10 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow hover:bg-white w-[40px] h-[40px]"
                                >
                                    ←
                                </button>
                                <button
                                    onClick={() => slider.current?.next()}
                                    className="absolute top-1/2 right-2 -translate-y-1/2 z-10 p-2 bg-white/80 dark:bg-gray-800/80 rounded-full shadow hover:bg-white w-[40px] h-[40px]"
                                >
                                    →
                                </button>
                            </>
                        )}

                        {/* Точки пагинации */}
                        {section.images.length > 1 && (
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {section.images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => slider.current?.moveToIdx(idx)}
                                        className={`w-3 h-3 rounded-full ${
                                            currentSlide === idx
                                                ? 'bg-blue-600'
                                                : 'bg-gray-300 dark:bg-gray-600'
                                        }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}


            {/* Проверка наличия текста */}
            {hasText && (
                <div className="flex-1">
                    <HtmlContent html={section.text}/>
                </div>
            )}
            {/* Полноэкранное изображение */}
            {fullscreenImage && (
                <div
                    onClick={() => setFullscreenImage(null)}
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center cursor-zoom-out"
                >
                    <img
                        src={fullscreenImage}
                        alt="Полноэкранное изображение"
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
            )}
        </div>
    )
}
