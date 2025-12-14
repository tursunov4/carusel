import SinglePageNestedSection from "@/components/ui/single-page-sections/SinglePageNestedSection";
import {Doctor} from "@/services/Doctor";
import Button from "@/components/elements/Button";

export default function DoctorsSection({items}: { items: Doctor[] }) {
    return (
        <>
            {items && items.map((item, index) => (
                <SinglePageNestedSection key={item.id}
                                         borderBottom={index != items.length - 1}>
                    <div className="doctors-content flex flex-row flex-wrap gap-12">
                        {/* todo картинки отображаются слайдером по одному */}
                        <div className="image">
                            <img src={item.image.image} alt="изображение услуги"/>
                        </div>

                        <div className="flex-1 title-price-block flex flex-col gap-12">
                            {item.category && item.category.map(cat => (
                                //     todo сделать цвета пиллсоз в переменной
                                <div key={cat.name} className="pill gray no-border category">{cat.name}</div>
                            ))}
                            <div className="title headline">{item.name}</div>

                            {/* todo фикс окончания для слова лет */}
                            <div className="fnt-notes c-black-placeholder">Опыт работы {item.years} лет</div>

                            <ul className="content">
                                {item.specialties.map(spec => (
                                    <li key={spec}>{spec}</li>
                                ))}
                            </ul>
                        </div>


                    </div>
                </SinglePageNestedSection>
            ))}
            {items && <Button buttonStyle="outline" buttonColor="moderate-green" small>Показать всех врачей</Button>}
        </>
    );
}

