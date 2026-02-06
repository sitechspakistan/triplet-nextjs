"use client";

import { motion } from "framer-motion";

export default function ProcessLeftConSec({ image, heading, para, numb }) {
    return (
        <motion.section
            className="content-left-sec overflow-hidden mt-5 mb-5 pb-2"
            initial={{ opacity: 0, x: 50 }}        // Start slightly to the right
            whileInView={{ opacity: 1, x: 0 }}     // Animate when scrolled into view
            viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% visible
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <span className="process-num">{numb}</span>
                        <h2 className="pro-heading">{heading}</h2>
                        <p className="con-video">{para}</p>
                    </div>
                    <div className="col-xl-6">
                        <div>
                            <img
                                className="about-img-two"
                                src={image}
                                alt="Hoval I Explainer Video by Creative Triplet"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
