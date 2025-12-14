import React from "react";
import Link from "next/link";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className={`w-full rounded-2xl border border-gray-200 dark:border-gray-700 
        bg-white dark:bg-gray-900 p-3 shadow-soft 
        text-gray-900 dark:text-gray-100
        focus:outline-none focus:ring-2 focus:ring-primary 
        ${props.className || ""}`}
        />
    );
}

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={`cursor-pointer w-full rounded-2xl bg-primary px-4 py-3 font-medium 
        text-white shadow-soft hover:opacity-90 disabled:opacity-60
        ${props.className || ""}`}
        />
    );
}

export function Muted({children}: { children: React.ReactNode }) {
    return (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{children}</p>
    );
}

export function Nav() {
    return (
        <nav className="flex items-center justify-between p-4
      bg-white dark:bg-gray-900 shadow-sm">
            <Link href="/frontend/public" className="font-semibold text-gray-900 dark:text-gray-100">
                MyApp
            </Link>
            <div className="flex gap-3 text-sm">
                <Link
                    className="hover:underline text-gray-700 dark:text-gray-300"
                    href="/auth/login"
                >
                    Войти
                </Link>
                <Link
                    className="hover:underline text-gray-700 dark:text-gray-300"
                    href="/auth/register"
                >
                    Регистрация
                </Link>
            </div>
        </nav>
    );
}