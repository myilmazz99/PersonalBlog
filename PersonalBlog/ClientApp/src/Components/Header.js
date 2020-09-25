import React, { useEffect, useState } from "react";
import Nav from "./Nav";

const Header = ({ img, text, pickAphorism }) => {
  const [aphorism, setAphorism] = useState();

  useEffect(() => {

    if (pickAphorism) {
      pickAphorism().then((i) => setAphorism(i));
    }
  }, []);

  return (
    <>
      <div className="jumbotron">
        <img src={img} alt="" />
        <h1 className="jumbotron-text">
          <div>
            {aphorism
              ? aphorism.aphorism
              : text || "myblog.com'a hoşgeldiniz! Keyifli okumalar."}
          </div>
          <small>{aphorism ? `- ${aphorism.writer}` : ""}</small>
        </h1>
      </div>
      <Nav header={text} />
    </>
  );
};

export default Header;
