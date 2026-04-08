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
          padding: 100px 0;
          background: linear-gradient(180deg, #fff 0%, #f8f9fa 100%);
        }
        
        .section-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 60px;
        }
        
        .section-header .subtitle {
          display: inline-block;
          color: #c9302c;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }
        
        .section-header h2 {
          font-size: 42px;
          font-weight: 800;
          color: #1a1a2e;
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .section-header p {
          font-size: 16px;
          color: #5a5a6e;
          line-height: 1.7;
        }
        
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        
        .benefit-card {
          position: relative;
          background: #fff;
          padding: 40px 30px;
          border-radius: 16px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          transition: all 0.4s ease;
          overflow: hidden;
        }
        
        .benefit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(201, 48, 44, 0.15);
        }
        
        .benefit-card:hover .benefit-line {
          width: 100%;
        }
        
        .benefit-number {
          font-size: 48px;
          font-weight: 800;
          color: rgba(201, 48, 44, 0.1);
          position: absolute;
          top: 20px;
          right: 25px;
          line-height: 1;
        }
        
        .benefit-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #1a1a2e;
          margin-bottom: 15px;
        }
        
        .benefit-card p {
          font-size: 15px;
          color: #5a5a6e;
          line-height: 1.7;
          margin: 0;
        }
        
        .benefit-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #c9302c 0%, #e85d5a 100%);
          transition: width 0.4s ease;
        }
        
        @media (max-width: 991px) {
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .section-header h2 {
            font-size: 32px;
          }
        }
        
        @media (max-width: 767px) {
          .moldingBenefits-modern {
            padding: 60px 0;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr;
          }
          
          .section-header h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default MoldingBenefits;
