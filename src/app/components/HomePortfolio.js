"use client";
import { motion } from "framer-motion";

export default function HomePortfolio() {
    const projects = [
        {
            img: "assets/images/botb/microsoft.png",
            title: "Microsoft",
            tags: ["B2C", "Featured", "VC"],
        },
        {
            img: "assets/images/botb/4.jpg",
            title: "Physics For Food",
            tags: ["B2C", "Featured", "VC"],
        },
        {
            img: "assets/images/botb/5.jpg",
            title: "Huawei",
            tags: ["B2C", "Featured", "Information Technology", "VC"],
        },
        {
            img: "assets/images/botb/75.jpg",
            title: "Mono Vs Multi-Repo",
            tags: ["Featured", "Information Technology", "VC"],
        },
        {
            img: "assets/images/botb/03.png",
            title: "Zeil – Hero Video",
            tags: ["Information Technology", "VC"],
        },
        {
            img: "assets/images/botb/thumb-vc.jpg",
            title: "Boomerang FX I Explainer Video by Creative Triplet",
            tags: ["Information Technology", "VC"],
        },
    ];

    return (
        <section className="sel-project text-center">
            <div className="container">
                <span>Selected Projects</span>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    The Best of the Best
                </motion.h2>

                <div className="row text-start mt-4">
                    {projects.map((project, index) => (
                        <motion.div
                            className="col-lg-6 mb-4"
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        >
                            <div className="video-thumb">
                                <img src={project.img} className="w-100" alt={project.title} />
                                <span className="play-btn">
                                    <i className="play-icon"></i>
                                </span>
                            </div>
                            <h3>{project.title}</h3>
                            <ul>
                                {project.tags.map((tag, i) => (
                                    <li key={i}>{tag}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
