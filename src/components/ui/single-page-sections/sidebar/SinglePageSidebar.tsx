import {ReactNode} from "react";

export default function SinglePageSidebar(
    {children, expandedSidebar, contentCssClass}
    : { children: ReactNode, expandedSidebar?: boolean, contentCssClass?: string }) {

    const isExpandedSidebar = expandedSidebar ? " expanded-sidebar" : "";
    let cl = 'sidebar-content';
    if (contentCssClass) {
        cl += ` ${contentCssClass}`;
    }

    return (
        <div className={`sidebar${isExpandedSidebar}`}>
            <div className={cl}>{children}</div>
        </div>
    );
}

