"use client";
import { useState } from "react";

export default function Portfolio() {
    const [filter, setFilter] = useState("all");
    const items = [
        { id: 1, title: "Project A", category: "b2c", video: "https://player.vimeo.com/video/672297683", image: "/assets/images/portfolio/b2c/2.png" },
        { id: 2, title: "Project B", category: "it", video: "https://player.vimeo.com/video/338241178", image: "/assets/images/portfolio/common/1.jpg" },
        { id: 3, title: "Project C", category: "healthcare", video: "https://player.vimeo.com/video/668278734", image: "/assets/images/portfolio/common/2.jpg" },
        { id: 4, title: "Project D", category: "b2b", video: "https://player.vimeo.com/video/602227121", image: "/assets/images/portfolio/b2b/1.jpg" },
        { id: 5, title: "Project E", category: "b2b", video: "https://player.vimeo.com/video/602227121", image: "/assets/images/portfolio/common/3.jpg" },
        { id: 6, title: "Project F", category: "b2b", video: "https://player.vimeo.com/video/602227121", image: "/assets/images/portfolio/b2b/2.jpg" },
        { id: 7, title: "Project G", category: "b2b", video: "https://player.vimeo.com/video/602227121", image: "/assets/images/portfolio/common/4.webp" },
        { id: 8, title: "Project H", category: "b2c", video: "https://player.vimeo.com/video/602227121", image: "/assets/images/portfolio/common/5.png" },
        { id: 9, title: "Project I", category: "it", video: "https://player.vimeo.com/video/602227121", image: "/assets/images/portfolio/common/6.png" },

    ];
    const filteredItems =
        filter === "all"
            ? items
            : items.filter((item) => item.category === filter);
    return (
        <>
            <section className="portfolio-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Filters */}
                            <div className="portfolio-filters">
                                {["all", "b2b", "b2c", "healthcare"].map((cat) => (
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
                    <div className="row">
                        <div className="col-12">
                            {/* Masonry */}
                            <div className="portfolio-masonry">
                                {filteredItems.map((item) => (
                                    <div key={item.id} className="portfolio-masonry-item">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}