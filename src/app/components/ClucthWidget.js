"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

export default function ClutchWidget() {
    const pathname = usePathname();

    useEffect(() => {
        // Remove previously injected iframe (important)
        const oldIframe = document.querySelector(".clutch-widget iframe");
        if (oldIframe) oldIframe.remove();

        // Force Clutch to re-scan DOM
        const initWidget = () => {
            if (window?.CLUTCH_WIDGET) {
                window.CLUTCH_WIDGET.init();
            }
        };

        // Delay is REQUIRED (Clutch bug)
        const timeout = setTimeout(initWidget, 300);

        return () => clearTimeout(timeout);
    }, [pathname]); // 🔥 runs on every navigation

    return (
        <>
            <Script
                src="https://widget.clutch.co/static/js/widget.js"
                strategy="afterInteractive"
            />

            <div
                className="clutch-widget mt-5 ps-4"
                data-url="https://widget.clutch.co"
                data-widget-type="1"
                data-height="40"
                data-nofollow="true"
                data-expandifr="true"
                data-scale="100"
                data-clutchcompany-id="1672818"
            />
        </>
    );
}
