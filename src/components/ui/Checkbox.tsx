'use client'

import {InputHTMLAttributes} from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer">
      <input
        type="checkbox"
        className="rounded border-gray-300 dark:border-gray-600 focus:ring-orange-400"
        {...props}
      />
      {label}
    </label>
  );
}
