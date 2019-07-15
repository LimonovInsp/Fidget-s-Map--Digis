import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="text-success">You have successfully logged in!</h1>
        <Link className="btn mt-4 btn-primary btn-lg" role="button" to="/">
          Back to application
        </Link>
      </div>
    );
  }
}

export default Dashboard;
