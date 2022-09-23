import React, { useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
import data from "./data.json";
import ImageCard from "../../components/imageCard";
import {
  useLoginMutation,
  useGetGalleriesQuery,
} from "../../features/api/apiSlice";
import ImageViewer from "react-simple-image-viewer";
import { selectToken } from "../../features/auth/authSlice";

function GalleryPage() {
  const { user } = useAuth0();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const token = useSelector(selectToken);
  const {
    data: galleries,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetGalleriesQuery();

  let content;

  console.log("galleries => ", galleries);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const imageLinks = () => data.map((d) => d.imgUrl);

  // if (isLoading) {
  //   content = <p>Loading data...</p>;
  // } else if (isSuccess) {
  //   content = galleries.map((gallery) => <p>{gallery.name}</p>);
  // } else if (isError) {
  //   content = <div>{error.toString()}</div>;
  // }

  return (
    <>
      {content}
      <div className="gallery__page">
        <div className="gallery__warp">
          <div className="row">
            {data.map((d, idx) => (
              <ImageCard
                key={d.id}
                imgUrl={d.imgUrl}
                idx={idx}
                openImageViewer={openImageViewer}
                width="300"
              />
            ))}
          </div>
        </div>
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={imageLinks}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </>
  );
}

export default GalleryPage;
