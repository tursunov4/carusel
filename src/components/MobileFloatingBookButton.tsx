import Link from "next/link";
import Image from "next/image";
import tgImage from "@/assets/img/icons/tg-icon.svg";
import vkImage from "@/assets/img/icons/vk-icon.svg";
import maxImage from "@/assets/img/icons/max-image.svg";
import dzenImage from "@/assets/img/icons/dzen-icon.svg";
import clockIcon from "@/assets/img/icons/clock-02.svg";

export default function MobileFloatingBookButton({buttonText, infoText, page}: {
    buttonText?: string,
    infoText?: string,
    page?: string
}) {
    if (!buttonText) buttonText = "Забронировать";

    const phone = process.env.NEXT_PUBLIC_WATSAPP_PHONE;

    let text = infoText
        ? `${buttonText}. Заказ с сайта: ${infoText}`
        : `Заказ с сайта. ${buttonText}`;

    if (page) {
        text = `${page}. ${text}`
    }

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    return (
        <div className="mobile-floating-book-button">

            <div className="text-center">
                <div className="flex flex-row gap-4 c-black-subheading justify-center">
                    <Image src={clockIcon} alt=""/>
                    Занимает не больше 5 минут
                </div>

                <div>Свяжитесь с нами удобным способом</div>
            </div>

            <div className="flex flex-row flex-wrap gap-8 justify-center items-center">


                <Link target="_blank" rel="nofollow noopener noreferrer" href={url}
                      className="btn btn-orange btn-primary small-width">{buttonText}</Link>


                <div className="social-icons">
                    <div>
                        <a target="_blank" rel="nofollow" href="#">
                            <Image src={tgImage} alt="мы в телеграм" width={32} height={33}/>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" rel="nofollow" href="#">
                            <Image src={vkImage} alt="социальная сеть вконтакте" width={32} height={33}/>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" rel="nofollow" href="#">
                            <Image src={maxImage} alt="мы в мессенджере max" width={32} height={32}/>
                        </a>
                    </div>
                    <div className="dzen-button">
                        <a target="_blank" rel="nofollow" href="#">
                            <Image src={dzenImage} alt="мы в дзене" width={32} height={33}/>
                        </a>
                    </div>
                </div>

            </div>


        </div>
    );
}

