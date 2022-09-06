import React from 'react';

function Footer() {
  return (
    <footer className="footer__section">
      <div className="container">
        <div className="footer__copyright__text">
          <p>
            Copyright &copy; {new Date().getFullYear()} All rights reserved |
            Pixessa <i className="fa fa-heart" aria-hidden="true"></i> by{' '}
            <a
              href="https://www.instagram.com/rjaystudios"
              target="_blank"
              rel="noreferrer"
            >
              rjaystudios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
