
import './App.css';
import Home from './components/Home';
import About from './components/About';
import  Products from './components/Products';
import  Testimonials from './components/Testimonials';
import  Contact from './components/Contact';
import  Footer from './components/Footer';
function App() {
  return (
    <>
    <div className="App">
          <Home/>
          <About/>
          <Products/>
          <Testimonials/>
          <Contact/>
          <Footer/>
    </div>
    </>
  );
}

export default App;
