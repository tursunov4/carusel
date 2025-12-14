export interface CrownCardProps {
    id: number;
    title: string;
    durations: string;
    image: string;
    price: string;
    fits: string;
}

export default function CrownCard({item}: { item: CrownCardProps }) {
    return (
        <div className="crown-card flex-1">
            <div className="image-block" style={{borderTopLeftRadius: 8, borderTopRightRadius: 8, overflow: "hidden"}}>
                <img src={item.image} alt={item.title}/>
            </div>
            <div className="flex flex-col gap-20" style={{
                padding: "0 12px 12px 12px",
                border: "1px solid #e5e5e5",
                borderTop: "unset",
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8
            }}>


                <div className="title-block pdb-2">
                    <h4 className="fnt-h4">{item.title}</h4>
                </div>
                <div className="fits-block">
                    <div>Кому подходят: {item.fits}</div>
                </div>

                <div className="duration-block">
                    <div>Срок изготовления: {item.price}</div>
                </div>

                <div className="price-block">
                    <div>Стоимость: {item.price}</div>
                </div>
            </div>
        </div>
    );
}

