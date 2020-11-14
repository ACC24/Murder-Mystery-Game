import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Garden.css"

class Garden extends Component {
  onPreviousClick = e => {
    e.preventDefault();
    this.props.history.push("/library");
  };
  
  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/bedroom");
  };
    render() {
      return (
        <div>
           <Button id="prev" onClick={this.onPreviousClick}>&#8249;</Button>
          <Button id="next" onClick={this.onNextClick}>&#8250;</Button>
        </div>
      );
    }
  }
  
  export default Garden;