import React, { Component } from "react";
import "../less/Info.less";
import Footer from "./Footer";

class Info extends Component {
  render() {
    return (
      <div className="big-bg d-flex justify-content-center">
        <div className="about_space animated fadeInUp shadow-lg bg-white d-flex flex-column">
          <div className="info_image" />
          <h4 className="info_headline">Senya Limonov - Web-Developer</h4>
          <p className="info_description w-75">
            Hello, I'm glad to meet you in my project and I am a guy, who likes
            to do sport and improve web-development knowledge. I got started my
            way from ordinary layout, that gave me a solid foundation of the
            motivation to desire to try new technologies. Considering my
            observation i can say, that my conscience didn't can leave any part
            of my project until this part is good. Of course, my project was
            inspected by my friend, who gives me right criticism, because it's
            important for me actually. If you have any suggestions, I'm looking
            forward to your message.
          </p>
          <p className="info_additionDescription">P.S. Have a good day! :)</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Info;
