const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "myH1" }, " Here is my 1st H1"),
    React.createElement("h2", { id: "myH2" }, " Here is my 1st H2"),
  ]),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h1", { id: "myH2" }, " Here is my second H1")
  ),
]);

const heading = React.createElement("h1", { id: "myDiv" }, "Hello World ");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
