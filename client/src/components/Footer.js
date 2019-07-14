import React, { Component } from "react";
import "../less/Footer.less";

class Footer extends Component {
  render() {
    return (
      <div className="wave d-flex justify-content-around align-items-center">
        <div className="wave__war">
          <div className="submarine" />
          <div className="torpedo_first" />
          <div className="torpedo_second" />
          <div className="torpedo_third" />
        </div>
        <div className="wave__icons d-flex">
          <a
            className="facebook"
            href="https://www.facebook.com/senya.limonov.9"
            target="_blank"
          />
          <a
            className="twitter"
            href="https://twitter.com/LimonovSenya?lang=ru"
            target="_blank"
          />
          <a
            className="gmail"
            href="mailto:bis.limonov@gmail.com"
            target="_blank"
          />
        </div>
        <div className="wave__shark" />
      </div>
    );
  }
}

export default Footer;
