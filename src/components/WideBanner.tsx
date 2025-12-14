import Container from "./Container";
import {ReactNode} from "react";

interface WideBannerProps {
  image: string;
  children: ReactNode;
}

export default function WideBanner({ image, children }: WideBannerProps) {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat h-[300px] md:h-[500px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay */}
      <div className="w-full h-[300px] md:h-[500px] flex items-center justify-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          {/* Content */}
      <div className="relative z-10 py-12 md:py-20">
        <Container>
          <div className="text-center text-white space-y-8">
            <h2 className="text-2xl md:text-4xl font-semibold">
              {children}
                </h2>
                <button
                    className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded transition">
                    Поехали →
                </button>
          </div>
        </Container>
      </div>
      </div>
    </section>
  );
}
