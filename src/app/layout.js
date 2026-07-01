import Script from "next/script";
import "../styles/bootstrap.min.css"
import "../styles/custom.css"
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import Link from "next/link";
import ChatBot from "./components/ChatBot";
import ScrollToTop from "./components/ScrollToTop";


export const metadata = {
  title: "Backed by Top VCs. Loved by Founders. Built by Us.",
  description: "Creative Triplet is the #1 animated explainer video production company that makes your message unforgettable with videos that drive action",
  alternates: {
    canonical: "https://creativetriplet.com/",
  },
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/assets/images/ct-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

      </head>
      <body>

        <Header />

        <main> {children} </main>
        <Footer />
        <ChatBot />
        <ScrollToTop />

        {/* <!-- call and booking icon  --> */}
        <div>
          <div className="side-bars hidden-phone" style={{ zIndex: 10, }}>
            <div className="s-bar bar-number normal-n">
              <a className="lchat normal-n" title="Call Now" href="tel:+1 (817) 753 4447" target="_self"
                rel="noopener noreferrer">
                <span className="sidebar-icon two call"> </span>
                Call Now: <span> +1 (817) 753 4447 </span>
              </a>
            </div>
            <div className="s-bar">
              <Link href="/book-a-metting" className="d-flex align-items-center text-decoration-none">
                <span className="sidebar-icon two"></span>
                <span className="ms-2">Book a Meeting</span>
              </Link>
              <div className="clear"></div>
            </div>
          </div>

        </div>
        {/* <!-- call and booking icon  --> */}
        <Script src="https://player.vimeo.com/api/player.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
        {/* <Script src="/assets/custom.js"></Script> */}

      </body>
    </html >
  );
}
