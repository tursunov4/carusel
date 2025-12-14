// app/api/backend/password/reset/route.ts
const API = process.env.NEXT_PUBLIC_API_ORIGIN;

export async function POST(req: Request) {
  const body = await req.json();
  const res = await fetch(`${API}/api/users/password/reset/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  return new Response(text, { status: res.status });
}
