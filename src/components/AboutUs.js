import React, { Component } from "react";
import "./AboutUs.scss";
import aboutImage from "../img/undraw_having_fun_iais_dark.svg";

class AboutUs extends Component {
  render() {
    return (
      <div id="about-us">
        <h1>About ABC</h1>
        <div className="about-content">
          <img className="about-image" src={aboutImage} alt="aboutImage" />
          <div className="about-text">
            <p>
              We started as a small group of friends with the mission to meet
              more students located in and around Amsterdam, who are also
              interested in the Asian community. Since there was no big platform
              in Amsterdam for students like this, we created our own platform.
              We proudly present to you the Asian Borrel Club.
            </p>
            <p>
              Our goal is to bring people with an interest in the Asian culture
              together by offering a platform where you can befriend and network
              with others. This association is mainly focused on students, but
              everybody is welcome to join. So if you see an event you would
              like to attend you are more than welcome!
            </p>
            <p>
              Due to COVID-19, we are unable to organize social events in
              person. So we will kick off with some fun events that you can
              attend online.
            </p>
            <p>
              For more information: follow us on Instagram, like us on Facebook,
              and join our Discord to stay tuned for upcoming events. We hope to
              see you at our next event!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
