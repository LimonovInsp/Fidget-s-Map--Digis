import React, { Component } from "react";
import "../less/Signup.less";
import axios from "axios";
import Navigation from "./Navigation";
import HomeSocial from "./HomeSocial";

class Signup extends Component {
  state = {
    username: "",
    email: "",
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
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("/users/sign-up", newUser)
      .then(res => this.props.history.push("/sign-in"))
      .catch(err =>
        this.setState({
          errors: err.response.data
        })
      );
  };
  render() {
    const { username, email, password, errors } = this.state;
    return (
      <div>
        <Navigation />
        <div className="registration">
          <div className="registration_container animated fadeInDown d-flex align-items-center justify-content-center">
            <form
              className="registration__form text-center"
              onSubmit={this.handleSubmit}
            >
              <h1 className="registration___headline mb-5 font-width-light">
                Join Fidget's Map
              </h1>
              <div className="form-group">
                <input
                  type="text"
                  value={username}
                  onChange={this.handleChange}
                  name="username"
                  className={
                    errors.type === "username"
                      ? "is-invalid form-control registration___control rounded-pill form-control-lg"
                      : "form-control registration___control rounded-pill form-control-lg"
                  }
                  placeholder="Enter your username"
                />
                <span className="invalid-feedback">{errors.msg}</span>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={this.handleChange}
                  name="email"
                  className={
                    errors.type === "email"
                      ? "is-invalid form-control registration___control rounded-pill form-control-lg"
                      : "form-control registration___control rounded-pill form-control-lg"
                  }
                  placeholder="Enter your email"
                />
                <span className="invalid-feedback">{errors.msg}</span>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  value={password}
                  onChange={this.handleChange}
                  name="password"
                  className={
                    errors.type === "password"
                      ? "is-invalid form-control registration___control rounded-pill form-control-lg"
                      : "form-control registration___control rounded-pill form-control-lg"
                  }
                  placeholder="Enter your password"
                />
                <span className="invalid-feedback">{errors.msg}</span>
              </div>
              <button
                type="submit"
                className="btn mt-4 btn-custom registration___button btn-block text-uppercase rounded-pill btn-lg"
                value="Register"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
        <HomeSocial />
      </div>
    );
  }
}

export default Signup;
