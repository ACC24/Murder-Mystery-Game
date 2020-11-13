import React, { Component } from "react";
import "./Kitchen.css";
import { Button } from "reactstrap";


class Kitchen extends Component {
  onNextClick = e => {
    e.preventDefault();
    this.props.history.push("/library");
  };
    render() {
      return (
        <div id="kit">
          <Button onClick={this.onNextClick}>Next</Button>
        </div>
      );
    }
  }
  
  export default Kitchen;