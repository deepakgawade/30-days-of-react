import React from "react";
import "./Counter.css";
import { BsPatchMinus, BsPatchPlus } from "react-icons/bs";

class Counter extends React.Component {
  state = { count: 0 };

  render() {
    const count = this.state.count;
    return (
      <div className="main-box">
        <h1>{count}</h1>
        <button
          className="count-button"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          <BsPatchPlus /> Add one
        </button>
        <button
          className="count-button"
          onClick={() => this.setState({ count: this.state.count - 1 })}
        >
          <BsPatchMinus /> remove one
        </button>
      </div>
    );
  }
}

export default Counter;
