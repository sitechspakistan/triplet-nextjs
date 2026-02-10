"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import VimeoLazy from "./VimeoLazy";

export default function ServicesPage() {

    const fadeUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    return (
        <section className="pro-demo">
            <div className="container">
                <h2 className="text-center">
                    Videos that Simply<br />
                    Grow Your Business<br />
                    and Impact
                </h2>

                <p className="text-center pb-5">
                    We craft high-conversion video assets used in million-dollar pitch decks,
                    high-stakes product <br /> launches, and onboarding flows that drive real adoption, not vanity views
                </p>

                <div className="row">

                    {/* 1 */}
                    <div className="col-lg-6">
                        <motion.div
                            className="service-page-item"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <VimeoLazy videoId="1042934671" hash="a3d421a7ef" />
                            <div className="service-item-content">
                                <h3 className="pt-3">
                                    <Link href="/services/explainer-videos">
                                        Animated Explainer Videos
                                    </Link>
                                </h3>
                                <p>
                                    Complex ideas simplified, to captivate your audience,
                                    to help you stand out, and to boost your business like never before.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* 2 */}
                    <div className="col-lg-6">
                        <motion.div
                            className="service-page-item"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <VimeoLazy videoId="1042932806" hash="3e82a9d1a3" />
                            <div className="service-item-content">
                                <h3 className="pt-3">
                                    <Link href="/services/app-demo-videos">
                                        App Videos
                                    </Link>
                                </h3>
                                <p>
                                    Get more downloads and engagements with dynamic app videos
                                    that highlight your app’s features and benefits.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* 3 */}
                    <div className="col-lg-6">
                        <motion.div
                            className="service-page-item"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <VimeoLazy videoId="173401376" hash="3e82a9d1a3" />
                            <div className="service-item-content">
                                <h3 className="pt-3">
                                    <Link href="/services/product-videos">
                                        Product Videos
                                    </Link>
                                </h3>
                                <p>
                                    Make your product stand out with captivating videos
                                    that increase sales and engagement.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* 4 */}
                    <div className="col-lg-6">
                        <motion.div
                            className="service-page-item"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <VimeoLazy videoId="1042932193" hash="9a92b719f9" />
                            <div className="service-item-content">
                                <h3 className="pt-3">
                                    <Link href="/services/training-videos">
                                        Training Video
                                    </Link>
                                </h3>
                                <p>
                                    Unlike traditional, boring training videos, our animated
                                    training videos transform skill development into an
                                    unforgettable experience.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
