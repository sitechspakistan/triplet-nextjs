"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePortfolio() {

    const [videoUrl, setVideoUrl] = useState("");
    const [videoTitle, setVideoTitle] = useState("");
    const projects = [
        {
            id: 1,
            title: "Microsoft",
            img: "assets/images/botb/microsoft.png",
            video: "https://player.vimeo.com/video/602215167?h=01d057ba98",
            tags: ["B2C", "Featured", "VC"]
        },
        {
            id: 2,
            title: "Physics For Food",
            img: "assets/images/botb/4.jpg",
            video: "https://player.vimeo.com/video/746877725",
            tags: ["B2B", "Featured", "VC"]
        },
        {
            id: 3,
            title: "Huawei",
            img: "assets/images/botb/5.jpg",
            video: "https://player.vimeo.com/video/338241178",
            tags: ["B2C", "Featured", "Information Technology", "VC"]
        },
        {
            id: 4,
            title: "Mono Vs Multi-Repo",
            img: "assets/images/botb/75.jpg",
            video: "https://player.vimeo.com/video/746867677",
            tags: ["Featured", "Information Technology", "VC"]
        },
        {
            id: 5,
            title: "Zeil – Hero Video",
            img: "assets/images/botb/03.png",
            video: "https://player.vimeo.com/video/1055320580?h=40a35618ce",
            tags: ["Information Technology", "VC"]
        },
        {
            id: 6,
            title: "Boomerang FX I Explainer Video by Creative Triplet",
            img: "assets/images/botb/thumb-vc.jpg",
            video: "https://player.vimeo.com/video/1042932806?h=3e82a9d1a3",
            tags: ["Information Technology", "VC"]
        }
    ];
    useEffect(() => {
        const modal = document.getElementById("portfolioModalHome");

        const handleClose = () => {
            setVideoUrl("");
            setVideoTitle("");
        };

        modal?.addEventListener("hidden.bs.modal", handleClose);
        return () =>
            modal?.removeEventListener("hidden.bs.modal", handleClose);
    }, []);

    const openModal = (item) => {
        setVideoUrl(item.video);
        setVideoTitle(item.title);
        const modal = new window.bootstrap.Modal(
            document.getElementById("portfolioModalHome")
        );
        modal.show();
    };


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
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        >
                            <div className="video-thumb" onClick={() => openModal(project)}>
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
            <div
                className="modal fade"
                id="portfolioModalHome"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            {videoUrl && (
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        src={videoUrl}
                                        title={videoTitle}
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
