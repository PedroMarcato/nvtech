import { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMobileMenu();
    
    if (href === '#hero') {
      // Rola para o topo absoluto da página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Rola para a seção específica
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 70; // Altura aproximada da navbar
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logoContainer">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>
          <img src="https://i.imgur.com/I8LKNJe.png" alt="NVTECH" />
        </a>
      </div>
      
      {/* Menu Desktop */}
      <ul className="desktop-menu">
        <li><a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Início</a></li>
        <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>Sobre</a></li>
        <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Serviços</a></li>
        <li className="hidden">
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
            <i style={{color: '#b99b57'}} className="fa-solid fa-phone-flip"></i>
          </a>
        </li>
        <li className="display">
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contato</a>
        </li>
      </ul>

      {/* Botão Hambúrguer */}
      <button 
        className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Menu Mobile */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>Início</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>Sobre</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Serviços</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contato</a></li>
        </ul>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>}
    </nav>
  );
}
export default Navbar;