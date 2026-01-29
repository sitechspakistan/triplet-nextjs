export default function ServiceHero({ Heading, Paragraph }) {
    return (
        <section className="service-hero-section mt-3">
            <div className="service-content">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 ">
                            <h1>{Heading}</h1>
                            <p>{Paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}