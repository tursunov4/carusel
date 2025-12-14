// app/api/backend/me/route.ts
import { cookies } from "next/headers";
import { ACCESS_COOKIE } from "@/services/cookies";
import {API_BASE_URL} from "@/services/apiFetch";

export async function GET() {
  const access = (await cookies()).get(ACCESS_COOKIE)?.value;

  if (!access) return new Response(JSON.stringify({ detail: "Unauthorized" }), { status: 401 });

  const res = await fetch(`${API_BASE_URL}/api/users/me/`, {
    headers: { Authorization: `Bearer ${access}` },
    cache: "no-store",
  });

  if (res.status === 401) {
    // попробуем рефреш
      const API_AUTH_URL = process.env.NEXTAUTH_URL;
      const refresh = await fetch(`${API_AUTH_URL}/api/backend/refresh`, { method: "POST" });
    if (refresh.ok) {
      const newAccess = (await cookies()).get(ACCESS_COOKIE)?.value;
      const retry = await fetch(`${API_BASE_URL}/api/users/me/`, {
        headers: { Authorization: `Bearer ${newAccess}` },
        cache: "no-store",
      });
      return new Response(await retry.text(), { status: retry.status });
    }
  }

  return new Response(await res.text(), { status: res.status });
}
