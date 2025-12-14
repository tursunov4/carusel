import {fetchTreatmentPage} from '@/services/hospitalsService'
import StomatologiyaContent from "@/app/treatment/_include/StomatologiyaContent";

export default async function StomatologiyaSinglePage() {


    const data = await fetchTreatmentPage('stomatology_in_china');
    

    return (
        <StomatologiyaContent data={data}/>
    )
}
