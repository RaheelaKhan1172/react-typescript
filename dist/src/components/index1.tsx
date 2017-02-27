import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/index";

ReactDOM.render(
  <Hello compiler="TypeScript" library="React" />,
  document.getElementById("example")
);
