import Hero from "./components/Hero2";
import BlogHeader from "./components/Content21";
import PostCard from "./components/Content22";
import DownloadApp from "../components/Content8";

export default function Main() {
  return (
    <main>
      <div className="app-width ">
        <Hero />
        <BlogHeader />
        <PostCard />
        <DownloadApp />
      </div>  
    </main>
);
}
