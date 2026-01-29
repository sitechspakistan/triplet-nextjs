import Link from "next/link";

export default function ShadowRightSec({ VideoUrl, Heading, Description, btnlink, Btntxt }) {
    return (
        <section className="section-shadow-right mt-3 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 mt-5 mb-5">
                        <div style={{ padding: "56.25% 0 0 0", position: "relative", }}>
                            <iframe
                                src={VideoUrl}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", }}
                                title="Schoox I Explainer Video by Creative Triplet">
                            </iframe>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <h2 className="pt-5 pb-3">
                            {Heading}
                        </h2>
                        <p className="con-video pb-3">{Description}</p>

                        {btnlink && (
                            <Link href={btnlink} className="btn-red mb-5">
                                {Btntxt}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>

    )
}