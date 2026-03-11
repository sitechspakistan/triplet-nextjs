"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ShadowRightSec({
    VideoUrl,
    Heading,
    Description,
    btnlink,
    Btntxt,
    datahov,
}) {
    return (
        <section className="section-shadow-right content-RL pt-md-5 pb-5">
            <div className="container">
                <div className="row">

                    {/* LEFT VIDEO — fade from right */}
                    <motion.div
                        className="col-xl-6 mt-2 mb-3"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                    >
                        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                            <iframe
                                src={VideoUrl}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                }}
                                title="Schoox I Explainer Video by Creative Triplet"
                            />
                        </div>
                    </motion.div>

                    {/* RIGHT CONTENT — fade from right (slight delay) */}
                    <motion.div
                        className="col-xl-6"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="pb-3">{Heading}</h2>
                        <div className="con-video pb-3">{Description}</div>

                        {btnlink && (
                            <Link
                                href={btnlink}
                                className="btn-anim btn-red me-3"
                                data-hover={datahov}
                            >
                                <span className="btn-text">{Btntxt}</span>
                            </Link>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}