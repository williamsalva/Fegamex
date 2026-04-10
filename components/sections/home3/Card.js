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
          padding: 120px 0;
          background: #fff;
        }
        
        .section-header-products {
          text-align: center;
          margin-bottom: 80px;
        }
        
        .section-header-products .subtitle {
          display: inline-block;
          color: var(--theme-color);
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 4px;
          margin-bottom: 20px;
          font-family: var(--inter);
        }
        
        .section-header-products h2 {
          font-size: 3.5rem;
          font-weight: 800;
          color: var(--title-color);
          line-height: 1.1;
          font-family: var(--futura);
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        
        .product-card {
          background: #fff;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid rgba(0,0,0,0.03);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .product-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: rgba(230, 57, 70, 0.1);
        }
        
        .product-card.featured {
          grid-column: span 2;
        }
        
        .product-image {
          position: relative;
          overflow: hidden;
          background: #f8fafc;
          padding: 40px;
          min-height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .product-card.featured .product-image {
          min-height: 350px;
        }
        
        .product-image img {
          max-width: 100%;
          max-height: 240px;
          object-fit: contain;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .product-card:hover .product-image img {
          transform: scale(1.05);
        }
        
        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(17, 24, 39, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.4s ease;
        }
        
        .product-card:hover .product-overlay {
          opacity: 1;
        }
        
        .view-btn {
          background: var(--theme-color);
          color: #fff;
          padding: 12px 28px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transform: translateY(10px);
          transition: all 0.4s ease;
          box-shadow: var(--shadow-md);
        }
        
        .product-card:hover .view-btn {
          transform: translateY(0);
        }
        
        .view-btn:hover {
          background: #ff4d5a;
          color: #fff;
        }
        
        .product-content {
          padding: 40px;
        }
        
        .product-content h3 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 16px;
          font-family: var(--futura);
          line-height: 1.2;
        }
        
        .product-content h3 a {
          color: #ff4d5a !important;
          transition: all 0.3s ease;
        }
        
        .product-content h3 a:hover {
          color: #ff4d5a;
          opacity: 0.8;
        }
        
        .product-content p {
          font-size: 1rem;
          color: var(--text-color);
          line-height: 1.6;
          margin-bottom: 32px;
          font-family: var(--inter);
          opacity: 0.8;
        }
        
        .product-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #ff4d5a !important;
          font-weight: 800;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.3s ease;
          font-family: var(--inter);
          text-decoration: none;
        }
        
        .product-link:hover {
          gap: 18px;
          opacity: 0.8;
        }
        
        .product-link .arrow {
          transition: transform 0.3s ease;
          font-size: 18px;
          line-height: 1;
        }
        
        @media (max-width: 991px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .product-card.featured {
            grid-column: span 2;
          }
          
          .section-header-products h2 {
            font-size: 2.75rem;
          }
        }
        
        @media (max-width: 767px) {
          .products-section-modern {
            padding: 80px 0;
          }
          
          .products-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          .product-card.featured {
            grid-column: span 1;
          }
          
          .section-header-products h2 {
            font-size: 2.25rem;
          }

          .product-content {
            padding: 30px;
          }
        }
      `}</style>
    </>
  );
}
