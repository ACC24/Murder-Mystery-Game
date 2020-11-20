import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import "./Gameboard.css";
// import shuffle from "../../utils/shuffle"

class Gameboard extends Component {
  onStartClick = (e) => {
    e.preventDefault();
    this.props.history.push("/bedroom");


  };

  render() {
    const { user } = this.props.auth;

    return (
      <div id="gb">
        <div className="row">
          <div className="translucent-form-overlay col-md-12" >
            <h4
              style={{
                marginTop: "50px",
                marginRight: "1000px",
                borderRadius: "25px",
                backgroundColor: "rgba(54, 54, 54, 0.8)",
                color: "yellow",
                letterSpacing: "1.5px",
                marginLeft: "50px",
                fontFamily: "Underdog, cursive",
              }}
            >
              <b>Hello</b> {user.name.split(" ")[0]}!
              <p>
                Welcome to the Banks' Manor! There has been a murder. Willard
                Banks was a wealthy billionaire inventor who helped develop some
                of the biggest pharmaceuticals in the medical industry. He met
                his fate one dreadful night. Mr. Banks had several enemies. It
                didn’t help that he was also a rather unpleasant person to most
                people. There was foul play indicated in their death ruling it a
                homicide. The murderer is still at large and has yet to be
                brought to justice. It is suspected that the murderer may soon
                strike again.Please join us in solving this mystery, but join at
                your own caution. Your involvement may end up in your own demise
              </p>
            </h4>
            <Button
              type="submit translucent-form-overlay"
              style={{
                color: "yellow",
                borderColor: "yellow",
                backgroundColor: "rgba(54, 54, 54, 0.8)",
                borderRadius: "25px",
                marginBottom: "1rem",
                marginLeft: "350px",
              }}
              onClick={this.onStartClick}
            >
              Start
            </Button>
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
