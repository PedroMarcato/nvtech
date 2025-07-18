function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h1 style={{ color: "#54021d" }}>Solicite Seu Orçamento</h1>
        <p>Queremos entender sua necessidade para oferecer a melhor solução</p>
        <p>Preencha o formulário ao lado e nos envi-e sua solicitação.</p>
        <p style={{ marginTop: 20, marginBottom: 10 }}>Para mais informações entre em contato:</p>
        <p style={{ display: 'flex', margin: 2 }}><i style={{ color: "#54021d", fontSize: 25, marginRight: '5px' }} class="fa-solid fa-square-phone"></i> (44) 9 9841-3665 </p>
        <p style={{ display: 'flex', margin: 2 }}><i style={{ color: "#54021d", fontSize: 25, marginRight: '5px' }} class="fa-solid fa-square-envelope"></i> contato@nvtech.info </p>
      </div>
      <form>
        <div className="input-container">
          <input type="text" placeholder=" " id="nome" required />
          <label htmlFor="nome">Nome Completo*</label>
        </div>
        <div className="input-container">
          <input type="email" placeholder=" " id="email" required />
          <label htmlFor="email">E-mail*</label>
        </div>
        <div className="input-container">
          <input type="tel" placeholder=" " pattern="\(\d{2}\)\s?\d{4,5}-\d{4}" id="telefone" required />
          <label htmlFor="telefone">Telefone*</label>
        </div>
        <div className="input-container">
          <input type="text" placeholder=" " id="assunto" required />
          <label htmlFor="assunto">Assunto*</label>
        </div>
        <div className="input-container">
          <textarea placeholder=" " id="complemento" required />
          <label htmlFor="complemento">Complemento</label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
export default ContactSection;