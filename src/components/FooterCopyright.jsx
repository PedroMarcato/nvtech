function FooterCopyright() {
    return (
        <section className="footer-section">
            <footer className="footer-copyright">
                <p>
                    &copy; {new Date().getFullYear()} <strong>NV TECH.</strong> Todos os direitos reservados.
                </p>
                <p>
                    Desenvolvido por <strong><i class="fa-solid fa-code"></i> CODES MARCATO </strong>
                </p>
                </footer>
        </section>
    );
}
export default FooterCopyright;