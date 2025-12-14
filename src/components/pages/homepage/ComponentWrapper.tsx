import {FC, ReactNode} from "react";


interface FeaturesSectionProps {
    title: string;
    children?: ReactNode;
}

const ComponentWrapper: FC<FeaturesSectionProps> = ({title, children}) => {
    return (
        <section className="py-4 md:py-8 text-left">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">{title}</h2>
            {children}
        </section>
    );
};

export default ComponentWrapper;
