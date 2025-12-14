import BaseCard from "@/components/ui/cards/BaseCards/BaseCard";
import {ReactNode, useEffect} from "react";
import Image from "next/image";
import closeIcon from "@/assets/img/icons/closer-cross.svg";

export default function Modal({children, show, onClose, footer, title}
                              :
                              {
                                  children: ReactNode,
                                  show: boolean,
                                  onClose: () => void,
                                  footer?: ReactNode,
                                  title: string
                              }) {
    useEffect(() => {
        document.body.style.overflow = show ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [show]);

    if (!show) return null;

    return (
        <div className={`modal${show ? ' show' : ''}`}>

            <BaseCard className="modal-content">
                <div className="close" onClick={onClose}>
                    <Image src={closeIcon} alt="закрыть окно" width={16} height={16}/>
                </div>
                <h2 className="title fnt-h4">{title}</h2>
                {children}
                {footer && footer}
            </BaseCard>
        </div>
    );
}

