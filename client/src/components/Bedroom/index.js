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
          <Button id="next" onClick={this.onNextClick}>&#8250;</Button>
        </div>

      );
    }
  }
  
  export default Bedroom;
