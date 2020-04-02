var mymod = (function (exports, React) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  /**
   * [[include:../manual/tutorial.md]]
   */
  /**
   * Simple Function Component Test
   * @param props.bar - test prop
   */
  const FuncComponent = (props) => (React.createElement("section", { title: props.bar },
      React.createElement("div", { className: "FuncComponent" },
          React.createElement("h1", null, "Hello Demo Function Component"),
          React.createElement("h2", null, "Just showing you how"))));
  class ClassComponent extends React.Component {
      constructor(props) {
          super(props);
      }
      render() {
          return (React.createElement("section", null,
              React.createElement("div", { className: "FuncComponent", title: this.props.bar },
                  React.createElement("h1", null, "Hello Demo Function Component"),
                  React.createElement("h2", null, "Just showing you how"))));
      }
  }

  exports.ClassComponent = ClassComponent;
  exports.FuncComponent = FuncComponent;

  return exports;

}({}, React));
//# sourceMappingURL=index.web.js.map
