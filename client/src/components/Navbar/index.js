import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Navbar,
} from "reactstrap";
import React, { Component } from "react";
import "./Navbar.css";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../Navbar/Navbar.css";

class Nav extends Component {
  state = {
    modal: false,
    name: "",
    minutes: 15,
    seconds: 0,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval); 
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59,
          }));
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { minutes, seconds, name } = this.state;
    const score = 60 * minutes + seconds;
    const { user } = this.props.auth;
    console.log(name);

    axios
      .put("/api/users/scores", {
        name: user.name.split(" ")[0],
        highscores: score,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));

      this.toggle();
    // this.props.history.push("/gameover")
    
    // if (name==="wife"){
    //   // sucess logic
    // } else {
    //   // fail logic
    // }

    this.props.history.push("/gameover");
  };

  
  onPreviousClick = (e) => {
    const currentURL = window.location.href;
        
    if (currentURL.endsWith("/kitchen")) {
     this.props.history.push("/bedroom")
    }
    if (currentURL.endsWith("/library")) {
     this.props.history.push("/kitchen")
    }
    if (currentURL.endsWith("/garden")) {
     this.props.history.push("/library")
    }        
  };

  onNextClick = (e) => {
    const currentURL = window.location.href;
        
   if (currentURL.endsWith("/bedroom")) {
    this.props.history.push("/kitchen")
   }
   if (currentURL.endsWith("/kitchen")) {
    this.props.history.push("/library")
   }
   if (currentURL.endsWith("/library")) {
    this.props.history.push("/garden")
   }        
  };

  render() {
    return (
      <div id="nav">
        <div className="translucent-form-overlay col-md-12">
          <Navbar>
            <div>
              <Button id="prev" onClick={this.onPreviousClick} style={{
                borderColor: "yellow",
                color: "yellow",
                backgroundColor: "rgba(54, 54, 54, 0.8)",
                borderRadius: "25px",
                marginBottom: "2rem",
                paddingLeft: "25px",
                paddingRight: "25px",
                fontFamily: "Underdog, cursive",}}>
              &#8249;
              </Button>
            </div>
          <div type="translucent-form-overlay">
            <Button
              style={{
                color: "yellow",
                borderColor: "yellow",
                backgroundColor: "rgba(54, 54, 54, 0.8)",
                borderRadius: "25px",
                marginBottom: "2rem",
                paddingLeft: "25px",
                paddingRight: "25px",
                fontFamily: "Underdog, cursive",
              }}
              onClick={this.toggle}
            >
              Who did it?
              </Button>
            <Modal
              style={{
                fontFamily: "Underdog, cursive",
              }}
              isOpen={this.state.modal}
              toggle={this.toggle}
            >
              <ModalHeader
                style={{}}
                toggle={this.toggle}
              >
                Who do you think is the killer?
                </ModalHeader>
              <ModalBody>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Input
                      type="text"
                      name="name"
                      placeholder="name the killer"
                      onChange={this.onChange}
                    />
                    <Button
                      style={{ marginLeft: "360px" }}
                    >
                      Submit
                      </Button>
                  </FormGroup>
                </Form>
              </ModalBody>
            </Modal>
          </div>
          <div
            className="timer"
            style={{
              color: "yellow",
              borderColor: "yellow",
              backgroundColor: "rgba(54, 54, 54, 0.8)",
              borderRadius: "25px",
              marginBottom: "2rem",
              paddingLeft: "25px",
              paddingRight: "25px",
              position: "right",
              fontFamily: "Underdog, cursive",
            }}
          >
            Time remaining: {this.state.minutes}:
              {this.state.seconds < 10
              ? `0${this.state.seconds}`
              : this.state.seconds}
          </div>
          <div>
            <Button id="next" onClick={this.onNextClick} style={{
                borderColor: "yellow",
                color: "yellow",
                backgroundColor: "rgba(54, 54, 54, 0.8)",
                borderRadius: "25px",
                marginBottom: "2rem",
                paddingLeft: "25px",
                paddingRight: "25px",
                fontFamily: "Underdog, cursive",}}>
              &#8250;
              </Button>
          </div>
          </Navbar>
      </div>
      </div >
    );
  }
}

Nav.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Nav);
