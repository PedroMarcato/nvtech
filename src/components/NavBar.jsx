function Navbar() {
  return (
    <nav className="navbar">
      <div className="logoContainer"><a href="#hero"><img src="https://i.imgur.com/I8LKNJe.png" alt="NVTECH" /></a></div>
      <ul>
        <li><a href="#hero">Início</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li className="hidden"><a href="#contact"><i style={{color: '#b99b57'}} class="fa-solid fa-phone-flip"></i></a></li>
        <li className="display"><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;