import React, { Component } from "react";
import "../less/InfrastructureList.less";

class InfrasctructureList extends Component {
  render() {
    return (
      <div>
        <ul className="list-group list-group-horizontal-md">
          <button
            type="button"
            className="list-group-item list-group-item-info"
          >
            Pharmacies
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-info"
          >
            Gas stations
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-info"
          >
            Schools
          </button>
          <button
            type="button"
            className="list-group-item list-group-item-info"
          >
            Restaurants
          </button>
        </ul>
      </div>
    );
  }
}

export default InfrasctructureList;
