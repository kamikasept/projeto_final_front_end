import React, { useState } from "react";
import "../index.css";

const Reservas = () => {
  const [activeTab, setActiveTab] = useState("reservar");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    data: "",
    hora: "",
    pessoas: "2",
    observacoes: "",
  });
  const [contactData, setContactData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e, formType = "reserva") => {
    const { name, value } = e.target;
    if (formType === "reserva") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setContactData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e, formType) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      if (formType === "reserva") {
        setSubmitMessage(
          "Reserva enviada com sucesso! Entraremos em contato em breve."
        );
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          data: "",
          hora: "",
          pessoas: "2",
          observacoes: "",
        });
      } else {
        setSubmitMessage(
          "Mensagem enviada com sucesso! Responderemos em breve."
        );
        setContactData({
          nome: "",
          email: "",
          assunto: "",
          mensagem: "",
        });
      }

      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  const tabs = [
    { id: "reservar", label: "Reservar Mesa", icon: "🍽️" },
    { id: "contato", label: "Contato", icon: "💬" },
    { id: "localizacao", label: "Localização", icon: "📍" },
  ];

  const timeSlots = [
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];

  return (
    <div className="reservas">
      <div className="reservas__container">
        <div className="reservas__header">
          <h1>🍔 Reservas & Contato</h1>
          <p>Reserve sua mesa ou entre em contato conosco</p>
        </div>

        {/* Tabs Navigation */}
        <div className="nav-tab">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Success Message */}
        {submitMessage && (
          <div className="success-message">{submitMessage}</div>
        )}

        {/* Tab Content */}
        <div className="formulario">
          {/* Reservar Mesa Tab */}
          {activeTab === "reservar" && (
            <div>
              <h2 className="formulario--titulo">🍽️ Reserve sua Mesa</h2>

              <div>
                <div className="dados-cliente">
                  <div>
                    <label className="label">Nome Completo *</label>
                    <input
                      className="input-cliente"
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="label">Email *</label>
                    <input
                      className="input-cliente"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="label">Telefone *</label>
                    <input
                      className="input-cliente"
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <label className="label">Data *</label>
                    <input
                      className="input-cliente"
                      type="date"
                      name="data"
                      value={formData.data}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div>
                    <label className="label">Horário *</label>
                    <select
                      className="input-cliente"
                      name="hora"
                      value={formData.hora}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Selecione o horário</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="label">Número de Pessoas *</label>
                    <select
                      className="input-cliente"
                      name="pessoas"
                      value={formData.pessoas}
                      onChange={handleInputChange}
                      required
                    >
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} pessoa{i > 0 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="espacamento">
                  <label className="label">Observações (opcional)</label>
                  <textarea
                    className="observacao"
                    value={formData.observacoes}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Alguma observação especial, preferência de mesa, aniversário, etc."
                  />
                </div>

                <button
                  className="button-confirm"
                  onClick={(e) => handleSubmit(e, "reserva")}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "🍽️ Confirmar Reserva"}
                </button>
              </div>
            </div>
          )}

          {/* Contato Tab */}
          {activeTab === "contato" && (
            <div>
              <h2 className="formulario--titulo">💬 Entre em Contato</h2>

              <div className="dados-cliente contato">
                <div>
                  <form onSubmit={(e) => handleSubmit(e, "contato")}>
                    <div>
                      <label className="label">Nome *</label>
                      <input
                        className="input-cliente contato-cliente"
                        type="text"
                        name="nome"
                        value={contactData.nome}
                        onChange={(e) => handleInputChange(e, "contato")}
                        required
                      />
                    </div>

                    <div>
                      <label className="label">Email *</label>
                      <input
                        className="input-cliente contato-cliente"
                        type="email"
                        name="email"
                        value={contactData.email}
                        onChange={(e) => handleInputChange(e, "contato")}
                        required
                      />
                    </div>

                    <div>
                      <label className="label">Assunto *</label>
                      <input
                        className="input-cliente contato-cliente"
                        type="text"
                        name="assunto"
                        value={contactData.assunto}
                        onChange={(e) => handleInputChange(e, "contato")}
                        required
                      />
                    </div>

                    <div>
                      <label className="label">Mensagem *</label>
                      <textarea
                        className="input-cliente contato-cliente"
                        name="mensagem"
                        value={contactData.mensagem}
                        onChange={(e) => handleInputChange(e, "contato")}
                        required
                        rows="6"
                      />
                    </div>

                    <button
                      className="button-confirm"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "💬 Enviar Mensagem"}
                    </button>
                  </form>
                </div>

                <div>
                  <h3>📞 Informações de Contato</h3>

                  <div>
                    <div className="resto-info">
                      <h4>📱 Telefone</h4>
                      <p>+351 912 345 678</p>
                    </div>

                    <div className="resto-info">
                      <h4>✉️ Email</h4>
                      <p>reservas@hamburgaria.pt</p>
                    </div>

                    <div className="resto-info">
                      <h4>🕒 Horário de Funcionamento</h4>
                      <p>Segunda a Quinta: 18:00 - 24:00</p>
                      <p>Sexta e Sábado: 18:00 - 02:00</p>
                      <p>Domingo: 18:00 - 23:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Localização Tab */}
          {activeTab === "localizacao" && (
            <div>
              <h2 className="formulario--titulo">📍 Nossa Localização</h2>

              <div className="dados-cliente">
                <div>
                  <div className="resto-info">
                    <h3>📍 Endereço</h3>
                    <p>
                      <strong>Kamikaze Smash Dinner</strong>
                      <br />
                      Rua da Nora, 123
                      <br />
                      3100-372 Pombal
                      <br />
                      Portugal
                    </p>
                  </div>
                </div>

                {/* Placeholder para mapa */}
                <iframe
                  className="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.1160309001825!2d-8.660720023489331!3d39.87163878863436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2265870dae0cf1%3A0x7cffd25d8e863b7c!2sR.%20da%20Nora%2C%20Pombal!5e0!3m2!1spt-PT!2spt!4v1756851024117!5m2!1spt-PT!2spt"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        input:focus,
        textarea:focus,
        select:focus {
          outline: none;
          border-color: #ff6b35 !important;
          box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.2) !important;
        }

        button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 53, 0.4);
        }

        @media (max-width: 768px) {
          .tabs-container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Reservas;
