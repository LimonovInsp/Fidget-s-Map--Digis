import React, { Component } from "react";
import "../less/HomeSocial.less";

class HomeSocial extends Component {
  render() {
    return (
      <div className="social_bg d-flex justify-content-center align-items-center">
        <div className="home_icons d-flex">
          <a
            className="home_facebook"
            href="https://www.facebook.com/senya.limonov.9"
            target="_blank"
          />
          <a
            className="home_twitter"
            href="https://twitter.com/LimonovSenya?lang=ru"
            target="_blank"
          />
          <a
            className="home_gmail"
            href="mailto:bis.limonov@gmail.com"
            target="_blank"
          />
        </div>
      </div>
    );
  }
}

export default HomeSocial;
