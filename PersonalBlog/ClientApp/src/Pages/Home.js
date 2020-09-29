import React from "react";
import homeimg from "../img/homescreen.jpg";
//components
import BlogList from "../Components/BlogList";
import Header from "../Components/Header";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bilelim - Anasayfa</title>
      </Helmet>
      <Header img={homeimg} />
      <BlogList />
    </>
  );
};

export default Home;
