(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory((typeof global!=="undefined" ? global : window).mymod = {}, (typeof global!=="undefined" ? global : window).React));
}(this, (function (exports, React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

  const App = () => (React.createElement("section", null,
      React.createElement("div", { className: "App" },
          React.createElement("h1", null, "Hello Demo Component"),
          React.createElement("h2", null, "Just showing you how"))));

  exports.App = App;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
