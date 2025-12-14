"use client";

import AuthCard from "@/components/auth/AuthCard";
import Input from "@/components/elements/Input";
import Button from "@/components/elements/Button";
import {useState} from "react";

export default function RegisterPage() {
    const [full_name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [done, setDone] = useState(false);
    const [err, setErr] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErr(null);
        const res = await fetch("/api/backend/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({full_name, email, password, password2}),
        });
        if (res.ok) setDone(true);
        else setErr((await res.json()).detail || "Ошибка регистрации");
    }

    return (
        <AuthCard title="Регистрация">
            {done ? (
                <p className="text-center">
                    Проверьте почту — мы отправили письмо для подтверждения регистрации.
                </p>
            ) : (
                <form className="space-y-3" onSubmit={onSubmit}>
                    <Input inputProps={{
                        placeholder: "ФИО",
                        value: full_name,
                        onChange: e => setFullName(e.target.value),
                        required: true
                    }}/>
                    <Input inputProps={{
                        type: "email",
                        placeholder: "Email",
                        value: email,
                        onChange: e => setEmail(e.target.value),
                        required: true
                    }}/>
                    <Input inputProps={{
                        type: "password",
                        placeholder: "Пароль",
                        value: password,
                        onChange: e => setPassword(e.target.value),
                        required: true
                    }}/>
                    <Input inputProps={{
                        type: "password",
                        placeholder: "Повторите пароль",
                        value: password2,
                        onChange: e => setPassword2(e.target.value),
                        required: true
                    }}/>
                    {err && <p className="text-sm text-red-600">{err}</p>}
                    <Button type="submit" buttonColor={"orange"} buttonStyle={"primary"}
                            fullWidth>Зарегистрироваться</Button>
                </form>
            )}
        </AuthCard>
    );
}
