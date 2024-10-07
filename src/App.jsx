import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return <div>

    <section id="Home">
      <Navbar />
      <Hero />
    </section>
    <section>
      <Parallax type="services"/>
    </section>
    <section id="Services">Services</section>
    <section>
      <Parallax type="portfolio"/>
    </section>
    <section id="Portfolio">Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>

  </div>;
};

export default App;
