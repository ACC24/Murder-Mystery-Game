import React, { Component } from "react";
import "./Bedroom.css"

class Bedroom extends Component {
  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/kitchen");
  };
    render() {
      return (
        <div>
          <button onClick={this.onNextClick}>Next </button>
        </div>
      );
    }
  }
  
  export default Bedroom;