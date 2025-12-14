import Container from "@/components/Container";

interface HeroBannerProps {
    image?: string;      // путь или URL фонового изображения
    title?: string;      // текст
}

export default function HeroBanner({image, title}: HeroBannerProps) {
    return (
        <div
            className="w-full h-[150px] md:h-[200px] flex items-center justify-center"
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Оверлей */}
            <div className=" w-full h-[150px] md:h-[200px] flex items-center justify-center"
                 style={{
                     backgroundColor: `rgba(0, 0, 0, 0.7)`,
                 }}
            >
                <Container>
                    <div className="px-4 text-center">
                        <h2 className="text-white text-2xl md:text-3xl font-semibold">
                            {title}
                        </h2>
                    </div>
                </Container>
            </div>
        </div>
    );
}
