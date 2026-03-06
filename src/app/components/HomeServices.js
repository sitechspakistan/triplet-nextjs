"use client";
import { motion } from "framer-motion";

export default function HomeServices() {
    // Parent container ke liye variants (bachon ko bari bari chalane ke liye)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Har box ke darmiyan 0.2s ka gap
            }
        }
    };

    // Har box (column) ke liye variants
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
            video: "https://player.vimeo.com/video/1098287986?h=f9cff4a3c7&autoplay=1&loop=1&muted=1&background=1",
            desc: "Pitch visuals that simplify deep tech, biotech, AI — and helped our clients raise over $850M+ across Seed to Series D."
        },
        {
            title: "Product Demos",
            video: "https://player.vimeo.com/video/1098292166?h=e7a6dfbf56&autoplay=1&loop=1&muted=1&background=1",
            desc: "Show how it works. Fast. These 60–90 second walkthroughs close the gap between discovery and sign-up."
        },
        {
            title: "Onboarding Journeys",
            video: "https://player.vimeo.com/video/1042932520?h=a314b88fd5&autoplay=1&loop=1&muted=1&background=1",
            desc: "First impressions are everything. We help users land smoothly, activate faster, and stick around longer."
        },
        {
            title: "Platform Workflows",
            video: "https://player.vimeo.com/video/1098286335?h=64b067f8f8&autoplay=1&loop=1&muted=1&background=1",
            desc: "Data-heavy? AI-powered? B2B enterprise? We visualize complex workflows clearly so prospects “get it” fast."
        },
        {
            title: "Vision-Led Explainers",
            video: "https://player.vimeo.com/video/1098293846?h=0e5adf0b9c&autoplay=1&loop=1&muted=1&background=1",
            desc: "Not just what the product does — but why it matters. Perfect for investors and strategic hires."
        },
        {
            title: "Deep Tech Visualizations",
            video: "https://player.vimeo.com/video/1098294723?h=dc0162c167&autoplay=1&loop=1&muted=1&background=1",
            desc: "When the science is advanced, the story needs simplicity. We translate complex biotech into visual clarity."
        }
    ];

    return (
        <section className="pro-demo py-5">
            <div className="container">
                {/* Heading Animation */}
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
                        We craft high-conversion video assets used in million-dollar pitch decks, high-stakes product launches, and onboarding flows that drive real adoption, not vanity views
                    </p>
                </motion.div>

                {/* Columns Container */}
                <motion.div
                    className="row g-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {services.map((item, index) => (
                        <motion.div key={index} className="col-lg-4" variants={itemVariants}>
                            <div style={{ padding: "56.25% 0 0 0", position: "relative", borderRadius: '10px', overflow: 'hidden' }}>
                                <iframe
                                    src={item.video}
                                    frameBorder="0"
                                    allow="autoplay; fullscreen"
                                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                                    title={item.title}
                                ></iframe>
                            </div>
                            <h3 className="pt-3">{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}