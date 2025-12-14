'use client'

import SectionItemsGrid from "@/components/pages/treatment/SectionItem/SectionItemsGrid";
import SectionMain from "@/components/pages/treatment/SectionMain";
import IconListItem from "@/components/pages/treatment/SectionItem/IconListItem";
import {TreatmentSection} from "@/services/TreatmentSection";

interface Props {
    section: TreatmentSection
}

export default function Section({section}: Props) {
    const hasText = Boolean(section.text)
    const hasImages = section.images.length > 0

    // Разделение массива items на две группы: одна с типом 'icon_list', другая без
    const iconListItems = section.items.filter(item => item.type === 'icon_list')
    const otherItems = section.items.filter(item => item.type !== 'icon_list')

    return (
        <section id={`section-${section.id}`} className="space-y-6 scroll-mt-24">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{section.title}</h2>
            {section.subtitle && <p className="text-gray-600 dark:text-gray-300">{section.subtitle}</p>}

            {(hasText || hasImages) && (
                <SectionMain section={section}/>
            )}

            {otherItems?.length > 0 && (
                <SectionItemsGrid items={otherItems}/>
            )}

            {iconListItems?.length > 0 && (
                <IconListItem items={iconListItems}/>
            )}
        </section>
    )
}
