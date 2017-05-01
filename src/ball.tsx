import * as React from "react";
import { Component } from "reactive-magic";
import mouse from "./mouse";

const r = 10;

export default class Ball extends Component<{}> {
  getStyle(): React.CSSProperties {
    const {x, y} = mouse.get()
    return {
      position: "absolute",
      top: y - r,
      left: x - r,
      width: r * 2,
      height: r * 2,
      borderRadius: r,
      backgroundColor: "blue",
      pointerEvents: "none"
    };
  }
  view() {
    return <div style={this.getStyle()} />;
  }
}
