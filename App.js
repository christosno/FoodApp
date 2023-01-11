import React from "react";
import ReactDOM from "react-dom/client";

const h1 = React.createElement(
  "h1",
  { id: "my-h1", key: "h1" },
  "Hello from React"
);
const h2 = React.createElement(
  "h2",
  { id: "my-h2", key: "h2" },
  "My neme is Christos"
);
const div = React.createElement(
  "div",
  { id: "my-div", key: "div1", style: { background: "blue" } },
  [h1, h2]
);
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(div);
