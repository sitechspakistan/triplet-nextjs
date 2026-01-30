import ClucthhWidgetFull from "../components/ClucthWidgetFull";
// import ClutchWidgetFull from "../components/ClucthWidgetFull";
import ContactForm from "../components/ContactForm";
import ServiceHero from "../components/ServiceHero";

export const metadata = {
    title: "Reviews - Creative Triplet",
    description: "Stories of Impact Being Made We’re proud of the work we do, but don’t just take our word for it. Hear directly from our clients about their experience working with Creative Triplet and the impact our animated explainer videos services have had on their businesses. Book a meeting and get a quote today.",
    alternates: {
        canonical: "https://creativetriplet.com/reviews/",
    },

};

export default function Reviews() {
    return (
        <>
            <ServiceHero Heading={"Stories of Impact Being Made"} Paragraph="We’re proud of the work we do, but don’t just take our word for it. Hear directly from
                                our clients about their experience working with Creative Triplet and the impact our
                                animated explainer videos services have had on their businesses." />
            <ClucthhWidgetFull />
            <ContactForm />

        </>
    )
}