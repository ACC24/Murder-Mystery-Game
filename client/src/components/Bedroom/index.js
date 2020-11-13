import React, { Component } from "react";
import "./Bedroom.css";
import { Button } from "reactstrap";


class Bedroom extends Component {
  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/kitchen");
  };
    render() {
      return (
        <div id ="bed">
          <Button onClick={this.onNextClick}>Next</Button>
        </div>
      );
    }
  }
  
  export default Bedroom;