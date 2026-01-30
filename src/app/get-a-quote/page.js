import GetQuoteForm from "../components/GetQuoteForm";
import GetQuoteHero from "../components/GetQuoteHero";

export const metadata = {
    title: "Get a Quote - Creative Triplet",
    description: "In need of video? Our production team can answer your questionsand create custom plans that fit your needs. We&#8217;ll even produce a script for your video &#8211; for free.",
    alternates: {
        canonical: "https://creativetriplet.com/get-a-quote/",
    },

};

export default function GetAQuote() {
    return (
        <>
            <GetQuoteHero />
            <GetQuoteForm />

        </>
    )
}