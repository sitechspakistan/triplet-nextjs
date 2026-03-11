"use client";
import { motion } from "framer-motion";
import VimeoLazy from "./VimeoLazy";

export default function HomeServices() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const services = [
        {
            title: "Fundraising Explainers",
            videoUrl: "1098287986",
            vidhash: "f9cff4a3c7",
            desc: "Pitch visuals that simplify deep tech, biotech, AI — and helped our clients raise over $850M+ across Seed to Series D. Investors don’t fund what they don’t understand. We fix that."
        },
        {
            title: "Product Demos",
            videoUrl: "1098292166",
            vidhash: "e7a6dfbf56",
            desc: "Show how it works. Fast. These 60–90 second walkthroughs close the gap between discovery and sign-up — no hand-holding required."
        },
        {
            title: "Onboarding Journeys",
            videoUrl: "1042932520",
            vidhash: "a314b88fd5",
            desc: "First impressions are everything. We help users land smoothly, activate faster, and stick around longer — without customer success lifting a finger."
        },
        {
            title: "Platform Workflows",
            videoUrl: "1098286335",
            vidhash: "64b067f8f8",
            desc: "Data-heavy? AI-powered? B2B enterprise? We visualize complex workflows clearly so your prospects “get it” in under 90 seconds."
        },
        {
            title: "Vision-Led Explainers",
            videoUrl: "1098293846",
            vidhash: "0e5adf0b9c",
            desc: "Not just what the product does — but why it matters. These videos sell the mission, not just the mechanics. Perfect for investors, strategic hires, and high-stakes conversations."
        },
        {
            title: "Deep Tech Visualizations",
            videoUrl: "1098294723",
            vidhash: "dc0162c167",
            desc: "When the science is advanced, the story needs simplicity. We translate complex biotech and infrastructure into visual clarity that investors and stakeholders can act on."
        }
    ];

    return (
        <section className="pro-demo py-5">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-center">
                        Videos That Help You Raise,<br />
                        Sell, and Scale - Fast
                    </h2>
                    <p className="text-center pb-5">
                        We craft high-conversion video assets used in million-dollar pitch decks, high-stakes product<br /> launches, and onboarding flows that drive real adoption, not vanity views
                    </p>
                </motion.div>

                <motion.div
                    className="row g-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {services.map((item, index) => (

                        <motion.div key={index} className="col-lg-4" variants={itemVariants}>
                            <VimeoLazy videoId={item.videoUrl} hash={item.vidhash} />
                            {/* <div style={{ padding: "56.25% 0 0 0", position: "relative", borderRadius: '10px', overflow: 'hidden' }}>
                                <iframe
                                    poster={item.poster}
                                    // src={`https://player.vimeo.com/video/${item.video}`}
                                    frameBorder="0"
                                    allow="autoplay; fullscreen"
                                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                    title={item.title}
                                ></iframe>
                            </div> */}
                            <h3 className="pt-3">{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}