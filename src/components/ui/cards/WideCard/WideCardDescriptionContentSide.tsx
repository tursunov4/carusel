import Image from "next/image";
import {WideCardProps} from "@/interfaces/WideCardProps";
import WideCardReviewAndRating from "@/components/ui/cards/WideCard/WideCardReviewAndRating";
import dividerIcon from "@/assets/img/icons/mandatory.svg";
import {Fragment} from "react";

export default function WideCardDescriptionContentSide(
    {
        title,
        category,
        rating,
        reviewsCount,
        facilities,
        description,
        services
    }: WideCardProps) {
    return (
        <div className="content-side flex flex-col">
            <div className="title-block flex flex-col">
                <div className="category"
                     style={{backgroundColor: category?.color, color: 'white'}}>{category?.name}</div>
                <div className="headline">&laquo;{title}&raquo;</div>
                <WideCardReviewAndRating rating={rating} reviewsCount={reviewsCount}/>
            </div>
            {description && <div className="description">{description}</div>}
            {services && <div className="services">
                {services.map((s, i) => (
                    <Fragment key={`${s}-${i}`}>
                        {i > 0 && <Image src={dividerIcon} alt="разделитель"
                                         width={4} height={4}/>}
                        <div>{s}</div>
                    </Fragment>

                ))}
            </div>}

            <div className="facilities">
                {facilities && facilities.map(facility => (
                    <div key={facility.id} className="flex row gap-8">
                        <Image src={facility.iconUrl} alt={facility.name} width={16} height={16}/>
                        <span className="fnt-notes">{facility.name}</span>
                    </div>
                ))}
            </div>

        </div>
    );
}

