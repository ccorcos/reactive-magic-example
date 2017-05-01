import * as React from "react";
import { Component, DerivedValue } from "reactive-magic";
import mouse from "./mouse";
import size from "./size";

const x = new DerivedValue(() => mouse.get().x / size.get().width)
const y = new DerivedValue(() => mouse.get().y / size.get().height)

export default class Info extends Component<{}> {
  view() {
    return (
      <ul>
        <li>x: {x.get()}</li>
        <li>y: {y.get()}</li>
      </ul>
    );
  }
}
