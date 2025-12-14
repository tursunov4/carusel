import {Facility} from "@/interfaces/Facility";
import Image from "next/image";

export default function SinglePageFacilitiesSection({facilities}:{facilities: Facility[]}) {
    return (
        <div className="facilities">
            {facilities && facilities.map(facility => (
                <div key={facility.id} className="flex flex-row gap-8">
                    <Image src={facility.iconUrl} alt={facility.name} width={16} height={16}/>
                    <span className="fnt-notes">{facility.name}</span>
                </div>
            ))}
        </div>
    );
}

