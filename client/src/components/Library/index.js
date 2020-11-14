import React, { Component } from "react";
import "./Library.css";
import { Button } from "reactstrap";

class Library extends Component {
  onPreviousClick = e => {
    e.preventDefault();
    this.props.history.push("/kitchen");
  };

  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/garden");
  };

    render() {
      return (
        <div id= "lib">
          <Button id="prev" onClick={this.onPreviousClick}>&#8249;</Button>
          <Button id="next" onClick={this.onNextClick}>&#8250;</Button>
        </div>
      );
    }
  }
  
  export default Library;