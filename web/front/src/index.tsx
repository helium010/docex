import "highlight.js/styles/github-dark.css";
import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./view/App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
