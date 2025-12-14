import Button from "@/components/elements/Button";

export interface ProtezyCardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    button?: string;
}

export default function ProtezyCard({item}: { item: ProtezyCardProps }) {
    if (!item.button) {
        item.button = "Узнать стоимость";
    }
    return (
        <div className="crown-card flex-1" style={{flexBasis: "calc(50% - 12px)"}}>
            <div className="image-block" style={{borderTopLeftRadius: 8, borderTopRightRadius: 8, overflow: "hidden"}}>
                <img src={item.image} alt={item.title}/>
            </div>
            <div className="flex flex-col gap-20 justify-between" style={{
                padding: "0 12px 12px 12px",
                border: "1px solid #e5e5e5",
                borderTop: "unset",
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                justifyContent: "space-between",
                minHeight: 250
            }}>

                <div className="title-block pdb-2 flex-1">
                    <h4 className="fnt-h4">{item.title}</h4>
                </div>
                <div className="description-block flex-1">
                    <div>{item.description}</div>
                </div>

                <div className="price-block flex-1">
                    <Button>{item.button}</Button>
                </div>
            </div>
        </div>
    );
}

