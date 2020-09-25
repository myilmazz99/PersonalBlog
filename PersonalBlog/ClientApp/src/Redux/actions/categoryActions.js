import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getCategories = () => {
  return async (dispatch) => {
    try {
      let result = await axios.get(
        "/api/categories"
      );
      dispatch({
        type: actionTypes.GET_CATEGORIES_SUCCESS,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeCategory = (category) => {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
};
