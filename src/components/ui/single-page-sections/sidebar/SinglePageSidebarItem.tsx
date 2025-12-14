import Image from "next/image";
import {ReactNode} from "react";
import BaseCard from "@/components/ui/cards/BaseCards/BaseCard";

export default function SinglePageSidebarItem({title, image, children, onTop, mainItem, hideOnMobile}: {
    title: string,
    image?: string,
    children?: ReactNode,
    onTop?: boolean,
    mainItem?: boolean,
    hideOnMobile?: boolean,
}) {
    return (
        <BaseCard
            className={`sidebar-item${onTop ? " on-top" : ""}${mainItem ? " main-item" : ""}${hideOnMobile ? " hide-on-mobile" : ""}`}>
            <h4 className="fnt-h4">{title}</h4>
            {image &&
                <div className="image-block">
                    <Image
                        src={image}
                        alt={title.toLowerCase()}
                        width={258}
                        height={200}
                    />
                </div>}
            {children && children}
        </BaseCard>
    );
}

