import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactstrap";

class Landing extends Component {
  render() {
    return (
      <div id="register">
        <div className="row">
          <div className="col s12 center-align">
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  marginTop: "0 rem",
                  color: "yellow",
                  background: "dark blue",
                  width: "140px",
                  borderRadius: "25px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  borderColor: "yellow",
                  color: "yellow",
                  background: "dark blue",
                  width: "140px",
                  borderRadius: "25px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
