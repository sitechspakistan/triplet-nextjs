export default function ServiceHero({ Heading, Paragraph, bgImage, paraclass }) {
    return (
        <section className="service-hero-section mt-5">
            <div className="service-content" style={{ backgroundImage: `url(${bgImage})` }}>

                <div className="container">
                    <div className="row">
                        <div className="col-8 col-xl-6 ">
                            <h1>{Heading}</h1>
                            <p className={`${paraclass}`}>{Paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}