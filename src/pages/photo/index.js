import React, { useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import ImageCard from "../../components/imageCard";
import ImageViewer from "react-simple-image-viewer";
import { selectToken } from "../../features/auth/authSlice";
import { useGetPhotosQuery } from "../../features/api/apiSlice";

function PhotosPage() {
  const [skip, setSkip] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const token = useSelector(selectToken);
  const {
    data: photos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPhotosQuery("", { skip });

  const imageLinks = photos?.results?.map((photo) => photo.image_url);
  console.log("imageLinks =>", imageLinks);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    // skip request until token is available
    if (token) {
      setSkip(false);
    }
  }, [token]);

  return (
    <>
      <div className="gallery__page">
        <div className="gallery__warp">
          <div className="row">
            {photos?.results?.map((photo, idx) => (
              <ImageCard
                key={photo.id}
                imgUrl={photo.image_url}
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

export default PhotosPage;
