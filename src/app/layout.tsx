import type {Metadata} from "next";
import ClientLayout from "@/app/clientLayout";
import {Lato} from "next/font/google";
import "../assets/css/global.css";
import {ReactNode} from "react";


const lato = Lato({
    weight: ["400", "700"],
    variable: "--font-lato",
    subsets: ["latin"],
    fallback: ["Roboto", "Arial", "sans-serif"]
});

const siteTitle = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Hunchun';

export const metadata: Metadata = {
    title: siteTitle,
    description: `${siteTitle} - информационный портал о Китае`,
};

export default function RootLayout({children}: Readonly<{ children: ReactNode; }>) {
    return (
        <html lang="ru">
        <body className={`${lato.variable} antialiased`}>
        <ClientLayout>
            {children}
        </ClientLayout>
        </body>
        </html>
    );
}
