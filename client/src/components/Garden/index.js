import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Garden.css"

class Garden extends Component {
  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/bedroom");
  };
    render() {
      return (
        <div id="gard">
          <Button onClick={this.onNextClick}>Next </Button>
        </div>
      );
    }
  }
  
  export default Garden;