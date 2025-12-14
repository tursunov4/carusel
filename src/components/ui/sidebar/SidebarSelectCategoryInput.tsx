import {Dispatch, SetStateAction} from 'react';

const SidebarSelectCategoryInput = (
    {value, action, options}: { value: string, options: string[], action: Dispatch<SetStateAction<string>> }) => {
    return (
        <div>
            <select
                value={value}
                onChange={(e) => action(e.target.value)}
                className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
            >
                <option value="">Выберите категорию</option>
                {options?.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </div>
    );
};

export default SidebarSelectCategoryInput;