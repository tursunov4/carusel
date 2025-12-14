// app/api/backend/reviews/route.ts
import { cookies } from "next/headers";
import { ACCESS_COOKIE } from "@/services/cookies";
const API = process.env.NEXT_PUBLIC_API_ORIGIN;

export async function GET() {
  const access = (await cookies()).get(ACCESS_COOKIE)?.value;
  if (!access) return new Response(JSON.stringify({ detail: "Unauthorized" }), { status: 401 });

  const res = await fetch(`${API}/api/reviews/`, {
    headers: { Authorization: `Bearer ${access}` },
    cache: "no-store",
  });

  if (res.status === 401) {
    // пробуем рефреш
    const refresh = await fetch(`${process.env.NEXTAUTH_URL}/api/backend/refresh`, { method: "POST" });
    if (refresh.ok) {
      const newAccess = (await cookies()).get(ACCESS_COOKIE)?.value;
      const retry = await fetch(`${API}/api/reviews/`, {
        headers: { Authorization: `Bearer ${newAccess}` },
        cache: "no-store",
      });
      return new Response(await retry.text(), { status: retry.status });
    }
  }

  return new Response(await res.text(), { status: res.status });
}

export async function POST(req: Request) {
  const access = (await cookies()).get(ACCESS_COOKIE)?.value;
  if (!access) return new Response(JSON.stringify({ detail: "Unauthorized" }), { status: 401 });

  const body = await req.json();

  const res = await fetch(`${API}/api/reviews/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
    },
    body: JSON.stringify(body),
  });

  if (res.status === 401) {
    // пробуем рефреш
    const refresh = await fetch(`${process.env.NEXTAUTH_URL}/api/backend/refresh`, { method: "POST" });
    if (refresh.ok) {
      const newAccess = (await cookies()).get(ACCESS_COOKIE)?.value;
      const retry = await fetch(`${API}/api/reviews/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newAccess}`,
        },
        body: JSON.stringify(body),
      });
      return new Response(await retry.text(), { status: retry.status });
    }
  }

  return new Response(await res.text(), { status: res.status });
}
