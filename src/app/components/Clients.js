"use client";
import { motion } from "framer-motion";

export default function Clients() {
    const brandImages = [
        "assets/images/brands/1.png",
        "assets/images/New folder/logo-test.png",
        "assets/images/brands/3.png",
        "assets/images/brands/4.png",
        "assets/images/brands/5.png",
        "assets/images/brands/6-4.png",
        "assets/images/New folder/19.png",
        "assets/images/brands/10.png",
        "assets/images/brands/3-2.png",
        "assets/images/New folder/Neura-full-logo.png",
        "assets/images/brands/1-2.png",
        "assets/images/brands/15.png",
        "assets/images/brands/xbox.png",
        "assets/images/brands/18.png",
        "assets/images/brands/20.png",
        "assets/images/brands/19.png",
        "assets/images/brands/gg.png",
        "assets/images/brands/5-2.png",
        "assets/images/brands/6-4.png",
        "assets/images/brands/4-3.png",
        "assets/images/brands/11-1.png",
        "assets/images/New folder/4.png",
    ];

    return (
        <section className="fortune mt-lg-5">
            <div className="container">
                {/* Fortune One Text */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="box">
                        <h2>Trusted by Fortune 500 & VC-Backed Startups</h2>
                        <p>
                            Creative Triplet takes pride in having helped some well-known brands & startups overcome their
                            complex marketing challenges by taking an innovative approach to stand unique and achieve
                            incredible results.
                        </p>
                    </div>
                </motion.div>

                {/* Brand Logos */}
                <div className="brands">
                    <ul>
                        {brandImages.map((src, index) => (
                            <li key={index}>
                                {/* motion.img inside li keeps your CSS intact */}
                                <motion.img
                                    src={src}
                                    alt={`Brand ${index}`}
                                    initial={{ opacity: 0, x: -30, y: 30 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                                />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Fortune Two Content */}
                <motion.div
                    className="fortune-two"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="row ">
                        <div className="col-lg-4 col-md-4">
                            <span className="numb">1</span>
                            <h3 className="pb-3">Diagnose the<br className="d-none d-lg-block" /> Gap</h3>
                            <p className="fortune-two-p ">
                                We don’t waste time with bloated discovery calls. In a focused session, we zero in on what’s
                                holding your narrative back — whether it's investor clarity, user comprehension, or onboarding
                                friction. We align fast on your audience, growth goals, and product positioning.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <span className="numb">2</span>
                            <h3 className="pb-3">Craft the<br className="d-none d-lg-block" /> Narrative</h3>
                            <p className="fortune-two-p">
                                This isn’t just a script — it’s a fundraising asset or GTM weapon. We map your story to what investors, buyers, or users
                                actually need to hear to move. Every storyboard is built with conversion in mind: funding, activation, or close.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <span className="numb">3</span>
                            <h3 className="pb-3">Bring It to<br className="d-none d-lg-block" /> Life</h3>
                            <p className="fortune-two-p">
                                Custom design. High-velocity motion. Fast turnaround. No freelancers. No fluff. Every frame is purpose-built
                                by a core team that understands what’s at stake — whether you’re weeks from demo day or onboarding your first enterprise client.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
