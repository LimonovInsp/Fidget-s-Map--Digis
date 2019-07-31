import React, { Component } from "react";
import "../less/Signin.less";
import axios from "axios";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import HomeSocial from "./HomeSocial";

class Signin extends Component {
  state = {
    username: "",
    password: "",
    errors: {}
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("/users/sign-in", newUser)
      .then(res => this.props.history.push("/dashboard"))
      .catch(err =>
        this.setState({
          errors: err.response.data
        })
      );
  };
  render() {
    const { username, password, errors } = this.state;
    return (
      <div>
        <Navigation />
        <div className="authorization_bg">
          <div className="login-container animated fadeInDown d-flex align-items-center justify-content-center">
            <form
              onSubmit={this.handleSubmit}
              className="login-form text-center"
            >
              <h1 className="authorization_headline mb-5 font-width-light">
                Sign in to Fidget's Map
              </h1>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  className={
                    errors.type === "username"
                      ? "is-invalid form-control rounded-pill form-control-lg"
                      : "form-control rounded-pill form-control-lg"
                  }
                  placeholder="Enter your username"
                />
                <span className="invalid-feedback">{errors.msg}</span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  className={
                    errors.type === "password"
                      ? "is-invalid form-control rounded-pill form-control-lg"
                      : "form-control rounded-pill form-control-lg"
                  }
                  placeholder="Enter your password"
                />
                <span className="invalid-feedback">{errors.msg}</span>
              </div>
              <div className="forgot-link d-flex align-items-center justify-content-center">
                <a href="#">Forgot Password?</a>
              </div>
              <button
                type="submit"
                value="Login"
                className="btn mt-3 btn-custom btn-block text-uppercase rounded-pill btn-lg"
              >
                Login
              </button>
              <p className="mt-3 font-weight-normal">
                Don't have an account{" "}
                <Link to="/sign-up">
                  <strong>Register Now</strong>
                </Link>
              </p>
            </form>
          </div>
        </div>
        <HomeSocial />
      </div>
    );
  }
}

export default Signin;
