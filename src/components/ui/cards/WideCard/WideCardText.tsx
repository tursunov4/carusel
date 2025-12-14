const WideCardText = ({description}: { description: string }) => {
    return (
        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3">
            {description}
        </p>
    );
};

export default WideCardText;
