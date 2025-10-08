function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Seção da Empresa */}
                <div className="footer-column company-info">
                    <a href="#hero">
                        <img className="footer-logo" src="https://i.imgur.com/I8LKNJe.png" alt="NV TECH" />
                    </a>
                    <p className="company-description">
                        A NV TECH nasceu para transformar a experiência de conectividade, segurança e infraestrutura de redes. Oferecemos soluções inovadoras e confiáveis em Wi-Fi, Starlink, câmeras de segurança, redes ópticas e configuração de equipamentos avançados.
                        Missão: Levar tecnologia acessível e robusta para empresas, residências e instituições, conectando pessoas e impulsionando negócios com inovação.
                    </p>
                </div>

                {/* Seção de Navegação */}
                <div className="footer-column">
                    <h3 className="footer-title">
                        <i className="fas fa-compass footer-icon-title"></i>
                        Navegação
                    </h3>
                    <ul className="footer-links">
                        <li><a href="#hero">Início</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </div>

                {/* Seção de Contato */}
                <div className="footer-column">
                    <h3 className="footer-title">
                        <i className="fas fa-address-book footer-icon-title"></i>
                        Contato
                    </h3>
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="fas fa-phone footer-contact-icon"></i>
                            <div>
                                <p>(44) 9 9749-2070</p>
                                <p>(44) 9 9837-8922</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-envelope footer-contact-icon"></i>
                            <p>contato@nvtech.info</p>
                        </div>
                    </div>
                </div>

                {/* Seção de Redes Sociais */}
                <div className="footer-column">
                    <h3 className="footer-title">
                        <i className="fas fa-share-alt footer-icon-title"></i>
                        Redes Sociais
                    </h3>
                    <div className="social-links">
                        <a href="https://www.instagram.com/nvtech.info?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                           target="_blank" rel="noopener noreferrer" className="social-link instagram">
                            <i className="fab fa-instagram"></i>
                            <span>Instagram</span>
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=5544998413665&text&type=phone_number&app_absent=0" 
                           target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                            <i className="fab fa-whatsapp"></i>
                            <span>WhatsApp</span>
                        </a>
                        <a href="https://www.facebook.com/share/176t2CYuM8/?mibextid=wwXIfr" 
                           target="_blank" rel="noopener noreferrer" className="social-link facebook">
                            <i className="fab fa-facebook"></i>
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;