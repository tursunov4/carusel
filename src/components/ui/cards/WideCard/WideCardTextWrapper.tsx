const WideCardTextWrapper = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="wide-card-text-wrapper flex flex-row flex-wrap">
            {children}
        </div>
    );
};

export default WideCardTextWrapper;