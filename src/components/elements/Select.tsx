import {LabelHTMLAttributes, SelectHTMLAttributes} from "react";


export interface SelectProps {
    label?: {
        props?: LabelHTMLAttributes<HTMLLabelElement>;
        text: string;
    };
    selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
    options: {
        value: string;
        text: string;
    }[],
    fitContent?: boolean;

}

export default function Select({label, selectProps, options, fitContent}: SelectProps) {
    return (
        <div className="flex flex-col items-start gap-4">
            {label && <label{...label.props}>{label.text}</label>}
            <select{...selectProps} className={fitContent ? 'w-unset' : ''}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.text}</option>
                ))}
            </select>
        </div>

    );
}

