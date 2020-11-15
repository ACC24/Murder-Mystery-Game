import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Navbar } from "reactstrap";
import React, { Component } from "react";
import "./Navbar.css"
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

class Nav extends Component {
  state = {
    modal: false,
    name: "",
    minutes: 15,
    seconds: 0
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval) // we might want to end the game here
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1, seconds: 59
          }))
        }
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }


  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { minutes, seconds } = this.state
    const score = (60 * minutes) + seconds;
    const { user } = this.props.auth;
    
    axios.put('/api/users/scores', {name: (user.name.split(" ")[0]), highscores: score })
    .then(response => console.log(response))
    .catch(error => console.error(error));

    this.toggle();

    this.props.history.push("/scoreboard");
  };

  onPreviousClick = e => {
    e.preventDefault();
    this.props.history.goBack();
  };

  onNextClick = e => {
    e.preventDefault();

   
  };
    

  render() {
    return (
      <div id="nav" >
        <Navbar pills>
          <div>
            <Button id="prev" onClick={this.onPreviousClick}>&#8249;</Button>
          </div>
            <div>
              <Button onClick={this.toggle}>Guess who did it</Button>
                <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                >
                  <ModalHeader toggle={this.toggle}>Who do you think is the killer?</ModalHeader>
                    <ModalBody>
                      <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                          <Input
                            type="text"
                            name="name"
                            placeholder="name the killer"
                            onChange={this.onChange}
                          />
                            <Button>Submit</Button>
                        </FormGroup>
                      </Form>
                    </ModalBody>
                </Modal>
            </div>
            <div className="timer">
              Time remaining: {this.state.minutes}:{this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}
            </div>
            <div >
              <Button id="next" onClick={this.onNextClick}>&#8250;</Button>
            </div>
        </Navbar>
      </div>
    );
  }
}

Nav.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
auth: state.auth
});

export default connect(
mapStateToProps
)(Nav);
