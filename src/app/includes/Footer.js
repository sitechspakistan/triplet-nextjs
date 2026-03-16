import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="foot-styl">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-xl-3 col-md-3">
                            <h2>Links</h2>
                            <ul>
                                <li><Link href="/portfolio">Portfolio</Link></li>
                                <li><Link href="/process">Process</Link></li>
                                <li><Link href="/about-us">About Us</Link></li>
                                <li><Link href="/reviews">Reviews</Link></li>
                            </ul>
                        </div>
                        <div className="col-6 col-xl-3 col-md-3">
                            <h2>Services</h2>
                            <ul>
                                <li><Link href="/services/explainer-videos">Explainer Videos</Link></li>
                                <li><Link href="/services/app-demo-videos">App Demo Videos</Link></li>
                                <li><Link href="/services/product-videos">Product Videos</Link></li>
                                <li><Link href="/services/training-videos">Training Videos</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-xl-3 col-md-3 info-sec">
                            <ul className="text-white">
                                <h2 className="mb-0">Call us Directly</h2>
                                <li className="pb-3"><Link href="tel:+18177534447">+1 (817) 753 4447</Link></li>

                                <h2 className="mb-0">Email us Directly</h2>
                                <li className="pb-3"><Link href="mailto:hello@creativetriplet.com">hello@creativetriplet.com</Link></li>

                                <h2 className="mb-0">Address</h2>
                                <li className="pb-3"><Link href="#">Fort Worth, Texas, United States of America</Link></li>
                            </ul>
                        </div>
                        <div className="col-12 col-xl-3 col-md-3">
                            <div className="row">
                                <div className="col-xl-6 col-6">
                                    <img src="/assets/images/footer/clutch-1.svg" alt="" />
                                </div>
                                <div className="col-xl-6 col-6">
                                    <img src="/assets/images/footer/clutch-2.svg" alt="" />
                                </div>
                                <div className="col-6 col-xl-6">
                                    <img src="/assets/images/footer/clutch-3.svg" alt="" />
                                </div>
                                <div className=" col-6 col-xl-6">
                                    <img src="/assets/images/footer/clutch-4.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 d-xl-flex justify-content-xl-between align-items-center d-md-flex justify-content-md-between">
                        <span className="text-start fw-medium">© 2026 CreativeTriplet. All Rights Reserved.</span>
                        <div className="text-xl-end text-start">
                            <a href="https://www.facebook.com/creativetriplet/" target="blank"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/creativetriplet/" target="blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.youtube.com/@CreativeTriplet" target="blank"><i className="fa-brands fa-youtube"></i></a>
                            <a href="https://www.linkedin.com/company/creativetriplet/" target="blank"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="https://vimeo.com/creativetriplet" target="blank"><i className="fa-brands fa-vimeo-v"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}