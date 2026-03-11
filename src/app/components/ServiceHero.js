"use client"
import { motion } from "framer-motion";

export default function ServiceHero({ Heading, Paragraph, bgImage, paraclass }) {
    return (
        <section className="service-hero-section mt-5">
            <div className="service-content" style={{ backgroundImage: `url(${bgImage})` }}>

                <div className="container">
                    <div className="row">
                        <div className="col-8 col-xl-6 ">
                            <motion.h1
                                className="pt-3 pb-2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.2, duration: 0.8 }}
                            >
                                {Heading}

                            </motion.h1>
                            <motion.p
                                className={`${paraclass} pt-3 pb-2`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 2.2, duration: 0.8 }}
                            >
                                {Paragraph}
                            </motion.p>
                            {/* <p className={ }></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}