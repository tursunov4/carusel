"use client";

import AuthCard from "@/components/auth/AuthCard";
import Input from "@/components/elements/Input";
import Button from "@/components/elements/Button";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetConfirmPage() {
  const { uid, token } = useParams<{ uid: string; token: string }>();
  const router = useRouter();
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    const res = await fetch("/api/backend/password/reset/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uid, token, new_password1: p1, new_password2: p2 }),
    });
    if (res.ok) setOk(true);
    else setErr((await res.json()).detail || "Не удалось изменить пароль");
  }

  return (
    <AuthCard title="Сброс пароля">
      {ok ? (
        <div className="space-y-3">
          <p className="text-center">Пароль изменён. Войдите с новым паролем.</p>
          <Button onClick={() => router.push("/login")}>Перейти ко входу</Button>
        </div>
      ) : (
        <form className="space-y-3" onSubmit={onSubmit}>
          <Input type="password" placeholder="Новый пароль" value={p1} onChange={e => setP1(e.target.value)} required />
          <Input type="password" placeholder="Повторите пароль" value={p2} onChange={e => setP2(e.target.value)} required />
          {err && <p className="text-sm text-red-600">{err}</p>}
          <Button type="submit">Изменить пароль</Button>
        </form>
      )}
    </AuthCard>
  );
}
