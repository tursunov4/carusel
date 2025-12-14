import {ReactNode} from "react";

export default function SinglePageNestedSection(
    {title, children, borderBottom = false, sectionCssClass, contentCssClass, id, fntH3}: {
        title?: string,
        children: ReactNode,
        borderBottom?: boolean,
        sectionCssClass?: string;
        contentCssClass?: string,
        id?: string,
        fntH3?: boolean
    }) {
    sectionCssClass = `${sectionCssClass ? ` ${sectionCssClass}` : ""}`
    contentCssClass = `${contentCssClass ? " " + contentCssClass : ""}`;
    return (
        <>
            <section {...(id && {id})} className={`nested-section${sectionCssClass}`}>
                {title && <h3 className={`section-header ${fntH3 ? 'fnt-h3' : 'headline'}`}>{title}</h3>}
                <div className={`section-content${contentCssClass}`}>
                    {children}
                </div>
            </section>
            {borderBottom && <hr/>}
        </>

    );
}

