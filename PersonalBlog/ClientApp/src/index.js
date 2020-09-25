import React from "react";
import App from "./App";
import { render } from 'react-snapshot';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
//Redux
import configureStore from "./Redux/reducers/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
