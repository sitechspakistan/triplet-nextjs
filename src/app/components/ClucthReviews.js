"use client";
import { motion } from "framer-motion";

export default function ClucthReviews() {
    return (
        // <!-- proud to share -->
        <section className="proud-section pt-80">
            <div className="container">
                <motion.h2
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }} // triggers when 50% of element is in view
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    We're Proud of the Smiles We've Created
                </motion.h2>

                <motion.div
                    className="clutch-widget"
                    data-nofollow="true"
                    data-primary-color="#FAB855"
                    data-url="https://widget.clutch.co"
                    data-widget-type="12"
                    data-background-color="#000"
                    data-height="360"
                    data-clutchcompany-id="1672818"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                ></motion.div>

                {/* Clutch script */}
                <script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>
            </div>
        </section>
        // <!-- proud to share -->
    );
}
