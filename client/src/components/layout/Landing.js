import React, { Component } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import house from "../../assets/images/house.jpg"
=======

>>>>>>> 1d2d75d24bf8b8acffae23e08dad5717a3a83af5
class Landing extends Component {
  render() {
    return (
      <div style={{  backgroundImage:`url(${house})`}} >
        <div className="row">
          <div className="col s12 center-align">
                      
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
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
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
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
