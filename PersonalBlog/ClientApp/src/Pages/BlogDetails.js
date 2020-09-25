import React, { useEffect, useState } from "react";
//Components
import profileImg from "../img/profile.jpg";
import Comments from "../Components/Comments";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getBlogById, incrementView } from "../Redux/actions/blogActions";
import Header from "../Components/Header";
import BlogDetailsSkeleton from "../Components/Utilities/BlogDetailsSkeleton";
import { useParams, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogDetails = ({ getBlogById, blog, ui: { loading }, ...props }) => {
  const { id } = useParams();
  const history = useHistory();
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    if (!blog) {
      getBlogById(id, history);
    }

    if (blog) {
      setReadTime(Math.floor(blog.content.split(" ").length / 200));
      var timer = setTimeout(() => {
        incrementView(blog.blogId);
      }, 10000);
    }

    return () => clearTimeout(timer);
  }, [blog]);

  return (
    <>
      <Helmet>
        <title>{blog ? blog.header : "Bilelim - Makale"}</title>
      </Helmet>
      {blog && (
        <>
          <Header img={blog.mainImage} text={blog.header} />
          <main className="container">
            {loading ? (
              <BlogDetailsSkeleton />
            ) : (
              <>
                <section className="blog-detail-layout">
                  <section id="blog-content">
                    <p className="blog-info">
                      <span className="blog-details-icon">
                        <i className="fas fa-eye"></i> {blog.viewCount}
                      </span>
                      <span className="blog-details-icon">
                        <i className="fas fa-comment"></i> {blog.commentCount}
                      </span>
                      <span>
                        <i className="far fa-clock"></i> {readTime} dakikalık
                        okuma
                      </span>
                    </p>
                    <div
                      className="html-content"
                      dangerouslySetInnerHTML={{ __html: blog.content }}
                    ></div>
                  </section>

                  <section className="author">
                    <div className="author-img">
                      <img
                        src={blog.writerProfilePictureUrl || profileImg}
                        alt="profile placeholder"
                      />
                    </div>
                    <div className="author-details">
                      <small>Yazar</small>
                      <h4>{blog.writerName}</h4>
                      <p>{blog.writerSummary}</p>
                    </div>
                  </section>
                </section>
                <Comments blogId={blog.blogId} commentList={blog.comments} />
              </>
            )}
          </main>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const blogId = ownProps.match.params.id;
  const blog =
    (blogId &&
      state.blogReducer.blogs.find((i) => i.blogId === Number(blogId))) ||
    null;

  return {
    blog,
    blogReducer: state.blogReducer,
    ui: state.uiReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getBlogById: bindActionCreators(getBlogById, dispatch),
  incrementView,
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetails);
