import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import HomepageGrid from "./components/HomepageGrid";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Offer classes="pt-14 px-16" />
      <HomepageGrid />
      <Carousel />
      <Footer />
    </main>
  );
}

export default App;
