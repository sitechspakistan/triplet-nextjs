import Link from 'next/link';
import React from 'react'

export const metadata = {
    title: "404 Page Not Found",
    alternates: {
        canonical: "https://creativetriplet.com/",
    },


};

const Notfound = () => {
    return (
        <div className="container mt-3 text-center d-flex flex-column align-items-center justify-content-center " style={{ minHeight: "80vh" }}>
            <div className="p-5 mt-5 rounded-3 bg-white p-relative">
                <img src='/assets/images/notfound.png' style={{ width: "150px", position: "absolute", right: "470px", top: "130px" }}></img>
                <h1 className="display-1 fw-bold" style={{ color: "#F99E1C" }}>404</h1>
                <h2 className="mb-4 fw-semibold text-dark">Oops! Page Not Found</h2>
                <p className="text-muted mb-4 max-width-500">
                    This page may have been removed, renamed, or is temporarily unavailable.<br /> Please use the button below to visit our homepage and find what you're looking for.
                </p>
                <Link href="/" className="hero-btn text-white mx-auto mt-3" data-hover="Go Back Home">
                    <span className="btntxt">Go Back Home</span>
                </Link>
            </div>
        </div>
    )
}

export default Notfound
