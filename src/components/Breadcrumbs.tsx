import Link from "next/link";
import {BreadcrumbLink} from "@/interfaces/BreadcrumbLink";

export default function Breadcrumbs({links}: { links: BreadcrumbLink[] }) {
    return (

        <div className="breadcrumbs">
            <Link href="/">Главная</Link>
            {links && links.map(link =>
                link.isLast ? (
                    <span key={link.label} className="active">{link.label}</span>
                ) : link.href ? (
                    <Link key={link.label} href={link.href}>{link.label}</Link>
                ) : null
            )}
        </div>
    );
}

