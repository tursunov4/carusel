import {ButtonHTMLAttributes} from "react";

type ButtonVariant = "orange" | "moderate-green";
type ButtonStyle = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    buttonColor?: ButtonVariant;
    buttonStyle?: ButtonStyle;
    fullWidth?: boolean;
    small?: boolean;
}

export default function Button(
    {
        buttonColor = "orange",
        buttonStyle = "primary",
        fullWidth,
        className = "",
        children,
        type = "button",
        small,
        ...props
    }: ButtonProps) {
    const variantClass = buttonColor === "orange" ? "btn-orange" : "btn-moderate";
    const styleClass = buttonStyle === "primary" ? "btn-primary" : "btn-outline";
    const fWidth = fullWidth ? " full-width" : "";

    const buttonProps = {
        type,
        className: `btn ${variantClass} ${styleClass} ${small ? "small" : ""} ${className}${fWidth}`.trim(),
        ...props
    };

    return <button {...buttonProps}>{children}</button>;
}
