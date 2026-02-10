'use client'

import Link from 'next/link'
import { usePathname } from "next/navigation";
import { useEffect } from "react"; // 1. useEffect import karein

export default function Header() {
    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('nav.fixed-top');
            if (window.scrollY > 50) { // scroll threshold
                nav.style.backgroundColor = '#000000';
            } else {
                nav.style.backgroundColor = 'transparent';
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const pathname = usePathname();

    useEffect(() => {
        // 2. Bootstrap JS ko client-side par load karein
        typeof document !== "undefined"
            ? require("bootstrap/dist/js/bootstrap.bundle.min.js")
            : null;
    }, []);


    return (
        <>
            <header className='pb-5'>
                <nav className="navbar navbar-expand-lg fixed-top bg-sm-black">
                    <div className="container">
                        {/* <!-- Logo --> */}
                        <Link className="navbar-brand" href="/">
                            <img src="/assets/images/ct-logo-new-2.png" alt="error" />
                        </Link>

                        {/* <!-- Mobile Hamburger for Offcanvas --> */}
                        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#mobileOffcanvas" aria-controls="mobileOffcanvas" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* <!-- Desktop Menu --> */}
                        <div className="collapse navbar-collapse d-none d-lg-flex justify-content-center align-items-end">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link className={`nav-link ${pathname === "/" ? "active" : ""}`}
                                    href="/" aria-current="page">Home</Link></li>
                                <li className="nav-item dropdown">
                                    <Link className={`nav-link ${pathname === "/services" ? "active" : ""}`}
                                        href="/services">Services</Link>
                                    <ul className="dropdown-menu nav-item-children">
                                        <li><Link className="dropdown-item" href="/services/explainer-videos">Explainer Videos</Link></li>
                                        <li><Link className="dropdown-item" href="/services/training-videos">Training Videos</Link></li>
                                        <li><Link className="dropdown-item" href="/services/app-demo-videos">App Demo videos</Link></li>
                                        <li><Link className="dropdown-item" href="/services/product-videos">Product videos</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link className="nav-link" href="/portfolio">Portfolio</Link></li>
                                <li className="nav-item"><Link className={`nav-link ${pathname === "/process" ? "active" : ""}`}
                                    href="/process">Process</Link></li>
                                <li className="nav-item"><Link className={`nav-link ${pathname === "/about-us" ? "active" : ""}`}
                                    href="/about-us">About Us</Link></li>
                                <li className="nav-item"><Link className={`nav-link ${pathname === "/reviews" ? "active" : ""}`}
                                    href="/reviews">Reviews</Link></li>
                            </ul>
                            <Link href="/get-a-quote" className="nav-link hero-btn" data-hover="Get a Quote">
                                <span className="btntxt">Get a Quote</span></Link>
                        </div>
                    </div>
                </nav>

                {/* <!-- Offcanvas for Mobile --> */}
                <div className="offcanvas offcanvas-end d-lg-none bg-dark" tabIndex="-1" id="mobileOffcanvas"
                    aria-labelledby="mobileOffcanvasLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close text-reset text-end" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
                            <li>
                                <Link className="nav-link" data-bs-toggle="collapse" data-bs-target="#servicesCollapse" href="/services"
                                    role="button" aria-expanded="false">
                                    Services
                                    <i className="ps-2 fa fa-chevron-down" style={{ fontSize: '12px' }}></i> {/* <-- Carrot Icon */}
                                </Link>
                                <ul className="collapse" id="servicesCollapse">
                                    <li><Link className="dropdown-item" href="/services/explainer-videos">Explainer Videos</Link></li>
                                    <li><Link className="dropdown-item" href="/services/training-videos">Training Videos</Link></li>
                                    <li><Link className="dropdown-item" href="/services/app-demo-videos">App Demo Videos</Link></li>
                                    <li><Link className="dropdown-item" href="/services/product-videos">Product Videos</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item"><Link className="nav-link" href="/portfolio">Portfolio</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/process">Process</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/about-us">About Us</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/reviews">Reviews</Link></li>
                            <li><button className="hero-btn btn-warning w-100">Get Link Quote</button></li>
                        </ul>
                    </div>
                </div>
            </header>

        </>
    )
}