import {API_BASE_URL} from "@/services/apiFetch";

export async function POST(req: Request) {
  const { uid, token } = await req.json();
  const res = await fetch(`${API_BASE_URL}/api/users/activate/${uid}/${token}/`, { method: "POST" });
  const text = await res.text();
  return new Response(text, { status: res.status });
}
