const SidebarSelectServiceInput = ({services, action, options}: {
    services: string[],
    options: string[],
    action: (arg: string) => void
}) => {
    return (
        <details className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600/50 rounded-xl">
            <summary
                className="px-3 py-2 cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-200 select-none">
                Доп. категории
            </summary>
            <div className="flex flex-col gap-2 px-3 pb-3 mt-2 max-h-56 overflow-y-auto">
                {options.map((service) => (
                    <label
                        key={service}
                        className="inline-flex items-center gap-2 cursor-pointer text-sm text-gray-700 dark:text-gray-200"
                    >
                        <input
                            type="checkbox"
                            checked={services.includes(service)}
                            onChange={() => action(service)}
                            className="rounded border-gray-300 dark:border-gray-600/50 focus:ring-orange-400"
                        />
                        {service}
                    </label>
                ))}
            </div>
        </details>
    );
};

export default SidebarSelectServiceInput;