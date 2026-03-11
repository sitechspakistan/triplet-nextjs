"use client";

import { useState } from "react";
import PhoneInput from "./PhoneInput";
import LoadingBar from "./LoadingBar";

export default function GetQuoteForm() {
    const [step, setStep] = useState(1);
    const [service, setService] = useState("");
    const [attempted, setAttempted] = useState(false);
    const progress = step === 1 ? 0 : 50;
    const handleServiceSelect = (e) => {
        e.preventDefault();

        const value = e.currentTarget.getAttribute("data-value");
        setService(value);

        document.querySelectorAll(".quote-service").forEach(li => {
            li.classList.remove("active");
        });

        e.currentTarget.closest(".quote-service").classList.add("active");
    };

    return (
        <section className="get-a-quote">

            <div className="container quote-content-two">
                <LoadingBar progress={progress} />
                <h2>Project Info</h2>
                <p>(Please Select A Style)</p>

                <form id="getQuoteForm">

                    {/* STEP ONE */}
                    {step === 1 && (
                        <div id="quoteStepOne">
                            <ul>
                                <div className="row">
                                    {[
                                        { img: "2121.webp", title: "Expainer Video" },
                                        { img: "Brand.jpg", title: "Brand Video" },
                                        { img: "Trainin.jpg", title: "Training Video" },
                                        { img: "Product.jpg", title: "Product Video" },
                                        { img: "App1.jpg", title: "App Demo Video" },
                                        { img: "suggestion.jpg", title: "Want Us To Suggest?" },
                                    ].map((item, i) => {

                                        const isSelected = service === item.title;
                                        return <div className="col-xl-4" key={i}>
                                            <li className={`quote-service ${isSelected ? "active" : ""}`} style={{
                                                border: attempted && !service
                                                    ? "2px solid red"
                                                    : "2px solid transparent",
                                                borderRadius: "8px",
                                                transition: "border 0.2s ease"
                                            }}>
                                                <a
                                                    href="javascript:;"
                                                    className="select-service"
                                                    data-value={item.title}
                                                    onClick={handleServiceSelect}
                                                    required
                                                >
                                                    <img src={`/assets/images/quote-form/${item.img}`} />
                                                    <h3>{item.title}</h3>
                                                </a>
                                            </li>
                                        </div>

                                    }



                                    )}
                                </div>
                            </ul>


                            <div>

                                {attempted && !service && (
                                    <p style={{
                                        color: "red",
                                        marginTop: "10px",
                                        fontWeight: "500",
                                        fontSize: "14px",
                                        display: "inline-block"
                                    }}>
                                        Please select a service first before proceeding.
                                    </p>
                                )}
                                {/* <LoadingBar progress={progress} /> */}
                                <button
                                    type="button"
                                    className="next-step"
                                    // disabled={!service}
                                    onClick={() => {
                                        if (!service) {
                                            setAttempted(true); // red border + message dikhao
                                            return
                                        }
                                        setStep(2);
                                        // handleNext();

                                    }}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP TWO */}
                    {step === 2 && (

                        <div id="quoteStepTwo">

                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="input-wrapper">
                                        <input type="text" name="name" placeholder="Name*" required />
                                        <input type="hidden" name="service" id="ServiceInput" value={service} />
                                        <span className="animate-border"></span>
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    <div className="input-wrapper">
                                        <input type="email" name="email" placeholder="Email*" required />
                                        <span className="animate-border"></span>
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    <div className="input-wrapper">
                                        <PhoneInput />
                                        <span className="animate-border"></span>
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    <select name="budget" className="form-input">
                                        <option value="">Select Budget</option>
                                        <option value="$1500-$3000">$1500 – $3000</option>
                                        <option value="$3000-$7000">$3000 – $7000</option>
                                        <option value="$7000-$10000">$7000 – $10000</option>
                                        <option value="$10000+">$10000+</option>
                                    </select>
                                </div>

                                <div className="col-xl-12">
                                    <textarea
                                        name="txt"
                                        className="mb-4"
                                        placeholder="A brief description about your project/request/consultation"
                                        rows="5"
                                    />
                                </div>
                            </div>

                            <button
                                type="button"
                                className="previous-btn"
                                onClick={() => {
                                    setStep(1);
                                    setAttempted(false);

                                    // handleNext(0);

                                }}
                            >
                                Previous
                            </button>

                            <button type="submit" className="req-quote">
                                Request Quote
                            </button>

                        </div>
                    )}

                </form>
            </div>
        </section>
    );
}
