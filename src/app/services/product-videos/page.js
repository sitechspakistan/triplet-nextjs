import Carousel from "@/app/components/Carousel";
import ContactForm from "@/app/components/ContactForm";
import Faqs from "@/app/components/Faqs";
import ServiceHero from "@/app/components/ServiceHero";
import ShadowLeftSec from "@/app/components/ShadowLeftSec";
import ShadowRightSec from "@/app/components/ShadowRightSec";
import TextSec from "@/app/components/TextSec";

export default function ProductVideos() {
    return (
        <>
            <ServiceHero Heading={"Product Demo Videos That Don't Just Show, They Sell, Convert & Grow"}
                Paragraph="We’ll convert your product’s story into an engaging video that leaves viewers wanting
                                more." />
            <TextSec
                heading="Our product videos break down complex features into bite-sized, visually
                    appealing stories. We’ll showcase your product’s benefits in a way that’s clear, engaging, and
                    impossible to ignore. The result? More informed customers, eager to take the next step." />
            <ShadowRightSec
                VideoUrl={"https://player.vimeo.com/video/616950950?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                Heading={"Turn Viewers into Buyers with Compelling Product Videos"}
                Description={
                    <>
                        Boost engagement, build trust, and drive sales with Creative Triplet’s product videos.
                        Viewers spend more time and are up to 85% more likely to buy after watching a product demo.
                        Our storytelling expertise, combined with clear messaging and captivating visuals, showcases
                        your product’s value. From startups to global brands, we create videos that deliver
                        measurable results.
                    </>
                }
                btnlink={"/"}
                Btntxt={"Let's help your product shine."} />

            <ShadowLeftSec VideoUrl={"/assets/images/explainer-video/explainer-image11.png"}
                Heading={"Why Top Brands Choose Creative Triplet"}
                Description={
                    <>
                        We've earned the trust of over dozens of clients, including global giants like Microsoft,
                        GoDaddy, and P&G. Our videos have been viewed millions of times, showcasing our ability to
                        create content that fits across borders and industries.<br /><br />


                        Since 2016, we've consistently delivered exceptional results, earning a 5- star rating from
                        our clients. We're passionate about pushing creative boundaries and exceeding
                        expectations.<br /><br />


                        If you're a company that's serious about using best product videos to achieve its goals,
                        we're the partner you've been looking for.
                    </>
                }
                btnlink={"/"}
                Btntxt={"Schedule a free consultation Today"} />
            <ShadowRightSec
                VideoUrl={"https://player.vimeo.com/video/602267009?badge=0&autopause=0&player_id=0&app_id=58479/embed"}
                Heading={"Our Simple 3-Step Process"}
                Description={
                    <>
                        At Creative Triplet, we simplify video production with a clear, 3-step process:
                        <ul>
                            <li>
                                Creative Collaboration: We align on your goals and vision
                            </li>
                            <li>Script & Strategy: We craft a compelling script tailored to your audience.</li>
                            <li>Production & Delivery: Stunning visuals bring your story to life, ensuring the final
                                video exceeds expectations.</li>
                        </ul>
                        Enjoy transparency, collaboration, and impactful results.
                    </>
                }
            />
            <ShadowLeftSec
                VideoUrl={"/assets/images/explainer-video/explainer-image2.png"}
                Heading={"Partner with a Team that Delivers Lasting Value"}
                Description={
                    <>
                        We get it. You need a video that works hard for your brand, not just today but for years to
                        come. That's why we focus on creating videos that are more than just eye-catching, they're
                        strategic assets that deliver long-term value.<br /><br />


                        We're a team of passionate storytellers who love bringing ideas to life through video. We've
                        built our reputation on exceeding expectations and creating videos that match with audiences
                        and drive real results. Choose Creative Triplet for product demo videos that keep engaging
                        and converting for years to come.
                    </>
                }
            />
            <Carousel />
            <Faqs />
            <ContactForm />


        </>
    )
}