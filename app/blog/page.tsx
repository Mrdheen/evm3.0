import Hero from "./components/Hero2";
import BlogHeader from "./components/BlogHeader";
import PostCard from "./components/PostCard";
import DownloadApp from "../components/MobileAppBanner";

export default function Main() {
  return (
    <main>
      <div>
        <Hero />
        <BlogHeader />
        <PostCard />
        <DownloadApp />
      </div>  
    </main>
);
}
