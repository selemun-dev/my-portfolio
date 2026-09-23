import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Volunteer from './components/Volunteer';
import Certifications from './components/Certifications';
import Gallery from './components/My_Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Volunteer />
      <Certifications />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}