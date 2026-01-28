import Link from "next/link";

export default function LeftContent({ videoUrl, heading, content, btntxt, btnlink }) {
    return (
        <section className="mt-5">
            <div className="container">
                <div className="row">
                    {/* Video Section */}
                    <div className="col-xl-6 mt-5 mb-5">
                        <div
                            style={{
                                padding: "56.25% 0 0 0",
                                position: "relative",
                                objectFit: "contain",
                            }}
                        >
                            <iframe
                                src={videoUrl}
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                }}
                                title="Explainer Video"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="col-xl-6">
                        <h2 className="pt-3 pb-3">{heading}</h2>

                        {/* Render passed React content */}
                        {content}

                        {/* Conditional Button */}
                        {btntxt && (
                            <Link href={btnlink} className="btn-red mb-3">
                                {btntxt}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
