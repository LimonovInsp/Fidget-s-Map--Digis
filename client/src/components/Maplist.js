import React, { Component } from "react";
import "../less/Maplist.less";
import InfrastructureList from "./InfrastructureList";
import MapApp from "./MapApp";

class Maplist extends Component {
  render() {
    return (
      <div className="workzone_bg">
        <div className="list_container">
          <InfrastructureList />
        </div>
        <div className="map_container">
          <MapApp />
        </div>
      </div>
    );
  }
}

export default Maplist;
