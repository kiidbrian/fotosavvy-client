import React, { useEffect, useCallback, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
import data from "./data.json";
import ImageCard from "../../components/imageCard";
// import { useGetPhotosQuery } from "../../features/api/apiSlice";
import { useLoginMutation } from "../../features/api/apiSlice";
import ImageViewer from "react-simple-image-viewer";

function GalleryPage() {
  // const [getPhotos] = useGetPhotosQuery();
  const { user } = useAuth0();
  const [login] = useLoginMutation();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // const getAllPhotos = async () => {
  //   try {
  //     await getPhotos();
  //   } catch (err) {
  //     console.log("err", err);
  //   }
  // };

  const getToken = async (user_id) => {
    try {
      await login({ user_id });
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    // getAllPhotos();
    getToken(user?.sub);
  }, []);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const imageLinks = () => data.map((d) => d.imgUrl);

  return (
    <>
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
