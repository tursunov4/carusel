'use client'

import {useEffect, useState} from 'react';
import SidebarInput from "@/components/ui/sidebar/SidebarInput";
import SidebarSelectCategoryInput from "@/components/ui/sidebar/SidebarSelectCategoryInput";
import SidebarSelectRatingInput from "@/components/ui/sidebar/SidebarSelectRatingInput";
import SidebarPriceRange from "@/components/ui/sidebar/SidebarPriceRange";
import SidebarSelectServiceInput from "@/components/ui/sidebar/SidebarSelectServiceInput";
import SidebarReset from "@/components/ui/sidebar/SidebarReset";

const Sidebar = (
    {
        height = 260,
        categoryOptions,
        serviceOptions,
        ratingSelect = false,
        priceRange = false,
    }: {
        height?: number,
        categoryOptions?: string[],
        serviceOptions?: string[]
        ratingSelect?: boolean
        priceRange?: boolean
    }) => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState(0);
    const [priceFrom, setPriceFrom] = useState<number|null>(null);
    const [priceTo, setPriceTo] = useState<number|null>(null);
    const [h, setH] = useState('md:min-h-[260px]');
    const [services, setServices] = useState<string[]>([]);

    useEffect(() => {
        if (height) {
            setH(`md:min-h-[${height}px]`)
        }
    }, [height]);

    const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((f) => f !== service)
        : [...prev, service]
    );
  };

    const resetAll = () => {
        setSearch("")
        setCategory("")
        setRating(0)
        setPriceFrom(null)
        setPriceTo(null)
        setServices([])
    }

    return (
        <aside
            className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm p-4 space-y-4 h-auto ${h} flex flex-col justify-between`}>
            <SidebarInput value={search} action={setSearch}/>
            {categoryOptions?.length && <SidebarSelectCategoryInput value={category} action={setCategory} options={categoryOptions}/>}
            {ratingSelect && <SidebarSelectRatingInput value={rating} action={setRating}/>}
            {priceRange && <SidebarPriceRange valueTo={priceTo} valueFrom={priceFrom} actionTo={setPriceTo}
                                actionFrom={setPriceFrom}/>}
            {serviceOptions?.length && <SidebarSelectServiceInput services={services} options={serviceOptions} action={toggleService}/>}
            <SidebarReset action={resetAll}/>
        </aside>
    );
};

export default Sidebar;