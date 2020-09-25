import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="credentials">
          <div className="container">
            <div>
              <i className="far fa-envelope-open"></i>
              <span>mfyilmaz95@gmail.com</span>
            </div>
            <div>
              <i className="fas fa-globe"></i>
              <span>www.myyilmaz.com</span>
            </div>
            <div>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
        </div>
        <div className="copyright">
            <small>© 2020 Tüm hakları saklıdır. www.myblog.com</small>
        </div>
      </footer>
    </>
  );
};

export default Footer;
