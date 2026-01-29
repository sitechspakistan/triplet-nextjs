export default function Faqs() {
    return (
        // < !--FAQS -- >
        <section>
            <div className="container">
                <h2 className="text-center pt-2 pb-4">Frequenty Asked Questions</h2>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne">
                                Why should I choose Creative Triplet for my explainer videos?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                We're focused on results, not just flashy videos. We take the time to understand your
                                business so we can create videos that grab attention and get people excited. Plus, we
                                make the whole process easy and stress-free, so you can focus on what you do best.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo">
                                Do you create custom animated explainer videos?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                Absolutely! We believe every business is unique, and your video should be too. We'll
                                work closely with you to develop a custom animated explainer video that perfectly
                                captures your brand's personality and message.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseThree">
                                Can you speed up the production process if I'm in a rush?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                We understand that sometimes you need things done yesterday. While our standard
                                turnaround time is 4-6 weeks, we'll do our best to accommodate urgent requests. Just let
                                us know your timeline upfront, and we'll work with you to find a solution.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseFour">
                                Do you offer storyboarding as part of your services?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingFour">
                            <div className="accordion-body">
                                Yes, storyboarding is a crucial part of our process. It helps us visualize the flow of
                                your video and ensure we're all on the same page before we dive into animation. You'll
                                have the opportunity to review and provide feedback on the storyboard before we move
                                forward.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headinFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapsFive" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseFive">
                                What industries do you have experience creating explainer videos for?
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingFive">
                            <div className="accordion-body">
                                We've worked with a range of industries, from tech and healthcare to education and
                                finance. No matter your field, we’ve the expertise to create an explainer video that
                                fits with your target audience.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}