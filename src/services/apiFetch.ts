import {getSession} from "@/services/auth";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function apiFetch(input: string, init?: RequestInit) {
    const session = await getSession(); // <-- заменили auth() на getSession()
    const headers = new Headers(init?.headers);

    if (session?.user?.accessToken) {
        headers.set("Authorization", `Bearer ${session.user.accessToken}`);
    }

    return fetch(`${API_BASE_URL}${input}`, {
        ...init,
        headers,
        cache: "no-store",
    });
}