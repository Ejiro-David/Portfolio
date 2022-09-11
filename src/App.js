import "./App.css";

import About from "./components/about/about";
import Contact from "./components/Contact/Contact";
import Intro from "./components/intro/intro";
import ProductList from "./components/ProductList/ProductList";
import Toggle from "./components/Toggle/Toggle";

function App() {
  return (
    <div className="App">
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
