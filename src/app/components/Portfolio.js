"use client";
import { useState, useEffect } from "react";

export default function Portfolio() {
    const [filter, setFilter] = useState("All");
    const [videoUrl, setVideoUrl] = useState("");
    const [videoTitle, setVideoTitle] = useState("");

    const items = [
        { id: 1, title: "Microsoft - Employee Devices I Explainer Video by Creative Triplet", category: "B2C", video: "https://player.vimeo.com/video/602215167?h=01d057ba98", image: "/assets/images/portfolio/b2c/2.png" },
        { id: 2, title: "Project B", category: "Information Technology", video: "https://player.vimeo.com/video/338241178", image: "/assets/images/portfolio/b2b/1.jpg" },
        { id: 3, title: "Project C", category: "Health Care", video: "https://player.vimeo.com/video/668278734", image: "/assets/images/portfolio/common/4.webp" },
        { id: 4, title: "Project D", category: "B2b", video: "https://vimeo.com/602227121", image: "/assets/images/portfolio/common/1.jpg" },
        { id: 5, title: "Project E", category: "B2B", video: "https://player.vimeo.com/video/602227121", image: "/assets/images/portfolio/common/3.jpg" },
        { id: 6, title: "Project F", category: "B2B", video: "https://player.vimeo.com/video/602227121", image: "/assets/images/portfolio/common/5.png" },
        { id: 7, title: "Project G", category: "B2B", video: "https://player.vimeo.com/video/602227121", image: "/assets/images/portfolio/common/2.jpg" },
        { id: 8, title: "Project H", category: "B2B", video: "https://player.vimeo.com/video/602227121", image: "/assets/images/portfolio/b2b/2.jpg" },
        { id: 9, title: "Project I", category: "Information Technology", video: "https://vimeo.com/336123110", image: "/assets/images/portfolio/common/6.jpg" },
        { id: 10, title: "Project K", category: "B2B", video: "https://player.vimeo.com/video/602227121", image: "/assets/images/portfolio/common/7.jpg" },
        { id: 11, title: "Project J", category: "Information Technology", video: "https://vimeo.com/746865222", image: "/assets/images/portfolio/b2b/3.jpg" },
        { id: 12, title: "Project L", category: "B2C", video: "https://vimeo.com/696057141", image: "/assets/images/portfolio/common/8.jpg" },



    ];
    const filteredItems =
        filter === "All"
            ? items
            : items.filter((item) => item.category === filter);

    useEffect(() => {
        const modal = document.getElementById("portfolioModal");

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
            document.getElementById("portfolioModal")
        );
        modal.show();
    };

    return (
        <>
            <section className="portfolio-section">
                <div className="container-fluid g-0">
                    <div className="row g-0">
                        <div className="col-12 text-center">
                            {/* Filters */}
                            <div className="portfolio-filters">
                                {["All", "B2B", "B2C", "Education and Training", "Health Care", "Information Technology"].map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilter(cat)}
                                        className={filter === cat ? "active" : ""}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-12 g-0">
                            {/* Masonry */}
                            <div className="portfolio-masonry">
                                {filteredItems.map((item) => (
                                    <div key={item.id} className="portfolio-masonry-item" onClick={() => openModal(item)}>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <div
                className="modal fade"
                id="portfolioModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl modal-dialog-centered">
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

        </>
    )
}