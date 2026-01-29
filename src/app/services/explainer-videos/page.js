import Carousel from "@/app/components/Carousel";
import ContactForm from "@/app/components/ContactForm";
import Faqs from "@/app/components/Faqs";
import ServiceHero from "@/app/components/ServiceHero";
import ShadowLeftSec from "@/app/components/ShadowLeftSec";
import ShadowRightSec from "@/app/components/ShadowRightSec";
import TextSec from "@/app/components/TextSec";


export default function ExplainerVideos() {
    return (
        <>
            <ServiceHero Heading={"Videos That Don't Just Explain, They Engage & Convert."}
                Paragraph="We’ll break down your complex products, services, or ideas into bite- sized,
                                easy-to-understand animated explainer videos that engage and convert." />
            <TextSec heading="Stop losing potential customers to confusion. Sometimes simple text and static
                    images just don’t
                    cut. Explainer videos are a proven, strategic marketing tool to simplify complex messages, engage
                    your audience right from the start, and easily convert them."/>
            <ShadowRightSec VideoUrl={"https://player.vimeo.com/video/748818309?badge=0&autopause=0&player_id=0&app_id=58479/embed"}
                Heading={"Simplify Your Message with Engaging Explainer Videos"}
                Description="Explainer Videos turn complex ideas into engaging, easy-to-understand
                            content. With over a
                            decade of experience, Creative Triplet specializes in creating the best explainer videos
                            that grab attention, simplify messaging, and drive results. From startups to major brands,
                            we craft stories that convert visitors into customers. Transform your business with
                            high-impact explainer videos tailored to inspire, educate, and sell. Ready to see the
                            difference we can make?"
                btnlink={"/"} Btntxt={"Free Creative Session"} />

            <ShadowLeftSec VideoUrl={"/assets/images/explainer-video/explainer-image11.png"}
                Heading={"Why Choose Creative Triplet?"}
                Description="We're not just another animated explainer video company. We're a team of
                            dedicated
                            professionals who have built our reputation on delivering exceptional results and exceeding
                            client expectations.

                            Our track record speaks for itself. We've partnered with over 1000+ businesses — from
                            ambitious startups to established industry leaders — to create explainer videos that make a
                            difference.

                            At Creative Triplet, we're passionate about helping businesses succeed. We bring together a
                            diverse group of creative minds who share a common goal — to craft videos that cut through
                            the noise and capture your audience's attention.

                            We take the time to understand your unique business, which ensures that every video we
                            create fits perfectly with your brand and connects with your target audience. We're
                            committed to going above and beyond, delivering results that not only meet but exceed your
                            expectations."
                btnlink={"/"}
                Btntxt={"Free Creative Session"} />

            <ShadowRightSec VideoUrl={"https://player.vimeo.com/video/602215167?badge=0&autopause=0&player_id=0&app_id=58479/embed"}
                Heading={"Stress-Free Video Creation"}
                Description="Turn your idea into an impactful video effortlessly with Creative Triplet.
                            Our streamlined
                            process includes brainstorming, scriptwriting, storyboarding, and top-notch animation. In
                            just 4-6 weeks, you'll receive a custom-made explainer video that wows your audience. We
                            manage every detail, ensuring your video stands out with stunning visuals and strategic
                            messaging. Let us handle the hard work while you focus on your business."
                btnlink={"/"} Btntxt={"Free Creative Session"} />
            <ShadowLeftSec VideoUrl={"/assets/images/explainer-video/explainer-image2.png"}
                Heading={"Keep Inspiring Your Audience for Years to Come"}
                Description="Traditional marketing tactics often need constant tweaking to stay relevant, which can get
                            expensive fast. We do things differently. At Creative Triplet, we craft explainer videos
                            that are designed to deliver value for years to come.


                            We understand that a well-made video isn't just a one-time expense, it's an investment in
                            your brand's future. That's why we focus on creating videos that remain effective even as
                            your business grows and changes.


                            Our explainer videos are built to last. They're not just about grabbing attention today,
                            they're about clearly communicating your message and driving results for years down the
                            road."
                btnlink={"/"}
                Btntxt={"Free Creative Session"} />

            <Carousel />
            <Faqs />
            <ContactForm />


        </>
    )
}