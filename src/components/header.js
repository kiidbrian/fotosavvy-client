import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { logout as apiLogout } from "../features/auth/authSlice";
import MainMenu from "./mainMenu";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { logout } = useAuth0();

  const signOut = () => {
    logout(); // auth0 logout
    dispatch(apiLogout());
    history.push(`/login`);
  };

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-3 order-2 order-sm-1">
            <div className="header__social">
              <Link to="https://web.framework.com/rjaystudios" target="_blank">
                <i className="fa fa-facebook"></i>
              </Link>
              <Link to="/">
                <i className="fa fa-twitter"></i>
              </Link>
              <Link to="https://www.instagram.com/rjaystudios" target="_blank">
                <i className="fa fa-instagram"></i>
              </Link>
            </div>
          </div>
          <div className="col-sm-4 col-md-6 order-1  order-md-2 text-center">
            <Link to="/" className="site-logo">
              <img src="img/pixessa.png" alt="" />
            </Link>
          </div>
          <div className="col-sm-4 col-md-3 order-3 order-sm-3">
            <div className="header__switches">
              <Link to="/" className="search-switch">
                <i className="fa fa-search"></i>
              </Link>
              <Link to="/" className="nav-switch">
                <i className="fa fa-bars"></i>
              </Link>
              <span onClick={() => signOut()}>
                <FontAwesomeIcon icon={icon({ name: "right-from-bracket" })} />
              </span>
            </div>
          </div>
        </div>
        <MainMenu />
      </div>
    </header>
  );
}

export default Header;
