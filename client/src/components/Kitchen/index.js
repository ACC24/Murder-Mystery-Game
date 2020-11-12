import React, { Component } from "react";
import "./Kitchen.css"

class Kitchen extends Component {
  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/library");
  };
    render() {
      return (
        <div>
          <button onClick={this.onNextClick}>Next </button>
        </div>
      );
    }
  }
  
  export default Kitchen;