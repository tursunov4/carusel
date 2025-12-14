import {fetchTreatmentPage} from '@/services/hospitalsService'
import {Treatment} from "@/services/Treatment";
import CrownsContent from "@/app/treatment/_include/CrownsContent";

export default async function CrownsSinglePage() {

    let data: Treatment;
    try {
        data = await fetchTreatmentPage('crowns');

    } catch (error) {
        console.error('Error fetching treatment page:', error);
        // todo удалить фейк данные
        data = {
            title: 'Металокерамика и циркониевые коронки в Хуньчнуе',
            header_image: "/images/dummy/treatment/crowns/crown-cover.jpg",
            content: 'Длинный текст об коронках. Donec aliquam felis et libero scelerisque, at imperdiet justo' +
                ' sagittis. Donec accumsan convallis lorem, vel feugiat tellus eleifend sed. Duis non porttitor mauris, a suscipit odio. Curabitur tortor ligula, tempor in varius ut, imperdiet eu ligula. Pellentesque at mattis magna. Donec aliquam felis et libero scelerisque, at imperdiet justo sagittis. Donec accumsan convallis lorem, vel feugiat tellus eleifend sed. Duis non porttitor mauris, a suscipit odio. ',
            id: 999,
            header_title: "Металокерамика и циркониевые коронки в Хуньчнуе",
            gallery: [],
            footer_text: "",
            footer_image: "",
            sections: [],

        }


    }

    return (
        <CrownsContent data={data}/>
    )


}
