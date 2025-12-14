import Image from "next/image";
import {Equipment} from "@/interfaces/Equipment";

export default function SinglePageEquipmentsSection({equipment}: { equipment: Equipment[] }) {
    return (
        <div className="facilities">
            {equipment && equipment.map(eq => (
                <div key={eq.id} className="flex flex-row gap-8">
                    <Image src={eq.image} alt={eq.name} width={16} height={16}/>
                    <span className="fnt-notes">{eq.name}</span>
                </div>
            ))}
        </div>
    );
}

