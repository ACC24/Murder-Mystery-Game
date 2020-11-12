import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Button, Form, FormGroup, Input, Row, Col } from "reactstrap";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to gameboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/gameboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/gameboard");
    }

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

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="translucent-form-overlay col-md-12">
        <div
          style={{
            marginTop: "1rem",
            marginRight: "1000px",
            borderRadius: "25px",
            backgroundColor: "rgba(54, 54, 54, 0.8)",
            color: "yellow",
            letterSpacing: "1.5px",
            marginLeft: "50px",
          }}
          className="row"
        >
          <div className="col s2 offset-s8">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4 style={{ textAlign: "center" }}>
                <b>Login</b>
              </h4>
            </div>
            <Form noValidate onSubmit={this.onSubmit}>
              <Row form style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <Col md={12}>
                  <FormGroup>
                    <Input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      placeholder="Email"
                      className={classnames("", {
                        invalid: errors.email || errors.emailnotfound,
                      })}
                    />
                    <span className="red-text">
                      {errors.email}
                      {errors.emailnotfound}
                    </span>
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
                        invalid: errors.password || errors.passwordincorrect,
                      })}
                    />
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                  </FormGroup>
                  <div
                    className="col s12"
                    style={{ textAlign: "right", paddingLeft: "0px" }}
                  >
                    <Button
                      type="submit translucent-form-overlay"
                      style={{
                        color: "yellow",
                        borderColor: "yellow",
                        backgroundColor: "rgba(54, 54, 54, 0.8)",
                        borderRadius: "25px",
                        marginBottom: "1rem",
                      }}
                    >
                      Login
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
