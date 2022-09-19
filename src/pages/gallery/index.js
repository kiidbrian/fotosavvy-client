import React from "react";
import data from "./data.json";
import ImageCard from "../../components/imageCard";

function GalleryPage() {
  return (
    <div className="gallery__page">
      <div className="gallery__warp">
        <div className="row">
          {data.map((d) => (
            <ImageCard key={d.id} imgUrl={d.imgUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
