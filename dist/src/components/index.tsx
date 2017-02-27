import * as React from "react";

export interface HelloProps { compiler: string; library:string; } //interface for classes ( similar to c# )

export class Hello extends React.Component<HelloProps, undefined> {
  render() {
    return <h1> Hi from { this.props.compiler } and { this.props.library } </h1>;
  }
}
