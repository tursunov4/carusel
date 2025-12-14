import 'keen-slider/keen-slider.min.css'

import HospitalContent from "@/app/hospitals/_include/HospitalContent";
import {Clinic} from "@/services/Clinic";
import {API_BASE_URL} from "@/services/apiFetch";
import {notFound, redirect} from "next/navigation";
import {fakeHospitalsClinics} from "@/dummy-data/fakeHospitalsClinics";

export interface Procedure {
    id: number
    name: string
}


export default async function HospitalSinglePage({params}: { params: Promise<{ hospital_slug: string }> }) {

    const {hospital_slug} = await params;


    try {

        const res = await fetch(`${API_BASE_URL}/api/clinics/${hospital_slug}/`);
        if (!res.ok) {
            if (res.status === 404) {
                redirect('/hospitals')
            }
        }

    } catch (e: unknown) {
        console.error(e)
    }


    // const clinic: Clinic = await res.json();

    // todo удалить фейк данные для прода
    const clinic: Clinic = fakeHospitalsClinics.find((clinic: Clinic) => clinic.slug === hospital_slug) as Clinic;
    if (!clinic) notFound();


    let callbackNum: string;
    try {

        const contactsResponse = await fetch(`${API_BASE_URL}/api/contacts/`);
        if (!contactsResponse.ok) {
            console.error(new Error('Failed to fetch contacts data'));
        }
        const contacts = await contactsResponse.json();

        const contact = contacts.find(
            (c: { type: string }) => c.type === 'whatsapp_callback'
        );

        if (contact && contact.value) {
            const sanitized = contact.value.replace(/[^+\d]/g, '');
            callbackNum = (sanitized || '79778108080');
        } else {
            callbackNum = ('79778108080');
        }

    } catch (e: unknown) {
        console.error(e);
        callbackNum = ('79778108080');
    }


    return (
        <HospitalContent clinic={clinic} callbackNum={callbackNum}/>
    )
}
