export default function ProcessLeftConSec({ image, heading, para, numb }) {
    return (
        <section className="content-left-sec mt-5 mb-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <span className="process-num">{numb}</span>
                        <h2 className="pro-heading">{heading}</h2>
                        <p className="con-video">

                            {para}
                        </p>
                    </div>
                    <div className="col-xl-6">
                        <div>
                            <img className="about-img-two" src={image}
                                alt="Hoval I Explainer Video by Creative Triplet" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}