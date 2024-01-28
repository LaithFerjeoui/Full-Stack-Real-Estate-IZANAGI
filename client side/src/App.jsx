import Carousel from "./components/Carousel";
import Companies from "./components/Companies";
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
    </div>
  );
}

export default App;
