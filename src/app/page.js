import AllNews from "./components/AllNews";
import Footer from "./components/Footer";
import Maincard from "./components/Maincard";
import FıllterConsole from "./components/FıllterConsole";
export default function Home() {
  return (
    <div>
      <Maincard />
      <FıllterConsole />
      <AllNews />
      <Footer />
    </div>
  );
}
