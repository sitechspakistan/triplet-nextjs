"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Thank you page redirect ke liye
import PhoneInput from "./PhoneInput";
import LoadingBar from "./LoadingBar";

export default function GetQuoteForm() {
    const router = useRouter();
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        budget: "",
        message: ""
    });
    const [error, setError] = useState("");
    const [step, setStep] = useState(1);
    const [service, setService] = useState("");
    const [attempted, setAttempted] = useState(false);

    const progress = step === 1 ? 0 : 50;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (error) setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Ab yeh refresh ko perfectly rokega
        setError("");
        setSuccess(false);

        // 1. Phone Input se full number nikalna
        const phoneField = e.target.querySelector('input[name="phoneInput"]');
        const internationalPhone = phoneField?.dataset?.fullNumber || phoneField?.value || "";

        // 2. Validation Check (Message Box optional rkha hai)
        const requiredFields = [formData.name, formData.email, internationalPhone];

        if (requiredFields.some(field => !field || !field.trim())) {
            setError("Please fill all the required fields first! ⚠️");
            return;
        }

        const finalSubmissionData = {
            ...formData,
            phone: internationalPhone,
            service: service,
            source: "Get a Quote Page"
        };

        console.log("Submitting with Country Code & Service:", finalSubmissionData);

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: finalSubmissionData.name,
                email: finalSubmissionData.email,
                budget: String(finalSubmissionData.budget),
                message: finalSubmissionData.message || "No message provided",
                phone: finalSubmissionData.phone,
                source: finalSubmissionData.source,
                service: finalSubmissionData.service // Backend par selected video style bhejne ke liye
            }),
        });

        const data = await res.json();

        if (data.success) {
            setSuccess(true);
            setError("");
            setFormData({ name: "", email: "", budget: "", message: "" });

            if (phoneField) {
                phoneField.value = "";
                delete phoneField.dataset.fullNumber;
            }
            router.push("/thank-you");
            // Agar alag Thank you page par bhejna chahein:
            // router.push("/thank-you");
        } else {
            setError("Something went wrong. Please try again.");
        }
    };

    const handleServiceSelect = (e) => {
        e.preventDefault();
        const value = e.currentTarget.getAttribute("data-value");
        setService(value);
        setAttempted(false); // Service select hote hi error red lines hat jayein
    };

    return (
        <section className="get-a-quote">
            <div className="container quote-content-two">
                <LoadingBar progress={progress} />
                <h2>Project Info</h2>
                <p>(Please Select A Style)</p>

                {/* FIX 1: onSubmit lagaya taake function execution properly ho */}
                <form id="getQuoteForm" onSubmit={handleSubmit} noValidate>

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
                                        return (
                                            <div className="col-xl-4" key={i}>
                                                <li
                                                    className={`quote-service ${isSelected ? "active" : ""}`}
                                                    style={{
                                                        border: attempted && !service ? "2px solid red" : "2px solid transparent",
                                                        borderRadius: "8px",
                                                        transition: "border 0.2s ease"
                                                    }}
                                                >
                                                    <a
                                                        href="javascript:;"
                                                        className="select-service"
                                                        data-value={item.title}
                                                        onClick={handleServiceSelect}
                                                    >
                                                        <img src={`/assets/images/quote-form/${item.img}`} alt={item.title} />
                                                        <h3>{item.title}</h3>
                                                    </a>
                                                </li>
                                            </div>
                                        );
                                    })}
                                </div>
                            </ul>

                            <div>
                                {attempted && !service && (
                                    <p style={{ color: "red", marginTop: "10px", fontWeight: "500", fontSize: "14px" }}>
                                        Please select a service first before proceeding.
                                    </p>
                                )}
                                <button
                                    type="button"
                                    className="next-step"
                                    data-hover="Next"
                                    onClick={() => {
                                        if (!service) {
                                            setAttempted(true);
                                            return;
                                        }
                                        setStep(2);
                                    }}
                                >
                                    <span className="btntxt">Next</span>
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
                                        <input type="text" name="name" placeholder="Name*" value={formData.name} onChange={handleChange} required />
                                        <span className="animate-border"></span>
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    <div className="input-wrapper">
                                        <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required />
                                        <span className="animate-border"></span>
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    <div className="input-wrapper">
                                        <PhoneInput defaultValue="" />
                                        <span className="animate-border"></span>
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    <select name="budget" className="form-input" value={formData.budget} onChange={handleChange}>
                                        <option value="">Select Budget</option>
                                        <option value="$1500-$3000">$1500 – $3000</option>
                                        <option value="$3000-$7000">$3000 – $7000</option>
                                        <option value="$7000-$10000">$7000 – $10000</option>
                                        <option value="$10000+">$10000+</option>
                                    </select>
                                </div>

                                <div className="col-xl-12">
                                    {/* FIX 2: name ko 'txt' se badal kar 'message' kiya */}
                                    <textarea
                                        name="message"
                                        className="mb-4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="A brief description about your project/request/consultation (Optional)"
                                        rows="5"
                                    />
                                </div>
                            </div>

                            <button
                                type="button"
                                className="previous-btn"
                                data-hover="Previous"
                                onClick={() => {
                                    setStep(1);
                                    setAttempted(false);
                                }}
                            >
                                <span className="btntxt">Previous</span>
                            </button>

                            {/* Is button par submit lagane se automatically upar wala handleSubmit chalega */}
                            <button type="submit" className="req-quote" data-hover="Request Quote">
                                <span className="btntxt">Request Quote</span>
                            </button>
                        </div>
                    )}

                    {error && <p className="error-msg" style={{ color: "red", marginTop: "15px" }}>{error}</p>}
                    {success && <p className="thanks-msg" style={{ color: "green", marginTop: "15px" }}>Thank you for your message ✅</p>}
                </form>
            </div>
        </section>
    );
}