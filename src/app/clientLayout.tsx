'use client'

import {ReactNode} from "react";
import Header from "@/components/includes/Header";
import Footer from "@/components/includes/Footer";
import {SessionProvider} from "next-auth/react";

export default function ClientLayout(
    {children}: Readonly<{ children: ReactNode; }>) {


    return (
        <div className="flex flex-col">
            <SessionProvider>
                <Header/>
                <main className="flex-1">
                    {children}
                </main>
                <Footer/>
            </SessionProvider>

        </div>
    );
}
