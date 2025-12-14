import WideCardWrapper from "@/components/ui/cards/WideCard/WideCardWrapper";
import WideCardImageWrapper from "@/components/ui/cards/WideCard/WideCardImageWrapper";
import WideCardTextWrapper from "@/components/ui/cards/WideCard/WideCardTextWrapper";
import Link from "next/link";
import Image from "next/image";
import arrowRightIcon from "@/assets/img/icons/arrow-right-orange.svg";
import WideCardDescriptionContentSide from "@/components/ui/cards/WideCard/WideCardDescriptionContentSide";
import {WideCardProps} from "@/interfaces/WideCardProps";


const WideCard = (
    {
        title, image, price, priceFor, category, rating, reviewsCount, facilities, link, description, showModalFunc
    }: WideCardProps) => {

    const phone = process.env.NEXT_PUBLIC_WATSAPP_PHONE;
    const text = `Здравствуйте, я хочу забронировать экскурсию ${title}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;


    return (
        <WideCardWrapper>
            <WideCardImageWrapper image={image} title={title}/>

            <WideCardTextWrapper>
                <WideCardDescriptionContentSide link={link} title={title} category={category} rating={rating}
                                                reviewsCount={reviewsCount} facilities={facilities}
                                                description={description}/>
                <div className="button-side flex flex-col">
                    <div className="hotel-class">
                        <h4 className="fnt-h4">{price}</h4>
                        <div className="fnt-accent">{priceFor}</div>
                        <div className="optional-text c-black-placeholder">опциональный текст, который можно отключить
                        </div>
                    </div>
                    <div className="buttons">
                        {/* <Button onClick={showModalFunc}>Забронировать</Button> */}
                        <Link target="_blank" rel="noopener noreferrer" href={url}
                              className="btn btn-orange btn-primary">Забронировать</Link>
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