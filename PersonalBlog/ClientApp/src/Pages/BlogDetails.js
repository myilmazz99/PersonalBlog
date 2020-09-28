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

const BlogDetails = ({ getBlogById, blogReducer: { blogs, loadingBlogs } }) => {
  const { id } = useParams();
  const history = useHistory();
  const [readTime, setReadTime] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [blog, setBlog] = useState(undefined);

  useEffect(() => {
    if (!blogs.find((i) => i.blogId === Number(id))) {
      getBlogById(id, history);
    } else {
      setBlog(blogs.find((i) => i.blogId === Number(id)));
    }
  }, [blogs]);

  useEffect(() => {
    if (blog) {
      var timer = setTimeout(() => {
        incrementView(blog.blogId);
      }, 10000);
      let parser = new DOMParser();
      var { body } = parser.parseFromString(blog.content, "text/html");
      textExtractor(body, wordCount);
    }

    return () => clearTimeout(timer);
  }, [blog]);

  useEffect(() => {
    setReadTime(Math.floor(wordCount / 200));
  }, [wordCount]);

  function textExtractor(node) {
    node.childNodes.forEach((i) => {
      if (i.nodeName === "#text")
        setWordCount((prev) => prev + i.textContent.split(" ").length);
      else if (i.childNodes.length !== 0) textExtractor(i);
    });
  }

  return (
    <>
      <Helmet>
        <title>{blog ? blog.header : "Bilelim - Makale"}</title>
      </Helmet>
      {
        <>
          <Header img={blog && blog.mainImage} text={blog && blog.header} />
          <main className="container">
            {loadingBlogs ? (
              <BlogDetailsSkeleton />
            ) : (
              blog && (
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
              )
            )}
          </main>
        </>
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    blogReducer: state.blogReducer,
    ui: state.uiReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getBlogById: bindActionCreators(getBlogById, dispatch),
  incrementView,
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetails);
