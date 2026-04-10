"use client";

const MoldingBenefits = () => {
  const benefits = [
    {
      icon: "flaticon-shield",
      title: "Resistencia Duradera",
      description: "Disenadas para resistir el paso del tiempo y los elementos exteriores con materiales de primera."
    },
    {
      icon: "flaticon-design",
      title: "Versatilidad Estilistica",
      description: "Amplia variedad de disenos que se adaptan a cualquier estilo arquitectonico."
    },
    {
      icon: "flaticon-quality",
      title: "Alta Calidad",
      description: "Fabricadas con los mas altos estandares, garantizando satisfaccion total."
    },
    {
      icon: "flaticon-tools",
      title: "Instalacion Sencilla",
      description: "Instrucciones claras y herramientas minimas requeridas para su colocacion."
    },
    {
      icon: "flaticon-maintenance",
      title: "Bajo Mantenimiento",
      description: "Requieren poco mantenimiento para conservar su belleza y funcionalidad."
    },
    {
      icon: "flaticon-innovation",
      title: "Diseno Innovador",
      description: "Molduras que destacan por su elegancia, sofisticacion y modernidad."
    }
  ];

  return (
    <>
      <section className="moldingBenefits-modern">
        <div className="auto-container">
          <div className="section-header">
            <span className="subtitle">Nuestras Ventajas</span>
            <h2>Por que Elegir Fegamex</h2>
            <p>Descubre los beneficios que nos hacen la mejor opcion para tus proyectos de decoracion</p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="benefit-card wow fadeInUp animated"
                data-wow-delay={`${index * 100}ms`}
                data-wow-duration="1000ms"
              >
                <div className="benefit-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
                <div className="benefit-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .moldingBenefits-modern {
          padding: 120px 0;
          background: var(--surface-color);
        }
        
        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 80px;
        }
        
        .section-header .subtitle {
          display: inline-block;
          color: var(--theme-color);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 4px;
          margin-bottom: 20px;
          font-family: var(--inter);
        }
        
        .section-header h2 {
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--title-color);
          margin-bottom: 24px;
          line-height: 1.1;
          font-family: var(--futura);
        }
        
        .section-header p {
          font-size: 1.15rem;
          color: var(--text-color);
          line-height: 1.6;
          font-family: var(--inter);
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        
        .benefit-card {
          position: relative;
          background: #fff;
          padding: 48px 40px;
          border-radius: 4px;
          border: 1px solid rgba(0,0,0,0.03);
          box-shadow: var(--shadow-sm);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(230, 57, 70, 0.1);
        }
        
        .benefit-card:hover .benefit-line {
          width: 60px;
        }
        
        .benefit-number {
          font-size: 3rem;
          font-weight: 800;
          color: rgba(230, 57, 70, 0.05);
          position: absolute;
          top: 30px;
          right: 32px;
          line-height: 1;
          font-family: var(--futura);
        }
        
        .benefit-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: var(--title-color);
          margin-bottom: 16px;
          font-family: var(--futura);
        }
        
        .benefit-card p {
          font-size: 1rem;
          color: var(--text-color);
          line-height: 1.6;
          margin: 0;
          font-family: var(--inter);
        }
        
        .benefit-line {
          position: absolute;
          bottom: 40px;
          left: 40px;
          width: 30px;
          height: 2px;
          background: var(--theme-color);
          transition: width 0.4s ease;
          display: none; /* Subtelty */
        }
        
        @media (max-width: 1199px) {
          .section-header h2 {
            font-size: 2.75rem;
          }
        }

        @media (max-width: 991px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 767px) {
          .moldingBenefits-modern {
            padding: 80px 0;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
          }
          
          .section-header h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </>
  );
};

export default MoldingBenefits;
