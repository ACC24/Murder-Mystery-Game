import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, ListGroup, ListGroupItem, Row, Col } from "reactstrap";
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
        <h4 className="flow-text grey-text text-darken-1">High Scores</h4>
        <Row>
          <Col md={6}>
            <ListGroup>
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
              <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Button onClick={this.onLogoutClick}>Logout</Button>
            <Button onClick={this.onRestartClick}>Restart</Button>
          </Col>
        </Row>
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
