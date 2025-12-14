import SinglePageNestedSection from "@/components/ui/single-page-sections/SinglePageNestedSection";
import {InfoBlock} from "@/interfaces/InfoBlock";
import Image from "next/image";

export default function WhyMeSection({items}: { items: InfoBlock[] }) {
    return (
        <div className="tour-why-me-section">
            {items && items.map((item, index) => (
                <SinglePageNestedSection key={item.id}
                                         borderBottom={index != items.length - 1}>
                    <div className="service-item">
                        <div className="image">
                            {item.icon && <Image src={item.icon} alt="изображение услуги" width={16} height={16}/>}
                        </div>

                        <div className="title-price-block">
                            <div className="title headline">{item.title}</div>
                        </div>

                        <div className="content">{item.description}</div>

                    </div>
                </SinglePageNestedSection>
            ))}
        </div>
    );
}

