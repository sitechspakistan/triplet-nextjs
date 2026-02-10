"use client";
import { motion } from "framer-motion";
import Script from "next/script";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClucthReviews() {
    const pathname = usePathname();

    useEffect(() => {
        // Har baar page change hone par Clutch ko refresh karein
        const timer = setTimeout(() => {
            if (window.CLUTCHCO && typeof window.CLUTCHCO.Init === "function") {
                window.CLUTCHCO.Init();
            }
        }, 600); // Framer motion ki animation khatam hone ka intezar karein

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <section className="proud-section text-white">
            <div className="container">
                <motion.h2
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    We're Proud of the Smiles We've Created
                </motion.h2>

                {/* Widget Container: Framer Motion sirf Wrapper par lagayein */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    {/* Clutch Widget - Isko simple rakhein, motion.div ke andar */}
                    <div
                        key={pathname} // React ko refresh force karne ke liye
                        className="clutch-widget"
                        data-nofollow="true"
                        data-primary-color="#FAB855"
                        data-url="https://widget.clutch.co"
                        data-widget-type="12"
                        data-background-color="#000"
                        data-height="360"
                        data-clutchcompany-id="1672818"
                    />
                </motion.div>

                {/* Next.js Script component use karein standard script ki jagah */}
                <Script
                    id="clutch-script-main"
                    src="https://widget.clutch.co/static/js/widget.js"
                    strategy="afterInteractive"
                    onLoad={() => {
                        if (window.CLUTCHCO) window.CLUTCHCO.Init();
                    }}
                />
            </div>
        </section>
    );
}