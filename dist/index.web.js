var mymod = (function (exports, React) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  const App = () => (React.createElement("section", null,
      React.createElement("div", { className: "App" },
          React.createElement("h1", null, "Hello Demo Component"),
          React.createElement("h2", null, "Just showing you how"))));

  exports.App = App;

  return exports;

}({}, React));
//# sourceMappingURL=index.web.js.map
