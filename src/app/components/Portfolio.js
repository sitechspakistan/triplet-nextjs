"use client";
import { useState } from "react";

export default function Portfolio() {
    const [filter, setFilter] = useState("all");
    const items = [
        { id: 1, title: "Project A", category: "b2b", video: "https://player.vimeo.com/video/672297683", image: "/assets/images/portfolio/portfolio-1.png" },
        { id: 2, title: "Project B", category: "b2c", video: "https://player.vimeo.com/video/338241178", image: "/assets/images/portfolio/portfolio-2.png" },
        { id: 3, title: "Project C", category: "b2b", video: "https://player.vimeo.com/video/668278734", image: "/assets/images/portfolio/portfolio-3.png" },
        { id: 4, title: "Project D", category: "healthcare", video: "https://player.vimeo.com/video/602227121", image: "/assets/images/portfolio/portfolio-4.png" },
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