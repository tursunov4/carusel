"use client";

import Input from "@/components/elements/Input";
import TextArea from "@/components/elements/TextArea";
import Button from "@/components/elements/Button";
import {signOut, useSession} from "next-auth/react";
import {FormEvent, useEffect, useState} from "react";
import {API_BASE_URL} from "@/services/apiFetch";
import SinglePageParentSection from "@/components/ui/single-page-sections/SinglePageParentSection";
import Container from "@/components/Container";
import SinglePageNestedSection from "@/components/ui/single-page-sections/SinglePageNestedSection";
import {redirect} from "next/navigation";

type Me = { id: number; email: string; full_name: string; avatar: string | null };

type ReviewType =
    | "Лечебный тур"
    | "Стоматологический тур"
    | "Экскурсионный тур"
    | "Больница"
    | "Гостиница"
    | "Экскурсия";

type Review = {
    id: number;
    title: string;
    text: string;
    rating: number;
    review_type: ReviewType;
    object_name: string;
    created_at: string;
};

type Bill = {
    id: number;
    title: string;
    text: string;
    created_at: string;
    rating: number;

    review_type: any;
    object_name: any;
};

type TabName = "profile" | "bills" | "reviews";

export default function ProfilePage() {
    const {data: session, status} = useSession();
    const [me, setMe] = useState<Me | null>(null);
    const [fullName, setFullName] = useState("");
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [saved, setSaved] = useState(false);

    const [reviews, setReviews] = useState<Review[]>([]);
    const [bills, setBills] = useState<Bill[]>([]);


    const [newTitle, setNewTitle] = useState("");
    const [newText, setNewText] = useState("");
    const [newRating, setNewRating] = useState(5);
    const [newType, setNewType] = useState<ReviewType | "">("");
    const [newObjectId, setNewObjectId] = useState<number | null>(null);
    const [objectOptions, setObjectOptions] = useState<{ id: number; name: string }[]>([]);
    const [loadingObjects, setLoadingObjects] = useState(false);

    const [activeTab, setActiveTab] = useState<TabName>("profile")

    useEffect(() => {
        // Получаем данные пользователя
        (async () => {
            const res = await fetch("/api/backend/me", {cache: "no-store"});
            if (res.ok) {
                const data = await res.json();
                setMe(data);
                setFullName(data.full_name);
            }
        })();

        // Получаем отзывы пользователя
        (async () => {
            const res = await fetch("/api/backend/reviews/my");
            if (res.ok) {
                const data = await res.json();
                setReviews(data);
            }
        })();

        // todo добавить получение чеков пользователя
        // fetch чеки пользователя из бд ...
    }, []);

    // Загрузка объектов при смене типа
    useEffect(() => {
        if (!newType) {
            setObjectOptions([]);
            setNewObjectId(null);
            return;
        }

        setLoadingObjects(true);

        const endpointMap: Record<ReviewType, string> = {
            "Лечебный тур": "tours",
            "Стоматологический тур": "tours",
            "Экскурсионный тур": "tours",
            "Больница": "clinics",
            "Гостиница": "hotels",
            "Экскурсия": "excursions",
        };

        fetch(`${API_BASE_URL}/api/${endpointMap[newType]}/`)
            .then(res => res.json())
            .then(data => {
                const options = data.map((item: any) => ({id: item.id, name: item.name || item.title}));
                setObjectOptions(options);
                setNewObjectId(null);
            })
            .catch(err => console.error(err))
            .finally(() => setLoadingObjects(false));
    }, [newType]);

    async function onSaveProfile(e: FormEvent) {
        e.preventDefault();
        setSaved(false);
        const fd = new FormData();
        fd.set("full_name", fullName);
        if (avatarFile) fd.set("avatar", avatarFile);

        const res = await fetch("/api/backend/profile", {method: "PUT", body: fd});
        if (res.ok) {
            const data = await res.json();
            setMe(data);
            setSaved(true);
            setAvatarFile(null);
        }
    }

    async function onAddReview(e: FormEvent) {
        e.preventDefault();
        if (!newType || !newObjectId) return;

        try {
            const payload = {
                title: newTitle,
                text: newText,
                rating: newRating,
                review_type: newType,
                object_id: newObjectId,
            };

            const res = await fetch("/api/backend/reviews/", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                console.error("Ошибка при добавлении отзыва:", errData);
                return;
            }

            const newReview = await res.json();
            setReviews([newReview, ...reviews]);

            // Сброс формы
            setNewTitle("");
            setNewText("");
            setNewRating(5);
            setNewType("");
            setNewObjectId(null);
            setObjectOptions([]);
        } catch (error) {
            console.error("Ошибка при добавлении отзыва:", error);
        }
    }

    if (status === "loading") return null;

    if (!session) {
        redirect("/login")
    }

    function onSubmitCheckPhoto() {
        console.log('чек загружен')
    }

    return (

        me && (
            <Container className="mt-5 mb-5 flex flex-col gap-12">

                <div className="flex flex-row flex-wrap gap-12">
                    <Button buttonStyle={activeTab === "profile" ? "primary" : "outline"}
                            onClick={() => setActiveTab("profile")}>Профиль</Button>
                    <Button buttonStyle={activeTab === "bills" ? "primary" : "outline"}
                            onClick={() => setActiveTab("bills")}>Чеки</Button>
                    <Button buttonStyle={activeTab === "reviews" ? "primary" : "outline"}
                            onClick={() => setActiveTab("reviews")}>Отзывы</Button>
                </div>

                {activeTab === "profile" &&
                    <SinglePageParentSection title="Профиль">
                        <form className="space-y-4" onSubmit={onSaveProfile}>
                            <div className="flex gap-12 items-center">
                                {me.avatar ? (
                                    <img src={me.avatar} alt="avatar"
                                         className="w-20 h-20 rounded-2xl object-cover shadow"/>
                                ) : (
                                    <div
                                        className="w-20 h-20 rounded-2xl bg-gray-100 grid place-items-center shadow">
                                        <span className="text-gray-400 text-sm">Нет фото</span>
                                    </div>
                                )}
                                <div className="flex-1">
                                    <div className="text-sm text-gray-500">{me.email}</div>
                                    <div className="text-lg font-semibold">{me.full_name}</div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">ФИО</label>
                                <Input inputProps={{value: fullName, onChange: e => setFullName(e.target.value)}}/>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Аватар</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={e => setAvatarFile(e.target.files?.[0] || null)}
                                    className="w-full border rounded-xl px-3 py-2"
                                />
                            </div>

                            {saved && <p className="text-green-600 text-sm">Сохранено</p>}

                            <div className="flex flex-wrap gap-3">
                                <Button type="submit">Сохранить</Button>
                                <Button type="button"
                                        buttonStyle="outline"
                                        onClick={async () => {
                                            await fetch("/api/backend/logout", {method: "POST"});
                                            await signOut({callbackUrl: "/login"});
                                        }}
                                >
                                    Выйти
                                </Button>
                            </div>
                        </form>
                    </SinglePageParentSection>}

                {activeTab === "bills" &&
                    <SinglePageParentSection title="Чеки">
                        <SinglePageNestedSection title="Добаить чек">
                            <form onSubmit={onSubmitCheckPhoto}>

                                <div className="gr">
                                    <Input label={{text: "Файл чека"}} inputProps={{type: "file"}}/>
                                </div>

                                <div className="gr">
                                    <Button type="submit">Загрузить чек</Button>
                                </div>
                            </form>
                        </SinglePageNestedSection>

                        <SinglePageNestedSection title="Мои чеки">
                            {bills.length === 0 &&
                                <p className="text-gray-500">Вы пока не добавили ни одного чека.</p>}
                            <div className="space-y-3">
                                {bills.map(r => (
                                    <div key={r.id} className="border rounded-xl p-4 shadow-sm">


                                        <div className="text-gray-700">{r.text}</div>
                                        <div
                                            className="text-xs text-gray-400 mt-1">{new Date(r.created_at).toLocaleDateString()}</div>
                                    </div>
                                ))}
                            </div>
                        </SinglePageNestedSection>

                    </SinglePageParentSection>}

                {activeTab === "reviews" &&
                    <SinglePageParentSection title="Отзывы">
                        <SinglePageNestedSection title="Добавить отзыв">
                            <form onSubmit={onAddReview}>

                                <div className="gr">
                                    <label className="text-sm font-medium">Тип отзыва</label>
                                    <select
                                        value={newType}
                                        onChange={e => setNewType(e.target.value as ReviewType)}
                                        className="w-full border rounded-xl px-3 py-2"
                                    >
                                        <option value="">Выберите тип</option>
                                        <option value="Лечебный тур">Лечебный тур</option>
                                        <option value="Стоматологический тур">Стоматологический тур</option>
                                        <option value="Экскурсионный тур">Экскурсионный тур</option>
                                        <option value="Больница">Больница</option>
                                        <option value="Гостиница">Гостиница</option>
                                        <option value="Экскурсия">Экскурсия</option>
                                    </select>
                                </div>

                                <div className="gr">
                                    <label className="text-sm font-medium">Объект</label>
                                    <select
                                        value={newObjectId ?? ""}
                                        onChange={e => setNewObjectId(Number(e.target.value))}
                                        disabled={loadingObjects || objectOptions.length === 0}
                                        className="w-full border rounded-xl px-3 py-2"
                                    >
                                        <option value="">Выберите объект</option>
                                        {objectOptions.map(opt => (
                                            <option key={opt.id} value={opt.id}>{opt.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="gr">
                                    <label className="text-sm font-medium">Заголовок</label>
                                    <Input
                                        inputProps={{value: newTitle, onChange: e => setNewTitle(e.target.value)}}/>
                                </div>

                                <div className="gr">
                                    <label className="text-sm font-medium">Текст</label>
                                    <TextArea
                                        textareaProps={{
                                            value: newText,
                                            onChange: e => setNewText(e.target.value)
                                        }}/>
                                </div>

                                <div className="gr">
                                    <label className="text-sm font-medium">Оценка</label>
                                    <select
                                        value={newRating}
                                        onChange={e => setNewRating(Number(e.target.value))}
                                        className="w-full border rounded-xl px-3 py-2"
                                    >
                                        {[1, 2, 3, 4, 5].map(n => (
                                            <option key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </div>

                                <Button type="submit">Добавить отзыв</Button>
                            </form>
                        </SinglePageNestedSection>

                        <SinglePageNestedSection title="Мои отзывы">
                            {reviews.length === 0 &&
                                <p className="text-gray-500">Вы пока не оставили ни одного отзыва.</p>}
                            <div className="space-y-3">
                                {reviews.map(r => (
                                    <div key={r.id} className="border rounded-xl p-4 shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="font-semibold">{r.title || "Без заголовка"}</div>
                                            <div
                                                className="text-yellow-500">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                                        </div>
                                        <div
                                            className="text-sm text-gray-500 mb-1">{r.review_type} - {r.object_name}</div>
                                        <div className="text-gray-700">{r.text}</div>
                                        <div
                                            className="text-xs text-gray-400 mt-1">{new Date(r.created_at).toLocaleDateString()}</div>
                                    </div>
                                ))}
                            </div>
                        </SinglePageNestedSection>
                    </SinglePageParentSection>}

            </Container>
        )
    )
}
