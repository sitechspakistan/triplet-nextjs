"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ShadowLeftSec({
    VideoUrl,
    Heading,
    Description,
    btnlink,
    Btntxt,
    datahov,
}) {
    return (
        <section className="section-shadow-left pb-3 content-RL overflow-hidden">
            <div className="container">
                <div className="row">

                    {/* LEFT CONTENT — fade from left */}
                    <motion.div
                        className="col-xl-6"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <h2>{Heading}</h2>
                        <p className="con-video pb-3">{Description}</p>

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

                    {/* RIGHT IMAGE — fade from left (slight delay) */}
                    <motion.div
                        className="col-xl-6"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                            <img
                                src={VideoUrl}
                                style={{
                                    position: "absolute",
                                    top: "0",
                                    left: "0",
                                    width: "100%",
                                    height: "100%",
                                }}
                                title="Schoox I Explainer Video by Creative Triplet"
                                alt=""
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}