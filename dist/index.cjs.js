'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

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
//# sourceMappingURL=index.cjs.js.map
