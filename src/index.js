/* eslint no-unused-expressions: "off" */
import React from "react";
import ReactDOM from "react-dom";

import "bulma/css/bulma.min.css";
import "bulma-extensions/dist/css/bulma-extensions.min.css";
import "./index.css";
import App from "./App";

// import './css/bulma.min.css'
// import './css/bulma-extensions.min.css'
// import './js/bulma-extensions.min.js'
// import "./css/darkly/bulmaswatch.min.css";
// darkly cerulean sandstone
import * as $$ from "./shortJS.js";

ReactDOM.render(<App />, $$.Id("root"));
