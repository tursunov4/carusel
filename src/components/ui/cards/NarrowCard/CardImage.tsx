import Image, {StaticImageData} from 'next/image';

interface CardImageProps {
  src: string | StaticImageData;
  alt?: string;
  label?: string;
}

export default function CardImage({ src, alt = 'Изображение карточки', label }: CardImageProps) {
  return (
    <div className="relative w-full h-56 overflow-hidden">
      <div className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      {label && (
        <div className="absolute bottom-0 left-0 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-tr-2xl">
          {label}
        </div>
      )}
    </div>
  );
}
