import React, { Component } from "react";
import "../less/Maplist.less";
import MapApp from "./MapApp";

class Maplist extends Component {
  render() {
    return (
      <div className="workzone_bg">
        <MapApp />
      </div>
    );
  }
}

export default Maplist;
