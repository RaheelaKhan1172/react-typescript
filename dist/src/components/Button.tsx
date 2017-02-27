import * as React from "react";

import { IButtonProps } from "./iButtonProps";

export class Button extends React.Component<IButtonProps, {}> {
  constructor(props: IButtonProps) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  

  onClick(e: any) {
    this.props.onClick(e);
  }

  render() {
    return (
      //add styling later
      <button className="button Mb(0)"
        onClick={this.onClick}>
        {this.props.display}
      </button>
    );
  }
};

//export const Button = (props: IButtonProps) => <h3> {props.display} </h3>;

