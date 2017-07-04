import * as React from "react"
import { Value } from "reactive-magic"
import Component from "reactive-magic/component"

interface CounterProps {
	name: string
	count: Value<number>
}

class Counter extends Component<CounterProps> {
	increment = () => {
		this.props.count.update(count => count + 1)
	}

	decrement = () => {
		this.props.count.update(count => count - 1)
	}

	view() {
		return (
			<div>
				<button onClick={this.decrement}>
					{"-"}
				</button>
				<span>
					{this.props.name} {this.props.count.get()}
				</span>
				<button onClick={this.increment}>
					{"+"}
				</button>
			</div>
		)
	}
}

// This component will display the on or off value based on the main switch.
// The point of this component is to demonstrate that every time we run a
// reactive function, we rederive the dependencies.
export default class Rederive extends Component<{}> {
	main = new Value(true)
	on = new Value(1)
	off = new Value(2)

	handleClick = () => {
		this.main.update(value => !value)
	}

	view() {
		console.log("render")
		return (
			<div>
				<Counter name="on" count={this.on} />
				<Counter name="off" count={this.off} />
				<button onClick={this.handleClick}>
					{this.main.get() ? "on" : "off"}
				</button>
				<strong>
					value: {this.main.get() ? this.on.get() : this.off.get()}
				</strong>
			</div>
		)
	}
}
