import ClucthWidget from "./ClucthWidget"
import Widget from "./ClucthWidget"
export default function Hero() {
    return (


        // <!-- hero section  -->
        <section>
            <div className="hero-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="text-white">Videos That Helped Raise <span className="content-color">$850M+</span>
                                for VC-Backed Startups</h1>
                            <p className="pt-3 pb-2">From Seed to Series D, we help high-growth startups simplify their
                                story, accelerate GTM,
                                and drive adoption — with videos built to convert, not just impress.</p>

                            <div className="hero-btns">
                                <button className="btn-red me-3">Get A Quote</button>
                                <button className="btn-yellow">Free Consutlation</button>
                            </div>
                            <div className="d-flex">
                                <img src="/assets/images/turspilot.png" alt="" />
                                <ClucthWidget />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className=" mt-5 e-hosted-video elementor-wrapper elementor-open-inline">
                                <video
                                    className="elementor-video"
                                    src="/assets/images/video/MP4_Without_Dots_Black-Background-1-1.mp4"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    controlsList="nodownload"
                                    poster="/assets/images/video/ct-poster.jpg"
                                >
                                    Sorry, your browser doesn't support embedded videos.
                                </video>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="container">
                    <div>
                        <ul>
                            <li><img src="assets/images/homepage/6-5.png" alt="" /></li>
                            <li><img src="assets/images/homepage/4-2.png" alt="" /></li>
                            <li><img src="assets/images/homepage/5-1-2048x270.png" alt="" /></li>
                            <li><img src="assets/images/homepage/3-1.png" alt="" /></li>
                            <li><img src="assets/images/homepage/pngegg-2048x584.png" alt="" /></li>
                            <li><img src="assets/images/homepage/new2-2.png" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}