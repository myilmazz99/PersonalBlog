import React, { useEffect, useState } from "react";
import "./App.scss";
//Components
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Blogs from "./Pages/Blogs.js";
import BlogDetails from "./Pages/BlogDetails";
//Router
import { Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import { connect } from "react-redux";
//Actions
import {getBlogCount} from './Redux/actions/blogActions';
import ScrollToTop from "./Components/Tools/ScrollToTop";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.min.css";
import { bindActionCreators } from "redux";

const App = ({ ui: { isSuccess, resultMessage }, getBlogCount }) => {
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        getBlogCount();
    }, [])

    useEffect(() => {
        if (!initialLoad && resultMessage !== "") {
            if (isSuccess) {
                alertify.success(resultMessage);
            } else {
                alertify.error(resultMessage);
            }
        }
        setInitialLoad(false);
    }, [isSuccess, resultMessage])
    return (
        <>
            <ScrollToTop />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/blogs" component={Blogs} />
                <Route exact path="/blogs/:id" component={BlogDetails} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </>
    );
};

const mapStateToProps = state => ({
    ui: state.uiReducer
})

const mapDispatchToProps = dispatch => ({
    getBlogCount: bindActionCreators(getBlogCount, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
