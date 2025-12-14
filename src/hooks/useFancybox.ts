import {useEffect, useState} from "react";

import {Fancybox, type FancyboxOptions} from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function useFancybox<T extends HTMLElement = HTMLElement>(options: Partial<FancyboxOptions> = {}) {
    const [root, setRoot] = useState<T | null>(null);

    useEffect(() => {
        if (root) {
            Fancybox.bind(root, "[data-fancybox]", options);
            return () => Fancybox.unbind(root);
        }
    }, [root, options]);

    return setRoot;
}