// app/api/backend/profile/route.ts
import { cookies } from "next/headers";
import { ACCESS_COOKIE } from "@/services/cookies";
const API = process.env.NEXT_PUBLIC_API_ORIGIN;

export async function PUT(req: Request) {
  const access = (await cookies()).get(ACCESS_COOKIE)?.value;
  if (!access) return new Response(JSON.stringify({ detail: "Unauthorized" }), { status: 401 });

  const contentType = req.headers.get("content-type") || "";
  let body: BodyInit;

  if (contentType.startsWith("multipart/form-data")) {
    const formData = await req.formData();
    body = formData as any;
  } else {
    const json = await req.json();
    const fd = new FormData();
    if (json.full_name) fd.set("full_name", json.full_name);
    body = fd as any;
  }

  const res = await fetch(`${API}/api/users/profile/`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${access}` },
    body,
  });

  if (res.status === 401) {
    const refresh = await fetch(`${process.env.NEXTAUTH_URL}/api/backend/refresh`, { method: "POST" });
    if (refresh.ok) {
      const newAccess = (await cookies()).get(ACCESS_COOKIE)?.value;
      const retry = await fetch(`${API}/api/users/profile/`, {
        method: "PUT",
        headers: { Authorization: `Bearer ${newAccess}` },
        body,
      });
      return new Response(await retry.text(), { status: retry.status });
    }
  }

  return new Response(await res.text(), { status: res.status });
}
