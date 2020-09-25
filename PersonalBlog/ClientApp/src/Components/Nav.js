import React, { useEffect, useState, useRef } from "react";
//Router
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { connect } from "react-redux";

const Nav = ({ header }) => {

  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef();

  //sticky nav class toggle
  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        { threshold: [1] }
      );

    observer.observe(cachedRef);

    return function () {
      observer.unobserve(cachedRef);
    };
  }, []);

  const expandNav = () => {
    document
      .querySelector(".first-line")
      .classList.toggle("first-line-activated");
    document
      .querySelector(".second-line")
      .classList.toggle("second-line-activated");
    document
      .querySelector(".third-line")
      .classList.toggle("third-line-activated");
    document.querySelector(".nav-expand").classList.toggle("expanded");
    document.querySelector(".nav-expand-links").classList.toggle("d-none");
  };

  const renderHeaderText = () => {
    return (
      <>
        <Link to="/blogs">
          <i className="fas fa-angle-left fa-2x"></i>
            </Link>
            <div>{header}</div>
      </>
    );
  };

  return (
    <>
      <nav ref={ref} className={isSticky ? "isSticky" : ""}>
        <div className="container">
          {header && isSticky ? (
            ""
          ) : (
            <div className="brand">
              <Link to="/">
                <img src={logo} alt="" className="brand-img" />
              </Link>
            </div>
          )}

          <div className="sticky-header">
            {isSticky && header ? renderHeaderText() : ""}
          </div>
          <div onClick={expandNav} className="nav-expand-btn">
            <div className="btn-line first-line"></div>
            <div className="btn-line second-line"></div>
            <div className="btn-line third-line"></div>
          </div>
          <div className="nav-expand">
            <ul className="nav-expand-links d-none">
              <li>
                <Link to="/blogs">Yazılarım</Link>
              </li>
            </ul>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/blogs">Yazılarım</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
