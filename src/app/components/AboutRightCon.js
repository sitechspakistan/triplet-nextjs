"use client"; // Must be the very first line

import { motion } from "framer-motion";

export default function AboutRightCon() {
    return (
        <motion.section
            className="content-left-sec overflow-hidden" // prevent overflow
            initial={{ opacity: 0, x: -50 }}            // start slightly to the left
            whileInView={{ opacity: 1, x: 0 }}         // animate when in viewport
            viewport={{ once: true, amount: 0.3 }}     // trigger once when 30% visible
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="overflow-hidden">
                <div className="container overflow-hidden">
                    <div className="row">
                        <div className="col-xl-6 pb-5 mt-5">
                            <div>
                                <img
                                    className="about-img"
                                    src="/assets/images/about-us/about-1-1024x673.png"
                                    alt="Hoval I Explainer Video by Creative Triplet"
                                />
                            </div>
                        </div>
                        <div className="col-xl-6 pb-4">
                            <p className="con-video pb-3 text-xl-start text-center">
                                In the beginning, there was just an idea. A simple one, really: videos can do what words
                                alone can’t. They can ignite excitement, simplify the complicated, and bring people together
                                over shared knowledge.<br /><br />

                                That idea? It stuck with us, and it’s been our North Star since day one.<br /><br />

                                It was 2016, and we weren’t some big-shot agency with a fancy office. Just a small, scrappy
                                team with a passion for storytelling and a knack for making the complex feel effortless.
                                Fast forward, and that little idea has grown into Creative Triplet, a 30+ strong crew of
                                creatives, each bringing their own flavor to the mix.<br /><br />

                                We’ve been fortunate enough to partner with some of the world’s leading brands, including
                                P&G, Huawei, and Microsoft. These collaborations have not only fueled our growth but also
                                deepened our understanding of what it takes to create truly impactful videos.<br /><br />

                                More than an animated explainer video company — we’re storytellers, problem-solvers, and
                                excitement creators. We’ve had our share of bumps and breakthroughs, but through it all, one
                                thing’s never changed: our love for making videos that make people feel something.<br /><br />

                                We’re in it for the passion, for the love of what we do, and for the impact we see our work
                                having on the world. And trust us, we’re just getting started. Creative Triplet is all about
                                tripling the impact with creativity.
                            </p>
                            {/* <a href="#conform" className="btn-red">Partner with Us</a> */}
                            <a href="#conform" className="btn-anim btn-red me-3" data-hover="Partner with Us">
                                <span className="btn-text">Partner with Us</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
