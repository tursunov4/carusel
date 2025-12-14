import {RelatedCardProps} from "@/components/ui/cards/Related/RelatedCardProps";
import RelatedCard from "@/components/ui/cards/Related/RelatedCard";

export default function RelatedCardsList({items}: { items: RelatedCardProps[] }) {
    return (
        <div className="related-cards">
            {/* todo сделать полосу прокрутки в цвет зелёный как в фигме */}
            {items.length && items.map(item => (
                <RelatedCard key={item.id} item={item}/>
            ))}
        </div>
    );
}

