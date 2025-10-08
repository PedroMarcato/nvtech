import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';

function ContactSection() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    complemento: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const formatPhone = (value) => {
    // Remove tudo que não for dígito
    const numbers = value.replace(/\D/g, "");

    // Limita a 11 dígitos
    const limitedNumbers = numbers.slice(0, 11);

    // Aplica a máscara de telefone baseado no número de dígitos
    if (limitedNumbers.length >= 10) {
      if (limitedNumbers.length === 10) {
        // Formato: (XX) XXXX-XXXX
        return limitedNumbers.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
      } else if (limitedNumbers.length === 11) {
        // Formato: (XX) XXXXX-XXXX
        return limitedNumbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
      }
    }

    // Para números com menos de 10 dígitos, aplica formatação parcial
    if (limitedNumbers.length >= 6) {
      return limitedNumbers.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else if (limitedNumbers.length >= 2) {
      return limitedNumbers.replace(/(\d{2})(\d{0,4})/, "($1) $2");
    }

    return limitedNumbers;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    let newValue = value;

    // Se o campo for o de telefone, aplica a formatação
    if (id === 'telefone') {
      newValue = formatPhone(value);
    }

    setFormData(prev => ({
      ...prev,
      [id]: newValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // Enviar email usando EmailJS
      const result = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          assunto: formData.assunto,
          complemento: formData.complemento
        },
        emailConfig.publicKey
      );

      if (result.status === 200) {
        setMessage('Solicitação enviada com sucesso! Entraremos em contato em breve.');
        setTimeout(() => setMessage(''), 7000);
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          complemento: ''
        });
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setMessage('Erro ao enviar orçamento. Tente novamente ou entre em contato por telefone.');
      setTimeout(() => setMessage(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h1 style={{ color: "#54021d" }}>Solicite Seu Orçamento</h1>
        <p>Queremos entender sua necessidade para oferecer a melhor solução</p>
        <p>Preencha o formulário ao lado e nos envie sua solicitação.</p>
        <p style={{ marginTop: 20, marginBottom: 10 }}>Para mais informações entre em contato:</p>
        <p style={{ display: 'flex', margin: 2 }}>
          <i style={{ color: "#54021d", fontSize: 25, marginRight: '5px' }} className="fa-solid fa-square-phone"></i>
          (44) 9 9841-3665
        </p>
        <p style={{ display: 'flex', margin: 2 }}>
          <i style={{ color: "#54021d", fontSize: 25, marginRight: '5px' }} className="fa-solid fa-square-envelope"></i>
          contato@nvtech.info
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder=""
            id="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <label htmlFor="nome">Nome Completo*</label>
        </div>

        <div className="input-container">
          <input
            type="email"
            placeholder=" "
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">E-mail*</label>
        </div>

        <div className="input-container">
          <input type="tel" placeholder=" " id="telefone" value={formData.telefone} onChange={handleChange} required />
          <label htmlFor="telefone">Telefone*</label>
        </div>

        <div className="input-container">
          <input
            type="text"
            placeholder=" "
            id="assunto"
            value={formData.assunto}
            onChange={handleChange}
            required
          />
          <label htmlFor="assunto">Assunto*</label>
        </div>

        <div className="input-container">
          <textarea
            placeholder=" "
            id="complemento"
            value={formData.complemento}
            onChange={handleChange}
            required
          />
          <label htmlFor="complemento">Complemento*</label>
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Enviando' : 'Enviar'}
        </button>

        {message && (
          <div className={`message ${message.includes('sucesso') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
      </form>
    </section>
  );
}

export default ContactSection;