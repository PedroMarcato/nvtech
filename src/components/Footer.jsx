function Footer() {
    return (
        <footer className="footer">
            <div className="elements">
                <div>
                    <h3>Contato</h3>
                    <h4 style={{ marginBottom: 2 }}>Fone:</h4>
                    <p style={{ margin: 0 }}>(44) xxxxx-xxxx</p>
                    <p style={{ margin: 0 }}>(44) xxxxx-xxxx</p>
                    <h4 style={{ marginBottom: 2 }}>Email:</h4>
                    <p style={{ margin: 0 }}>email@gmail.com</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <h3>Social</h3>
                    <a href="https://www.instagram.com/nvtech.info?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        <i class="fa-brands fa-instagram footer-icon"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send/?phone=5544998413665&text&type=phone_number&app_absent=0">
                        <i class="fa-brands fa-whatsapp footer-icon"></i>
                    </a>
                    <a href="https://www.facebook.com/">
                        <i class="fa-brands fa-facebook footer-icon"></i>
                    </a>
                    <a href="https://www.linkedin.com/">
                        <i class="fa-brands fa-linkedin footer-icon"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;