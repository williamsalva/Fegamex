import Layout from "@/components/layout/Layout";
import Link from "next/link";
import ItemMolduras from "@/components/elements/ItemMolduras";
import itemsMolduras from "@/data/itemsMolduras";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <div>
          {/* news-style-two */}
          <section className="news-style-two blog-grid pt_120 pb_120">
            <div className="auto-container">
              <div className="sec-title mb_70 centred">
                <h1 className="title-section">Molduras decorativas</h1>
              </div>
              <div className="row clearfix">
                {itemsMolduras.map((item, index) => (
                  <ItemMolduras
                    key={index}
                    title={item.title}
                    img={item.img}
                    id={item.id}
                  />
                ))}
              </div>
            </div>
          </section>
          {/* news-style-two end */}

          {/* subscribe-section */}
          <section className="subscribe-section">
            <div
              className="pattern-layer"
              style={{
                backgroundImage: "url(/assets/images/shape/shape-5.png)",
              }}
            ></div>
            <div className="auto-container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                  <div className="text-box">
                    <h2>Subscribe us to Receive Latest Updates</h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                  <div className="form-inner ml_40">
                    <form method="post" action="/contact">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your email"
                          required
                        />
                        <button type="submit" className="theme-btn btn-two">
                          Subscribe Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* subscribe-section end */}
        </div>
      </Layout>
    </>
  );
}
