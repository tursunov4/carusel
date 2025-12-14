import Link from "next/link";
import {RelatedCardProps} from "@/components/ui/cards/Related/RelatedCardProps";

export default function RelatedCard({item}: { item: RelatedCardProps }) {
    return (
        <div className="related-card">
            <div className="image-block">
                <img src={item.image} alt={item.title}/>
            </div>
            <div style={{padding: "0 12px 12px 12px"}}>
                <div className="pill-block" style={{textTransform: 'uppercase'}}>
                    {/* Бани, Путешествия, Другое */}
                    <span className="border-radius bg-color"
                          style={{
                              backgroundColor: item.pillColor,
                              paddingInline: 8,
                              borderRadius: 4,
                              color: "white"
                          }}>{item.pill}</span>
                </div>
                <div className="title-block">
                    <h4>{item.title}</h4>
                </div>
                <div className="link-block">
                    <Link href="" className="fnt-notes c-orange-primary">Перейти {'>'}</Link>
                </div>
            </div>
        </div>
    );
}

