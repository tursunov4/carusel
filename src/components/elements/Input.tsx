// app/components/Input.tsx
import {InputHTMLAttributes, LabelHTMLAttributes} from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: {
        props?: LabelHTMLAttributes<HTMLLabelElement>;
        text: string;
    };
    inputProps?: InputHTMLAttributes<HTMLInputElement>;
    fitContent?: boolean;
}

export default function Input({inputProps, label, fitContent, ...props}: InputProps) {

    return (
        <>
            {label && <label{...label.props}>{label.text}</label>}
            <input{...inputProps} {...props} className={fitContent ? 'w-unset' : ''}/>
        </>

    );
}
