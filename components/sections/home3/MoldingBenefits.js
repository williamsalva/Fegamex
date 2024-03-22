import Link from "next/link";

// Resistencia Duradera:

// Nuestras molduras están diseñadas para resistir el paso del tiempo y los elementos exteriores. Fabricadas con materiales de alta calidad, como el poliestireno recubierto con mortero, nuestras molduras mantienen su integridad estructural incluso en condiciones adversas, garantizando una decoración duradera y de larga duración.
// Versatilidad Estilística:

// Con una amplia gama de estilos y diseños, nuestras molduras ofrecen una versatilidad estilística incomparable. Desde estilos clásicos hasta contemporáneos, nuestras molduras pueden adaptarse a una variedad de proyectos arquitectónicos, permitiendo a nuestros clientes expresar su creatividad y personalidad a través del diseño de sus espacios.
// Instalación Sencilla:

// Facilitamos la instalación de nuestras molduras con un diseño pensado para la comodidad de nuestros clientes. Con instrucciones claras y herramientas mínimas requeridas, nuestros productos están diseñados para que la instalación sea rápida y sin complicaciones, permitiendo a nuestros clientes disfrutar de la belleza de sus nuevos espacios en poco tiempo.
// Bajo Mantenimiento:

// Nuestras molduras requieren poco mantenimiento para mantener su belleza y funcionalidad. Gracias a su resistencia a la humedad y al ambiente exterior, nuestras molduras son fáciles de limpiar y mantener, lo que permite a nuestros clientes disfrutar de sus espacios decorativos sin preocupaciones adicionales de mantenimiento constante.

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
