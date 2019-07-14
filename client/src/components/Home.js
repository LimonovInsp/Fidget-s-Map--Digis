import React, { Component } from "react";
import Navigation from "./Navigation";
import Slider from "./Slider";
import Maplist from "./Maplist";
import HomeSocial from "./HomeSocial";

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Slider />
        <Maplist />
        <HomeSocial />
      </div>
    );
  }
}

export default Home;
