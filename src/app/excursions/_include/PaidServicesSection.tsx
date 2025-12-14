import {PaidService} from "@/interfaces/PaidService";
import SinglePageNestedSection from "@/components/ui/single-page-sections/SinglePageNestedSection";

export default function PaidServicesSection({items}: { items: PaidService[] }) {
    return (
        <div className="excursion-paid-services">
            {items && items.map((item, index) => (
                <SinglePageNestedSection key={item.id}
                                         borderBottom={index != items.length - 1}>
                    <div className="service-item">
                        {/* todo картинки отображаются слайдером по одному */}
                        <div className="image">
                            <img src={item.image} alt="изображение услуги"/>
                        </div>

                        <div className="title-price-block">
                            <div className="title headline">{item.title}</div>
                            <h4 className="price fnt-h4" style={{minWidth: 50}}>{item.price}</h4>
                        </div>


                        <div className="content">{item.description}</div>


                    </div>
                </SinglePageNestedSection>
            ))}
        </div>
    );
}

