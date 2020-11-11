import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { Button, Form, FormGroup, Input, Row, Col } from "reactstrap"

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
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
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <Form noValidate onSubmit={this.onSubmit}>
              <Row form>
                <Col md={3}>
                  <FormGroup>
                    <Input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={errors.email}
                      id="email"
                      type="email"
                      placeholder="Email"
                      className={classnames("", {
                        invalid: errors.email || errors.emailnotfound
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
                        invalid: errors.password || errors.passwordincorrect
                      })}
                    />
                    <span className="red-text">
                      {errors.password}
                      {errors.passwordincorrect}
                    </span>
                  </FormGroup>
                  <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <Button type="submit">Login</Button>
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
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
