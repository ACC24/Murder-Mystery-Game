import React, { Component } from "react";
import { Button } from "reactstrap";
// import "./Library.css"

class Library extends Component {
  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/garden");
  };
    render() {
      return (
        <div>
          <Button onClick={this.onNextClick}>Next </Button>
        </div>
      );
    }
  }
  
  export default Library;