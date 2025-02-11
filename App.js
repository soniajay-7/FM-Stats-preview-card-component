const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

/*HTML Structure
    <div>
        <div>
            <h1>Hello World from React1</h1>
            <h2>Hello World from React2 </h2>
        </div>
    </div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello World from React1"),
    React.createElement("h2", {}, "Hello World from React2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
