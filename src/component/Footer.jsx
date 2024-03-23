// Footer.jsx
import React, { useState, useEffect } from 'react';
import './Footer.css'; // Make sure the path is correct

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      <footer>
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2023 <a href="#">doorestepcash</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
      {showTopBtn && (
        <a href="#top" className="go-top-btn" data-go-top>
          <ion-icon name="arrow-up-outline"></ion-icon>
        </a>
      )}
    </>
  );
};

export default Footer;
