import HtmlContent from '@/components/HtmlContent'
import {TreatmentSectionItem} from "@/services/TreatmentSectionItem";

interface Props {
  item: TreatmentSectionItem
}

export default function ListItem({ item }: Props) {
  return (
    <div className="flex flex-col grow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow space-y-2 w-full h-full">
      <h3 className="font-semibold text-gray-800 dark:text-gray-100">{item.title}</h3>
      <HtmlContent html={item.text} />
      {/* НЕ выводим цену, как ты просил */}
    </div>
  )
}

