import Hero from "./components/Hero3";
import EvChargingSection from "./components/Content31";
import DownloadApp from "../components/MobileAppBanner";

export default function Main() {
  return (
    <main>
      <div className="app-width ">
        <Hero />
        <EvChargingSection />
        <DownloadApp />
      </div>  
    </main>
);
}
