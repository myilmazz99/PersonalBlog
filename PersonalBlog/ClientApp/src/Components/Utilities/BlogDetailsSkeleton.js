import React from "react";

const BlogDetailsSkeleton = () => {
  return (
    <>
      <section className="blog-detail-layout">
        <section id="blog-content">
          <div className="blog-info">
            <div className="small-line"></div>
          </div>
          <div className="full-line"></div>
          <div className="full-line"></div>
          <div className="full-line"></div>
          <div className="full-line"></div>
          <div className="full-line"></div>
          <div className="full-line"></div>
          <div className="full-line"></div>
          <div className="full-line"></div>
          <div className="full-line"></div>
          <div className="full-line"></div>
          <div className="full-line"></div>
          <div className="full-line"></div>
          <div className="full-line"></div>
          <div className="full-line"></div>
        </section>

        <section className="author">
          <div className="img-skeleton"></div>
          <div className="small-line"></div>
          <div className="small-line"></div>
          <div className="full-line"></div>
          <div className="full-line"></div>
        </section>
      </section>
    </>
  );
};

export default BlogDetailsSkeleton;
