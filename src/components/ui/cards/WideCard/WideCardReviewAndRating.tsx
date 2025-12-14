import Image from "next/image";
import starIcon from "@/assets/img/icons/star-01.svg";
import commentIcon from "@/assets/img/icons/message-circle.svg";

export default function WideCardReviewAndRating({rating, reviewsCount}: { rating?: number, reviewsCount?: number }) {
    return (
        <div className="flex flex-row gap-8">
            <div className="flex flex-row gap-4 stars-block">
                <Image src={starIcon} alt="рейтинг" width={16} height={16}/>
                {rating ?? 0}
            </div>
            <div className="flex flex-row gap-4 comments-block">
                <Image src={commentIcon} alt="комментарии" width={16} height={17}/>
                {/* todo сделать склонение "отзывов" */}
                {reviewsCount ?? 0} отзыв.
            </div>
        </div>
    );
}

