function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      
      <form>
        <h2>Fale Conosco</h2>
        <input type="text" placeholder="Nome*" required />
        <input type="email" placeholder="E-mail*" required />
        <textarea placeholder="Mensagem*" required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
export default ContactSection;