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
        <div
          className="text-center"
          style={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1 className="mb_20">Enviando mensaje...</h1>

          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>

            <style jsx>{`
              .spinner-border {
                width: 5rem;
                height: 5rem;
              }
            `}</style>

            <style jsx global>{`
              .spinner-border {
                color: #eb292c;
              }
            `}</style>
          </div>
        </div>
      </Layout>
    );
  }

  if (success) {
    return (
      <Layout headerStyle={1} footerStyle={1}>
        <div
          className="text-center"
          style={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <i
            className="far fa-check-circle"
            style={{
              fontSize: "6rem",
              color: "#32BE03",
              marginBottom: "28px",
            }}
          ></i>

          <h1 className="mb_20">Mensaje enviado con éxito</h1>
          <p>Gracias por ponerte en contacto con nosotros.</p>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          <section className="contact-section pt_120 pb_120">
            <div className="auto-container">
              <div className="sec-title centred mb_70">
                <h6>¡Hola!</h6>
                <h2>¿Tienes alguna pregunta?</h2>
                <p>
                  Llena el siguiente formulario para ponerte en contacto con el
                  equipo de Fegamex, en breve estaremos respondiendo tu
                  solicitud.
                </p>
              </div>
              <div className="form-inner">
                <form>
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input
                        type="text"
                        name="username"
                        placeholder="Nombre"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input
                        type="text"
                        name="phone"
                        required
                        placeholder="WhatsApp"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                      <input
                        type="text"
                        name="city"
                        required
                        placeholder="Ciudad"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                      <textarea
                        name="message"
                        placeholder="Mensaje"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                      <button
                        className="theme-btn btn-one"
                        type="submit"
                        name="submit-form"
                        onClick={submitHandler}
                      >
                        Enviar Mensaje
                      </button>
                    </div>

                    {error && (
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                        <p className="text-danger">{error}</p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* Contact Form Section End */}
          {/* contact-info-section */}
          <section className="contact-info-section centred pt_80 pb_90">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                  <div
                    className="info-block-one wow fadeInUp animated"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-2"></i>
                      </div>
                      <h3>Ubicación</h3>
                      <p>
                        Villa de Gudalupe, Zapopan, Jal.
                        <br />
                        CP.45180
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                  <div
                    className="info-block-one wow fadeInUp animated"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-43"></i>
                      </div>
                      <h3>Email</h3>
                      <p>
                        <Link href="mailto:contact@example.com">
                          contacto@fegamex.com
                        </Link>
                        <br />{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                  <div
                    className="info-block-one wow fadeInUp animated"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-44"></i>
                      </div>
                      <h3>Servicio al Cliente</h3>
                      <p>
                        WhatsApp <br />
                        <Link href="tel:2085550112">
                          Cel. 33104 18179{" "}
                        </Link>{" "}
                        (24/7)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* contact-info-section End */}
        </div>
      </Layout>
    </>
  );
}
