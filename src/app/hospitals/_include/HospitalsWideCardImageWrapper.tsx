import Image from "next/image";
import {BaseImage} from "@/services/BaseImage";

const HospitalsWideCardImageWrapper = ({title, image, tag}: { title: string, image?: BaseImage, tag?: string }) => {
    return (
        <div className="wide-card-image-wrapper">
            {image && image.image && <Image src={image.image} alt={title} width={300} height={240}/>}

            {tag && <div
                className="absolute top-[20px] left-[20px] inline-block bg-orange-500 text-white text-xs px-3 py-1.5 rounded-full">{tag}</div>}
        </div>
    );
};

export default HospitalsWideCardImageWrapper;