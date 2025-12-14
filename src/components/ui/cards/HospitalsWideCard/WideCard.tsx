import WideCardWrapper from "@/components/ui/cards/WideCard/WideCardWrapper";
import WideCardImageWrapper from "@/components/ui/cards/WideCard/WideCardImageWrapper";
import WideCardTextWrapper from "@/components/ui/cards/WideCard/WideCardTextWrapper";
import Link from "next/link";
import Image from "next/image";
import arrowRightIcon from "@/assets/img/icons/arrow-right-orange.svg";
import WideCardDescriptionContentSide from "@/components/ui/cards/WideCard/WideCardDescriptionContentSide";
import {Facility} from "@/interfaces/Facility";
import {CategoryTypes} from "@/interfaces/CategoryTypes";
import {BaseImage} from "@/services/BaseImage";
import HospitalsWideCardImageWrapper from "@/app/hospitals/_include/HospitalsWideCardImageWrapper";


interface WideCardProps {
    height?: number;
    name: string;
    image: BaseImage;
    category?: CategoryTypes;
    rating?: number;
    facilities?: Facility[];
    reviewsCount?: number;
    pillColor?: string;
    hotelClass?: string;
    description?: string;
    features?: { id: number, name: string }[] | string[];
    price: string;
    showModalFunc: () => void;
    link: string;
    forUnit?: string;
    forUnitDescription?: string;
    buttonText?: string;
    noArrowRight?: boolean;
    services?: string[];
}


const WideCard = (
    {
        name,
        image,
        price,
        category,
        rating,
        reviewsCount,
        facilities,
        link,
        services,
        showModalFunc,
        forUnit,
        forUnitDescription,
        buttonText = "Забронировать",
        noArrowRight
    }: WideCardProps) => {


    return (
        <WideCardWrapper>
            <HospitalsWideCardImageWrapper image={image} title={name}/>

            <WideCardTextWrapper>
                <WideCardDescriptionContentSide link={link} title={name} category={category} rating={rating}
                                                reviewsCount={reviewsCount} facilities={facilities}
                                                services={services}/>
                <div className="button-side flex flex-col">
                    <div className="hotel-class">
                        <h4 className="fnt-h4">{price}</h4>
                        {forUnit && <div className="fnt-accent">{forUnit}</div>}
                        {forUnitDescription &&
                            <div className="optional-text c-black-placeholder">{forUnitDescription}</div>}
                    </div>
                    <div className="buttons">
                        <button type="button" className="btn btn-orange btn-primary" onClick={showModalFunc}>
                            {buttonText}
                            {!noArrowRight &&
                                <Image src={arrowRightIcon} alt="стрелка перейти" width={17} height={17}/>}

                        </button>
                        <Link className="btn btn-orange btn-outline" href={link}>
                            Перейти
                            <Image src={arrowRightIcon} alt="стрелка перейти" width={17} height={17}/>
                        </Link>
                    </div>
                </div>

            </WideCardTextWrapper>


        </WideCardWrapper>
    );
};

export default WideCard;