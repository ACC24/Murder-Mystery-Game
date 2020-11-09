import React, { Component } from "react";
// import "./Library.css"

class Library extends Component {
  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/garden");
  };
    render() {
      return (
        <div>
          <button onClick={this.onNextClick}>Next </button>
        </div>
      );
    }
  }
  
  export default Library;