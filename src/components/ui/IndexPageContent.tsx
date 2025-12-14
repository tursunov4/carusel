import Image from "next/image";
import searchImage from "@/assets/img/icons/search-03.svg";
import BaseCard from "@/components/ui/cards/BaseCards/BaseCard";
import Input from "@/components/elements/Input";

export default function IndexPageContent(
    {
        title,
        description,
        searchInputName,
        searchInputPlaceholder
    }: {
        title?: string,
        description?: string,
        searchInputName?: string,
        searchInputPlaceholder?: string
    }) {
    return (
        <BaseCard>
            <div className="index-page-content">
                <div className="title">{title}</div>
                <div className="description">{description}</div>

                <div className="input-search-block">
                    <Input inputProps={{
                        placeholder: searchInputPlaceholder,
                        type: "text",
                        name: searchInputName,
                        id: "content-search"
                    }}/>
                    <span className="find-icon">
                        <Image src={searchImage} alt={`найти ${searchInputName}`}/>
                    </span>
                </div>

            </div>
        </BaseCard>
    )
}

