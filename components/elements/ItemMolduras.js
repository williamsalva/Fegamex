import React from "react";
import Link from "next/link";

export default function ItemMolduras({ title, img, id }) {
  return (
    <div className="col-lg-4 col-md-6 col-6 team-block">
      <Link href={`/moldura/${id}`}>
        <div
          className="team-block-one wow fadeInUp animated"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="inner-box">
            <div className="image-box">
              <figure className="image">
                <img src={img} alt="" />
              </figure>
            </div>
            <div className="lower-content">
              <h3>{title}</h3>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
