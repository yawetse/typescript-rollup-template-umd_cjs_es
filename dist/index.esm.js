import React from 'react';

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

export { ClassComponent, FuncComponent };
//# sourceMappingURL=index.esm.js.map
