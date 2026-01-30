import ContactForm from "./components/ContactForm";
import Fortune from "./components/Clients";
import Hero from "./components/Hero";
import LeftSection from "./components/LeftContent";
import ProudSec from "./components/ClucthReviews";
import RightSection from "./components/RightContent";
import Selected from "./components/HomePortfolio";
// import SelectedPro from "./components/SelectedPro"
import ServiceSec from "./components/HomeServices";


export const metadata = {
  title: "Backed by Top VCs. Loved by Founders. Built by Us.",
  description: "Creative Triplet is the #1 animated explainer video production company that makes your message unforgettable with videos that drive action",
  alternates: {
    canonical: "https://creativetriplet.com/",
  },

};

export default function Home() {
  const content_1 = (
    <>
      <p className="con-video">We transformed their ultra-complex molecular-counting tech into a
        compelling investment
        narrative — a video asset featured directly in their Series D deck.</p>
      <h3 className="pt-3">Results</h3>
      <ul className="pb-3 con-video">
        <li>Closed a $130M oversubscribed round, achieving unicorn status (~$1B valuation)</li>
        <li>Scaled from $0 to $125M ARR in four years, completed global rollout to 500K+ patients
        </li>
      </ul>
    </>
  );
  const content_2 = (
    <>
      <p className="con-video">Developed a suite of care-pipeline videos—from migraine treatment to
        dementia
        workflows—tailored for employers, health plans, and end users.</p>
      <h3 className="pt-3">Results</h3>
      <ul className="pb-3 con-video">
        <li>Aided expansion into enterprise channels post-$8M seed round</li>
        <li>Delivered measurable patient impact: 2.6x ROI in ER savings and 3.5x overall return for
          employers</li>
        <li>Published NPS of 90 and peer-reviewed clinical outcomes</li>
      </ul>
    </>
  );
  const content_3 = (
    <>
      <p className="con-video">Produced a platform video visualizing how Fundmetric unifies donor data to
        predict behavior,
        automate campaigns, and drive giving.</p>
      <h3 className="pt-3">Results</h3>
      <ul className="pb-3 con-video">
        <li>Clients saw +20% more donations and 2× response rates</li>
        <li>Backed by Volta and BDC Capital with $300K+ raised</li>
        <li>$Positioned to disrupt the $500B+ nonprofit fundraising market</li>
      </ul>
    </>
  );

  const content_right = (
    <>
      <p className="con-video">Produced an explainer showing how Schoox powers AI-driven skills mapping,
        microlearning, and
        analytics for global frontline teams.
        Produced an explainer showing how Schoox powers AI-driven skills mapping, microlearning, and
        analytics for global frontline teams.</p>
      <h3 className="pt-3">Results</h3>
      <ul className="pb-3 con-video">
        <li>3,500+ clients across 135+ countries</li>
        <li>25% YoY customer growth across frontline industries</li>
        <li>$8.5M+ raised, backed by Vista Equity Partners</li>
      </ul>
    </>
  );
  const content_right2 = (
    <>
      <p className="con-video">Produced a 3-part video suite visualizing Novi’s Insight Engine,
        Forecasting ML, and
        analytics — replacing legacy oil & gas research tools.</p>
      <h3 className="pt-3">Results</h3>
      <ul className="pb-3 con-video">
        <li>Closed enterprise deals with Shell, Fidelity, and more</li>
        <li>Scaled from $918K bootstrapped to $11M+ in funding</li>
        <li>Secured $35M PE round led by Invictus Growth</li>
      </ul>
    </>
  );




  return (
    <>
      <Hero />
      <ServiceSec />
      <ProudSec />
      <Selected />
      <Fortune />
      <LeftSection videoUrl="https://player.vimeo.com/video/1098294723?h=dc0162c167&autoplay=1&loop=1&muted=1&background=1"
        heading={"BillionToOne – $130M+ Series D (YC S17 graduate)"}
        paragraph="We transformed their ultra-complex molecular-counting tech into a
							compelling investment
							narrative — a video asset featured directly in their Series D deck."
        content={content_1} btntxt={"Let's Talk"} btnlink={"/"}
      />

      <RightSection videoUrl="https://player.vimeo.com/video/1098292166?h=e7a6dfbf56&autoplay=1&loop=1&muted=1&background=1"
        title={"Schoox – $8.5M raised; Vista-backed to Scale Enterprise Learning"}
        description="Produced an explainer showing how Schoox powers AI-driven skills mapping,
							microlearning, and
							analytics for global frontline teams.
							Produced an explainer showing how Schoox powers AI-driven skills mapping, microlearning, and
							analytics for global frontline teams."
        content={content_right} btntxt={"Let's Talk"} btnlink={"/"} />

      <LeftSection videoUrl="https://player.vimeo.com/video/1098292977?h=af5a72a31b&autoplay=1&loop=1&muted=1&background=1"
        heading={"Neura Health – $8M seed (+$2.2M pre-seed), $23.8M total to date"}
        paragraph="Developed a suite of care-pipeline videos—from migraine treatment to
							dementia
							workflows—tailored for employers, health plans, and end users."
        content={content_2} btntxt={"Let's Talk"} btnlink={"/"}
      />

      <RightSection videoUrl="https://player.vimeo.com/video/1098286335?h=64b067f8f8&autoplay=1&loop=1&muted=1&background=1"
        title={"Novi Labs – $11M+ raised; $35M PE to scale AI for energy"}
        description="Produced a 3-part video suite visualizing Novi’s Insight Engine,
							Forecasting ML, and
							analytics — replacing legacy oil & gas research tools."
        content={content_right2} btntxt={"Let's Talk"} btnlink={"/"}
      />

      <LeftSection videoUrl="https://player.vimeo.com/video/1098295340?h=32c1973467&autoplay=1&loop=1&muted=1&background=1"
        heading={"Fundmetric – $300K+ Raised; AI-first Fundraising for Higher Ed & Nonprofits"}
        content={content_3} btntxt={"Let's Talk"} btnlink={"/"}
      />

      <ContactForm />
    </>
  );
}
