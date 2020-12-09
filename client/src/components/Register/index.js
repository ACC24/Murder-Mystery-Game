import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { Button, Form, FormGroup, Input, Row, Col } from "reactstrap";
import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to gameboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/gameboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div id="reg" className="container-fluid">
        <div className="row">
          <div className="container translucent-form-overlay col-md-12 ">
            <div
              style={{
                marginTop: "50px",
                marginRight: "1000px",
                borderRadius: "25px",
                backgroundColor: "rgba(54, 54, 54, 0.8)",
                color: "white",
                letterSpacing: "1.5px",
                marginLeft: "50px",
              }}
            >
              <div className="col s12 offset-s8">
                <Form
                  noValidate
                  onSubmit={this.onSubmit}
                  style={{ paddingLeft: "50px" }}
                >
                  <Row form>
                    <Col md={10}>
                      <Link
                        to="/"
                        className="btn-flat waves-effect"
                        style={{
                          color: "yellow",
                          textAlign: "center",
                          paddingLeft: "65px",
                        }}
                      >
                        Back to home
                    </Link>
                      <div
                        className="col s12"
                        style={{
                          textAlign: "center",
                        }}
                      >
                        <h4 style={{ textAlign: "center" }}>
                          <b>Register Here!</b>
                        </h4>
                      </div>
                      <FormGroup>
                        <Input
                          onChange={this.onChange}
                          value={this.state.name}
                          error={errors.name}
                          id="name"
                          type="text"
                          placeholder="Name"
                          className={classnames("", {
                            invalid: errors.name,
                          })}
                        />
                        <span className="red-text">{errors.name}</span>
                      </FormGroup>
                      <FormGroup>
                        <Input
                          onChange={this.onChange}
                          value={this.state.email}
                          error={errors.email}
                          id="email"
                          type="email"
                          placeholder="Email"
                          className={classnames("", {
                            invalid: errors.email,
                          })}
                        />
                        <span className="red-text">{errors.email}</span>
                      </FormGroup>
                      <FormGroup>
                        <Input
                          onChange={this.onChange}
                          value={this.state.password}
                          error={errors.password}
                          id="password"
                          type="password"
                          placeholder="Password"
                          className={classnames("", {
                            invalid: errors.password,
                          })}
                        />
                        <span className="red-text">{errors.password}</span>
                      </FormGroup>
                      <FormGroup>
                        <Input
                          onChange={this.onChange}
                          value={this.state.password2}
                          error={errors.password2}
                          id="password2"
                          type="password"
                          placeholder="Confirm Password"
                          className={classnames("", {
                            invalid: errors.password2,
                          })}
                        />
                        <span className="red-text">{errors.password2}</span>
                      </FormGroup>
                      <div
                        className="col s12"
                        style={{ textAlign: "right", paddingLeft: "0px" }}
                      >
                        <Button
                          type="submit translucent-form-overlay col-md-12"
                          style={{
                            color: "yellow",
                            borderRadius: "25px",
                            backgroundColor: "rgba(54, 54, 54, 0.8)",
                          }}
                        >
                          Sign up
                      </Button>
                        <p className="grey-text text-darken-1">
                          Already have an account?
                        <Link
                            style={{
                              color: "yellow",
                              borderColor: "yellow",
                              backgroundColor: "rgba(54, 54, 54, 0.8)",
                              borderRadius: "25px",
                              marginBottom: "1rem",
                            }}
                            to="/login"
                          >
                            Log in
                        </Link>
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
