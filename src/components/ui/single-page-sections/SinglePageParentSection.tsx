import BaseCard from "@/components/ui/cards/BaseCards/BaseCard";
import {HTMLAttributes, ReactNode} from "react";

export default function SinglePageParentSection({title, children, className, id, cardCssClass, noPadding, ...rest}: {
    title?: string,
    children: ReactNode,
    id?: string,
    className?: string,
    cardCssClass?: string;
    noPadding?: boolean;
} & HTMLAttributes<HTMLElement>) {
    return (
        <section {...(id && {id})} className={`parent-section${className ? ` ${className}` : ""}`} {...rest}>
            <BaseCard className={cardCssClass} noPadding={noPadding ? noPadding : undefined}>
                {title && <h2 className="section-header fnt-h2">{title}</h2>}
                <div className="section-content">
                    {children}
                </div>
            </BaseCard>
        </section>

    );
}

