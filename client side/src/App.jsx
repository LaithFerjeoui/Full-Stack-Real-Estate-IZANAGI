import Carousel from "./components/Carousel";
import Companies from "./components/Companies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Value from "./components/Value";
function App() {
  return (
    <div className="app">
      <div>
        <Header />
        <div className="white-gradient " />
        <Hero />
      </div>
      <Companies />
      <Carousel />
      <Value/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
