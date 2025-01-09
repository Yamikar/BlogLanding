import Header from "./components/Header";
import Section from "./components/Section";
import AllNews from "./components/AllNews";
import Daily from "./components/Daily";
import Footer from "./components/Footer";
import MınıBlog from "./components/MınıBlog";
import AdsCard from "./components/AdsCard";
export default function Home() {
  return (
    <div>
      <Header />
      <Section />
      <AllNews />
      <AdsCard />
      <MınıBlog />
      <Daily />
      <Footer />
    </div>
  );
}
