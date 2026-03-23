import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Categories } from './components/Categories';
import { SpecialCollections } from './components/SpecialCollections';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f0d4]">
      <Header />
      <Hero />
      <About />
      <Features />
      <Categories />
      <SpecialCollections />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}