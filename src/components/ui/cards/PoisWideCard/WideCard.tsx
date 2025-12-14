import WideCardWrapper from "@/components/ui/cards/WideCard/WideCardWrapper";
import WideCardImageWrapper from "@/components/ui/cards/WideCard/WideCardImageWrapper";
import WideCardTextWrapper from "@/components/ui/cards/WideCard/WideCardTextWrapper";
import Link from "next/link";
import Image from "next/image";
import arrowRightIcon from "@/assets/img/icons/arrow-right-orange.svg";
import locationIcon from "@/assets/img/icons/marker-pin-01-subheading.svg";
import WideCardDescriptionContentSide from "@/components/ui/cards/WideCard/WideCardDescriptionContentSide";
import {Facility} from "@/interfaces/Facility";
import {CategoryTypes} from "@/interfaces/CategoryTypes";

interface WideCardProps {
    height?: number;
    title: string;
    image: string;
    category?: CategoryTypes;
    rating?: number;
    facilities?: Facility[];
    reviewsCount?: number;
    pillColor?: string;
    hotelClass?: string;
    description: string;
    features?: { id: number, name: string }[] | string[];
    link: string;
}


const WideCard = (
    {
        title, image, category, rating, reviewsCount, facilities, link, description
    }: WideCardProps) => {


    return (
        <WideCardWrapper>
            <WideCardImageWrapper image={image} title={title}/>

            <WideCardTextWrapper>
                <WideCardDescriptionContentSide link={link} title={title} category={category} rating={rating} reviewsCount={reviewsCount} facilities={facilities} description={description} />
                <div className="button-side flex flex-col">
                    <div className="hotel-class">
                        {/* <div className="optional-text c-black-subheading"> */}
                        {/*     /!* todo захардкоденные данные *!/ */}
                        {/*     <Image className="icon" src={locationIcon} alt="где находится"/> Офис № 223, 2-й этаж, гостиница «Хуэйцюань», улица Цзинхэ, город Хуньчунь */}
                        {/* </div> */}
                    </div>
                    <div className="buttons">
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