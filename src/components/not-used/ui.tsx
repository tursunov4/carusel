// frontend/components/ui.tsx
import React from "react";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-md rounded-2xl 
        bg-white dark:bg-gray-800 
        p-6 shadow-soft 
        text-gray-900 dark:text-gray-100
        ${className || ""}`}
    >
      {children}
    </div>
  );
}

