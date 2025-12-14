// app/services/cookies.ts
import {cookies} from "next/headers";

export const ACCESS_COOKIE = "access_token";
export const REFRESH_COOKIE = "refresh_token";

export async function setAuthCookies(access: string, refresh: string) {
    const c = await cookies();
    const common = {
        httpOnly: true as const,
        secure: true as const, // в dev с http можно временно false, но лучше оставить true под https
        sameSite: "lax" as const,
        path: "/",
    };
    c.set(ACCESS_COOKIE, access, {...common, maxAge: 60 * 15});      // 15 минут
    c.set(REFRESH_COOKIE, refresh, {...common, maxAge: 60 * 60 * 24 * 30}); // 30 дней
}

export async function clearAuthCookies() {
    const c = await cookies();
    c.delete(ACCESS_COOKIE);
    c.delete(REFRESH_COOKIE);
}
