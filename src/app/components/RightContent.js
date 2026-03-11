"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import VimeoLazy from "./VimeoLazy";

export default function RightContent({ videoUrl, videohash, title, content, btntxt, btnlink, btndata }) {
    return (
        <section className="content-RL right-revs">
            <div className="container">
                <div className="row">

                    {/* Left Column - Fade in from left */}
                    <motion.div
                        className="col-xl-6 pb-3"
                        initial={{ opacity: 0, x: -50 }} // start slightly left
                        whileInView={{ opacity: 1, x: 0 }} // fade to normal position
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="pt-3 pb-3">{title}</h2>

                        {/* Render passed React content */}
                        {content}

                        {/* Conditional Button */}
                        {btntxt && (
                            // <a href="#conform"  data-hover="Let's Start Something Amazing">
                            //     <span className="btn-text">Let's Start Something Amazing</span>
                            // </a>
                            <Link href={btnlink} className="btn-anim btn-red me-3" data-hover={btndata}>
                                <span className="btn-text"> {btntxt}</span>
                            </Link>
                        )}
                    </motion.div>

                    {/* Right Column - Video */}
                    <div className="col-xl-6">
                        <VimeoLazy videoId={videoUrl} hash={videohash} />
                        {/* <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
                            <iframe
                                src={videoUrl}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
                                title={title}
                            ></iframe>
                        </div> */}
                    </div>

                </div>
            </div>
        </section>
    );
}
