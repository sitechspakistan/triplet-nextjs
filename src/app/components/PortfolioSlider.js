"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

export default function PortfolioSlider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

    useEffect(() => {
        if (!emblaApi) return;
        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 3000);
        return () => clearInterval(interval);
    }, [emblaApi]);

    const videos = [
        { src: "https://player.vimeo.com/video/672297683", title: "Video 1" },
        { src: "https://player.vimeo.com/video/338241178", title: "Video 2" },
        { src: "https://player.vimeo.com/video/668278734", title: "Video 3" },
        { src: "https://player.vimeo.com/video/602227121", title: "Video 4" },
        { src: "https://player.vimeo.com/video/746877725", title: "Video 5" },
    ];

    return (
        <section className="mt-5 mb-5 snack section-shadow-left">
            <div className="container">
                <h2 className="text-center mb-4">Grab A Snack!</h2>
                <div className="embla pb-5" ref={emblaRef}>
                    <div className="embla__container">
                        {videos.map((video, i) => (
                            <div className="embla__slide" key={i}>
                                <div className="video-slide">
                                    <iframe
                                        src={video.src}
                                        title={video.title}
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        frameBorder="0"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}