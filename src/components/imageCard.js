import React from "react";
import { Link } from "react-router-dom";

function ImageCard({ imgUrl }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <Link
        className="gallery__item fresco"
        to={imgUrl}
        data-fresco-group="gallery"
      >
        <img
          src={imgUrl}
          alt=""
          data-pagespeed-url-hash="960544915"
          onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);"
        />
      </Link>
    </div>
  );
}

export default ImageCard;
