export default function ServiceHero({ Heading, Paragraph, bgImage }) {
    return (
        <section className="service-hero-section">
            <div className="service-content" style={{ backgroundImage: `url(${bgImage})` }}>

                <div className="container">
                    <div className="row">
                        <div className="col-8 col-xl-6 ">
                            <h1>{Heading}</h1>
                            <p>{Paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}