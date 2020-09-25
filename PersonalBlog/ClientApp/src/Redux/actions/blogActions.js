import axios from "axios";
import * as actionTypes from "./actionTypes";
import dispatchActionResult from "./dispatchActionResult";

export const getBlogCount = () => async dispatch => {
    try {
        var res = await axios.get("/api/blogs/count");
        dispatch({ type: actionTypes.GET_BLOG_COUNT_SUCCESS, payload: res.data });
    } catch (e) {
        console.log(e);
    }
}

export const getBlogs = (page) => {
    return async (dispatch) => {
        try {
            dispatch({ type: actionTypes.LOADING_BLOGS });
            let request = await axios.get(
                `/api/blogs/?page=${page || 0}`
            );
            dispatch({ type: actionTypes.GET_BLOGS_SUCCESS, payload: request.data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getBlogById = (blogId, history) => async dispatch => {
    try {
        dispatch({ type: actionTypes.LOADING_UI });
        let res = await axios.get(`/api/blogs/${blogId}`);
        dispatch({ type: actionTypes.GET_BLOGBYID_SUCCESS, payload: res.data });
        dispatch({ type: actionTypes.STOP_LOADING_UI });
    } catch (e) {
        history.push("/404");
    }
}

export const incrementView = async (blogId) => {
    try {
        await axios.put(`/api/blogs/incrementview?blogId=${blogId}`);
    } catch (error) {
        console.log(error);
    }
};

export const addComment = (comment) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.LOADING_COMMENTS });
        try {
            await axios.post(
                "/api/blogs/addcomment",
                comment
            );
            dispatch({
                type: actionTypes.ADD_COMMENT_SUCCESS,
                payload: comment,
            });
            dispatchActionResult(dispatch, true, "Yorumunuz eklendi.");
        } catch (error) {
            dispatchActionResult(dispatch, false, "Yorumunuz eklenirken bir hata oluştu. Lüften daha sonra tekrar deneyiniz.");
            dispatch({ type: actionTypes.STOP_LOADING_COMMENTS });
        }
    };
};

