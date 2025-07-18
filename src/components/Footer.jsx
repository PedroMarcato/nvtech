function Footer() {
    return (
        <footer className="footer">
            <div className="elements">
                <div>
                    <a href="#hero"><img style={{width: '120px', height: 'auto'}} src="https://i.imgur.com/I8LKNJe.png" alt="NV TECH" /></a>
                    <h4 style={{ marginBottom: 2, marginTop: 2}}>Telefone:</h4>
                    <p style={{ margin: 0 }}>(44) 9 9749-2070</p>
                    <p style={{ margin: 0 }}>(44) 9 9837-8922</p>
                    <h4 style={{ marginBottom: 2 }}>E-mail para contato:</h4>
                    <p style={{ margin: 0 }}>contato@nvtech.info</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
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