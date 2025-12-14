'use client'

import {Dispatch, SetStateAction} from 'react';

const SidebarInput = ({value, action}: {value: string, action: Dispatch<SetStateAction<string>>}) => {
    return (
        <div>
        <input
          type="text"
          placeholder="Поиск..."
          value={value}
          onChange={(e) => action(e.target.value)}
          className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl px-3 py-2 text-sm text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
        />
      </div>
    );
};

export default SidebarInput;