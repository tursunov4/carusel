import Container from "@/components/Container";
import NarrowCard from "@/components/ui/cards/NarrowCard/NarrowCard";
import {fakeStories} from "@/dummy-data/fakeStories";


export default function Blog() {
    return (
        <>
            {/* <HeroBanner */}
            {/*     image={typeof HeroBannerImg === 'string' ? HeroBannerImg : HeroBannerImg.src} */}
            {/*     title={'Лечение в Китае'} */}
            {/* /> */}
            <Container>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6">
                    {fakeStories.map((story, index) => (
                        <div key={index} className="w-full">

                            <NarrowCard author={story.author} views={story.views} publishedAt={story.publishedAt}
                                        key={index}
                                        image={story.image} label={story.label} buttonText={story.buttonText}
                                        link={story.link}
                                        title={story.title}>{story.content}</NarrowCard>

                        </div>
                    ))}
                </div>
            </Container>
            {/* <WideBanner image={typeof banner === 'string' ? banner : banner.src}> */}
            {/*     Профессиональная забота о вашей улыбке */}
            {/* </WideBanner> */}
        </>
    );
}
