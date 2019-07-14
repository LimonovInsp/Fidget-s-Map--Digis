import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./less/index.less";
require.context("../images", true, /\.(png|jpg)$/);

ReactDOM.render(<App />, document.getElementById("root"));
