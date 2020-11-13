import React, { Component } from "react";
import "./Library.css";
import { Button } from "reactstrap";

class Library extends Component {
  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/garden");
  };
    render() {
      return (
        <div id= "lib">
          <Button onClick={this.onNextClick}>Next </Button>
        </div>
      );
    }
  }
  
  export default Library;