import React, { useEffect, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
import { useGetGalleriesQuery } from "../../features/api/apiSlice";
import { selectToken } from "../../features/auth/authSlice";
import "./index.css";

function GalleryPage() {
  const [skip, setSkip] = useState(true);
  const token = useSelector(selectToken);
  const history = useHistory();
  const {
    data: galleries,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetGalleriesQuery("", { skip });

  let content;

  // if (isLoading) {
  //   content = <p>Loading data...</p>;
  // } else if (isSuccess) {
  //   content = galleries.map((gallery) => <p>{gallery.name}</p>);
  // } else if (isError) {
  //   content = <div>{error.toString()}</div>;
  // }

  const navigate = (path) => {
    history.push(path);
  };

  useEffect(() => {
    // skip request until token is available
    if (token) {
      setSkip(false);
    }
  }, [token]);

  return (
    <div className="container">
      <div className="row pt-4">
        {galleries?.results?.map((gallery) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 gallery-item"
            key={gallery.id}
          >
            <button onClick={() => navigate(`gallery/${gallery.id}/photos`)}>
              {gallery.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
