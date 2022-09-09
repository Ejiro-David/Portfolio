import './App.css';

import About from './components/about/about';
import Contact from './components/Contact/Contact';
import Intro from './components/intro/intro';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  );
}

export default App;
