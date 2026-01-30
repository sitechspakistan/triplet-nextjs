import PhoneInput from "./PhoneInput";

export default function ContactForm() {
    return (
        // <!-- contact-form  -->
        <section className="contact-form pb-5">
            <div className="container">
                <div className="boxx">
                    <div className="row">
                        <div className="col-xl-6">
                            <h2 className="contact-heading">Book a meeting <br /> <span>and get a quote today.</span></h2>
                            <img src="/assets/images/contact/contact-bg-1-1.png" alt="" />
                        </div>
                        <div className="col-xl-6">
                            <form action="/">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <input type="text" className="form-input has-error" placeholder="Name" />
                                    </div>
                                    <div className="col-xl-6">
                                        <input type="email" className="form-input" placeholder="Email Address" />
                                    </div>

                                    <div className="col-xl-6">
                                        {/* <input type="tel" className="form-input" placeholder="Phone" /> */}
                                        <PhoneInput />
                                    </div>
                                    <div className="col-xl-6">
                                        <select name="budget" id="budget" className="form-input">
                                            <option value="">Select Budget</option>
                                            <option value="$1500-$3000">$1500 – $3000</option>
                                            <option value="$3000-$700">$3000 – $7000</option>
                                            <option value="$7000-$10000">$7000 – $10000</option>
                                            <option value="$2000+">$10000+</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-12">
                                        <textarea name="txt" id="txt" className="text-from"
                                            placeholder="A brief description about your project/request/consultation"
                                            rows="6" style={{ minHeight: "140px", }}></textarea>

                                    </div>
                                </div>
                                <button className="btn-form">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}