import React, { Component } from "react";
import "./Garden.css"

class Garden extends Component {
  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/bedroom");
  };
    render() {
      return (
        <div>
          <button onClick={this.onNextClick}>Next </button>
        </div>
      );
    }
  }
  
  export default Garden;