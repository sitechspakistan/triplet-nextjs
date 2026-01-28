import Link from "next/link";

export default function RightContent({ videoUrl, title, content, btntxt, btnlink }) {
    return (
        <section>
            <div className="container">
                <div className="row">
                    {/* <div className="col-xl-6">
                        <h2>{title}</h2> */}
                    {/* Content Section */}
                    <div className="col-xl-6">
                        <h2 className="pt-3 pb-3">{title}</h2>

                        {/* Render passed React content */}
                        {content}

                        {/* Conditional Button */}
                        {btntxt && (
                            <Link href={btnlink} className="btn-red mb-3">
                                {btntxt}
                            </Link>
                        )}
                    </div>
                    <div className="col-xl-6">
                        <div style={{ padding: "56.25% 0 0 0", position: "relative", }}>
                            <iframe
                                src={videoUrl}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", }}
                                title="Schoox I Explainer Video by Creative Triplet">
                            </iframe>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </section>
    )
}