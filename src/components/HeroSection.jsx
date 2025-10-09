function HeroSection() {
    return (
        <section id="hero" className="hero-section" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="blur-left" />
            <div className="blur-right" />
            
                <div className="blur-box">
                    <h1>SOLUÇÕES EM CONECTIVIDADE</h1>
                    <h4>Bem-vindo(a), A <strong>NV TECH</strong>, tem o prazer de apresentar soluções completas e inovadoras em:</h4>
                    <ul style={{ paddingLeft: 25 }}
                        className="hero-description">
                        <li>Conectividade: Otimização Wi-Fi e implementação de Starlink.</li>
                        <li>Segurança: Instalação de câmeras de última geração.</li>
                        <li>Infraestrutura: Redes ópticas robustas e de alta velocidade.</li>
                        <li>Configuração e Gerenciamento: Ajustes personalizados para redes e equipamentos avançados.</li>
                    </ul>
                    <button className="button-special" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Saiba Mais</button>
                </div>
        </section>
    );
}
export default HeroSection;