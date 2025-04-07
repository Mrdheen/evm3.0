import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import ChargingSolutions from "./components/ChargingSolutions";
import HowItWorks from "./components/HowItWorks";
import HowWeHelp from "./components/HowWeHelp";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FaqSection";
import BlogSection from "./components/BlogSection";
import DownloadApp from "./components/MobileAppBanner";
import PartnersLogos from "./components/Partners";
import { Fragment } from "react";

export default function Main() {
  return (
    <Fragment>
      <Hero />
      <WhoWeAre />
      <ChargingSolutions />
      <PartnersLogos />
      <HowItWorks />
      <HowWeHelp />
      <Testimonials />
      <FAQSection />
      <BlogSection />
      <DownloadApp />
    </Fragment>
  );
}
