import Hero from "./components/Hero";
import WhoWeAre from "./components/Content1";
import ChargingSolutions from "./components/Content2";
import HowItWorks from "./components/Content3";
import HowWeHelp from "./components/Content4";
import Testimonials from "./components/Content5";
import FAQSection from "./components/Content6";
import BlogSection from "./components/Content7";
import DownloadApp from "./components/Content8";
import { Fragment } from "react";

export default function Main() {
  return (
    <Fragment>
      <Hero />
      <WhoWeAre />
      <ChargingSolutions />
      <HowItWorks />
      <HowWeHelp />
      <Testimonials />
      <FAQSection />
      <BlogSection />
      <DownloadApp />
    </Fragment>
  );
}
