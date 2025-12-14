
const WideCardImageWrapper = ({title, image, tag}: { title: string, image?: string, tag?: string }) => {
    return (
        <div className="wide-card-image-wrapper">
            {image && <img src={image} alt={title}/>}

            {tag && <div
                className="absolute top-[20px] left-[20px] inline-block bg-orange-500 text-white text-xs px-3 py-1.5 rounded-full">{tag}</div>}
        </div>
    );
};

export default WideCardImageWrapper;