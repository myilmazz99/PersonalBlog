import * as actionTypes from "../actions/actionTypes";

let initialState = {
    blogs: [],
    page: 0,
    blogCount:0,
    hasMoreBlogs:true,
    loadingComments: false,
    loadingBlogs:false
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GET_BLOG_COUNT_SUCCESS:
            return { ...state, blogCount: action.payload }

        case actionTypes.GET_BLOGS_SUCCESS:
            //removing duplicates
            for (var i = 0; i < action.payload.length; i++) {
                    for (var j = 0; j < state.blogs.length; j++) {
                        if (action.payload[i].blogId === state.blogs[j].blogId) {
                            state.blogs.splice(j, 1);
                        }
                    }
            }

            return {
                ...state,
                blogs: [...state.blogs, ...action.payload],
                loadingBlogs: false,
                page: state.page + 1,
                hasMoreBlogs: action.payload.length < 3 ? false : true
            };

        case actionTypes.GET_BLOGBYID_SUCCESS:
            return { ...state, blogs: [...state.blogs, action.payload] }

        case actionTypes.LOADING_COMMENTS:
            return { ...state, loadingComments: true };

        case actionTypes.STOP_LOADING_COMMENTS:
            return { ...state, loadingComments: false };

        case actionTypes.LOADING_BLOGS:
            return { ...state, loadingBlogs: true };

        case actionTypes.ADD_COMMENT_SUCCESS:
            let blogToAdd = state.blogs.find(
                (i) => i.blogId === action.payload.blogId
            );
            let newState = state.blogs.map((blog) => {
                if (blog.blogId === action.payload.blogId) {
                    return Object.assign({}, blogToAdd, {
                        comments: [...blogToAdd.comments, action.payload],
                    });
                } else {
                    return blog;
                }
            });
            return { blogs: [...newState], loadingComments: false };

        default:
            return state;
    }
};

export default blogReducer;
