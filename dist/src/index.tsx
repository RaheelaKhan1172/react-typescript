import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/index";
import { Timer } from "./components/Timer";

ReactDOM.render(
  <Timer />,
  document.getElementById("example")
);
