import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import Intro from "../Intro";
import "./Gameboard.css";

  class Gameboard extends Component {
    
  onStartClick = (e) => {
    e.preventDefault();
    this.props.history.push("/bedroom");
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div id="gb" className="container-fluid">
        <div className="row">
          <div className="translucent-form-overlay col-md-12"
          >
            <div
              style={{
                marginTop: "25px",
                marginRight: "400px",
                borderRadius: "25px",
                backgroundColor: "rgba(54, 54, 54, 0.8)",
                color: "yellow",
                letterSpacing: "1.5px",
                marginLeft: "50px",
                fontFamily: "Underdog, cursive",
              }}
            >
              <div className="col s12 offset-s8" style={{ marginTop: "20px" }}>
                <br></br>
                <h4 style={{ fontWeight: "bold", textAlign: "center", }}>Hello {user.name.split(" ")[0]}!</h4>
                <h4 style={{ fontWeight: "bold", textAlign: "center", }}>
                   <Intro></Intro>
                </h4>
                <br></br>
                
                <h4 style={{ fontWeight: "bold", textAlign: "center", }}>
                <Button
                  type="submit translucent-form-overlay"
                  style={{
                    color: "yellow",
                    borderColor: "yellow",
                    backgroundColor: "rgba(54, 54, 54, 0.8)",
                    borderRadius: "25px",
                    marginBottom:"20px",
                  }}
                  onClick={this.onStartClick}
                >
                  Start
                </Button>
                </h4>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Gameboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Gameboard);
