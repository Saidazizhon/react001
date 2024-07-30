import logo from './logo.svg';
import './App.css';
import Header from './companents/header/Header';
import Hero from './companents/hero/Hero';
import Service from './companents/service/service';
import About from './companents/about/About';
import Years from './companents/years/Years';
import Says from './companents/says/Says';
import From from './companents/from/From';
import Dont from './companents/dont/Dont';
import Footer from './companents/footer/Footer';
function App() {

  return (
    <div className="App">
      <Header/>
     <Hero/>
     <Service/>
      <About/>
      <Years/>
      <Says/>
      <From/>
      <Dont/>
      <Footer/>
    </div>
  );
}

export default App;
