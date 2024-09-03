import Hero from './components/Hero';
import Nav from './components/Nav';
import Products from './components/Products';
import Quality from './components/Quality';
import Features from './components/Features';
import Offers from './components/Offers';
import Testimonials from './components/Testimonials';
import Updates from './components/Updates';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-montserrat">
      <Nav />
      <Hero id={1} />
      <Products id={3} />
      <Quality id={2} />
      <Features />
      <Offers />
      <Testimonials />
      <Updates id={4} />
      <Footer />
    </div>
  );
}
