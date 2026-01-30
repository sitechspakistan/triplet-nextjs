import AboutHero from "../components/AboutHero";
import AboutLeftCon from "../components/AboutLeftCon";
import AboutRightCon from "../components/AboutRightCon";
import ContactForm from "../components/ContactForm";
import Faqs from "../components/Faqs";

export const metadata = {
    title: "About Us - Creative Triplet",
    description: "The Creative Triplet Story A little animation studio that could (and did!) In the beginning, there was just an idea. A simple one, really: videos can do what words alone can’t. They can ignite excitement, simplify the complicated, and bring people together over shared knowledge. That idea? It stuck with us, and it’s been our [&hellip;]",
    alternates: {
        canonical: "https://creativetriplet.com/about-us/",
    },

};

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