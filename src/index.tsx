/**
 * [[include:../manual/tutorial.md]]
 */

import React from "react";

interface Props {
  bar: string;
}

interface State {}

/**
 * Simple Function Component Test
 * @param props.bar - test prop 
 */
export const FuncComponent = (props:Props) => (<section title={props.bar}>
  <div className="FuncComponent">
    <h1>Hello Demo Function Component</h1>
    <h2>Just showing you how</h2>
  </div>
</section>);

export class ClassComponent extends React.Component<Props,State>{
  constructor(props:Props) {
    super(props);
  }
  render() {
    return (<section>
      <div className="FuncComponent" title={this.props.bar}>
        <h1>Hello Demo Function Component</h1>
        <h2>Just showing you how</h2>
      </div>
    </section>);
  }
}

