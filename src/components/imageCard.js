import React from "react";
import { Link } from "react-router-dom";

function ImageCard({ imgUrl, idx, openImageViewer, width }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <Link to={imgUrl}>
        <img
          src={imgUrl}
          alt=""
          onClick={() => openImageViewer(idx)}
          width={width}
        />
      </Link>
    </div>
  );
}

export default ImageCard;
