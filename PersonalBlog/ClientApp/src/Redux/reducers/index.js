import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import categoryReducer from "./categoryReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  blogReducer,
  categoryReducer,
    uiReducer
});

export default rootReducer;
