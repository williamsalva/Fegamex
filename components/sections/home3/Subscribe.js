"use client";
import Link from "next/link";

export default function Subscribe() {
  return (
    <>
      <section className="subscribe-section-modern">
        <div className="auto-container">
          <div className="subscribe-wrapper">
            <div className="subscribe-content">
              <h2>Suscríbete para recibir noticias y ofertas</h2>
              <p>Únete a nuestra comunidad y recibe las mejores ideas para tus proyectos arquitectónicos.</p>
            </div>
            <div className="subscribe-form">
              <form method="post" action="/contact">
                <div className="form-group-modern">
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu correo electrónico"
                    required
                  />
                  <button type="submit" className="theme-btn btn-one">
                    Suscribirme
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <style jsx>{`
          .subscribe-section-modern {
            padding: 100px 0;
            background: var(--title-color);
            position: relative;
            overflow: hidden;
          }

          .subscribe-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }

          .subscribe-content h2 {
            font-size: 2.5rem;
            font-weight: 800;
            color: #fff;
            margin-bottom: 16px;
            font-family: var(--futura);
            line-height: 1.2;
          }

          .subscribe-content p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.7);
            font-family: var(--inter);
          }

          .form-group-modern {
            display: flex;
            gap: 16px;
            background: rgba(255, 255, 255, 0.05);
            padding: 8px;
            border-radius: 4px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .form-group-modern input {
            flex: 1;
            padding: 16px 20px;
            background: transparent;
            border: none;
            color: #fff;
            font-size: 16px;
            font-family: var(--inter);
          }

          .form-group-modern input:focus {
            outline: none;
          }

          .form-group-modern input::placeholder {
            color: rgba(255, 255, 255, 0.4);
          }

          @media (max-width: 991px) {
            .subscribe-wrapper {
              grid-template-columns: 1fr;
              gap: 40px;
              text-align: center;
            }
            .form-group-modern {
              max-width: 500px;
              margin: 0 auto;
            }
          }

          @media (max-width: 767px) {
            .subscribe-section-modern {
              padding: 80px 0;
            }
            .subscribe-content h2 {
              font-size: 2rem;
            }
            .form-group-modern {
              flex-direction: column;
              background: transparent;
              padding: 0;
              border: none;
            }
            .form-group-modern input {
              background: rgba(255, 255, 255, 0.05);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 4px;
              margin-bottom: 16px;
              width: 100%;
            }
          }
        `}</style>
      </section>
    </>
  );
}

