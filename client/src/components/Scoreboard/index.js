import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import "./Scoreboard.css"

class Scoreboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onRestartClick = e => {
    e.preventDefault();
    this.props.history.push("/gameboard");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="landing-copy col s12 center-align">
            <h4 className="flow-text grey-text text-darken-1">
              High Scores
              </h4>
              <ul>
                <li>Placeholder item</li>
                <li>Placeholder item</li>
                <li>Placeholder item</li>
                <li>Placeholder item</li>
                </ul>
            <button
              onClick={this.onLogoutClick}
              className="btn btn-large"
            >
              Logout
            </button>
            <button
              onClick={this.onRestartClick}
              className="btn btn-large"
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Scoreboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Scoreboard);
