import React, { Component } from "react";
import "./Kitchen.css";
import { Button } from "reactstrap";


class Kitchen extends Component {
  onPreviousClick = e => {
    e.preventDefault();
    this.props.history.push("/bedroom");
  };
  
  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/library");
  };

    render() {
      return (
        <div id="kit">
          <Button id="prev" onClick={this.onPreviousClick}>&#8249;</Button>
          <Button id="next" onClick={this.onNextClick}>&#8250;</Button>
        </div>
      );
    }
  }
  
  export default Kitchen;