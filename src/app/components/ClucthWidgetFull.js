"use client";

import Script from "next/script";

export default function ClutchWidgetFull() {
    return (
        <section>
            <div className="container">

                <Script
                    key="clutch-script"
                    src="https://widget.clutch.co/static/js/widget.js"
                    strategy="afterInteractive"
                />

                <div
                    className="clutch-widget"
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
