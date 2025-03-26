import Hero from "./components/Hero";
import WhoWeAre from "./components/Content1";
import ChargingSolutions from "./components/Content2";
import HowItWorks from "./components/Content3";
import HowWeHelp from "./components/Content4";
import Testimonials from "./components/Content5";
import FAQSection from "./components/Content6";
import BlogSection from "./components/Content7";
import DownloadApp from "./components/Content8";

export default function Main() {
  return (
    <main>
      <div>
        <Hero />
        <WhoWeAre />
        <ChargingSolutions />
        <HowItWorks />
        <HowWeHelp />
        <Testimonials />
        <FAQSection />
        <BlogSection />
        <DownloadApp />
      </div>
      
    </main>
);
}
