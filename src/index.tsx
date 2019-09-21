import React from "react";
import ReactDOM from "react-dom";
import App from "./scenes/index";
import configureStore from "./redux/store";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));