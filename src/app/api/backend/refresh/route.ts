// app/api/backend/refresh/route.ts
import { cookies } from "next/headers";
import { ACCESS_COOKIE, REFRESH_COOKIE, setAuthCookies } from "@/services/cookies";

const API = process.env.NEXT_PUBLIC_API_ORIGIN;

export async function POST() {
  const c = cookies();
  const refresh = (await c).get(REFRESH_COOKIE)?.value;
  if (!refresh) {
    return new Response(JSON.stringify({ detail: "No refresh token" }), { status: 401 });
  }
  const res = await fetch(`${API}/api/users/token/refresh/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh }),
  });
  if (!res.ok) return new Response(await res.text(), { status: res.status });

  const data = await res.json();
  const newAccess = data.access;
  // обновим только access
  const existingRefresh = (await c).get(REFRESH_COOKIE)?.value || refresh;
  setAuthCookies(newAccess, existingRefresh);
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
