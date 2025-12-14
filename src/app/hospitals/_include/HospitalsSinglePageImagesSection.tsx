'use client';

import {BaseImage} from "@/services/BaseImage";
import useFancybox from "@/hooks/useFancybox";

export default function HospitalsSinglePageImagesSection({image, images, className}: {
    image?: BaseImage,
    images?: BaseImage[],
    className?: string
}) {

    //todo удалить слайдер сделать grid
    //const [sliderRef] = useKeenSlider({slides: {perView: 1}})
    const [mainImage, ...otherImages] = images || [];
    const displayImage = image || mainImage;

    const imagesRef = useFancybox()


    return (

        <div ref={imagesRef} className={`images-block${className ? ` ${className}` : ""}`}>
            {/* todo добавить передачу типа, чтобы для alt можно было передавать разные значения */}
            <div className="images-grid">
                <div className="main-image">{displayImage && (
                    <a href={displayImage.image} data-fancybox="gallery">
                        <img src={displayImage.image} alt="главное фото"/>
                    </a>
                )}</div>

                <div className="grid">{otherImages?.slice(0, 4).map((img, index) => (
                    <div key={img.id}>
                        {/* todo добавить на последнем фото ссылку на галерею и темный бг для картинки */}
                        <a href={img.image} data-fancybox="gallery">
                            <img src={img.image} alt={`дополнительное фото ${index + 1}`}/>
                        </a>
                    </div>
                ))}</div>
            </div>

        </div>


    );
}

