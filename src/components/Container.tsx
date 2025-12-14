import {ReactNode} from "react";

export default function Container({children, className}: { children: ReactNode, className?: string }) {

    const cssClasses = className ? ` ${className}` : '';

    return (
        <div className={`container${cssClasses}`}>
            {children}
        </div>
    );
}
