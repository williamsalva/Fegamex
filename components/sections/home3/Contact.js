import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section className="subscribe-section">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(/assets/images/shape/shape-5.png)" }}
        ></div>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 text-column">
              <div className="text-box">
                <h2>Transforma tus Espacios Hoy Mismo</h2>
                <p>
                  ¡Descubre nuestra colección y dale vida a tus proyectos con
                  nuestras molduras decorativas! Contáctanos vía WhatsApp para
                  obtener asesoramiento personalizado.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
              <div className="form-inner ml_40">
                <div className="btn-box mt_10">
                  <Link
                    href="https://wa.me/523310418179?text=Hola%20FEGAMEX%20quiero%20más%20información%20sobre%20sus%20productos%20de%20molduras%20decorativas"
                    className="bnt-WhatsApp-sales"
                  >
                    <i className="fab fa-whatsapp my-whatsapp-icon-sales"></i>
                    Envíanos un WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
