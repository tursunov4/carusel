'use client'

import {Dispatch, SetStateAction} from 'react';

const SidebarPriceRange = (
    {
        valueFrom,
        valueTo,
        actionFrom,
        actionTo
    }: {
        valueFrom: number | null,
        valueTo: number | null,
        actionFrom: Dispatch<SetStateAction<number | null>>
        actionTo: Dispatch<SetStateAction<number | null>>
    }) => {
    return (
        <div className="flex gap-2">
                <input
                    type="number"
                    value={valueFrom ? valueFrom.toString() : ""}
                    onChange={(e) => actionFrom(+e.target.value)}
                    placeholder="¥ Цена от"
                    className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm appearance-none text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
                />
                <input
                    type="number"
                    value={valueTo ? valueTo.toString() : ""}
                    onChange={(e) => actionTo(+e.target.value)}
                    placeholder="¥ Цена до"
                    className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm appearance-none text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
                />
            </div>
    );
};

export default SidebarPriceRange;