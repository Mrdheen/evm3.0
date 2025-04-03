import Hero from "./components/Hero1";
import ContactSection from "./components/ContactSect";
import DownloadApp from "../components/MobileAppBanner";

export default function Main() {
  return (
    <main>
      <div>
        <Hero />
        <ContactSection />
        <DownloadApp />
      </div>  
    </main>
);
}
