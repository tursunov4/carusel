import HtmlContent from '@/components/HtmlContent'
import {FaCheck} from "react-icons/fa";
import React from "react";
import {TreatmentSectionItem} from "@/services/TreatmentSectionItem";

interface Props {
    items: TreatmentSectionItem[]
}

export default function IconListItem({items}: Props) {
    return (
        <div className="space-y-2 flex flex-col items-start ml-6">
            {items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 text-orange-500 mt-1">
                        <FaCheck size={24}/>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800">{item.title}</h3>
                        <div className="text-gray-600"><HtmlContent html={item.text}/></div>
                    </div>
                </div>
            ))}
        </div>
    )
}
