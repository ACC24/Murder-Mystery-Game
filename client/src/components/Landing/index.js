import React, { Component } from "react";
import "./Landing.css";
import { Button, Navbar } from "reactstrap";

class Landing extends Component {
  onRegisterClick = (e) => {
    e.preventDefault();
    this.props.history.push("/register");
  };

  onLoginClick = (e) => {
    e.preventDefault();
    this.props.history.push("/login");
  };

  render() {
    return (
      <div id="land">
        <Navbar
          className="container translucent-form-overlay col-md-12 justify-content-start"
          style={{ width: "100%" }}
        >
          <div>
            <Button
              style={{
                backgroundColor: "gray",
                color: "yellow",
                borderColor: "yellow",
                borderRadius: "25px",
                fontWeight: "bolder",
                letterSpacing: "1.5px",
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              onClick={this.onRegisterClick}
            >
              Register
            </Button>{' '}
            <Button
              style={{
                color: "yellow",
                borderColor: "yellow",
                backgroundColor: "gray",
                borderRadius: "25px",
                fontWeight: "bolder",
                letterSpacing: "1.5px",
              }}
              onClick={this.onLoginClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Login
            </Button>
          </div>
          <div className="container justify-content-center">
            <h1
              style={{
                color: "white",
                fontFamily: "Underdog, cursive",
                fontWeight: "bold",
              }}
            >
              Murder at The Manor
            </h1>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Landing;
