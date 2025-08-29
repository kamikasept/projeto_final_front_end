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
                  onClick={(e) => handleSubmit(e, "reserva")}
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    padding: "18px",
                    background: isSubmitting
                      ? "#666666"
                      : "linear-gradient(45deg, #ff6b35, #ff8c42)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 15px rgba(255, 107, 53, 0.3)",
                  }}
                >
                  {isSubmitting ? "Enviando..." : "🍽️ Confirmar Reserva"}
                </button>
              </div>
            </div>
          )}

          {/* Contato Tab */}
          {activeTab === "contato" && (
            <div>
              <h2
                style={{
                  color: "#ff6b35",
                  marginBottom: "25px",
                  fontSize: "1.8rem",
                  textAlign: "center",
                }}
              >
                💬 Entre em Contato
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "40px",
                }}
              >
                <div>
                  <form onSubmit={(e) => handleSubmit(e, "contato")}>
                    <div style={{ marginBottom: "20px" }}>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#cccccc",
                          fontWeight: "500",
                        }}
                      >
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={contactData.nome}
                        onChange={(e) => handleInputChange(e, "contato")}
                        required
                        style={{
                          width: "100%",
                          padding: "15px",
                          borderRadius: "10px",
                          border: "1px solid #404040",
                          background: "rgba(30, 30, 30, 0.8)",
                          color: "#ffffff",
                          fontSize: "1rem",
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#cccccc",
                          fontWeight: "500",
                        }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={contactData.email}
                        onChange={(e) => handleInputChange(e, "contato")}
                        required
                        style={{
                          width: "100%",
                          padding: "15px",
                          borderRadius: "10px",
                          border: "1px solid #404040",
                          background: "rgba(30, 30, 30, 0.8)",
                          color: "#ffffff",
                          fontSize: "1rem",
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#cccccc",
                          fontWeight: "500",
                        }}
                      >
                        Assunto *
                      </label>
                      <input
                        type="text"
                        name="assunto"
                        value={contactData.assunto}
                        onChange={(e) => handleInputChange(e, "contato")}
                        required
                        style={{
                          width: "100%",
                          padding: "15px",
                          borderRadius: "10px",
                          border: "1px solid #404040",
                          background: "rgba(30, 30, 30, 0.8)",
                          color: "#ffffff",
                          fontSize: "1rem",
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "25px" }}>
                      <label
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "#cccccc",
                          fontWeight: "500",
                        }}
                      >
                        Mensagem *
                      </label>
                      <textarea
                        name="mensagem"
                        value={contactData.mensagem}
                        onChange={(e) => handleInputChange(e, "contato")}
                        required
                        rows="6"
                        style={{
                          width: "100%",
                          padding: "15px",
                          borderRadius: "10px",
                          border: "1px solid #404040",
                          background: "rgba(30, 30, 30, 0.8)",
                          color: "#ffffff",
                          fontSize: "1rem",
                          resize: "vertical",
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        padding: "18px",
                        background: isSubmitting
                          ? "#666666"
                          : "linear-gradient(45deg, #ff6b35, #ff8c42)",
                        color: "white",
                        border: "none",
                        borderRadius: "12px",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(255, 107, 53, 0.3)",
                      }}
                    >
                      {isSubmitting ? "Enviando..." : "💬 Enviar Mensagem"}
                    </button>
                  </form>
                </div>

                <div>
                  <h3 style={{ color: "#ff6b35", marginBottom: "20px" }}>
                    📞 Informações de Contato
                  </h3>

                  <div style={{ marginBottom: "25px" }}>
                    <div
                      style={{
                        background: "rgba(255, 107, 53, 0.1)",
                        border: "1px solid rgba(255, 107, 53, 0.3)",
                        borderRadius: "12px",
                        padding: "20px",
                        marginBottom: "15px",
                      }}
                    >
                      <h4 style={{ color: "#ff6b35", marginBottom: "10px" }}>
                        📱 Telefone
                      </h4>
                      <p style={{ color: "#cccccc" }}>+351 912 345 678</p>
                    </div>

                    <div
                      style={{
                        background: "rgba(255, 107, 53, 0.1)",
                        border: "1px solid rgba(255, 107, 53, 0.3)",
                        borderRadius: "12px",
                        padding: "20px",
                        marginBottom: "15px",
                      }}
                    >
                      <h4 style={{ color: "#ff6b35", marginBottom: "10px" }}>
                        ✉️ Email
                      </h4>
                      <p style={{ color: "#cccccc" }}>
                        reservas@hamburgaria.pt
                      </p>
                    </div>

                    <div
                      style={{
                        background: "rgba(255, 107, 53, 0.1)",
                        border: "1px solid rgba(255, 107, 53, 0.3)",
                        borderRadius: "12px",
                        padding: "20px",
                      }}
                    >
                      <h4 style={{ color: "#ff6b35", marginBottom: "10px" }}>
                        🕒 Horário de Funcionamento
                      </h4>
                      <p style={{ color: "#cccccc", marginBottom: "5px" }}>
                        Segunda a Quinta: 18:00 - 24:00
                      </p>
                      <p style={{ color: "#cccccc", marginBottom: "5px" }}>
                        Sexta e Sábado: 18:00 - 02:00
                      </p>
                      <p style={{ color: "#cccccc" }}>Domingo: 18:00 - 23:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Localização Tab */}
          {activeTab === "localizacao" && (
            <div>
              <h2
                style={{
                  color: "#ff6b35",
                  marginBottom: "25px",
                  fontSize: "1.8rem",
                  textAlign: "center",
                }}
              >
                📍 Nossa Localização
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "40px",
                }}
              >
                <div>
                  <div
                    style={{
                      background: "rgba(255, 107, 53, 0.1)",
                      border: "1px solid rgba(255, 107, 53, 0.3)",
                      borderRadius: "12px",
                      padding: "30px",
                      marginBottom: "20px",
                    }}
                  >
                    <h3 style={{ color: "#ff6b35", marginBottom: "20px" }}>
                      📍 Endereço
                    </h3>
                    <p
                      style={{
                        color: "#cccccc",
                        fontSize: "1.1rem",
                        lineHeight: "1.6",
                      }}
                    >
                      <strong>Hamburgaria Premium</strong>
                      <br />
                      Rua dos Sabores, 123
                      <br />
                      1200-001 Lisboa
                      <br />
                      Portugal
                    </p>
                  </div>

                  <div
                    style={{
                      background: "rgba(255, 107, 53, 0.1)",
                      border: "1px solid rgba(255, 107, 53, 0.3)",
                      borderRadius: "12px",
                      padding: "30px",
                    }}
                  >
                    <h3 style={{ color: "#ff6b35", marginBottom: "20px" }}>
                      🚗 Como Chegar
                    </h3>
                    <ul style={{ color: "#cccccc", lineHeight: "1.8" }}>
                      <li>
                        <strong>Metro:</strong> Estação Marquês de Pombal (5 min
                        a pé)
                      </li>
                      <li>
                        <strong>Autocarro:</strong> Linhas 44, 83, 206
                      </li>
                      <li>
                        <strong>Carro:</strong> Estacionamento público nearby
                      </li>
                      <li>
                        <strong>Táxi/Uber:</strong> Paragem à porta
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Placeholder para mapa */}
                  <div
                    style={{
                      width: "100%",
                      height: "400px",
                      background: "rgba(30, 30, 30, 0.8)",
                      border: "1px solid #404040",
                      borderRadius: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: "15px",
                    }}
                  >
                    <div style={{ fontSize: "3rem" }}>🗺️</div>
                    <p style={{ color: "#cccccc", textAlign: "center" }}>
                      Mapa Interativo
                      <br />
                      <small style={{ color: "#999" }}>
                        (Integre com Google Maps ou outro serviço)
                      </small>
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "20px",
                      display: "flex",
                      gap: "15px",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      style={{
                        background: "linear-gradient(45deg, #ff6b35, #ff8c42)",
                        color: "white",
                        border: "none",
                        padding: "12px 20px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      🧭 Ver no Google Maps
                    </button>

                    <button
                      style={{
                        background: "rgba(45, 45, 45, 0.8)",
                        color: "white",
                        border: "1px solid #404040",
                        padding: "12px 20px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontSize: "1rem",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      📱 Obter Direções
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

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
