import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-sm-black">
                    <div className="container">
                        {/* <!-- Logo --> */}
                        <Link className="navbar-brand" href="/index.html">
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
                                <li className="nav-item"><Link className="nav-link" aria-current="page" href="#">Home</Link></li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" href="/">Services</Link>
                                    <ul className="dropdown-menu nav-item-children">
                                        <li><Link className="dropdown-item" href="/explainer-video.html">Explainer Videos</Link></li>
                                        <li><Link className="dropdown-item" href="/training-video.html">Training Videos</Link></li>
                                        <li><Link className="dropdown-item" href="/app-demo-video.html">App Demo videos</Link></li>
                                        <li><Link className="dropdown-item" href="/product">Product videos</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><Link className="nav-link" href="/protfolio.html">Portfolio</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="/process.html">Process</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="/about-us.html">About Us</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="/reviews.html">Reviews</Link></li>
                            </ul>
                            <button className="hero-btn btn-warning"><Link href="get-Link-quote.html" className="nav-link">Get Link
                                Quote</Link></button>
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
                                <Link className="nav-link" data-bs-toggle="collapse" data-bs-target="#servicesCollapse" href="#"
                                    role="button" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="collapse" id="servicesCollapse">
                                    <li><Link className="dropdown-item" href="/explainer-video.html">Explainer Videos</Link></li>
                                    <li><Link className="dropdown-item" href="/training-video.html">Training Videos</Link></li>
                                    <li><Link className="dropdown-item" href="/app-demo-video.html">App Demo Videos</Link></li>
                                    <li><Link className="dropdown-item" href="/product-video.html">Product Videos</Link></li>
                                </ul>
                            </li>

                            <li className="nav-item"><Link className="nav-link" href="/">Portfolio</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/">Process</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/about-us.html">About Us</Link></li>
                            <li className="nav-item"><Link className="nav-link" href="/reviews.html">Reviews</Link></li>
                            <li><button className="hero-btn btn-warning w-100">Get Link Quote</button></li>
                        </ul>
                    </div>
                </div>
            </header>

        </>
    )
}