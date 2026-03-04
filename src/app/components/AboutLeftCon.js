"use client";

import { motion } from "framer-motion";

export default function AboutLeftCon() {
    return (
        <section className="content-left-sec content-RL ">
            <div className="container overflow-hidden">
                <div className="row">

                    {/* LEFT CONTENT */}
                    <motion.div
                        className="col-xl-6"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="pt-5 pb-3">We're on Team ‘You’</h2>

                        <p className="con-video pb-3 text-xl-start">
                            We’re all about high-fives and happy clients. We believe in doing things right, and that
                            starts with honesty and a good dose of fun. We’re a team of passionate creatives who love
                            collaborating with companies that share our love for creativity and making a positive impact
                            on the world with videos as mediums.<br /><br />

                            We bring fresh ideas and a playful spirit to every project while keeping things grounded and
                            focused on results. Whether you need an explainer video that wows, an app demo that
                            converts, or an educational video that actually keeps people watching, we’ve got the skills
                            and the enthusiasm to make it happen.<br /><br />

                            If you’re ready to make a splash with video, we’re here to help you make it happen.
                        </p>

                        <a
                            href="#conform"
                            className="btn-anim btn-red me-3"
                            data-hover="Let's Start Something Amazing"
                        >
                            <span className="btn-text">
                                Let's Start Something Amazing
                            </span>
                        </a>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        className="col-xl-6 mt-5"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                    >
                        <div>
                            <img
                                className="about-img-two"
                                src="/assets/images/about-us/about-us3-1024x621.png"
                                alt="Hoval I Explainer Video by Creative Triplet"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}