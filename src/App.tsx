import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { Reservation } from './components/Reservation';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark antialiased">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Menu />
      <Testimonials />
      <Gallery />
      <Reservation />
      <FAQ />
      <Location />
      <Footer />
      <FloatingActions />
    </div>
  );
}

