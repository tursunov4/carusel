const WideCardTitle = ({title}: { title: string }) => {
    return (
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 line-clamp-1">
            {title}
        </h2>
    );
};

export default WideCardTitle;