"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LeftContent({ videoUrl, heading, content, btntxt, btnlink, btndata }) {
    return (
        <section className="content-RL">
            <div className="container">
                <div className="row">
                    {/* Video Section - Left */}
                    <div className="col-xl-6 mt-3 mb-5">
                        <div
                            style={{
                                padding: "56.25% 0 0 0",
                                position: "relative",
                                objectFit: "contain",
                            }}
                        >
                            <iframe
                                src={videoUrl}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                }}
                                title="Explainer Video"
                            />
                        </div>
                    </div>

                    {/* Content Section - Right (Fade from right) */}
                    <motion.div
                        className="col-xl-6"
                        initial={{ opacity: 0, x: 50 }}  // start slightly right
                        whileInView={{ opacity: 1, x: 0 }} // fade into original position
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="pt-3 pb-3">{heading}</h2>

                        {/* Render passed React content */}
                        {content}

                        {/* Conditional Button */}
                        {btntxt && (
                            // <a href="#conform"  data-hover="Let's Start Something Amazing">
                            //     Let's Start Something Amazing</span>
                            // </a>
                            <Link href={btnlink} className="btn-anim btn-red me-3" data-hover={btndata}>
                                <span className="btn-text">{btntxt}</span>
                            </Link>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
