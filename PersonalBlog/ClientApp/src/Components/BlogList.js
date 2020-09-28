import React, { useEffect, useState, useRef } from "react";
//Route
import { Link } from "react-router-dom";
//Redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBlogs } from "../Redux/actions/blogActions";
import CategoryList from "./CategoryList";
import LoadingSpinner from "./Utilities/LoadingSpinner";

const BlogList = ({
  path,
  blogReducer: { blogs, loadingBlogs, page, hasMoreBlogs, blogCount },
  getBlogs,
  currentCategory,
}) => {
  const [onBlogsPage] = useState(path.indexOf("blogs") > 0);
  const observer = useRef();

  const lastBlogRef = (node) => {
    if (loadingBlogs) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMoreBlogs && onBlogsPage) {
        getBlogs(page);
      }
    });

    if (node) observer.current.observe(node);
  };

  useEffect(() => {
    if (blogs.length < blogCount) {
      getBlogs(page);
    }
  }, [blogCount]);

  if (!onBlogsPage) {
    blogs = blogs.slice(0, 3);
  }

  return (
    <>
      <main className="container">
        {onBlogsPage ? (
          <div className="blog-header">
            <CategoryList />
          </div>
        ) : (
          <div className="blog-header">Son Eklenenler</div>
        )}

        {blogs &&
          blogs
            .filter((blog) =>
              currentCategory && onBlogsPage
                ? blog.categoryName === currentCategory
                : blog
            )
            .map((blog, i) => (
              <Link
                ref={blogs.length === i + 1 ? lastBlogRef : null}
                key={blog.blogId}
                to={`/blogs/${blog.blogId}`}
              >
                <div className="blog-preview">
                  <div className="blog-img">
                    <img src={blog.mainImage} alt="" />
                  </div>

                  <div className="blog-details">
                    <h2>{blog.header}</h2>
                    <div className="category">{blog.categoryName}</div>
                    <small>
                      <span>
                        {blog.addedDate}, by {blog.writerName}
                      </span>
                      <span>
                        <span className="blog-details-icon">
                          <i className="fas fa-eye"></i> {blog.viewCount}
                        </span>
                        <span className="blog-details-icon">
                          <i className="fas fa-comment"></i> {blog.commentCount}
                        </span>
                      </span>
                    </small>
                  </div>
                </div>
              </Link>
            ))}

        {loadingBlogs ? <LoadingSpinner /> : ""}

        {onBlogsPage ? (
          ""
        ) : (
          <div className="link-to-blogs">
            <Link to="/blogs">Tüm Yazılarım</Link>
          </div>
        )}
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    blogReducer: state.blogReducer,
    currentCategory: state.categoryReducer.currentCategory.categoryName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogs: bindActionCreators(getBlogs, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
