'use client'

import {ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "inline-block px-4 py-2 rounded transition font-semibold text-sm";
  const styles = variant === "primary"
    ? "bg-orange-500 text-white hover:bg-orange-600"
    : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600";
  return (
    <button {...props} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
