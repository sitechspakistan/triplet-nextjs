"use client";

import { motion } from "framer-motion";

export default function ProcessRightConSec({ image, heading, para, numb, className = "" }) {
    return (
        <motion.section
            className={`content-left-sec mt-3 mb-5 pb-2 overflow-hidden ${className}`}
            initial={{ opacity: 0, x: -50 }}      // Start slightly to the left
            whileInView={{ opacity: 1, x: 0 }}    // Animate when in viewport
            viewport={{ once: true, amount: 0.3 }} // Trigger once when 30% is visible
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container-fluid">
                <div className="row gx-0 ">
                    <div className="col-xl-6">
                        <div>
                            <img
                                className="process-img"
                                src={image}
                                alt="Hoval I Explainer Video by Creative Triplet"
                            />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <span className="process-num">{numb}</span>
                        <h2 className="pro-heading">{heading}</h2>
                        <p className="con-video">{para}</p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
