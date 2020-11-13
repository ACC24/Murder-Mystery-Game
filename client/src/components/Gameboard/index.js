import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "reactstrap";
// import "./Gameboard.css";
import shuffle from "../../utils/shuffle"


class Gameboard extends Component {
  onStartClick = e => {
    e.preventDefault();
    
    const killer = ["Butler", "Cook", "Gardener", "Wife"];
    shuffle(killer);
    console.log(killer);
    
    const gameStart = shuffle(killer)[0];
    switch (gameStart) {
      case 'Butler':
        this.props.history.push("/library")
        break;
      case 'Cook':
        this.props.history.push("/kitchen")
        break;
      case 'Gardener':
        this.props.history.push("/garden")
        break;
      case 'Wife':
        this.props.history.push("/bedroom")
        break;
      default:
        this.props.history.push("/gameboard");
    }
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
            <Button onClick={this.onStartClick}>Start</Button>
          </div>
        </div>
      </div>
    );
  }
}

Gameboard.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps
  )(Gameboard);
