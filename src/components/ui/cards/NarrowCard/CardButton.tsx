import Link from 'next/link';

interface CardButtonProps {
  href: string;
  text: string;
}

export default function CardButton({ href, text }: CardButtonProps) {
  return (
    <Link href={href} className="btn btn-orange btn-primary">{text} →</Link>
  );
}
