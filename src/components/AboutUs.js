import React, { Component } from "react";
import "./AboutUs.scss";
import aboutImage from "../img/undraw_having_fun_iais.svg";

class AboutUs extends Component {
  render() {
    return (
      <div id="about-us">
        <h1>About us</h1>
        <div className="about-content">
          <img className="about-image" src={aboutImage} alt="aboutImage" />
          <div className="about-text">
            <p>
              We started as a small group of friends with the mission to meet
              more students located in and around Amsterdam. But because there
              is no such platform here to do so, we decided to create our own
              platform! We proudly present to you: Asian Borrel Club. Our goal
              is to bring local students together through asian culture and
              media by offering a platform where you can befriend and network
              with others!
            </p>
            <p>
              Unfortunately due to COVID-19, we are unable to organize in-person
              events. However, we will kick off ABC with some fun events that
              you can attend online!
              <span role="img" aria-label="laptop hacking">
                💻👩‍💻👨‍💻
              </span>
              This club is mainly focused for students. However, everybody is
              welcome to join! So if you see an event you'd like to attend,
              don't be scared to join.
              <span role="img" aria-label="hug">
                🤗
              </span>
            </p>
            <p>
              For more information, follow us on Instagram, like us on Facebook
              and join our Discord to stay tuned for upcoming events!
            </p>
            <p>
              Hope to see you at our next event!!
              <span role="img" aria-label="party poppers">
                🎊🎉
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
