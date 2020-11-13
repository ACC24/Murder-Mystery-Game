import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Navbar } from "reactstrap";
import React, { Component } from "react";
import Timer from 'react-compound-timer';

class Nav extends Component {
  state = {
    modal: false,
    name: ""
  };

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



    this.toggle();
  }

  render() {
    return (
      <div >
        <Navbar>
          <div>
            <Button  onClick={this.toggle}>Guess who did it</Button>
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
            <Timer
              initialTime={30000}
              startImmediately={true}
              direction="backward"
            >
              {() => (
                <React.Fragment>
                  <Timer.Minutes />  minutes
                  <Timer.Seconds />  seconds
                </React.Fragment>
              )}
            </Timer>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Nav;
