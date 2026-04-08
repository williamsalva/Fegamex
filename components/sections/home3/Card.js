"use client";
import Link from "next/link";

const products = [
  {
    title: "Molduras Decorativas",
    description: "Transforma tus espacios con molduras de alta calidad y disenos exclusivos.",
    image: "/assets/images/home/molduras-decorativa.png",
    link: "/molduras-decorativas",
    featured: true
  },
  {
    title: "Gargolas",
    description: "Funcionalidad y estetica para decorar fachadas y canalizar agua.",
    image: "/assets/images/home/gargola.png",
    link: "/gargolas",
    featured: false
  },
  {
    title: "Puntales y Vigas",
    description: "Elementos coloniales decorativos para embellecer cualquier espacio.",
    image: "/assets/images/home/puntal.png",
    link: "/puntales-vigas",
    featured: false
  },
  {
    title: "Pegamoldura",
    description: "Adherencia profesional en concreto, metal, vidrio y asfalto.",
    image: "/assets/images/home/pegamoldura.png",
    link: "/pegamolduras",
    featured: false
  },
  {
    title: "Rosetones",
    description: "Detalle unico para techos y paredes que anade elegancia.",
    image: "/assets/images/home/rosetones.png",
    link: "/rosetones",
    featured: false
  }
];

export default function Card() {
  return (
    <>
      <section className="products-section-modern">
        <div className="auto-container">
          <div className="section-header-products">
            <span className="subtitle">Nuestro Catalogo</span>
            <h2>Descubre Nuestros Productos</h2>
          </div>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <div 
                key={index}
                className={`product-card wow fadeInUp animated ${product.featured ? 'featured' : ''}`}
                data-wow-delay={`${index * 100}ms`}
                data-wow-duration="1000ms"
              >
                <div className="product-image">
                  <Link href={product.link}>
                    <img src={product.image} alt={product.title} />
                  </Link>
                  <div className="product-overlay">
                    <Link href={product.link} className="view-btn">
                      Ver Detalles
                    </Link>
                  </div>
                </div>
                <div className="product-content">
                  <h3>
                    <Link href={product.link}>{product.title}</Link>
                  </h3>
                  <p>{product.description}</p>
                  <Link href={product.link} className="product-link">
                    Explorar <span className="arrow">&#8594;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .products-section-modern {
          padding: 100px 0;
          background: #fff;
        }
        
        .section-header-products {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-header-products .subtitle {
          display: inline-block;
          color: #c9302c;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }
        
        .section-header-products h2 {
          font-size: 42px;
          font-weight: 800;
          color: #1a1a2e;
          line-height: 1.2;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        
        .product-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
        }
        
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 60px rgba(0,0,0,0.15);
        }
        
        .product-card.featured {
          grid-column: span 2;
        }
        
        .product-image {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          padding: 30px;
          min-height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .product-card.featured .product-image {
          min-height: 300px;
        }
        
        .product-image img {
          max-width: 100%;
          max-height: 200px;
          object-fit: contain;
          transition: transform 0.5s ease;
        }
        
        .product-card:hover .product-image img {
          transform: scale(1.1);
        }
        
        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(26, 26, 46, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .product-card:hover .product-overlay {
          opacity: 1;
        }
        
        .view-btn {
          background: #c9302c;
          color: #fff;
          padding: 14px 32px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }
        
        .product-card:hover .view-btn {
          transform: translateY(0);
        }
        
        .view-btn:hover {
          background: #a02724;
          color: #fff;
        }
        
        .product-content {
          padding: 30px;
        }
        
        .product-content h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        
        .product-content h3 a {
          color: #1a1a2e;
          transition: color 0.3s ease;
        }
        
        .product-content h3 a:hover {
          color: #c9302c;
        }
        
        .product-content p {
          font-size: 15px;
          color: #5a5a6e;
          line-height: 1.7;
          margin-bottom: 20px;
        }
        
        .product-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #c9302c;
          font-weight: 600;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }
        
        .product-link:hover {
          color: #a02724;
          gap: 15px;
        }
        
        .product-link .arrow {
          transition: transform 0.3s ease;
        }
        
        .product-link:hover .arrow {
          transform: translateX(5px);
        }
        
        @media (max-width: 991px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .product-card.featured {
            grid-column: span 2;
          }
          
          .section-header-products h2 {
            font-size: 32px;
          }
        }
        
        @media (max-width: 767px) {
          .products-section-modern {
            padding: 60px 0;
          }
          
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .product-card.featured {
            grid-column: span 1;
          }
          
          .section-header-products h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}
