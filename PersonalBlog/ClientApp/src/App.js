import React, { Suspense, useEffect, useState, lazy } from "react";
import "./App.scss";
//Router
import { Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import { connect } from "react-redux";
//Actions
import { getBlogCount } from "./Redux/actions/blogActions";
import ScrollToTop from "./Components/Tools/ScrollToTop";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css";
import { bindActionCreators } from "redux";
import PageLoading from "./Components/Utilities/PageLoading";

const App = ({ ui: { isSuccess, resultMessage }, getBlogCount }) => {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    getBlogCount();
  }, []);

  useEffect(() => {
    if (!initialLoad && resultMessage !== "") {
      if (isSuccess) {
        alertify.success(resultMessage);
      } else {
        alertify.error(resultMessage);
      }
    }
    setInitialLoad(false);
  }, [isSuccess, resultMessage]);

  const Home = lazy(() => import("./Pages/Home"));
  const NotFound = lazy(() => import("./Pages/NotFound"));
  const Blogs = lazy(() => import("./Pages/Blogs"));
  const BlogDetails = lazy(() => import("./Pages/BlogDetails"));

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/blogs/:id" component={BlogDetails} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  ui: state.uiReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getBlogCount: bindActionCreators(getBlogCount, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
