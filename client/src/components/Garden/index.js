import React, { Component } from "react";
import { Button } from "reactstrap";
import "./Garden.css"

class Garden extends Component {
  onPreviousClick = e => {
    e.preventDefault();
    this.props.history.push("/library");
  };
  
    render() {
      return (
        <div id ="gard">
           <Button id="prev" onClick={this.onPreviousClick}>&#8249;</Button>
          
        </div>
      );
    }
  }
  
  export default Garden;