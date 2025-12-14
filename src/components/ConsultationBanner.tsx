import Link from "next/link";

export default function ConsultationBanner({onButtonFunc}: { onButtonFunc?: () => void }) {
    return (
        <div id="consultation" className="consultation">
            <div className="content-part">
                <div className="c-orange-primary">Хуньчунь Инфо</div>
                <div className="fnt-h3">Идеальная улыбка от профессионалов - всего за 3 дня!</div>
                <div>Запишитесь на бесплатную онлайн-консультацию уже сегодня!</div>
                <div>
                    <Link onClick={onButtonFunc} href="" className="btn btn-orange btn-primary">Записаться
                        на консультацию</Link>
                </div>
            </div>
            <div className="image-block">
                <img src="/images/girl-consultation.png" alt="консультация"/>
            </div>
        </div>
    );
}

