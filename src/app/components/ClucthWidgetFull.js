"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function ClutchWidgetFull() {

    // 1. Yeh function tab chalega jab aap navigate karke wapis aayenge
    useEffect(() => {
        const scriptElement = document.querySelector('script[src*="clutch.co"]');

        if (window.CLUTCHCO && window.CLUTCHCO.Init) {
            // Agar script pehle se hai, toh sirf initialize karo
            window.CLUTCHCO.Init();
        } else if (scriptElement) {
            // Agar script tag hai par initialize nahi hui, toh thoda wait karke chalao
            setTimeout(() => {
                if (window.CLUTCHCO) window.CLUTCHCO.Init();
            }, 500);
        }
    }, []); // Empty array ka matlab hai "on component mount"

    // 2. Yeh function pehli baar script load hone par chalega
    const initClutch = () => {
        if (window.CLUTCHCO && window.CLUTCHCO.Init) {
            window.CLUTCHCO.Init();
        }
    };

    return (
        <section>
            <div className="container">
                <Script
                    key="clutch-script"
                    src="https://widget.clutch.co/static/js/widget.js"
                    strategy="afterInteractive"
                    onLoad={initClutch}
                />

                <div
                    className="clutch-widget ms-5"
                    data-url="https://widget.clutch.co"
                    data-widget-type="5"
                    data-expandifr="true"
                    data-height="auto"
                    data-clutchcompany-id="1672818"
                />
            </div>
        </section>
    );
}