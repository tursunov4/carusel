// app/components/AuthCard.tsx
import { PropsWithChildren } from "react";

export default function AuthCard({ children, title }: PropsWithChildren<{ title: string }>) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center text-orange-600">{title}</h1>
        {children}
      </div>
    </div>
  );
}
