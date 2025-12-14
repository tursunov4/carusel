// app/api/backend/logout/route.ts
import { clearAuthCookies } from "@/services/cookies";

export async function POST() {
  clearAuthCookies();
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
