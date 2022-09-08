import './App.css';

import About from './components/about/about';
import Intro from './components/intro/intro';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <ProductList/>
    </div>
  );
}

export default App;
