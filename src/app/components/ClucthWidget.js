"use client"
import Script from "next/script";
export default function ClucthWidget() {
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
            ></div>
        </>
    )
}