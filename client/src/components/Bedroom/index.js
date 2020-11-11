import React, { Component } from "react";
import { Button } from "reactstrap";
// import "./Bedroom.css"

class Bedroom extends Component {
  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/kitchen");
  };
    render() {
      return (
        <div>
          <Button onClick={this.onNextClick}>Next</Button>
        </div>
      );
    }
  }
  
  export default Bedroom;