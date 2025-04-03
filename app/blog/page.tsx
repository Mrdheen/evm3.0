import Hero from "./components/Hero2";
import BlogHeader from "./components/BlogHeader";
import BlogGrid from "./components/BlogGrid";
import DownloadApp from "../components/MobileAppBanner";

export default function Main() {
  return (
    <main>
      <div>
        <Hero />
        <BlogHeader />
        <BlogGrid />
        <DownloadApp />
      </div>  
    </main>
);
}
