import AboutHero from "../components/AboutHero";
import AboutLeftCon from "../components/AboutLeftCon";
import AboutRightCon from "../components/AboutRightCon";
import ContactForm from "../components/ContactForm";
import Faqs from "../components/Faqs";

export default function AboutUs() {
    return (
        <>
            <AboutHero />
            <AboutRightCon />
            <AboutLeftCon />
            <Faqs />
            <ContactForm />
        </>
    )
}