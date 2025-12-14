import {excursions} from "@/dummy-data/fakeExcursionsList";
import {notFound} from "next/navigation";
import ExcursionContent from "@/app/excursions/_include/ExcursionContent";

export default async function ExcursionsSinglePage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
    const excursion = excursions.find((value) => value.slug == slug);

    if (!excursion) {
        notFound();
    }

    return <ExcursionContent excursion={excursion}/>;
}