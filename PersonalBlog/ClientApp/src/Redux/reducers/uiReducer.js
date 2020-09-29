import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  isSuccess: true,
  resultMessage: "",
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING_UI:
      return { ...state, loading: true };
    case actionTypes.STOP_LOADING_UI:
      return { ...state, loading: false };
    case actionTypes.SET_ACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        resultMessage: action.payload,
      };
    case actionTypes.SET_ACTION_ERROR:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        resultMessage: action.payload,
      };
    case actionTypes.CLEAR_ACTION_RESULT:
      return { ...state, resultMessage: "" };

    default:
      return state;
  }
};

export default uiReducer;
