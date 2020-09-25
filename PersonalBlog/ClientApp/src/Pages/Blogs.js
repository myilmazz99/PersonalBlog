import React from "react";
import blogimg from "../img/blogs.jpg";
//Components
import BlogList from "../Components/BlogList";
import Header from "../Components/Header";
import axios from "axios";
import { Helmet } from 'react-helmet';

const Blogs = ({ match: { path }, ...props }) => {
  let pickAphorism = async () => {
    let aphorisms = await axios.get("/aphorism.json");
    let aphorism =
      aphorisms.data[Math.floor(Math.random() * aphorisms.data.length)];
    return aphorism;
  };

  return (
      <>
          <Helmet>
              <title>Bilelim - Makaleler</title>
          </Helmet>
      <Header img={blogimg} pickAphorism={pickAphorism} />
      <BlogList path={path} />
    </>
  );
};

export default Blogs;
