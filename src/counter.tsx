import * as React from "react";
import { Component, Value } from "reactive-magic";

export default class Counter extends Component<{}> {
  count = new Value(0);

  increment = () => {
    this.count.update(count => count + 1);
  };

  decrement = () => {
    this.count.update(count => count - 1);
  };

  view() {
    return (
      <div>
        <button onClick={this.decrement}>{"-"}</button>
        <span>{this.count.get()}</span>
        <button onClick={this.increment}>{"+"}</button>
      </div>
    );
  }
}
