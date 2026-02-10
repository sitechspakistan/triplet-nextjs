"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClutchWidget() {
    const pathname = usePathname();

    useEffect(() => {
        // Function jo Clutch ko dobara initialize karega
        const refreshClutch = () => {
            if (window.CLUTCHCO && typeof window.CLUTCHCO.Init === "function") {
                window.CLUTCHCO.Init();
            }
        };

        // Jab bhi pathname change ho (page change ho), 500ms baad refresh karo
        // Delay zaroori hai taaki Next.js ka DOM puri tarah load ho jaye
        const timer = setTimeout(refreshClutch, 500);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <section className="container">
            {/* Script ko sirf ek baar load hona chahiye poori app mein */}
            <Script
                id="clutch-script"
                src="https://widget.clutch.co/static/js/widget.js"
                strategy="afterInteractive"
                onLoad={() => {
                    if (window.CLUTCHCO) window.CLUTCHCO.Init();
                }}
            />

            <div
                // Key change hone se React is element ko fresh treat karega
                key={pathname}
                className="clutch-widget mt-5 ps-4"
                data-url="https://widget.clutch.co"
                data-widget-type="1"
                data-height="40"
                data-nofollow="true"
                data-expandifr="true"
                data-scale="100"
                data-clutchcompany-id="1672818"
            />
        </section>
    );
}