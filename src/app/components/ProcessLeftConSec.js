"use client";

import { motion } from "framer-motion";

export default function ProcessLeftConSec({ image, heading, para, numb }) {
    return (
        <section className="content-left-sec mt-5 mb-5 pb-2">
            <div className="container overflow-hidden">
                <div className="row flex-column-reverse flex-md-row">

                    {/* LEFT CONTENT */}
                    <motion.div
                        className="col-xl-6"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="process-num">{numb}</span>
                        <h2 className="pro-heading">{heading}</h2>
                        <p className="con-video">{para}</p>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        className="col-xl-6"
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                    >
                        <div>
                            <img
                                className="about-img-two"
                                src={image}
                                alt="Hoval I Explainer Video by Creative Triplet"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}