import ContactForm from "../components/ContactForm";
import ContentRightFlags from "../components/ContentRightFlags";
import ProcessHero from "../components/ProcessHero";
import ProcessLeftConSec from "../components/ProcessLeftConSec";
import ProcessRightConSec from "../components/ProcessRightConSec";

export const metadata = {
    title: "Process - Creative Triplet",
    description: "Sit Back and Watch Your Animated Explainer Videos Come to Life Making awesome videos doesn’t have to be complicated. We’ve got a simple, step-by-step process that turns your ideas into reality. 01 Share Your Vision We start by getting to know you and your goals. Tell us about your ideas,what you want to achieve with [&hellip;]",
    alternates: {
        canonical: "https://creativetriplet.com/process/",
    },

};

export default function Process() {
    return (
        <>
            <ProcessHero />
            <ProcessRightConSec
                image={"/assets/images/process/content-img/01-left-1024x599.png"}
                heading={"Share Your Vision"}
                para={
                    <>
                        We start by getting to know you and your goals. Tell us about your ideas,
                        what you want to achieve with the video, and who you want to reach. We’ll
                        listen carefully and ask questions to make sure we’re on the same page.<br /><br />

                        Even if you’ve never worked with a video production company before, don’t
                        worry! We’ll explain everything in plain language and keep you involved
                        throughout the entire process. You’ll have the final say on every decision,
                        so you can be confident that the finished product is exactly what you
                        envisioned.
                    </>
                }
                numb={"01"}
            />
            <ProcessLeftConSec
                image={"/assets/images/process/content-img/02-right-1024x598.png"}
                heading={"Bringing Your Ideas to Life"}
                para={
                    <>
                        Once we understand your vision, our creative team gets to work. We’ll
                        brainstorm ideas and develop a concept that captures the essence of your
                        message. Then, we’ll craft a script that’s clear, concise, and tailored to your
                        target audience.<br /><br />

                        We’ll share our ideas with you and explain our thought process, giving you
                        the chance to provide feedback and make sure we’re on the right track. We
                        believe in collaboration and want to ensure that the script perfectly reflects
                        your vision and goals. Remember, a great script is the foundation of a great
                        video. We’ll work together to make sure yours is spot-on.
                    </>
                }
                numb={"02"}
            />

            <ProcessRightConSec
                image={"/assets/images/process/content-img/3.png"}
                heading={"Set the Scene"}
                para={
                    <>
                        With your script polished and approved, our team of artists starts bringing
                        your vision to life. We begin by creating a detailed storyboard—like a comic
                        book version of your video—that outlines the key scenes and actions.<br /><br />

                        Next, we’ll create a few “style frames”—essentially beautiful snapshots that
                        showcase the visual style of your animated video. These frames give you a
                        sneak peek at the color palette, characters, and overall aesthetic we’ll be
                        using, which allows you to provide feedback and ensure it fits with your
                        brand and vision.
                    </>
                }
                numb={"03"}
                className="process-shadow-right"
            />
            <ProcessLeftConSec
                image={"/assets/images/process/content-img/04-again-1024x547.png"}
                heading={"Craft the Visuals"}
                para={
                    <>
                        With the storyboard as our guide, our talented illustrators start creating the
                        artwork for your video. They’ll bring your characters, scenes, and ideas to
                        life with eye-catching colors, dynamic compositions, and a touch of
                        personality.<br /><br />

                        Our artists carefully consider every detail, from character design to
                        background elements, to ensure that the visuals perfectly complement your
                        message and resonate with your audience. We’ll also keep you updated
                        throughout the process, sharing sketches and designs so you can provide
                        feedback and ensure the visuals match your vision.
                    </>
                }
                numb={"04"}
            />
            <ContentRightFlags />
            <ProcessLeftConSec
                image={"/assets/images/process/content-img/06-image-1024x667.png"}
                heading={"Bring Your Story to Life with Animation"}
                para={
                    <>
                        Our skilled animators take the reins, changing your illustrations and voiceover into a
                        dynamic and captivating video. They add movement, personality, and a touch of magic to every
                        scene, ensuring your message comes alive on screen. We'll also keep you in the loop with
                        progress videos, so you can see your vision taking shape and provide feedback along the way.
                    </>
                }
                numb={"06"}
            />

            <ProcessRightConSec
                image={"/assets/images/process/content-img/07-transparent-1024x619.png"}
                heading={"The Final Touches & Your Stamp of Approval"}
                para={
                    <>
                        We’re almost there! Once the animation is complete, we’ll polish every detail, ensuring the
                        sound, visuals, and pacing are perfect. Then, we’ll share the final draft with you for
                        review. Your feedback is essential.<br /><br />

                        We’ll work with you to make any final tweaks or adjustments until you’re 100% happy with the
                        result. After all, this is your video, and we want it to be something you’re proud to share
                        with the world. This collaborative approach is key to our explainer video production
                        process. We believe that working closely with you at every stage ensures a final product
                        that exceeds your expectations and achieves your goals.
                    </>
                }
                numb={"07"}
                className="process-shadow-left"
            />
            <ContactForm />
        </>
    )
}