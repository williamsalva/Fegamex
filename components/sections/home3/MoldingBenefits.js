import Link from "next/link";

const MoldingBenefits = () => {
  return (
    <>
      <section className="MoldingBenefits centred pb_120">
        <div className="sec-title mb_70">
          <h6>Beneficios</h6>
          <h2>Por qué Elegir Nuestras Molduras 😎</h2>
        </div>
        <div className="product-container">
          <div className="benefits-left">
            <div
              className="benefit wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <h3>Resistencia Duradera</h3>
              <p>
                Nuestras molduras están diseñadas para resistir el paso del
                tiempo y los elementos exteriores.
              </p>
            </div>
            <div
              className="benefit wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <h3>Versatilidad Estilística</h3>
              <p>
                Nuestras molduras ofrecen una versatilidad estilística
                incomparable.
              </p>
            </div>
            <div
              className="benefit wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <h3>Alta Calidad</h3>
              <p>
                Molduras fabricadas con los más altos estándares de calidad,
                garantizando la satisfacción del cliente.
              </p>
            </div>
          </div>
          <div
            className="product-image-container wow fadeInUp animated"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <img src="/assets/images/home/moldura.png" alt="Producto" />
          </div>
          <div className="benefits-right">
            <div
              className="benefit wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <h3>Instalación Sencilla</h3>
              <p>
                Facilitamos la instalación con instrucciones claras y
                herramientas mínimas requeridas.
              </p>
            </div>
            <div
              className="benefit wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <h3>Bajo Mantenimiento</h3>
              <p>
                Nuestras molduras requieren poco mantenimiento para mantener su
                belleza y funcionalidad.
              </p>
            </div>
            <div
              className="benefit wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
            >
              <h3>Diseño Innovador</h3>
              <p>
                Molduras con un diseño innovador y atractivo que destacan por su
                elegancia y sofisticación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoldingBenefits;
