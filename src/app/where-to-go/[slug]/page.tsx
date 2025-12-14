import WhereToGoSingleContent from "@/app/where-to-go/_include/WhereToGoSingleContent";
import {notFound} from "next/navigation";
import {fakeWhereToGoList} from "@/dummy-data/fakeWhereToGoList";


export default async function WhereToGoSinglePage({params}: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;

    // todo get where to go single page by slug
    // ...

    const whereToGo =
        fakeWhereToGoList.find((value) => value.slug === slug);

    if (!whereToGo) notFound();

    return (
        <WhereToGoSingleContent whereToGo={whereToGo}/>
    )
}