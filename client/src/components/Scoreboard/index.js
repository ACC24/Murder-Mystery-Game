import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import axios from "axios";
import "./Scoreboard.css"

class Scoreboard extends Component {
  constructor() {
    super();
    this.state = {
     data: []
    };
  }

  componentDidMount() {
    axios.get("/api/users/scores").then(res => {
      this.setState({
        data: res.data
      });
    });
  }

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
      <div id="sb">
      <div className="container">
        <h4 className="flow-text grey-text text-darken-1">High Scores</h4>
        <Row>
          <Col md={6}>
          {this.state.data.map((data, i) => 
            <ListGroup key={i}>
              <ListGroupItem>{data.name} {data.highscores}</ListGroupItem>
                    
            </ListGroup>
            )}
            <Button onClick={this.onLogoutClick}>Logout</Button>
            <Button onClick={this.onRestartClick}>Restart</Button>
          </Col>
        </Row>
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
