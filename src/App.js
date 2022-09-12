import { useContext } from "react";
import "./App.css";
import About from "./components/about/about";
import Contact from "./components/Contact/Contact";
import { ThemeContext } from "./components/context";
import Intro from "./components/intro/intro";
import ProductList from "./components/ProductList/ProductList";
import Toggle from "./components/Toggle/Toggle";

function App() {
  
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.dark

  return (
    <div className='App' style={{backgroundColor: darkMode ? '#222' : 'white', color: darkMode ? 'white' : 'black' }}>
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
