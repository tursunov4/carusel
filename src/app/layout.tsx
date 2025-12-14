import type { Metadata } from "next";
import ClientLayout from "@/app/clientLayout";
import "../assets/css/global.css";
import { ReactNode } from "react";

const siteTitle = process.env.NEXT_PUBLIC_SITE_NAME ?? "Hunchun";

export const metadata: Metadata = {
  title: siteTitle,
  description: `${siteTitle} - информационный портал о Китае`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
