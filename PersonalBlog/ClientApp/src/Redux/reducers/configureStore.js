import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./index";
import thunk from "redux-thunk";

//const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default configureStore;
