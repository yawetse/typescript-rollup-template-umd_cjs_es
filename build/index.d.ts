/**
 * [[include:../manual/tutorial.md]]
 */
import React from "react";
interface Props {
    bar: string;
}
interface State {
}
/**
 * Simple Function Component Test
 * @param props.bar - test prop
 */
export declare const FuncComponent: (props: Props) => JSX.Element;
export declare class ClassComponent extends React.Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
}
export {};
