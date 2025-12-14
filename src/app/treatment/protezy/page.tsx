import {fetchTreatmentPage} from '@/services/hospitalsService'
import {Treatment} from "@/services/Treatment";
import CrownsContent from "@/app/treatment/_include/CrownsContent";
import ProtezyContent from "@/app/treatment/_include/ProtezyContent";

export default async function ProtezySinglePage() {

    let data: Treatment;
    try {
        data = await fetchTreatmentPage('protezy');

    } catch (error) {
        console.error('Error fetching treatment page:', error);
        // todo удалить фейк данные
        data = {
            title: 'Съемные протезы в Хуньчуне',
            header_image: "/images/dummy/treatment/protezy/protezy-cover.jpg",
            content: 'Длинный текст о протезах. Donec aliquam felis et libero scelerisque, at imperdiet justo' +
                ' sagittis. Donec accumsan convallis lorem, vel feugiat tellus eleifend sed. Duis non porttitor mauris, a suscipit odio. Curabitur tortor ligula, tempor in varius ut, imperdiet eu ligula. Pellentesque at mattis magna. Donec aliquam felis et libero scelerisque, at imperdiet justo sagittis. Donec accumsan convallis lorem, vel feugiat tellus eleifend sed. Duis non porttitor mauris, a suscipit odio. ',
            id: 999,
            header_title: "Зубные протезы  помогают восстановить жевательную функцию и эстетику улыбки. ",
            gallery: [],
            footer_text: "",
            footer_image: "",
            sections: [],

        }


    }

    return (
        <ProtezyContent data={data}/>
    )


}
