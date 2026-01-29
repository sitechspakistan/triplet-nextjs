import Link from "next/link";

export default function ShadowLeftSec({ VideoUrl, Heading, Description, btnlink, Btntxt }) {
    return (
        <section className="section-shadow-left pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <h2>{Heading}</h2>
                        <p className="con-video pb-3">{Description}</p>
                        {btnlink && (
                            <Link href={btnlink} className="btn-red">
                                {Btntxt}
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