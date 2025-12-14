import '@splidejs/react-splide/css';
import {ImageLink} from "@/interfaces/ImageLink";

// @ts-ignore
import {Splide, SplideSlide} from "@splidejs/react-splide";
import useFancybox from "@/hooks/useFancybox";


export default function SplideGallery({images}: { images?: ImageLink[] }) {
    const options = {
        type: 'loop',
        perPage: 5,
        focus: 'center',
        padding: 100,
        gap: 12,
        isNavigation: true,
    };

    const refImages = useFancybox();
    return (

        <Splide ref={refImages} options={options} className="images-gallery video">
            {images?.map((item, index) => (
                <SplideSlide key={item.image + "_" + index}>
                    {/* todo ссылки на картинки */}
                    <a href={item.image} data-fancybox="gallery">
                        <img src={item.image} alt="галерея изображения"/>
                    </a>
                </SplideSlide>
            ))}


        </Splide>


    );
}

