"use client";

import AuthCard from "@/components/auth/AuthCard";
import Input from "@/components/elements/Input";
import Button from "@/components/elements/Button";
import { useState } from "react";

export default function ResetRequestPage() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/backend/password/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (res.ok) setDone(true);
  }

  return (
    <AuthCard title="Восстановление пароля">
      {done ? (
        <p className="text-center">Если такой пользователь существует, мы отправили письмо со ссылкой для сброса.</p>
      ) : (
        <form className="space-y-3" onSubmit={onSubmit}>
          <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <Button type="submit">Отправить ссылку</Button>
        </form>
      )}
    </AuthCard>
  );
}
