function FooterCopyright() {
    return (
        <section className="footer-section" style={{borderTop: "1px solid rgb(199 173 101 / 15%)"}}>
            <footer className="footer-copyright">
                <p>
                    &copy; {new Date().getFullYear()} <strong>NV TECH.</strong> Todos os direitos reservados.
                </p>
                <p>
                    Desenvolvido por <strong><a style={{textDecoration: "none", color: "inherit"}} href="https://www.instagram.com/pdro_marcato/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-code"></i> Pedro Otávio Rodrigues Marcato </a> </strong>
                </p>
                </footer>
        </section>
    );
}
export default FooterCopyright;