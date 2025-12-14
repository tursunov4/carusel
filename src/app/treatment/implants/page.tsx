import {fetchTreatmentPage} from '@/services/hospitalsService'
import VeneerContent from "@/app/treatment/_include/VeneerContent";
import {Treatment} from "@/services/Treatment";
import ImplantsContent from "@/app/treatment/_include/ImplantsContent";

export default async function ImplantsSinglePage() {

    let data: Treatment;
    try {
        data = await fetchTreatmentPage('implants');

    } catch (error) {
        console.error('Error fetching treatment page:', error);
        // todo удалить фейк данные
        data = {
            title: 'Импланты в Хуньчуне',
            header_image: "/images/dummy/treatment/implants-cover.jpg",
            content: 'Длинный текст об имплантах. Donec aliquam felis et libero scelerisque, at imperdiet justo' +
                ' sagittis. Donec accumsan convallis lorem, vel feugiat tellus eleifend sed. Duis non porttitor mauris, a suscipit odio. Curabitur tortor ligula, tempor in varius ut, imperdiet eu ligula. Pellentesque at mattis magna. Donec aliquam felis et libero scelerisque, at imperdiet justo sagittis. Donec accumsan convallis lorem, vel feugiat tellus eleifend sed. Duis non porttitor mauris, a suscipit odio. ',
            id: 999,
            header_title: "Надёжная эстетика премиум-класса — по международным протоколам и с корейской точностью.",
            gallery: [],
            footer_text: "",
            footer_image: "",
            sections: [],

        }


    }

    return (
        <ImplantsContent data={data}/>
    )


}
