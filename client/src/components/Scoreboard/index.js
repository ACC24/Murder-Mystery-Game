import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, ListGroup, ListGroupItem, Row, Col } from "reactstrap";
import axios from "axios";
import "./Scoreboard.css";

class Scoreboard extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get("/api/users/scores").then((res) => {
      this.setState({
        data: res.data,
      });
    });
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onRestartClick = (e) => {
    this.props.history.push("/gameboard");
  };

  render() {
    return (
      <div id="sb">
        <div className="row">
          <div className="translucent-form-overlay col-md-12" style={{marginTop:"1rem"}}>
            <div
              style={{
                marginTop: "50px",
                marginRight: "1000px",
                borderRadius: "25px",
                backgroundColor: "rgba(54, 54, 54, 0.8)",
                color: "gray",
                letterSpacing: "1.5px",
                marginLeft: "70px",
                fontFamily: "Underdog, cursive",
              }}
            >
              <div className="container">
                <br></br>
                <h4
                  className="flow-text grey-text text-darken-1"
                  style={{ color: "yellow", textAlign: "center",}}
                >
                  High Scores
              </h4>
                <Row>
                  <Col
                    style={{
                      textAlign: "left",
                      marginRight: "50px",
                      marginLeft: "30px",
                      marginBottom: "20px",
                      marginTop:"10px"
                    }}
                    md={10}
                  >
                    {this.state.data.map((data, i) => (
                      <ListGroup key={i}>
                        <ListGroupItem>
                         {data.name} {data.highscores} 
                        </ListGroupItem>
                      </ListGroup>
                    ))}
                    <Button
                      style={{
                        borderRadius: "25px",
                        color: "yellow",
                        marginTop:"1rem"
                      }}
                      onClick={this.onLogoutClick}
                    >
                      Logout
                  </Button>{' '}
                    <Button
                      style={{
                        borderRadius: "25px",
                        color: "yellow",
                        marginTop:"1rem"
                      }}
                      onClick={this.onRestartClick}
                    >
                      Restart
                  </Button>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Scoreboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Scoreboard);
