"use client"
import PhoneInput from "./PhoneInput";
import { useState } from "react";

export default function ContactForm() {
    const [success, setSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        budget: "",
        message: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        if (error) setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess(false);


        const phoneField = e.target.querySelector('input[name="phoneInput"]');
        const internationalPhone = phoneField?.dataset?.fullNumber || phoneField?.value || "";


        const requiredFields = [formData.name, formData.email];

        if (requiredFields.some(field => !field || !field.trim())) {
            setError("Please fill all the required fields first! ⚠️");
            return;
        }


        const finalSubmissionData = {
            ...formData,
            phone: internationalPhone
        };

        console.log("Submitting with Country Code:", finalSubmissionData);


        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: finalSubmissionData.name,
                email: finalSubmissionData.email,
                budget: String(finalSubmissionData.budget),
                message: finalSubmissionData.message,
                phone: finalSubmissionData.phone
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
        } else {
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="contact-form pb-5" id="conform">
            <div className="container">
                <div className="boxx">
                    <div className="row">
                        <div className="col-xl-6">
                            <h2 className="contact-heading">Book a meeting <br /> <span>and get a quote today.</span></h2>
                            <img src="/assets/images/contact/contact-bg-1-1.png" alt="" />
                        </div>
                        <div className="col-xl-6">
                            <form onSubmit={handleSubmit} >
                                <div className="row">
                                    <div className="col-xl-6">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="form-input"
                                            placeholder="Name"
                                            required
                                        />
                                    </div>
                                    <div className="col-xl-6">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-input"
                                            placeholder="Email Address"
                                            required
                                        />
                                    </div>

                                    <div className="col-xl-6">
                                        <PhoneInput defaultValue="" />
                                    </div>

                                    <div className="col-xl-6">
                                        <select
                                            name="budget"
                                            id="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="form-input"
                                        >
                                            <option value="">Select your budget</option>
                                            <option value="$1500-$3000">$1,500 – $3,000</option>
                                            <option value="$3000-$7000">$3,000 – $7,000</option>
                                            <option value="$7000-$10000">$7,000 – $1,0000</option>
                                            <option value="$10000">$10,000+</option>
                                        </select>
                                    </div>
                                    <div className="col-xl-12">
                                        <textarea
                                            name="message"
                                            id="txt"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="text-from"
                                            placeholder="A brief description about your project"
                                            rows="6"
                                            style={{ minHeight: "140px" }}

                                        ></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn-form" data-hover="Send Message">
                                    <span className="btntxt">Send Message</span>
                                </button>
                                {error && <p className="error-msg">{error}</p>}
                                {success && <p className="thanks-msg">Thank you for your message ✅</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}