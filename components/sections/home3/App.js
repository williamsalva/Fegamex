import Link from "next/link";

export default function App() {
  return (
    <>
      <section className="apps-section alternat-2 pt_120 pb_120">
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{ backgroundImage: "url(/assets/images/shape/shape-3.png)" }}
          ></div>
          <div
            className="pattern-2"
            style={{
              backgroundImage: "url(/assets/images/shape/shape-16.png)",
            }}
          ></div>
        </div>
        <div className="image-layer">
          <figure className="image-1">
            <img src="/assets/images/resource/mockup-1.png" alt="" />
          </figure>
          <figure className="image-2">
            <img src="/assets/images/resource/mockup-2.png" alt="" />
          </figure>
        </div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
              <div className="content-box ml_50">
                <div className="sec-title light mb_20">
                  <h6>Mobile App</h6>
                  <h2>Get the Fastest and Most Secure Banking</h2>
                </div>
                <div className="text-box mb_50">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec felis, suscipit you take action against fraud. See it
                    the Security Center for and Mobile and Online Banking.
                  </p>
                </div>
                <div className="btn-box">
                  <Link href="/" className="play-store mr_20">
                    <img src="/assets/images/icons/icon-2.png" alt="" />
                    <span>get it on</span>
                    Google Play
                  </Link>
                  <Link href="/" className="play-store">
                    <img src="/assets/images/icons/icon-3.png" alt="" />
                    <span>Download on the</span>
                    App Store
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
