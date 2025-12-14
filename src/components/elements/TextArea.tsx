"use client";


import {LabelHTMLAttributes, TextareaHTMLAttributes} from "react";

export interface TextareaProps {
    label?: {
        props?: LabelHTMLAttributes<HTMLLabelElement>;
        text: string;
    };
    textareaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
    fitContent?:boolean;
}

export default function TextArea({textareaProps, label, fitContent}: TextareaProps) {
    return (
        <>
            {label && <label{...label.props}>{label.text}</label>}
            <textarea{...textareaProps} className={fitContent ? 'w-unset' : ''}/>
        </>
    );
}
