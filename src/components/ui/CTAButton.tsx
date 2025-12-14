import Link from "next/link";

export function CTAButton({ text, href }: { text: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition-all dark:shadow-md"
    >
      {text}
    </Link>
  );
}

