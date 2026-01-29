import Carousel from "@/app/components/Carousel";
import ContactForm from "@/app/components/ContactForm";
import Faqs from "@/app/components/Faqs";
import ServiceHero from "@/app/components/ServiceHero";
import ShadowLeftSec from "@/app/components/ShadowLeftSec";
import ShadowRightSec from "@/app/components/ShadowRightSec";
import TextSec from "@/app/components/TextSec";

export default function TrainingVideo() {
    return (
        <>
            <ServiceHero Heading={"Training Videos That Make Learning Fun & Effective"}
                Paragraph="We’l turn your dry training manuals and yawn-inducing presentations into animated
                                training videos that educate, engage, and inspire action"/>
            <TextSec heading="Forget those snooze-inducing training sessions! Our animated training videos
                    turn even the driest topics into engaging, easy-to- follow lessons. Your team will actually enjoy
                    learning, and you’ll see the difference in their performance."/>

            <ShadowRightSec VideoUrl={"https://player.vimeo.com/video/616238804?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}
                Heading={" Videos That Motivate and Educate"}
                Description="Ditch outdated training methods with Creative Triplet’s animated internal
                            videos. We use
                            storytelling to make learning fun, memorable, and impactful. Boost knowledge retention by
                            65% with visually rich, engaging narratives. From crafting customized strategies to tracking
                            engagement and performance improvements, we ensure your training videos deliver real
                            results. Transform employee learning with captivating videos that educate and inspire."
                btnlink={"/"} Btntxt={"Get In Touch"} />
            <ShadowLeftSec Heading={"Partner with a Team Trusted by Global Giants"}
                VideoUrl={"/assets/images/explainer-video/explainer-image11.png"}
                Description={
                    <>
                        When industry leaders like P&G need impactful training videos, they choose Creative Triplet.
                        We partnered with them to create a clear and engaging "Return to the Office" video, which
                        ensures a safe and informed return to the workplace.<br /> <br />


                        The result? Zero reported COVID cases and a confident workforce. We're proud to have helped
                        P&G make a positive impact, and we're ready to do the same for you. Whether it's training,
                        onboarding, or communicating key messages, our videos deliver results.
                    </>
                }
                btnlink={"/"} Btntxt={"Book Your Consultation Now"} />
            <ShadowRightSec VideoUrl={"https://player.vimeo.com/video/616253550?badge=0&autopause=0&player_id=0&app_id=58479/embed"}
                Heading={"Why Creative Triplet is Your Perfect Training Video Partner"}
                Description={
                    <>
                        We understand that every company is unique, so we ditch the cookie-cutter
                        approach. We'll
                        take the time to truly get to know your business, your goals, and your learners. Then, we'll
                        craft a custom video strategy that speaks their language and delivers real results.<br /><br />


                        Our team is made up of passionate storytellers, talented animators, and experienced
                        professionals who are obsessed with making learning fun. We'll bring your training to life
                        with eye-catching visuals, clear explanations, and a touch of personality.<br /><br />


                        But we don't stop there. We're also data nerds. We'll track how your videos are performing,
                        so you can see the impact they're having on your team. We'll help you measure engagement,
                        knowledge retention, and even on- the-job performance improvements.
                    </>
                }
                btnlink={"/"} Btntxt={"Get Started With a Free consultation"} />
            <ShadowLeftSec VideoUrl={"/assets/images/explainer-video/explainer-image2.png"}
                Heading={"Our Proven Engaging Training Videos Process"}
                Description={
                    <>
                        Forget the headaches and confusion that often come with creating training videos. We make
                        the process smooth, collaborative, and — dare we say — enjoyable. It all starts with a
                        conversation. We want to hear your goals, understand your audience, and grasp the heart of
                        your message.<br /><br />
                        This ensures that the videos we create aren't just visually appealing but also strategically
                        matched with your training objectives. From there, our creative minds get to work,
                        brainstorming concepts and weaving compelling narratives that capture attention and make
                        learning stick. We'll share ideas and storyboards with you every step of the way, making
                        sure your vision is at the forefront.<br /><br />
                        Once you're excited about the direction, our talented team of animators and editors take
                        over. They'll bring your story to life with vibrant visuals, clear explanations, and even a
                        touch of humor. We'll also help you get your videos in front of the right eyes, utilizing
                        proven distribution strategies to maximize their reach and impact.<br /><br />
                        With Creative Triplet, you're not just getting internal training video services, you're
                        gaining a dedicated partner invested in your training success.
                    </>}
                btnlink={"/"} Btntxt={"Schedule Free Consultation"} />
            <Carousel />
            <Faqs />
            <ContactForm />
        </>
    )
}