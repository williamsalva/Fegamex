"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSuccess = () => {
    setLoading(false);
    setSuccess(true);
    setName("");
    setEmail("");
    setPhone("");
    setCity("");
    setMessage("");
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !city || !message) {
      setError("Todos los campos son requeridos");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      setError("El número de teléfono debe contener exactamente 10 dígitos");
      return;
    }

    if (message.length < 10) {
      setError("El mensaje debe contener al menos 10 caracteres");
      return;
    }

    if (message.length > 500) {
      setError("El mensaje debe contener máximo 500 caracteres");
      return;
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setError("El correo electrónico no es válido");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Especifica el tipo de contenido del cuerpo de la solicitud
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          city,
          message,
        }),
      });
      const data = await response.json();
      console.log("🚀 ~ submitHandler ~ data:", data);
      handleSuccess();
    } catch (error) {
      console.log("🚀 ~ submitHandler ~ error:", error);
      setLoading(false);
      setError("Ocurrió un error al enviar el mensaje, intenta de nuevo");
    }
  };

  if (loading) {
    return (
      <Layout headerStyle={1} footerStyle={1}>
        <div className="loading-container">
          <h1>Enviando tu mensaje...</h1>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <style jsx>{`
            .loading-container {
              height: 90vh;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              gap: 30px;
            }

            .loading-container h1 {
              color: #1a1a2e;
              font-size: 28px;
              font-weight: 700;
            }

            .spinner-border {
              width: 5rem;
              height: 5rem;
              color: #c9302c;
            }
          `}</style>
        </div>
      </Layout>
    );
  }

  if (success) {
    return (
      <Layout headerStyle={1} footerStyle={1}>
        <div className="success-container">
          <div className="success-card">
            <div className="success-icon">
              <i className="fas fa-check"></i>
            </div>
            <h1>Mensaje Enviado con Éxito</h1>
            <p>Gracias por ponerte en contacto con nosotros. Nos pondremos en contacto pronto.</p>
            <Link href="/" className="theme-btn btn-one">
              Volver al Inicio
            </Link>
          </div>
          <style jsx>{`
            .success-container {
              height: 80vh;
              display: flex;
              align-items: center;
              justify-content: center;
              background: linear-gradient(180deg, #fff 0%, #f8f9fa 100%);
            }

            .success-card {
              background: #fff;
              padding: 60px 40px;
              border-radius: 20px;
              text-align: center;
              box-shadow: 0 20px 60px rgba(0,0,0,0.1);
              max-width: 500px;
            }

            .success-icon {
              width: 100px;
              height: 100px;
              background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 30px;
              font-size: 50px;
              color: #fff;
            }

            .success-card h1 {
              font-size: 32px;
              font-weight: 800;
              color: #1a1a2e;
              margin-bottom: 15px;
            }

            .success-card p {
              font-size: 16px;
              color: #5a5a6e;
              margin-bottom: 30px;
              line-height: 1.7;
            }
          `}</style>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <section className="contact-section-modern">
            <div className="auto-container">
              <div className="section-header-contact">
                <span className="subtitle">¡Hola!</span>
                <h2>¿Tienes alguna Pregunta?</h2>
                <p>Llena el formulario y nos pondremos en contacto contigo en breve</p>
              </div>

              <div className="contact-content-wrapper">
                <div className="contact-form-wrapper">
                  <form onSubmit={submitHandler}>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>Nombre Completo</label>
                        <input
                          type="text"
                          placeholder="Tu nombre"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Correo Electrónico</label>
                        <input
                          type="email"
                          placeholder="Tu correo"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>WhatsApp</label>
                        <input
                          type="text"
                          placeholder="10 dígitos"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label>Ciudad</label>
                        <input
                          type="text"
                          placeholder="Tu ciudad"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group form-full">
                        <label>Mensaje</label>
                        <textarea
                          placeholder="Escribe tu mensaje aquí (mínimo 10 caracteres, máximo 500)"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows="6"
                          required
                        ></textarea>
                      </div>

                      {error && (
                        <div className="form-group form-full error-message">
                          <i className="fas fa-exclamation-circle"></i>
                          <p>{error}</p>
                        </div>
                      )}

                      <div className="form-group form-full">
                        <button type="submit" className="theme-btn btn-one submit-btn">
                          Enviar Mensaje
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="contact-info-cards">
                  <div className="info-card wow fadeInUp animated" data-wow-delay="00ms">
                    <div className="info-icon location">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h4>Ubicación</h4>
                    <p>Villa de Gudalupe, Zapopan, Jalisco<br />CP. 45180 México</p>
                  </div>

                  <div className="info-card wow fadeInUp animated" data-wow-delay="100ms">
                    <div className="info-icon email">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <h4>Email</h4>
                    <Link href="mailto:fergarcia5654@gmail.com">fergarcia5654@gmail.com</Link>
                  </div>

                  <div className="info-card wow fadeInUp animated" data-wow-delay="200ms">
                    <div className="info-icon whatsapp">
                      <i className="fab fa-whatsapp"></i>
                    </div>
                    <h4>WhatsApp</h4>
                    <Link href="https://wa.me/523310418179?text=Hola%20Fegamex">3310418179</Link>
                  </div>
                </div>
              </div>
            </div>

            <style jsx>{`
              .contact-section-modern {
                padding: 100px 0;
                background: linear-gradient(180deg, #fff 0%, #f8f9fa 100%);
              }

              .section-header-contact {
                text-align: center;
                max-width: 600px;
                margin: 0 auto 60px;
              }

              .section-header-contact .subtitle {
                display: inline-block;
                color: #c9302c;
                font-size: 14px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 3px;
                margin-bottom: 15px;
              }

              .section-header-contact h2 {
                font-size: 42px;
                font-weight: 800;
                color: #1a1a2e;
                margin-bottom: 20px;
                line-height: 1.2;
              }

              .section-header-contact p {
                font-size: 16px;
                color: #5a5a6e;
                line-height: 1.7;
              }

              .contact-content-wrapper {
                display: grid;
                grid-template-columns: 1.2fr 1fr;
                gap: 50px;
              }

              .contact-form-wrapper {
                background: #fff;
                padding: 40px;
                border-radius: 20px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.05);
              }

              .form-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 25px;
              }

              .form-group {
                display: flex;
                flex-direction: column;
              }

              .form-group.form-full {
                grid-column: 1 / -1;
              }

              .form-group label {
                font-size: 14px;
                font-weight: 600;
                color: #1a1a2e;
                margin-bottom: 10px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }

              .form-group input,
              .form-group textarea {
                padding: 14px 16px;
                border: 2px solid #e9ecef;
                border-radius: 10px;
                font-size: 15px;
                color: #1a1a2e;
                font-family: inherit;
                transition: all 0.3s ease;
              }

              .form-group input:focus,
              .form-group textarea:focus {
                outline: none;
                border-color: #c9302c;
                box-shadow: 0 0 0 4px rgba(201, 48, 44, 0.1);
              }

              .form-group textarea {
                resize: vertical;
              }

              .error-message {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 16px;
                background: rgba(220, 38, 38, 0.1);
                border-left: 4px solid #dc2626;
                border-radius: 8px;
              }

              .error-message i {
                color: #dc2626;
                font-size: 18px;
              }

              .error-message p {
                color: #991b1b;
                margin: 0;
                font-size: 14px;
              }

              .submit-btn {
                width: 100%;
                margin-top: 10px;
              }

              .contact-info-cards {
                display: flex;
                flex-direction: column;
                gap: 20px;
              }

              .info-card {
                background: #fff;
                padding: 30px;
                border-radius: 16px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.05);
                text-align: center;
                transition: all 0.4s ease;
              }

              .info-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 20px 60px rgba(201, 48, 44, 0.15);
              }

              .info-icon {
                width: 60px;
                height: 60px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 20px;
                font-size: 28px;
                color: #fff;
              }

              .info-icon.location {
                background: linear-gradient(135deg, #c9302c 0%, #a02724 100%);
              }

              .info-icon.email {
                background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
              }

              .info-icon.whatsapp {
                background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
              }

              .info-card h4 {
                font-size: 18px;
                font-weight: 700;
                color: #1a1a2e;
                margin-bottom: 12px;
              }

              .info-card p {
                font-size: 15px;
                color: #5a5a6e;
                line-height: 1.6;
                margin: 0;
              }

              .info-card a {
                font-size: 15px;
                color: #c9302c;
                text-decoration: none;
                font-weight: 600;
                transition: color 0.3s ease;
              }

              .info-card a:hover {
                color: #a02724;
              }

              @media (max-width: 991px) {
                .contact-content-wrapper {
                  grid-template-columns: 1fr;
                  gap: 40px;
                }

                .form-grid {
                  grid-template-columns: 1fr;
                }

                .section-header-contact h2 {
                  font-size: 32px;
                }
              }

              @media (max-width: 767px) {
                .contact-section-modern {
                  padding: 60px 0;
                }

                .contact-form-wrapper {
                  padding: 30px;
                }

                .section-header-contact h2 {
                  font-size: 28px;
                }

                .form-grid {
                  gap: 20px;
                }
              }
            `}</style>
          </section>
        </div>
      </Layout>
    </>
  );
}
