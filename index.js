import React from "react";
import ReactDOM from "react-dom/client";

var hOneReact = React.createElement("h1", {}, "Hello World... using React");

const Myfunction = function () {
    return <>
      <h1>This is Heading</h1>
      <p>This is paragraph</p>
    </>
  }

var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(<Myfunction></Myfunction>);