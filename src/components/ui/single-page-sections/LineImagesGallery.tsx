import useFancybox from "@/hooks/useFancybox";

export default function LineImagesGallery({images, imagesCount = 5}: { images?: string[], imagesCount?: number }) {
    const imageRef = useFancybox();
    return (
        <div ref={imageRef} className="images-line">
            {images && images.slice(0, imagesCount).map((image, index) => (
                <a key={index} href={image} data-fancybox="gallery">
                    <img src={image} alt="фото номера"/>
                </a>

            ))}
        </div>
    );
}

