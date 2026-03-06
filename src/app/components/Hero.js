"use client";
import { motion } from "framer-motion";
import ClucthWidget from "./ClucthWidget";

export default function Hero() {
    const sentence1 = "Videos That Helped Raise ";
    const sentence2 = " for VC-Backed Startups";
    const highlight = "$850M+ ";

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { ease: "easeOut" },
        },
    };

    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center">

                    {/* LEFT COLUMN */}
                    <div className="col-md-6">
                        <motion.h1
                            className="text-white"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {sentence1.split("").map((char, index) => (
                                <motion.span key={index} variants={letterVariants} className="typing-span">
                                    {char}
                                </motion.span>
                            ))}

                            <motion.span className="content-color typing-span" variants={letterVariants}>
                                {highlight}
                            </motion.span>

                            {sentence2.split("").map((char, index) => (
                                <motion.span key={index + 50} variants={letterVariants} className="typing-span">
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <motion.p
                            className="pt-3 pb-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.2, duration: 0.8 }} // Pehle typing khatam ho phir ye aaye
                        >
                            From Seed to Series D, we help high-growth startups simplify their story, accelerate GTM, and drive adoption - with videos built to convert, not just impress.
                        </motion.p>

                        <motion.div
                            className="btn-wrapper"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.8 }} // Buttons p ke baad ayenge
                        >
                            <a href="/get-a-quote" className="btn-anim btn-red me-3" data-hover="Get A Quote">
                                <span className="btn-text">Get A Quote</span>
                            </a>
                            <a href="/book-a-metting" className="btn-anim btn-yellow" data-hover="Free Consultation">
                                <span className="btn-text">Free Consultation</span>
                            </a>
                        </motion.div>

                        {/* ✅ LOGOS ANIMATION (Delayed) */}
                        <motion.div
                            className="d-flex mt-3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 3.5, // Jab typing aur baqi content aa jaye tab ye logos ayenge
                                duration: 0.5
                            }}
                        >
                            <img src="/assets/images/turspilot.png" alt="Trustpilot" />
                            <ClucthWidget />
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN (Video) */}
                    <motion.div
                        className="col-md-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mt-5">
                            <video
                                className="elementor-video w-100"
                                src="/assets/images/video/MP4_Without_Dots_Black-Background-1-1.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                poster="/assets/images/video/ct-poster.jpg"
                            />
                        </div>
                    </motion.div>

                </div>
                <div className="container">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: { staggerChildren: 0.3 } // images ke beech delay
                            },
                        }}
                    >
                        <ul>
                            {[
                                "assets/images/homepage/6-5.png",
                                "assets/images/homepage/4-2.png",
                                "assets/images/homepage/5-1-2048x270.png",
                                "assets/images/homepage/3-1.png",
                                "assets/images/homepage/pngegg-2048x584.png",
                                "assets/images/homepage/new2-2.png",
                            ].map((src, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}  // start from right
                                    animate={{ opacity: 1, x: 0 }}   // fade in to original position
                                    transition={{ duration: 1.5 }}   // animation speed (change kar sakte ho)
                                >
                                    <img src={src} alt="" />
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}