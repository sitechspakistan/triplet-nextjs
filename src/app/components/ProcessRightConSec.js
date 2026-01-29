export default function ProcessRightConSec({ image, heading, para, numb, className = "" }) {
    return (
        <section className={`content-left-sec mt-3 mb-5 pb-5 ${className}`}>
            <div className="container-fluid">
                <div className="row gx-0">
                    <div className="col-xl-6">
                        <div>
                            <img className="process-img" src={image}
                                alt="Hoval I Explainer Video by Creative Triplet" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <span className="process-num">{numb}</span>
                        <h2 className="pro-heading">{heading}</h2>
                        <p className="con-video">
                            {para}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}