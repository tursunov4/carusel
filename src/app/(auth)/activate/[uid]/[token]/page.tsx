"use client";

import AuthCard from "@/components/auth/AuthCard";
import Button from "@/components/elements/Button";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ActivatePage() {
  const params = useParams<{ uid: string; token: string }>();
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "ok" | "err">("loading");

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/backend/activate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uid: params.uid, token: params.token }),
      });
      setStatus(res.ok ? "ok" : "err");
    })();
  }, [params.uid, params.token]);

  return (
    <AuthCard title="Подтверждение e-mail">
      {status === "loading" && <p className="text-center">Проверяем ссылку…</p>}
      {status === "ok" && (
        <div className="space-y-3">
          <p className="text-center">Аккаунт активирован. Теперь вы можете войти.</p>
          <Button onClick={() => router.push("/login")}>Перейти ко входу</Button>
        </div>
      )}
      {status === "err" && <p className="text-center text-red-600">Ссылка недействительна или устарела.</p>}
    </AuthCard>
  );
}
