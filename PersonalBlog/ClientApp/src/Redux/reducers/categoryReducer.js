import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: [],
  currentCategory: {}
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload };
    case actionTypes.CHANGE_CATEGORY:
      return { ...state, currentCategory: action.payload };
    default:
      return state;
  }
};

export default categoryReducer;
