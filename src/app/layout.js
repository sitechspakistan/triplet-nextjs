import Script from "next/script";
import "../styles/bootstrap.min.css"
import "../styles/custom.css"
import "../styles/slick.css"
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import Link from "next/link";

export const metadata = {
  title: "Backed by Top VCs. Loved by Founders. Built by Us.",
  description: "Creative Triplet is the #1 animated explainer video production company that makes your message unforgettable with videos that drive action",
  alternates: {
    canonical: "https://creativetriplet.com/",
  },
  icons: {
    icon: "/assets/images/ct-favicon.png",
    // shortcut: "/assets/images/ct-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main> {children} </main>

        <Footer />

        {/* <!-- call and booking icon  --> */}
        <div>
          <div className="side-bars hidden-phone" style={{ zIndex: 9, }}>
            <div className="s-bar bar-number normal-n">
              <a className="lchat normal-n" title="Call Now" href="/tel:+1 (817) 753 4447" target="_self"
                rel="noopener noreferrer">
                <span className="sidebar-icon two call"> </span>
                Call Now: <span> +1 (817) 753 4447 </span>
              </a>
            </div>
            <div className="s-bar"><Link href="/book-a-metting">
              <span className="sidebar-icon two"> </span>
              <span>Book a Meeting</span></Link>
              <div className="clear"></div>
            </div>
          </div>

        </div>
        {/* <!-- call and booking icon  --> */}
        <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
        <Script src="/assets/bootstrap.bundle.min.js"></Script>
        <Script src="/assets/custom.js"></Script>
        <Script src="/assets/slick.js"></Script>

      </body>
    </html >
  );
}
