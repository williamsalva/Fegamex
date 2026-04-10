"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Error404() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <section className="error-section centred pt_150 pb_150">
          <div className="auto-container">
            <div className="inner-box">
              <h1 className="error-code">404</h1>
              <h2 className="error-title">Página no encontrada</h2>
              <p className="error-text">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
              <Link href="/" className="theme-btn btn-one">
                Volver al Inicio
              </Link>
            </div>
          </div>
        </section>

        <style jsx>{`
          .error-section {
            background-color: var(--surface-color);
          }
          
          .error-code {
            font-size: 8rem;
            font-weight: 800;
            color: var(--theme-color);
            line-height: 1;
            margin-bottom: 20px;
            font-family: var(--futura);
            opacity: 0.1;
          }
          
          .error-title {
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--title-color);
            margin-bottom: 20px;
            font-family: var(--futura);
          }
          
          .error-text {
            font-size: 1.15rem;
            color: var(--text-color);
            margin-bottom: 40px;
            font-family: var(--inter);
          }
          
          @media (max-width: 767px) {
            .error-code {
              font-size: 6rem;
            }
            .error-title {
              font-size: 2rem;
            }
          }
        `}</style>
      </Layout>
    </>
  );
}
