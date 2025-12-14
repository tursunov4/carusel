import {TreatmentSectionItem} from "@/services/TreatmentSectionItem";

interface Props {
  item: TreatmentSectionItem
}

export default function CardItem({ item }: Props) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow hover:shadow-lg transition group bg-white dark:bg-gray-800 h-full w-full">
      {item.image && (
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <div className="px-4 py-3 flex-1 flex flex-col justify-between">
        <h3 className="text-md font-medium text-gray-800 dark:text-gray-100 mb-4 text-center">
          {item.title}
        </h3>
      </div>
      {item.price && (
        <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">
          от {item.price} ¥
        </div>
      )}
    </div>
  )
}
