import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
  return (
    <nav className="main__menu">
      <ul className="nav__menu">
        <li>
          <Link to="home">Home</Link>
        </li>
        {/* <li>
          <Link to="about.html">About</Link>
        </li> */}
        <li>
          <Link to="/gallery" className="menu--active">
            Gallery
          </Link>
        </li>
        {/* <li>
          <Link to="blog.html">Blog</Link>
          <ul className="sub__menu">
            <li>
              <Link to="blog-single.html">Blog Single</Link>
            </li>
          </ul>
        </li> */}
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;
