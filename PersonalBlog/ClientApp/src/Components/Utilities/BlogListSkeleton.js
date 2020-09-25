import React from "react";

const BlogListSkeleton = () => {
  return (
    <>
      <div className="blog-preview">
        <div className="blog-img">
          <div className="img-skeleton"></div>
        </div>

        <div className="blog-details">
          <div className="full-line"></div>
          <div className="category small-line"></div>
          <small>
            <div className="small-line"></div>
            <div className="small-line"></div>
          </small>
        </div>
      </div>
    </>
  );
};

export default BlogListSkeleton;
