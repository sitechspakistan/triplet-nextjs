"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PortfolioSlider() {
    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 576,
                settings: { slidesToShow: 1 },
            },
        ],
    };
    return (
        // <!-- grab a snack!  -->
        <section className="mt-5 mb-5 snack section-shadow-left">
            <div className="container">
                <h2 className="text-center mb-4">Grab A Snack!</h2>
                <div className="porfolio-slider pb-5">
                    <Slider {...settings}>
                        <div>
                            <iframe
                                src="https://player.vimeo.com/video/672297683"
                                title="Video 1"
                                allow="autoplay; fullscreen; picture-in-picture"
                                frameBorder="0"
                            />
                        </div>

                        <div>
                            <iframe
                                src="https://player.vimeo.com/video/338241178"
                                title="Video 2"
                                allow="autoplay; fullscreen; picture-in-picture"
                                frameBorder="0"
                            />
                        </div>

                        <div>
                            <iframe
                                src="https://player.vimeo.com/video/668278734"
                                title="Video 3"
                                allow="autoplay; fullscreen; picture-in-picture"
                                frameBorder="0"
                            />
                        </div>

                        <div>
                            <iframe
                                src="https://player.vimeo.com/video/602227121"
                                title="Video 4"
                                allow="autoplay; fullscreen; picture-in-picture"
                                frameBorder="0"
                            />
                        </div>

                        <div>
                            <iframe
                                src="https://player.vimeo.com/video/746877725"
                                title="Video 5"
                                allow="autoplay; fullscreen; picture-in-picture"
                                frameBorder="0"
                            />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}