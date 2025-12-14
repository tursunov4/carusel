import {ReactNode} from "react";
import BaseCard from "@/components/ui/cards/BaseCards/BaseCard";

export default function ModalCard({children}: { children: ReactNode, noPadding?: boolean }) {
    return (
            <BaseCard className={``}>{children}</BaseCard>
    );
}

