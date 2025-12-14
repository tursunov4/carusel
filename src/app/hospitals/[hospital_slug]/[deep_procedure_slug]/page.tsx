'use client'

import Container from '@/components/Container'
import {useParams, useSearchParams} from 'next/navigation'
import {useEffect, useState} from 'react'
import 'keen-slider/keen-slider.min.css'
import FloatingConsultButton from '@/components/FloatingConsultButton'
import Link from "next/link";
import HeadingComponent from "@/components/ui/HeadingComponent";
import {API_BASE_URL} from "@/services/apiFetch";

type DeepProcedure = {
    id: number
    name: string
    slug: string
    description: string
    image: string
}

export default function DeepProcedurePage() {
    const {hospital_slug, deep_procedure_slug} = useParams() as { hospital_slug: string, deep_procedure_slug: string }
    const searchParams = useSearchParams()
    const clinicName = searchParams.get('clinic_name')
    const [proc, setProc] = useState<DeepProcedure | null>(null)
    const [loading, setLoading] = useState<boolean>(true)


    if (!API_BASE_URL) {
        throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined in environment variables');
    }


    useEffect(() => {
        async function fetchProc() {
            try {
                const res = await fetch(`${API_BASE_URL}/api/deep-procedure/${deep_procedure_slug}/`)
                const data = await res.json()
                setProc(data)
            } catch (err) {
                console.error('Ошибка загрузки процедуры:', err)
            } finally {
                setLoading(false)
            }
        }

        fetchProc()
    }, [deep_procedure_slug])

    if (loading) {
        return (
            <Container>
                <div className="py-20 text-center text-xl text-gray-700 dark:text-gray-200">Загрузка...</div>
            </Container>
        )
    }

    if (!proc) {
        return (
            <Container>
                <div className="py-20 text-center text-red-600">Клиника не найдена</div>
            </Container>
        )
    }

    return (
        <Container>
            <div className="w-full py-6 space-y-8">

                {/* Хлебные крошки */}
                <nav className="text-sm text-gray-500 dark:text-gray-400 mb-4" aria-label="Breadcrumb">
                    <div className="list-none p-0 inline-flex space-x-1 md:space-x-2">
                        <div>
                            <Link href="/" className="hover:underline text-gray-600 dark:text-gray-300">Главная</Link>
                            <span className="mx-1">/</span>
                        </div>
                        <div>
                            <Link href="/media/hospitals"
                                  className="hover:underline text-gray-600 dark:text-gray-300">Клиники</Link>
                            <span className="mx-1">/</span>
                        </div>
                        <div>
                            <Link href={`/media/hospitals/${hospital_slug}`}
                                  className="hover:underline text-gray-600 dark:text-gray-300">{clinicName}</Link>
                            <span className="mx-1">/</span>
                        </div>
                        <div
                            className="text-gray-800 dark:text-gray-100 font-medium truncate max-w-[200px] md:max-w-none">
                            {proc.name}
                        </div>
                    </div>
                </nav>


                {/* Баннер */}
                {proc.image && (
                    <div className="rounded-2xl overflow-hidden shadow-md">
                        <img
                            src={proc.image}
                            alt={proc.name}
                            className="w-full h-64 md:h-96 object-cover"
                        />
                    </div>
                )}

                {/* Название и рейтинг */}
                <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <HeadingComponent size='h1'>{proc.name}</HeadingComponent>
                </section>

                {/* Описание */}
                <section className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow space-y-3">
                    <HeadingComponent size='h2' top='0'>Описание</HeadingComponent>
                    <div
                        className="prose dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{__html: proc.description}}
                    />
                </section>

            </div>

            {/* Фиксированная кнопка записи */}
            {clinicName && <FloatingConsultButton name={clinicName} url=""/>}

        </Container>
    )
}
