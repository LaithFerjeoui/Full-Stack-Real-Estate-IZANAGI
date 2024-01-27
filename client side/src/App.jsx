import Companies from "./components/Companies";
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="app">
      <div>
        
        <Header/>
        <div className="white-gradient "/>
        <Hero/>
      </div>
      <Companies/>
    </div>
  );
}

export default App;
