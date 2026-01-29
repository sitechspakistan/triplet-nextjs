import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="foot-styl">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3">
                            <h2>Links</h2>
                            <ul>
                                <li><Link href="/">Portfolio</Link></li>
                                <li><Link href="/">Process</Link></li>
                                <li><Link href="/">About Us</Link></li>
                                <li><Link href="/">Reviews</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-3">
                            <h2>Services</h2>
                            <ul>
                                <li><Link href="/">Explainer Videos</Link></li>
                                <li><Link href="/">App Demo Videos</Link></li>
                                <li><Link href="/">Product Videos</Link></li>
                                <li><Link href="/">Training Videos</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-3">
                            <ul>
                                <h2>Call us Directly</h2>
                                <li><Link href="tel:+18177534447">+1 (817) 753 4447</Link></li>

                                <h2>Email us Directly</h2>
                                <li><Link href="mailto:hello@creativetriplet.com">hello@creativetriplet.com</Link></li>

                                <h2>Address</h2>
                                <li><Link href="">Fort Worth, Texas, United States of America</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-3">
                            <div className="row">
                                <div className="col-xl-6">
                                    <img src="/assets/images/footer/clutch-1.svg" alt="" />
                                </div>
                                <div className="col-xl-6">
                                    <img src="/assets/images/footer/clutch-2.svg" alt="" />
                                </div>
                                <div className="col-xl-6">
                                    <img src="/assets/images/footer/clutch-3.svg" alt="" />
                                </div>
                                <div className="col-xl-6">
                                    <img src="/assets/images/footer/clutch-4.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 d-flex justify-content-between">
                        <span className="text-start">© 2026 CreativeTriplet. All Rights Reserved.</span>
                        <div className="text-end">
                            <i className="fa fa-facebook"></i>
                            <i className="fa fa-instagram"></i>
                            <i className="fa fa-youtube"></i>
                            <i className="fa fa-linkedin"></i>
                            <i className="fa fa-vimeo"></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}