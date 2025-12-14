import Link from "next/link";

const WideCardButton = ({link}: { link: string }) => {
    return (
        <div className="mt-auto">
          <Link
            href={link}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1.5 rounded-xl transition"
          >
            Перейти →
          </Link>
        </div>
    );
};

export default WideCardButton;