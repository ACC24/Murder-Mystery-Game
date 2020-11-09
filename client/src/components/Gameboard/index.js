import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
// import "./Gameboard.css"

class Gameboard extends Component {
  onStartClick = e => {
    e.preventDefault();
    this.props.history.push("/bedroom");
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Welcome to the Banks' Manor
                
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onStartClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Gameboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
  )(Gameboard);
