import React from "react";

function ImageCard({ imgUrl, idx, openImageViewer, width }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <img
        src={imgUrl}
        alt=""
        onClick={() => openImageViewer(idx)}
        width={width}
      />
    </div>
  );
}

export default ImageCard;
