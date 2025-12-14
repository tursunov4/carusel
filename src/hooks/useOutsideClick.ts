'use client'

import {useCallback, useEffect, useRef} from "react";

export default function useOutsideClick<T extends HTMLElement>(
    isOpen: boolean,
    onClose: () => void
) {
    const ref = useRef<T>(null);

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (isOpen && ref.current && !ref.current.contains(event.target as Node)) {
            onClose();
        }
    }, [isOpen, onClose]);


    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [handleClickOutside]);

    return ref;
}
