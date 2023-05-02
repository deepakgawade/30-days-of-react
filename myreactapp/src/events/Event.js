import React, { Component } from "react";
class Event extends Component {
  state = {
    firstName: "",
    message: "",
    key: "",
    style: { backgroundColor: "#FF4567" },
    styleButton: {},
  };

  handelMouseMove = (e) => {
    this.setState({
      message: "mouse is moving",
      style: {
        width: 64,
        height: 64,
        borderRadius: 30,
        marginTop: e.clientY,
        marginLeft: e.clientX,
        backgroundColor: "#FF4567",
        cursor: "pointer",
      },
    });
    console.log(`${e.clientX} ${e.clientY}`);
  };
  handelMouseEnter = (e) => {
    console.log("on button");
    this.setState({
      message: "mouse has touche a field",
      styleButton: {
        backgroundColor: "#FF4567",
        marginTop: e.clientY + 10,
        marginLeft: e.clientX + 10,
      },
    });
  };

  render() {
    return (
      <div onMouseMove={this.handelMouseMove}>
        <button
          style={this.state.styleButton}
          // onMouseEnter={this.handelMouseEnter}
        >
          Move mOuse
        </button>
        <p style={this.state.style}></p>
      </div>
    );
  }
}

export default Event;
