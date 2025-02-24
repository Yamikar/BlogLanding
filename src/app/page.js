import Header from "./components/Header";
import AllNews from "./components/AllNews";
import Footer from "./components/Footer";
import Popcard from "./components/Popcard";
import Maincard from "./components/Maincard";
export default function Home() {
  return (
    <div>
      <Header />
      <Maincard />
      <Popcard />
      <AllNews />
      <Popcard />

      <Footer />
    </div>
  );
}
