"use client";

import Script from "next/script";

export default function CalendlyWidget() {
    return (
        <section>
            <div className="container">
                <Script
                    src="https://assets.calendly.com/assets/external/widget.js"
                    strategy="afterInteractive"
                />

                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/creativetriplet/consultation-call?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=f99e1c"
                    style={{ minWidth: "320px", height: "700px" }}
                ></div>
            </div>
        </section>
    );
}
