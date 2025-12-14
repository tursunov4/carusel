import BaseCard from "@/components/ui/cards/BaseCards/BaseCard";
import WideCardReviewAndRating from "@/components/ui/cards/WideCard/WideCardReviewAndRating";
import {ReactNode} from "react";

export default function SinglePageTitleSection(
    {title, rating, reviewsCount, children}: {
        title?: string, rating?: number, reviewsCount?: number, children: ReactNode
    }) {
    return (
        <BaseCard className="sp-title-block sides" noPadding>
            <BaseCard className="left-side">
                <h1 className="fnt-h2">{title}</h1>
                <WideCardReviewAndRating rating={rating} reviewsCount={reviewsCount}/>
            </BaseCard>

            <BaseCard className="sidebar sidebar-part">
                <div className="sidebar-part-content flex flex-col gap-8">{children}</div>
            </BaseCard>

        </BaseCard>
    );
}

