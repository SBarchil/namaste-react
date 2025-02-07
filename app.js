import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => {
  return <h1> Hello Hello </h1>;
};

const HeadingComponent = () => {
  return (<div>
    <TitleComponent />
    <h1>Hello from component {1 + 5 } </h1>{" "}
  </div>);
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
