import Link from "next/link";

export default function Breadcrumb({ breadcrumbTitle, breadcrumbNameImage }) {
  return (
    <>
      <section className="page-title centred">
        <div
          className="bg-layer"
          style={{
            backgroundImage: breadcrumbNameImage
              ? `url(/assets/images/background/${breadcrumbNameImage}.jpg)`
              : "url(/assets/images/background/page-title.jpg)",
          }}
        ></div>
        <div className="pattern-layer">
          <div
            className="pattern-1"
            style={{
              backgroundImage: "url(/assets/images/shape/shape-18.png)",
            }}
          ></div>
          <div
            className="pattern-2"
            style={{
              backgroundImage: "url(/assets/images/shape/shape-17.png)",
            }}
          ></div>
        </div>
        <div className="auto-container">
          <div className="content-box">
            <h1>{breadcrumbTitle}</h1>
          </div>
        </div>
      </section>
    </>
  );
}
