import Link from "next/link";

export default function Card() {
  return (
    <>
      <section className="card-section centred pt_10 pb_90">
        <div className="pattern-layer">
          <div className="pattern-1 rotate-me"></div>
          <div
            className="pattern-2"
            style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}
          ></div>
        </div>
        <div className="auto-container">
          <div className="sec-title mb_70">
            <h6>Explora Nuestra Variedad</h6>
            <h2>Descubre Nuestros Productos 😍</h2>
          </div>
          <div className="row clearfix justify-content-center">
            <div className="col-lg-4 col-md-4 col-sm-12 card-block">
              <div
                className="card-block-one wow fadeInUp animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href="/index-2">
                      <img
                        src="/assets/images/home/molduras-decorativa.png"
                        alt="Moldura decorativa"
                      />
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <h3>
                      <Link href="/index-2">Molduras Decorativas</Link>
                    </h3>
                    <p>
                      Transforma tus espacios con nuestras molduras exclusivas.
                    </p>

                    <div className="btn-box">
                      <Link
                        href="/molduras-decorativas"
                        className="theme-btn btn-two"
                      >
                        !Conocelas!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 card-block">
              <div
                className="card-block-one wow fadeInUp animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href="/index-2">
                      <img
                        src="/assets/images/home/gargola.png"
                        alt="gargola bajante"
                      />
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <h3>
                      <Link href="/index-2">Gargolas</Link>
                    </h3>
                    <p>
                      Utiles para decorar fachadas y canalizar la salida de
                      agua.
                    </p>
                    <div className="btn-box">
                      <Link href="/gargolas" className="theme-btn btn-two">
                        ¡Conocelas!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 card-block">
              <div
                className="card-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href="/index-2">
                      <img
                        src="/assets/images/home/puntal.png"
                        alt="Puntal decorativo"
                      />
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <h3>
                      <Link href="/index-2">Puntales y Vigas</Link>
                    </h3>
                    <p>
                      Vigas y puntales decorativos, el mejor elemento de tipo
                      colonial para embellecer tus espacios.
                    </p>

                    <div className="btn-box">
                      <Link
                        href="/puntales-vigas"
                        className="theme-btn btn-two"
                      >
                        !Conocelos!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 card-block">
              <div
                className="card-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href="/index-2">
                      <img
                        src="/assets/images/home/pegamoldura.png"
                        alt="Pegamoldura"
                      />
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <h3>
                      <Link href="/index-2">Pegamoldura</Link>
                    </h3>
                    <p>Adherencia en concreto, metal, vidrio y asfalto.</p>
                    <div className="btn-box">
                      <Link href="/pegamolduras" className="theme-btn btn-two">
                        !Conocelo!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 card-block">
              <div
                className="card-block-one wow fadeInUp animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <Link href="/index-2">
                      <img
                        src="/assets/images/home/rosetones.png"
                        alt="Pegamoldura"
                      />
                    </Link>
                  </figure>
                  <div className="lower-content">
                    <h2>
                      <Link href="/index-2">Rosetones</Link>
                    </h2>
                    <p>
                      Detalle único para tus techos y paredes, añade elegancia a
                      cualquier espacio.
                    </p>
                    <div className="btn-box">
                      <Link href="/rosetones" className="theme-btn btn-two">
                        !Conocelos!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
