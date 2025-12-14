'use client'

import {HTMLAttributes, ReactNode, useState} from "react";
import Image from "next/image";
import menuIcon from "@/assets/img/icons/menu-02.svg";

export default function BaseCard({
                                     children,
                                     noPadding = false,
                                     className,
                                     mobileCardHeader,
                                     isExpanded = true,
                                     ...props
                                 }: {
    children: ReactNode,
    noPadding?: boolean,
    className?: string,
    mobileCardHeader?: string,
    isExpanded?: boolean,
} & HTMLAttributes<HTMLDivElement>) {

    const [isExpandedCard, setIsExpandedCard] = useState(isExpanded)

    return (
        <>
            {mobileCardHeader && <div className={`mobile-card-header${isExpandedCard ? ' expanded' : ''}`}
                                      onClick={() => setIsExpandedCard(prev => !prev)}>
                <h4 className="fnt-h4 pb-2">{mobileCardHeader}</h4>
                <Image src={menuIcon} alt="menu" width={16} height={17}/>
            </div>}
            <div {...props}
                 className={`card${noPadding ? ' no-padding' : ''}${className ? ` ${className}` : ''}${isExpandedCard ? '' : ' hidden-card'}`}>
                {children}
            </div>


        </>

    );
}

