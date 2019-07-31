import React, { Component } from "react";
import "../less/Slider.less";
import { Link } from "react-router-dom";

class Slider extends Component {
  render() {
    return (
      /* Slider */
      <div id="slides" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" className="active" />
          <li data-target="#slides" data-slide-to="1" />
          <li data-target="#slides" data-slide-to="2" />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="5000">
            <img
              className="d-block w-100"
              src="..\..\images\greatnessofcity.jpg"
            />
            <div className="carousel-caption" id="firstSlide">
              <h1 className="display-2 animated fadeInLeft">
                Welcome to Fidget's map!
              </h1>
              <h3 className="animated fadeInRight">
                It's time to assay a convenient application
              </h3>
              <Link to="/sign-up">
                <button
                  type="button"
                  className="btn animated fadeInUp btn-warning btn-lg"
                >
                  Sign up
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item" data-interval="5000">
            <img className="d-block w-100" src="..\..\images\ocean.jpg" />
            <div className="carousel-caption" id="secondSlide">
              <h2 className="display-4 animated bounceInDown">
                Enjoy opportunities to travel with quality map navigation
              </h2>
            </div>
          </div>
          <div className="carousel-item" data-interval="5000">
            <img className="d-block w-100" src="..\..\images\peopleimage.jpg" />
            <div className="carousel-caption" id="thirdSlide">
              <h2 className="display-4 animated bounceInUp">
                It's impossible to get lost here
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
