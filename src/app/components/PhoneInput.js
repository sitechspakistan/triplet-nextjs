"use client";

import { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

export default function PhoneInput() {
    const inputRef = useRef(null);

    useEffect(() => {
        if (!inputRef.current) return;

        const iti = intlTelInput(inputRef.current, {
            initialCountry: "auto",
            separateDialCode: true,
            preferredCountries: ["pk", "us", "gb"],
            geoIpLookup: (callback) => {
                fetch("https://ipapi.co/json/")
                    .then(res => res.json())
                    .then(data => callback(data.country_code))
                    .catch(() => callback("pk"));
            },
        });

        return () => {
            iti.destroy();
        };
    }, []);

    return (
        <input
            ref={inputRef}
            type="tel"
            className="form-input"
            placeholder="Phone"
        />
    );
}
