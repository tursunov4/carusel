'use client';

import {HiChatAlt2} from 'react-icons/hi';
import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {API_BASE_URL} from "@/services/apiFetch";

export default function FloatingConsultButton({name, url}: { name: string, url: string }) {
    const [expanded, setExpanded] = useState(false);
    const [shake, setShake] = useState(false);
    const [callbackNumber, setCallbackNumber] = useState('79778108080'); // ← fallback по умолчанию

    // Массив для хранения ID всех таймеров
    const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

    useEffect(() => {
        const runAnimation = (delay: number) => {
            const timeoutId = setTimeout(() => {
                setExpanded(true);
                setShake(true);

                const collapseTimeoutId = setTimeout(() => {
                    setExpanded(false);
                    setShake(false);
                }, 5000);

                timeoutsRef.current.push(collapseTimeoutId);
            }, delay);

            timeoutsRef.current.push(timeoutId);
        };

        // Три запуска анимации
        runAnimation(5000);   // через 5 сек
        runAnimation(20000);  // через 20 сек
        runAnimation(40000);  // через 40 сек

        // Очистка всех таймеров при размонтировании
        return () => {
            timeoutsRef.current.forEach(clearTimeout);
        };
    }, []);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/contacts/`)
            .then(res => res.json())
            .then((data) => {
                const contact = data.find(
                    (c: { type: string }) => c.type === 'whatsapp_callback'
                );
                if (contact && contact.value) {
                    const sanitized = contact.value.replace(/[^+\d]/g, '');
                    setCallbackNumber(sanitized || '79778108080');
                }
            })
            .catch(err => {
                console.error('Ошибка загрузки whatsapp_callback:', err);
                setCallbackNumber('79778108080');
            });
    }, []);

    const whatsappLink = `https://wa.me/${callbackNumber}?text=Здравствуйте, я хочу поехать в ${name} (${url}) и получить онлайн консультацию.`;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Link
                onMouseEnter={() => setExpanded(true)}
                onMouseLeave={() => setExpanded(false)}
                className={`
          group
          flex items-center
          bg-orange-500 hover:bg-orange-600 
          text-white font-semibold 
          rounded-full 
          shadow-xl 
          transition-all duration-300 ease-in-out 
          h-14 overflow-hidden
          px-4
          ${expanded ? "w-74" : "w-14"}
          ${shake ? "animate-shake" : ""}
        `}
                target="_blank"
                rel="noopener noreferrer"
                href={whatsappLink}
            >
                <HiChatAlt2 className="text-xl flex-shrink-0"/>
                <span
                    className={`
            ml-2 
            whitespace-nowrap 
            overflow-hidden 
            transition-opacity duration-200 delay-150 
            ${expanded ? "opacity-100" : "opacity-0"}
          `}
                >
          Записаться на консультацию
        </span>
            </Link>
        </div>
    );
}
