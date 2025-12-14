import CardItem from './CardItem'
import IconListItem from './IconListItem'
import ListItem from './ListItem'
import {TreatmentSectionItem} from "@/services/TreatmentSectionItem";

interface Props {
    items: TreatmentSectionItem[]
}

export default function SectionItemsGrid({items}: Props) {
    return (
        <div className="flex flex-wrap gap-4 items-stretch">
            {items.map(item => {
                const isCard = item.type === 'cards'
                const wrapperClass = isCard
                    ? 'w-full sm:basis-[calc(50%-1rem)] md:basis-[calc(33.33%-1rem)] lg:basis-[calc(25%-1rem)] max-w-full flex'
                    : 'w-full sm:flex-[1_1_calc(50%-1rem)] md:flex-[1_1_calc(33.33%-1rem)] lg:flex-[1_1_calc(25%-1rem)] max-w-full flex'

                return (
                    <div
                        key={item.id}
                        className={wrapperClass}
                    >
                        {renderItem(item)}
                    </div>
                )
            })}
        </div>


    )

    function renderItem(item: TreatmentSectionItem) {
        switch (item.type) {
            case 'list':
                return <ListItem item={item}/>
            default:
                return <CardItem item={item}/>
        }
    }
}
