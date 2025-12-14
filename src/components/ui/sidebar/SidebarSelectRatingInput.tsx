import {Dispatch, SetStateAction} from 'react';

const SidebarSelectRatingInput = ({value, action}: {value: number, action: Dispatch<SetStateAction<number>>}) => {
    return (
        <div>
                <select
                    value={value}
                    onChange={(e) => action(+(e.target.value))}
                    className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
                >
                    <option value={""}>⭐ Минимальный рейтинг</option>
                    <option value={"4.5"}>😃 Супер</option>
                    <option value={"4"}>🙂 Хорошо</option>
                    <option value={"3"}>😐 Нормально</option>
                    <option value={"2"}>😕 Плохо</option>
                    <option value={"1"}>😡 Ужасно</option>
                </select>
            </div>
    );
};

export default SidebarSelectRatingInput;