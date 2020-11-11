import React, { Component } from "react";
import "./Landing.css";
import { Button } from "reactstrap";

class Landing extends Component {
  onRegisterClick = e => {
    e.preventDefault();
    this.props.history.push("/register");
  };

  onLoginClick = e => {
    e.preventDefault();
    this.props.history.push("/login");
  };
  
  render() {
    return (
      <div>
        <Button onClick={this.onRegisterClick}>Register</Button>
        <Button onClick={this.onLoginClick}>Login</Button>
        
      </div>
    );
  }
}
export default Landing;
