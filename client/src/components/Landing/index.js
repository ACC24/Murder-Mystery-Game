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
      <div>
        <Navbar
          className="container translucent-form-overlay col-md-12 justify-content-end"
          style={{ width: "100%" }}
        >
          <Button
            style={{
              backgroundColor: "inherit",
              color: "white",
              borderRadius: "25px",
              fontWeight: "bolder",
              letterSpacing: "1.5px",
            }}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            onClick={this.onRegisterClick}
          >
            Register
          </Button>
          <Button
            style={{
              color: "white",
              backgroundColor: "inherit",
              borderRadius: "25px",
              fontWeight: "bolder",
              letterSpacing: "1.5px",
            }}
            onClick={this.onLoginClick}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Login
          </Button>
        </Navbar>
      </div>
    );
  }
}
export default Landing;
