import WideCardWrapper from "@/components/ui/cards/WideCard/WideCardWrapper";
import WideCardImageWrapper from "@/components/ui/cards/WideCard/WideCardImageWrapper";
import WideCardTextWrapper from "@/components/ui/cards/WideCard/WideCardTextWrapper";
import Link from "next/link";
import Image from "next/image";
import arrowRightIcon from "@/assets/img/icons/arrow-right.svg";
import {WideCardProps} from "@/interfaces/WideCardProps";
import WideCardReviewAndRating from "@/components/ui/cards/WideCard/WideCardReviewAndRating";


const WideCard = (
    {
        title, image, category, rating, reviewsCount, facilities, pillColor, hotelClass, link
    }: WideCardProps) => {


    return (
        <WideCardWrapper>
            <WideCardImageWrapper image={image} title={title}/>

            <WideCardTextWrapper>
                <div className="content-side flex flex-col">
                    <div className="title-block flex flex-col">
                        <div className="category"
                             style={{backgroundColor: pillColor, color: "white"}}>{category?.name}</div>
                        <div className="headline">&laquo;{title}&raquo;</div>
                        <WideCardReviewAndRating rating={rating} reviewsCount={reviewsCount}/>
                    </div>
                    <div className="facilities">
                        {facilities && facilities.map(facility => (
                            <div key={facility.id} className="flex row gap-8">
                                <Image src={facility.iconUrl} alt={facility.name} width={16} height={16}/>
                                <span className="fnt-notes">{facility.name}</span>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="button-side flex flex-col">
                    <div className="hotel-class">
                        <h3 className="fnt-accent">Класс гостиницы</h3>
                        <div className={`pill fnt-tags-small${pillColor ? ' ' + pillColor : ''}`}>{hotelClass}</div>
                    </div>
                    <div className="button">
                        <Link className="btn btn-orange btn-primary" href={link}>
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