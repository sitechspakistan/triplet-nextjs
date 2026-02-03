import Portfolio from "../components/Portfolio";
import ContactForm from "../components/ContactForm";
import ServiceHero from "../components/ServiceHero";

export const metadata = {
    title: "Portfolio - Creative Triplet",
    description: "Our Portfolio Our work speaks for itself. We’ve helped countless businesses and brands bring their ideas to life with engaging, high-quality animated explainer videos. From startups to established companies, we’ve worked with clients across industries to create videos that not only look great but also drive results. Explore our portfolio to see examples of our work and get a feel for the quality of our animated explainer videos.",
    alternates: {
        canonical: "https://creativetriplet.com/portfolio/",
    },

};

export default function PortFolio() {
    return (
        <>
            <ServiceHero
                bgImage={"/assets/images/portfolio/portfolio-banner-1.png"}
                Heading={"A Showcase of Our Finest Work"}
                Paragraph="From global brands to local heroes, we’ve helped countless businesses achieve their goals through the power of video. Explore our animated explainer video company portfolio and see the results for yourself." />
            <Portfolio />
            <ContactForm />
        </>
    )
}