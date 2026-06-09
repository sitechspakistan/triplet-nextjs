"use client";

import { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

export default function PhoneInput({ defaultValue }) {
    const inputRef = useRef(null);
    const itiRef = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || !inputRef.current) return;


        itiRef.current = intlTelInput(inputRef.current, {
            initialCountry: "pk",
            separateDialCode: true,
            preferredCountries: ["pk", "us", "gb"],
        });


        const handleUpdate = () => {
            if (itiRef.current && inputRef.current) {
                const fullNumber = itiRef.current.getNumber();
                inputRef.current.dataset.fullNumber = fullNumber;
            }
        };

        const inputEl = inputRef.current;
        inputEl.addEventListener("input", handleUpdate);
        inputEl.addEventListener("countrychange", handleUpdate);

        return () => {
            if (itiRef.current) {
                inputEl.removeEventListener("input", handleUpdate);
                inputEl.removeEventListener("countrychange", handleUpdate);
                itiRef.current.destroy();
            }
        };
    }, [mounted]);

    if (!mounted) {
        return <input type="tel" className="form-input w-100" placeholder="Phone" />;
    }

    return (
        <input
            ref={inputRef}
            type="tel"
            name="phoneInput"
            className="form-input w-100"
            placeholder="Phone"
            defaultValue={defaultValue}
            required
        />
    );
}