import Link from "next/link";

export default function ShadowLeftSec({ VideoUrl, Heading, Description, btnlink, Btntxt, datahov }) {
    return (
        <section className="section-shadow-left pb-3 content-RL">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <h2>{Heading}</h2>
                        <p className="con-video pb-3">{Description}</p>
                        {btnlink && (
                            // <a href="/get-a-quote" className="btn-anim btn-red me-3" data-hover="Get A Quote">
                            //     <span className="btn-text">Get A Quote</span>
                            // </a>
                            <Link href={btnlink} className="btn-anim btn-red me-3" data-hover={datahov}>
                                <span className="btn-text">{Btntxt}</span>
                            </Link>
                        )}
                    </div>
                    <div className="col-xl-6">
                        <div style={{ padding: "56.25% 0 0 0", position: "relative", }}>
                            <img src={VideoUrl} frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}
                                title="Schoox I Explainer Video by Creative Triplet">
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}