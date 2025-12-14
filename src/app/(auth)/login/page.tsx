"use client";

import AuthCard from "@/components/auth/AuthCard";
import Input from "@/components/elements/Input";
import Button from "@/components/elements/Button";
import {signIn} from "next-auth/react";
import Link from "next/link";
import {FormEvent, useState} from "react";
import {useRouter} from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState<string | null>(null);
    const router = useRouter();

    async function onSubmit(e: FormEvent) {
        e.preventDefault();
        setErr(null);
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
        if (res?.ok) {
            router.push("/profile");
        } else {
            setErr("Неверный email или пароль");
        }
    }

    return (
        <AuthCard title="Вход">
            <form className="space-y-3" onSubmit={onSubmit}>
                <Input inputProps={{
                    required: true,
                    type: "email",
                    placeholder: "Email",
                    value: email,
                    onChange: e => setEmail(e.target.value)
                }}/>

                <Input inputProps={{
                    type: "password",
                    placeholder: "Пароль",
                    value: password,
                    onChange: e => setPassword(e.target.value),
                    required: true
                }}/>
                {err && <p className="text-sm text-red-600">{err}</p>}
                <Button type="submit" buttonColor={"orange"} buttonStyle={"primary"} fullWidth>Войти</Button>
                <div className="text-sm flex justify-between">
                    <Link className="text-orange-600 hover:underline" href="/register">Регистрация</Link>
                    <Link className="text-orange-600 hover:underline" href="/reset">Забыли пароль?</Link>
                </div>
            </form>
        </AuthCard>
    );
}
