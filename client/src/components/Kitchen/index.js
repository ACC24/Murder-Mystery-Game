import React, { Component } from "react";
import { Button } from "reactstrap";
// import "./Kitchen.css"

class Kitchen extends Component {
  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/library");
  };
    render() {
      return (
        <div>
          <Button onClick={this.onNextClick}>Next</Button>
        </div>
      );
    }
  }
  
  export default Kitchen;