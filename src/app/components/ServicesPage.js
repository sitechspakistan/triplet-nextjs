import Link from "next/link";
import VimeoLazy from "./VimeoLazy";

export default function ServicesPage() {
    return (
        <section className="pro-demo">
            <div className="container">
                <h2 className="text-center">
                    Videos that Simply<br />
                    Grow Your Business<br />
                    and Impact
                </h2>
                <p className="text-center pb-5">We craft high-conversion video assets used in million-dollar pitch decks,
                    high-stakes product <br /> launches, and onboarding flows that drive real adoption, not vanity views
                </p>

                <div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="service-page-item">
                                <VimeoLazy videoId="1042934671" hash="a3d421a7ef" />
                                <div className="service-item-content">
                                    <h3 className="pt-3"><Link href="/services/explainer-videos">Animated Explainer Videos</Link></h3>
                                    <p>Complex ideas simplified, to captivate your audience, to help you stand out, and to boost your business like never before.</p>
                                    {/* <button className="btn-red mb-3"><a>Let's Talk</a></button> */}

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-page-item">
                                <VimeoLazy videoId="1042932806" hash="3e82a9d1a3" />
                                <div className="service-item-content">
                                    <h3 className="pt-3"><Link href="/services/app-demo-videos">App Videos</Link></h3>
                                    <p>Get more downloads and engagements with dynamic app videos that highlight your app’s features and benefits.</p>
                                    {/* <button className="btn-red mb-3"><a>Let's Talk</a></button> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-page-item">
                                <VimeoLazy videoId="1042932806" hash="3e82a9d1a3" />                            
                                <div className="service-item-content">
                                    <h3 className="pt-3"><Link href="/services/product-videos">Product Videos</Link></h3>
                                    <p>Make your product stand out with captivating videos that increase sales and engagement.</p>
                                    {/* <button className="btn-red mb-3"><a>Let's Talk</a></button> */}
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-page-item">
                                <VimeoLazy videoId="1042932193" hash="9a92b719f9" />
                                <div className="service-item-content">
                                    <h3 className="pt-3"><Link href="/services/training-videos">Training Video</Link></h3>
                                    <p>Unlike traditional, boring training videos, our animated training videos transform skill development into an unforgettable experience, empowering and exciting for your team.</p>
                                    {/* <button className="btn-red mb-3"><a>Let's Talk</a></button> */}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
