import * as actionTypes from "./actionTypes";

const dispatchActionResult = (dispatch, isSuccess, payload) => {
    if (isSuccess) {
        dispatch({
            type: actionTypes.SET_ACTION_SUCCESS,
            payload: payload,
        });
    } else {
        dispatch({
            type: actionTypes.SET_ACTION_ERROR,
            payload: payload,
        });
    }
    setTimeout(() => {
        dispatch({ type: actionTypes.CLEAR_ACTION_RESULT });
    }, 5000);
};

export default dispatchActionResult;
