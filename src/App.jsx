import './css/App.css';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import PartnersSection from './components/PartnersSection.jsx';
import FooterCopyright from './components/FooterCopyright.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PartnersSection />
      <ContactSection />
      <Footer />
      <FooterCopyright />
    </div>
  );
}

export default App;