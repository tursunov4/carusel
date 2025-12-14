'use client';

import useFancybox from "@/hooks/useFancybox";

export default function SinglePageImagesSection({image, images, className}: {
    image?: string,
    images?: string[],
    className?: string
}) {

    //todo удалить слайдер сделать grid
    //const [sliderRef] = useKeenSlider({slides: {perView: 1}})
    const [mainImage, ...otherImages] = images || [];
    const displayImage = image || mainImage;

    const fancyboxRef = useFancybox({})


    return (

        <div ref={fancyboxRef} className={`images-block${className ? ` ${className}` : ""}`}>
            {/* todo добавить передачу типа, чтобы для alt можно было передавать разные значения */}
            <div className="images-grid">
                <div className="main-image">{displayImage && (
                    <a data-fancybox="gallery" href={displayImage}>
                        <img src={displayImage} alt="главное фото"/>
                    </a>

                )}</div>

                <div className="grid">{otherImages?.slice(0, 4).map((img, index) => (
                    <div key={img + "_" + index}>
                        {/* todo добавить на последнем фото ссылку на галерею и темный бг для картинки */}
                        <a data-fancybox="gallery" href={img}>
                            <img src={img} alt={`дополнительное фото ${index + 1}`}/>
                        </a>
                    </div>
                ))}</div>
            </div>

        </div>


    );
}

