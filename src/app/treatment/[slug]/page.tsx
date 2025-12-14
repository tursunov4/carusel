import {fetchTreatmentPage} from '@/services/hospitalsService'
import TreatmentContent from "@/app/treatment/_include/TreatmentContent";

export default async function TreatmentSinglePage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;


    const data = await fetchTreatmentPage(slug);


    return (
        <TreatmentContent data={data}/>
    )
}
