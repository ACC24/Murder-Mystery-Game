import React, { Component } from "react";
import "./Bedroom.css";
import { Button } from "reactstrap";


class Bedroom extends Component {
  onPreviousClick = e => {
    e.preventDefault();
    this.props.history.goBack();
  };
  
  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/kitchen");
  };

    render() {
      return (
        <div id ="bed">
          <Button id="prev" onClick={this.onPreviousClick}>&#8249;</Button>
          <Button id="next" onClick={this.onNextClick}>&#8250;</Button>
        </div>
        
      );
    }
  }
  
  export default Bedroom;