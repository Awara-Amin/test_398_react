//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
// var React = require("react");
var ReactDOM = require("react-dom");

// ReactDOM.render(WHAT TO Shaw, where to show it);

ReactDOM.render(
  <div>
    <h1>My Favourite Foods are:</h1>
    <ul>
      <li> Bacon </li>
      <li> Jamon </li>
      <li> Noodles </li>
    </ul>
  </div>,
  document.getElementById("root")
);
