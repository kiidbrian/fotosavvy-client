import React, { useEffect, useCallback, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import data from "./data.json";
import ImageCard from "../../components/imageCard";
import { useGetPhotosQuery } from "../../features/api/apiSlice";
import { useLoginMutation } from "../../features/api/apiSlice";

function GalleryPage() {
  // const [getPhotos] = useGetPhotosQuery();
  const { user } = useAuth0();
  const [login] = useLoginMutation();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

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

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
                openImageViewer={openLightbox}
                width="300"
              />
            ))}
          </div>
        </div>
      </div>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={data.map((x) => ({
                ...x,
                srcset: x.imgUrl,
                caption: x.imgAlt,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}

export default GalleryPage;
